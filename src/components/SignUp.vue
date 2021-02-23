<template>
  <footer>
    <section v-show="isShowing">
      <h2>sign up for meeting?</h2>
      <label for="email" >Email: </label>
      <input type="text" v-model="inputValue.email">
      <label for="name">Name: </label>
      <input type="text" v-model="inputValue.username">
      <button :disabled='isDisabled' @click="submit">Join meeting!</button>
    </section>

    <section v-show="welcome" class="thanks">
      <h2>Thanks for signing up for this meetup!</h2>
      <p>Don´t forget to give the meetup a review if you liked it!</p>
    </section>

  </footer>
</template>

<script>
export default {
    name: "SignUp",
    data() {
      return {
        isShowing:true,
        welcome: false,
        disabled: true,
        inputValue: {
        email: "",
        username: "",
      }
    }
  }, 
  methods: {
    submit() {
      const data = {
        username: this.inputValue.username,
        email: this.inputValue.email
      }
      this.$store.dispatch('postUser', data, 'data front')
      this.isShowing = false
      this.welcome = true
      console.log(data)
    }
  },
  computed: {
    isDisabled() {
      if(this.inputValue.email < 1) {
        return this.disabled;
      } if(this.inputValue.username < 1) {
        return this.disabled;
      } else {
        return !this.disabled;
      }
    }
  }
}
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2rem;
  }
  h2 {
    color: green;
  }
  input {
    padding: 0.5rem;
    margin: 0.5rem;
    border: rgba(71, 66, 66, 0.507) solid 1px;
    border-radius: 3px;
  }
  button {
    padding: 0.5rem;
    border-radius: 3px;
    border: rgba(71, 66, 66, 0.507) solid 1px;
  }
  button:hover {
    cursor: pointer;
  }
</style>