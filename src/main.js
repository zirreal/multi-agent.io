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

  // GA
  // head.script.push({
  //   src: 'https://www.googletagmanager.com/gtag/js?id=G-L4Z0XR6BR2',
  //   async: true
  // })
  // head.script.push({
  //   innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-L4Z0XR6BR2');"
  // })

  // GTM
  head.script.push({
    innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5SMG36R');"
  })
  head.noscript.push({
    innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SMG36R" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
    body: true
  })

  // Ya metrika
  head.script.push({
    type: "text/javascript",
    innerHTML: '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(87222104, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});'
  })
  head.noscript.push({
    innerHTML: '<div><img src="https://mc.yandex.ru/watch/87222104" style="position:absolute; left:-9999px;" alt="" /></div>'
  })
}
