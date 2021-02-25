<template>
  <footer>
    <section v-show="isShowing">
      <h2>sign up for meeting?</h2>
      <label for="email">Email: </label>
      <input type="text" v-model="inputValue.email" />
      <label for="name">Name: </label>
      <input type="text" v-model="inputValue.username" />
      <button :disabled="isDisabled" @click="submit">Join meeting!</button>
    </section>

    <section v-show="welcome" class="thanks">
      <h2>Thanks for signing up for this meetup!</h2>
      <p>Don´t forget to give the meetup a review if you liked it!</p>
      <h2>Please write a review:</h2>
      <textarea name="" id="" cols="50" rows="10" v-model="inputValue.review">
      </textarea>
      <button @click="send">Send!</button>
      <h2 v-show="thanks">Thanks for your feedback!</h2>
    </section>
  </footer>
</template>

<script>
export default {
  name: "SignUp",
  props: {
    review: Object,
  },
  data() {
    return {
      isShowing: true,
      welcome: false,
      thanks: false,
      disabled: true,
      inputValue: {
        email: "",
        username: "",
        review: "",
      },
    };
  },
  methods: {
    submit() {
      this.isShowing = false;
      this.welcome = true;
    },
    send() {
      this.thanks = true;
      if (this.inputValue.review >= 0) {
        alert("Canno´t send in empty review");
        console.log(this.inputValue.review, "from send");
      } else {
        let newComment = this.review.review;
        newComment.push(this.inputValue);
        //this.$store.dispatch("postReview", newComment);
        this.clearTextbox();
      }
    },
    clearTextbox() {
      let newText = {
        review: ""
      }
      this.inputValue = newText
      return this.inputValue
    }
  },
  computed: {
    isDisabled() {
      if (this.inputValue.email < 1) {
        return this.disabled;
      }
      if (this.inputValue.username < 1) {
        return this.disabled;
      } else {
        return !this.disabled;
      }
    },
  },
};
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
  margin: 0.5rem;
}
button:hover {
  cursor: pointer;
}
</style>