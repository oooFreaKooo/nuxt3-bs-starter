import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    srcDir: 'src/',
    css: ['~/assets/scss/main.scss'],
    modules: [
        '@vueuse/nuxt',
        '@nuxt/image',
        '@nuxt/eslint',
        'nuxt-bootstrap-icons',
    ],
    vite: {
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
            '/api/**': { cors: true },
        },
    },
})
