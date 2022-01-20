<template>
    <section>
        <slot/>
    </section>
</template>

<style scoped>
    section ul {
        font-weight: bold;
        list-style: url("../assets/images/i-news.svg") outside;
        padding-left: 2rem;
    }

    section ul li {
        padding: var(--space) 0 var(--space) var(--space);
    }

    section ul li:not(:last-child) {
        border-bottom: 1px solid var(--color-dark);
    }

    section ul li a {
        vertical-align: top;
    }
</style>