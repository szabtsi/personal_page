<?php

return [

    /*
    |--------------------------------------------------------------------------
    | SEO / Social metadata
    |--------------------------------------------------------------------------
    |
    | Centralised metadata used to render the document <head> (title,
    | description, Open Graph, Twitter cards) and the Person JSON-LD
    | structured data. Absolute URLs are derived from APP_URL at runtime,
    | so set APP_URL to the production domain (e.g. https://example.com)
    | when deploying.
    |
    */

    'title' => 'Felföldi Szabolcs — Fullstack fejlesztő',

    'description' => 'Felföldi Szabolcs fullstack webfejlesztő. Laravel, PHP, React és Inertia alapú backend és frontend fejlesztés, AI-alapú eszközökkel a mindennapi munkában.',

    // Relative path resolved against APP_URL for og:image / twitter:image.
    'image' => '/cv_photo.jpg',

    'image_alt' => 'Felföldi Szabolcs',

    'locale' => 'hu_HU',

    /*
    | Person structured data (schema.org/Person). Rendered as JSON-LD so
    | search engines can show a rich profile result.
    */
    'person' => [
        'name' => 'Felföldi Szabolcs',
        'job_title' => 'Fullstack fejlesztő',
        'email' => 'szabolcs.felfoldi10@gmail.com',
        'telephone' => '+36306656634',
        'works_for' => 'Wenerate Kft.',
        'same_as' => [
            'https://github.com/szabtsi',
            'https://www.linkedin.com/in/szabolcs-felf%C3%B6ldi-b1a0a8136',
        ],
    ],

];
