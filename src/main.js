// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import SlideLayout from '~/layouts/Slide.vue'

// Include external css files
import '~/assets/style/reset.css'
import '~/assets/style/variables.css'
import '~/assets/style/base.css'

export default function (Vue, { router, head, isClient }) {

  Vue.component('Layout', DefaultLayout)
  Vue.component('Slide', SlideLayout)
}
