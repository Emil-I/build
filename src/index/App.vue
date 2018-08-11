<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <md-button class="md-raised">Home</md-button>
      </router-link> |
      <router-link to="/about">
         <md-button class="md-raised md-primary">About</md-button>
      </router-link>
    </div>

    <div>
      <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
    </div>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
    }),

    methods: {},
  };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
