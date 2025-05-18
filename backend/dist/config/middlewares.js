"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => [
    "strapi::logger",
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "default-src": ["'self'"],
                    "connect-src": ["'self'", "https:"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "market-assets.strapi.io",
                        env("SUPABASE_URL"),
                    ],
                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "market-assets.strapi.io",
                        env("SUPABASE_URL"),
                    ],
                },
            },
        },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
