<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">créer une nouvelle catégorie</router-link> |
      <router-link to="/event">créer une nouvelle entrée</router-link> |
      <router-link to="/historique">historique</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #96A7AF;
;

    &.router-link-exact-active {
      color: #3DD598;
;
    }
  }
}
</style>
