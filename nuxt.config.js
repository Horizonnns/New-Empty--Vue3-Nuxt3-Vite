export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vue3-Nuxt3-Vite',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  components: {
    dirs: [
      '~/resources/components',
      {
        extensions: ['vue'],
        pathPrefix: false,
      },
    ],
  },

  assets: true,
  ssr: false,

  css: ['@/resources/css/main.css'],
  modules: [
    // https://go.nuxtjs.dev/axios
    // "@nuxt/http",
    '@nuxtjs/tailwindcss',
  ],

  // Axios module configuration:
  // http: {
  //   baseURL: production
  //     ? "https://dilerapi.megafon.tj"
  //     : "https://dilerapi.megafon.tj",
  // },

  runtimeConfig: {
    public: {
      baseURL: process.env.isProduction
        ? 'https://dilerapi.megafon.tj'
        : 'https://dilerapi.megafon.tj',
    },
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
