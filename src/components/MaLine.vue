<template>
    <section>
        <slot/>
    </section>
</template>

<style scoped>
    section > * {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: var(--space);
    }

    section > *:not(:last-child) {
        margin-right: var(--space);
    }
</style>