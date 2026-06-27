<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'cv')->name('home');
Route::inertia('/privacy', 'privacy')->name('privacy');
Route::post('/chat', ChatController::class)->middleware('throttle:chat')->name('chat');
Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');

Route::get('/robots.txt', function () {
    $content = "User-agent: *\nDisallow:\n\nSitemap: ".route('sitemap')."\n";

    return response($content, 200, ['Content-Type' => 'text/plain']);
})->name('robots');
