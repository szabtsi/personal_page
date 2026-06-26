<?php

it('serves a descriptive title server-side', function () {
    $this->get('/')
        ->assertSuccessful()
        ->assertSee('<title>'.config('seo.title').'</title>', false);
});

it('exposes a meta description', function () {
    $this->get('/')
        ->assertSee('<meta name="description" content="'.e(config('seo.description')).'">', false);
});

it('marks the page indexable for robots', function () {
    $this->get('/')
        ->assertSee('<meta name="robots" content="index, follow">', false);
});

it('declares a canonical url', function () {
    $this->get('/')
        ->assertSee('<link rel="canonical" href="'.url('/').'">', false);
});

it('exposes Open Graph tags for social sharing', function () {
    $response = $this->get('/');

    $response->assertSee('<meta property="og:type" content="profile">', false);
    $response->assertSee('<meta property="og:title" content="'.e(config('seo.title')).'">', false);
    $response->assertSee('<meta property="og:description" content="'.e(config('seo.description')).'">', false);
    $response->assertSee('<meta property="og:url" content="'.url('/').'">', false);
    $response->assertSee('<meta property="og:image" content="'.url(config('seo.image')).'">', false);
});

it('exposes a large-image Twitter card', function () {
    $this->get('/')
        ->assertSee('<meta name="twitter:card" content="summary_large_image">', false);
});

it('embeds Person JSON-LD structured data', function () {
    $response = $this->get('/');

    $response->assertSee('application/ld+json', false);
    $response->assertSee('"@type": "Person"', false);
    $response->assertSee('"name": "Felföldi Szabolcs"', false);
    $response->assertSee('"jobTitle": "Fullstack fejlesztő"', false);
    $response->assertSee('https://github.com/szabtsi', false);
});

it('serves a valid xml sitemap listing the home page', function () {
    $response = $this->get('/sitemap.xml');

    $response->assertSuccessful();
    expect($response->headers->get('content-type'))->toContain('xml');
    $response->assertSee('<urlset', false);
    $response->assertSee('<loc>'.url('/').'</loc>', false);
});

it('serves robots.txt pointing at the sitemap', function () {
    $this->get('/robots.txt')
        ->assertSuccessful()
        ->assertSee('User-agent: *')
        ->assertSee('Sitemap: '.route('sitemap'));
});
