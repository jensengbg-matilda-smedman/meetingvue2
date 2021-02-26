<template>
  <div id="app">
    <header id="nav">
      <img src="./assets/meetimg.png" alt="meet">
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About </router-link>
    </header>
    <router-view :meetings="allMeetings" />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    allMeetings() {
      return this.$store.state.meetings;
    },
  },
  beforeMount() {
    this.$store.dispatch('fetchBackend');
  },
};
</script>
<style scoped>
img {
  max-width: 7%;
  max-height: 7%;
  position: absolute;
  left: 0;
  top: 2;
  margin-left: 4rem;
}
header {
  display: flex;
  justify-content: center;
  margin: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.609);
}
#nav a {
  font-weight: bold;
  text-decoration: none;
  margin: 1rem;
  color: #cc4e01;
}
#nav a.router-link-exact-active {
  color: #fe8f2b;
}
</style>

