import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    srcDir: 'src/',
    devtools: {
        enabled: false,
    },
    ssr: true,
    modules: [
        '@vueuse/nuxt',
        '@nuxt/image',
        '@nuxt/eslint',
        'nuxt-bootstrap-icons',
        'nuxt-vitalizer',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/abstracts" as *;',
                },
            },
        },
        plugins: [svgLoader()],
        optimizeDeps: {
            include: [
                'vue', '@vueuse/core', 'bootstrap', '@popperjs/core',
            ],
            exclude: ['@nuxt/kit'],
        },
        vue: {
            script: {
                propsDestructure: true,
            },
        },
    },
    app: {
        baseURL: '/',
        head: {
            meta: [{ charset: 'utf-8' }],
        },
    },
    vitalizer: {
        // Disable prefetch links for dynamic imports only to prevent unnecessary resource loading
        disablePrefetchLinks: 'dynamicImports',

        // Disable preload links to prioritize critical resources and improve FCP score
        disablePreloadLinks: true,

        // Remove render-blocking stylesheets only for entry files if styles are inlined during SSR
        disableStylesheets: 'entry',

        // Configure delay hydration for better interactivity and performance
        delayHydration: {
            // Trigger hydration only on user interaction to save resources
            hydrateOnEvents: [
                'mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel',
            ],
            // Set a timeout for idle callback to handle heavy network conditions
            idleCallbackTimeout: 10000,
            // Adjust post-idle timeout for optimal hydration delay
            postIdleTimeout: 3000,
        },
    },
    components: {
        dirs: [
            {
                path: '~/components',
                global: true,
                pathPrefix: false,
            },
        ],
    },
    nitro: {
        routeRules: {
            '/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }, // Cache static assets
            '/api/**': { cors: true, headers: { 'Cache-Control': 'no-store' } }, // No caching for dynamic API responses
        },
        // Prerender critical routes to serve as static files for faster load times
        prerender: {
            autoSubfolderIndex: true,
            concurrency: 4,
            crawlLinks: true,
            routes: ['/'], // Define key routes for prerendering
            retry: 3,
            retryDelay: 500,
        },
        // Enable compression for public assets with both Gzip and Brotli for optimal performance
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },

        // Optimize build output
        minify: true,
        inlineDynamicImports: true,
        experimental: {
            wasm: true,
            asyncContext: true,
        },
        // Use logging for easier debugging during builds
        logging: {
            compressedSizes: true,
            buildSuccess: true,
        },

        typescript: {
            strict: true,
            generateTsConfig: true,
        },
    },

    image: {
        provider: 'ipx',
        ipx: {
            maxAge: 60 * 60 * 24 * 30, // 30 days
        },
        dir: 'assets',
        domains: ['localhost'],
        format: [
            'webp', 'jpg', 'jpeg', 'png',
        ],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
        quality: 90,
    },
})
