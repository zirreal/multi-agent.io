// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import SlideLayout from '~/layouts/Slide.vue'

// Global components for usage in .md
import MaSection from '~/components/MaSection.vue'
import MaLine from '~/components/MaLine.vue'
import MaButton from '~/components/MaButton.vue'
import MaListNews from '~/components/MaListNews.vue'
import MaGallery from '~/components/MaGallery.vue'
import MaTitle from '~/components/MaTitle.vue'
import MaGmap from '~/components/MaGmap.vue'

// Include external css files
import '~/assets/style/reset.css'
import '~/assets/style/variables.css'
import '~/assets/style/base.css'

export default function (Vue, { router, head, isClient }) {

  Vue.component('Layout', DefaultLayout)
  Vue.component('Slide', SlideLayout)

  Vue.component('MaSection', MaSection)
  Vue.component('MaLine', MaLine)
  Vue.component('MaButton', MaButton)
  Vue.component('MaListNews', MaListNews)
  Vue.component('MaGallery', MaGallery)
  Vue.component('MaTitle', MaTitle)
  Vue.component('MaGmap', MaGmap)
}
