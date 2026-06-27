<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        @php
            $seoUrl = url('/');
            $seoImage = url(config('seo.image'));
            $person = config('seo.person');
            $jsonLd = [
                '@context' => 'https://schema.org',
                '@type' => 'Person',
                'name' => $person['name'],
                'jobTitle' => $person['job_title'],
                'email' => 'mailto:'.$person['email'],
                'telephone' => $person['telephone'],
                'url' => $seoUrl,
                'image' => $seoImage,
                'worksFor' => [
                    '@type' => 'Organization',
                    'name' => $person['works_for'],
                ],
                'sameAs' => $person['same_as'],
            ];
        @endphp

        <meta name="description" content="{{ config('seo.description') }}">
        <meta name="robots" content="index, follow">
        <meta name="author" content="{{ $person['name'] }}">
        <link rel="canonical" href="{{ $seoUrl }}">

        <meta property="og:type" content="profile">
        <meta property="og:site_name" content="{{ $person['name'] }}">
        <meta property="og:locale" content="{{ config('seo.locale') }}">
        <meta property="og:title" content="{{ config('seo.title') }}">
        <meta property="og:description" content="{{ config('seo.description') }}">
        <meta property="og:url" content="{{ $seoUrl }}">
        <meta property="og:image" content="{{ $seoImage }}">
        <meta property="og:image:alt" content="{{ config('seo.image_alt') }}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('seo.title') }}">
        <meta name="twitter:description" content="{{ config('seo.description') }}">
        <meta name="twitter:image" content="{{ $seoImage }}">

        <script type="application/ld+json">
            {!! json_encode($jsonLd, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
        </script>

        <link rel="icon" href="/favicon.svg" type="image/svg+xml">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('seo.title') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
