<?php

namespace App\Http\Controllers;

use App\Ai\Agents\AboutMeAgent;
use App\Http\Requests\ChatRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Laravel\Ai\Responses\StreamableAgentResponse;

class ChatController extends Controller
{
    /**
     * The maximum number of chat messages served globally per day before pausing.
     */
    public const DAILY_CAP = 500;

    /**
     * Stream an answer from the "About Me" agent for the public CV chat widget.
     *
     * Conversations are intentionally not stored: messages live only in the
     * client and are forwarded to the AI provider to generate a reply.
     */
    public function __invoke(ChatRequest $request): StreamableAgentResponse|JsonResponse
    {
        if ($this->dailyCapReached()) {
            return response()->json([
                'message' => 'A csevegő mára elérte a napi limitet. Kérlek, próbáld újra holnap, vagy keresd Szabolcsot közvetlenül.',
            ], 503);
        }

        $messages = $request->validated('messages');
        $latest = Arr::last($messages);
        $prior = array_slice($messages, 0, -1);

        return (new AboutMeAgent($prior))->stream($latest['content']);
    }

    /**
     * Increment the global daily counter and determine whether the cap is reached.
     */
    protected function dailyCapReached(): bool
    {
        $key = 'chat:count:'.now()->toDateString();

        Cache::add($key, 0, now()->endOfDay());

        if ((int) Cache::get($key) >= self::DAILY_CAP) {
            return true;
        }

        Cache::increment($key);

        return false;
    }
}
