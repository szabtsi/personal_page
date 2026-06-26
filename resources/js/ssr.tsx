import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import type { ComponentType } from 'react';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Felföldi Szabolcs';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => title || appName,
        resolve: (name) => {
            const pages = import.meta.glob<{ default: ComponentType }>(
                './pages/**/*.tsx',
                { eager: true },
            );

            return pages[`./pages/${name}.tsx`];
        },
        setup: ({ App, props }) => <App {...props} />,
    }),
);
