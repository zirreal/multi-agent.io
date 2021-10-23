<template>
    <div class="sidebar">

        <p> <g-link :to="localeLink+ '/'" class="link-clear"> <logo /> </g-link> </p>

        <p class="title">
            <g-link to="/" exact v-show="$locale=='en'">
                <span>Laboratory of</span>
                <span>Multi-Agent Systems</span>
                <span>Smart Cities</span>
                <span>and Industry 4.0</span>
            </g-link>

            <g-link to="/ru" exact v-show="$locale=='ru'">
                <span>Лаборатория</span>
                <span>мультиагентных систем</span>
                <span>в Умных городах</span>
                <span>и Индустрии 4.0</span>
            </g-link>
        </p>

        <nav v-show="$locale=='en'">
            <p><g-link to="/about">{{$ts('About us')}}</g-link></p>
            <p><g-link to="/contacts">{{$ts('Contacts')}}</g-link></p>
            <p><g-link to="/jobs">{{$ts('Jobs')}}</g-link></p>
        </nav>

        <nav v-show="$locale=='ru'">
            <p><g-link to="/ru/about">{{$ts('About us')}}</g-link></p>
            <p><g-link to="/ru/contacts">{{$ts('Contacts')}}</g-link></p>
            <p><g-link to="/ru/jobs">{{$ts('Jobs')}}</g-link></p>
        </nav>

        <languageSwitcher />
    </div>
</template>

<script>
export default {
  components: {
    logo: () => import('../components/logo.vue'),
    languageSwitcher: () => import('../components/languageSwitcher.vue')
  }
}
</script>

<style scoped>
    .sidebar {
        max-width: var(--sidebarwidth);
        font-size: var(--font-size-mid);
    }

    nav a, .title span {
        background-color: var(--color-dark);
        color: var(--color-light);
        font-weight: 500;
        display: inline-block;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    nav a.active, .title a.active span {
        background-color: var(--color-blue);
    }

    nav a:hover, .title a:hover span {
        background-color: var(--color-orange);
    }

    .title {
        margin: calc(var(--space)*2) 0
    }

    .title span {
        transition: 0.2s ease;
    }

    select {
        background-color: var(--color-dark);
        color: var(--color-light);
        padding-top: 0;
        padding-bottom: 0;
        margin-top: var(--space);
        background-image: url('/select-arrow-light.svg');
        transition: 0.2s ease;
    }

    select:hover {
        background-color: var(--color-orange);
        border-color: var(--color-orange);
    }
</style>