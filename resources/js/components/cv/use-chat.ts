import { useCallback, useRef, useState } from 'react';

import { chat } from '@/routes';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

function csrfToken(): string {
    return (
        document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute('content') ?? ''
    );
}

function appendDelta(messages: ChatMessage[], delta: string): ChatMessage[] {
    const next = [...messages];
    const last = next[next.length - 1];

    if (last?.role === 'assistant') {
        next[next.length - 1] = { ...last, content: last.content + delta };
    }

    return next;
}

async function readErrorMessage(response: Response): Promise<string> {
    if (response.status === 429) {
        return 'Túl sok üzenet rövid idő alatt. Kérlek, várj egy kicsit, és próbáld újra.';
    }

    try {
        const body = await response.json();

        if (typeof body?.message === 'string') {
            return body.message;
        }
    } catch {
        // fall through to the generic message
    }

    return 'Hiba történt a válasz közben. Kérlek, próbáld újra.';
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const conversationId = useRef('');

    const send = useCallback(
        async (text: string) => {
            const content = text.trim();

            if (content === '' || isStreaming) {
                return;
            }

            if (conversationId.current === '') {
                conversationId.current = crypto.randomUUID();
            }

            const history: ChatMessage[] = [
                ...messages,
                { role: 'user', content },
            ];

            setError(null);
            setMessages([...history, { role: 'assistant', content: '' }]);
            setIsStreaming(true);

            try {
                const response = await fetch(chat.url(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'X-CSRF-TOKEN': csrfToken(),
                    },
                    body: JSON.stringify({
                        consent: true,
                        conversation_id: conversationId.current,
                        messages: history,
                    }),
                });

                if (!response.ok || response.body === null) {
                    throw new Error(await readErrorMessage(response));
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = '';

                for (;;) {
                    const { done, value } = await reader.read();

                    if (done) {
                        break;
                    }

                    buffer += decoder.decode(value, { stream: true });
                    const parts = buffer.split('\n\n');
                    buffer = parts.pop() ?? '';

                    for (const part of parts) {
                        const line = part.trim();

                        if (!line.startsWith('data:')) {
                            continue;
                        }

                        const payload = line.slice(5).trim();

                        if (payload === '' || payload === '[DONE]') {
                            continue;
                        }

                        try {
                            const event = JSON.parse(payload);

                            if (
                                event.type === 'text_delta' &&
                                typeof event.delta === 'string'
                            ) {
                                setMessages((prev) =>
                                    appendDelta(prev, event.delta),
                                );
                            }
                        } catch {
                            // Ignore keep-alive or malformed lines.
                        }
                    }
                }
            } catch (caught) {
                setError(
                    caught instanceof Error
                        ? caught.message
                        : 'Hiba történt. Kérlek, próbáld újra.',
                );

                // Remove the empty assistant placeholder on failure.
                setMessages((prev) => {
                    const last = prev[prev.length - 1];

                    return last?.role === 'assistant' && last.content === ''
                        ? prev.slice(0, -1)
                        : prev;
                });
            } finally {
                setIsStreaming(false);
            }
        },
        [messages, isStreaming],
    );

    return { messages, isStreaming, error, send };
}
