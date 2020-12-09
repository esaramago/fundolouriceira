<template>
    <header class="c-header">
        <h1>Fundo Louriceira</h1>
    </header>
</template>

<style lang="scss">
.c-header {
    display: flex;
    align-items: center;
    height: var(--header-height);
    padding: 0 var(--gap);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    > h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 500;
        line-height: 2rem;
    }
}
</style>