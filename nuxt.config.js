// const firebase = require('./plugins/firebase').default;

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/cloudinary',
    '@plugins/fontawesome',
    '@plugins/firebase',
    '@plugins/auth'
  ],
  router: {
    middleware: 'router-auth'
  },
  ignore: ['functions'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  boostrapVue: {
    componentPlugins: ['Navbar', 'Button', 'FormInput', 'Form', 'ListGroup', 'Card', 'Layout', 'Badge', 'FormGroup', 'Toast']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: async () => {
      let results = await firebase.collection('characters').get();
      return results.docs.map(doc => {
        return `/characters/${doc.data().name.replace(/-|\s/g, '').toLowerCase()}`;
      });
    }
  }
}

