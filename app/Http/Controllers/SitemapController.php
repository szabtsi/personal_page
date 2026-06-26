<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Return the XML sitemap for search engines.
     */
    public function __invoke(): Response
    {
        $xml = view('sitemap', [
            'urls' => [
                ['loc' => url('/'), 'changefreq' => 'monthly', 'priority' => '1.0'],
            ],
        ])->render();

        return response($xml, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}
