<?php

use Illuminate\Support\Facades\Route;

it('reads the real client IP from forwarded headers behind a proxy', function () {
    Route::get('/_test-client-ip', fn () => request()->ip());

    $this->get('/_test-client-ip', ['X-Forwarded-For' => '203.0.113.7'])
        ->assertSuccessful()
        ->assertSee('203.0.113.7');
});
