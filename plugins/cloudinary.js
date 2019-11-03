import Cloudinary from 'cloudinary-vue'
import Vue from 'vue'
Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'tamas-demo'
  }
})
