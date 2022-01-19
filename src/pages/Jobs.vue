<template>
    <Layout :form="$static.metadata.formNameJobs">
        <template v-slot:title>{{$ts('Jobs')}}</template>

        <div class="isection">
            <div class="isection-text">
                <h2 v-if="$locale=='en'">Front-end developer</h2>
                <h2 v-if="$locale=='ru'">Front-end разработчик</h2>

                <div class="isection-title" v-if="$locale=='en'">We’re seeking a frontend developer to maintain and create new website and dapp (decentralized application) interfaces.</div>
                <div class="isection-title" v-if="$locale=='ru'">Мы ищем фронтенд разработчика для поддержки существующих интерфейсов и разработки новых на вебсайты и децентрализованные приложения.</div>
                
                <div class="isection-desc" v-if="$locale=='en'">
                    <p><b>You will have an ability to:</b></p>
                    <ul>
                        <li>work remotely or in the office;</li>
                        <li>improve your development skills;</li>
                        <li>improve your Github account;</li>
                        <li>work with web3 technologies, that are shaping the future up at the moment.</li>
                    </ul>
                    <p><b>To apply for a job you need some skills:</b></p>
                    <ul>
                        <li>JavaScript & Vue.js experience;</li>
                        <li>willingness to adopt new practices;</li>
                        <li>willingness to fix bugs;</li>
                        <li>ability to work in Adobe XD.</li>
                    </ul>
                </div>

                <div class="isection-desc" v-if="$locale=='ru'">
                    <p><b>У вас будет возможность:</b></p>
                    <ul>
                        <li>работать удаленно или в офисе;</li>
                        <li>улучшить навыки разработки;</li>
                        <li>прокачать свой Github аккаунт;</li>
                        <li>работать с web3 технологиями, на данный момент - самыми передовыми технологиями в вебе.</li>
                    </ul>
                    <p><b>Вам понадобятся следующие навыки:</b></p>
                    <ul>
                        <li>опыт JavaScript & Vue.js;</li>
                        <li>готовность внедрять новые практики в свою работу;</li>
                        <li>готовность править баги;</li>
                        <li>готовность работать в Adobe XD.</li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
</template>

<static-query>
query {
  metadata {
    formNameJobs
  }
}
</static-query>