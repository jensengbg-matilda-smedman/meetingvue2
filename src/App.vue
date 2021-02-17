<template>
  <div id="app">
    <header id="nav">
      <router-link to="/"> Home </router-link> 
      <router-link to="/about"> About </router-link>
    </header>
    <router-view :meetings="allMeetings" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    allMeetings() {
      return this.$store.state.meetings
      }
    },
    beforeMount() {
      return this.$store.dispatch("fetchBackend")
  }
}
</script>
<style scoped>
  header {
    display: flex;
    justify-content: center;
    margin: 2rem;
    border-bottom: 1px solid black;
  }
#nav a {
  font-weight: bold;
  text-decoration: none;
  margin: 1rem;
}
#nav a.router-link-exact-active {
  color: #6c6d9c;
}
</style>

