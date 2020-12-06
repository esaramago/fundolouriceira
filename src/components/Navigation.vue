<template>
  <nav class="c-navigation">
    <router-link to="/">
      <svg
        class="a-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
        />
      </svg>
      Nova estadia
    </router-link>
    <router-link to="/historico">
      <svg
        class="a-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 2v2H9V9h10zm-6 6v-2h2v2h-2zm2 2v2h-2v-2h2zm-4-2H9v-2h2v2zm6-2h2v2h-2v-2zm-8 4h2v2H9v-2zm8 2v-2h2v2h-2zM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1v2z"
        />
      </svg>
      Histórico
    </router-link>
    <router-link to="/informacao">
      <svg
        class="a-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        />
      </svg>
      Informação
    </router-link>
  </nav>
</template>

<style lang="scss">
.c-navigation {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: var(--header-height);
  /* background-color: var(--color-main-500);
        color: #FFF;
        fill: #FFF; */
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 var(--gap);
    opacity: 0.74;
  }
  .router-link-exact-active {
    opacity: 1;
  }
}

@media (max-width: 650px) {
  .c-navigation {
    top: auto;
    bottom: 0;
    left: 0;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.2);
    a {
      flex: 1;
    }
  }
}
</style>
