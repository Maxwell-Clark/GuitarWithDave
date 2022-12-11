export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: '/api'
        }
    },
    modules: [
        '@vuestic/nuxt',
        // '@nuxtjs/google-fonts',
        // [
        //     '@nuxtjs/google-fonts',
        //     Option:
        //         googlefonts: {
        //         families: {
        //             'Fira+Sans+Condensed': [500],
        //                 Poppins: [200],
        //                 Roboto: true,
        //                 'Josefin+Sans': true,
        //                 Lato: [100, 300],
        //                 Raleway: {
        //                 wght: [100, 400],
        //                     ital: [100]
        //             },
        //         }
        //     },
        // ],
        [
            '@pinia/nuxt',
            {
                autoImports:[
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ]
            }
        ],
    ],



    vuestic: {
        config: {
            colors: {
                variables:{
                // Default colors
                    primary: '#E5E5E5',
                    secondary: '#14213D',
                    success: '#40e583',
                    info: '#2c82e0',
                    danger: '#e34b4a',
                    warning: '#ffc200',
                    gray: '#babfc2',
                    dark: '#34495e',
                    white: '#FFFFFF',

                    // Custom colors
                    yourCustomColor: '#d0f55d',
                    accent: '#FCA311'
                }

            },
        }
    }
})
