<template>
  <header class="c-header o-grid">
    <h1>Fundo Louriceira</h1>
  </header>
</template>

<style>
.c-header {
  height: var(--header-height);
  /* background-color: var(--color-main-500);
        color: #FFF;
        fill: #FFF; */
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.c-header > h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2rem;
}
</style>

<script>
export default {
  name: "Header"
};
</script>
