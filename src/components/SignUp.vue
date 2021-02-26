<template>
  <footer>
    <section v-show="isShowing">
      <h2>sign up for meeting?</h2>
      <label for="email">Email: </label>
      <input type="text" class="emailInput" v-model="inputValue.email" />
      <label for="name">Name: </label>
      <input type="text" class="userInput" v-model="inputValue.username" />
      <button class="submitBtn" :disabled="isDisabled" @click="submit">Join meeting!</button>
    </section>

    <section v-show="welcome" class="thanks">
      <h2 class="thanksH">Thanks for signing up for this meetup!</h2>
      <p>Don´t forget to give the meetup a review if you liked it!</p>
      <h2>Please write a review:</h2>
      <textarea name="" id="" cols="50" rows="10" v-model="inputValue.review">
      </textarea>
      <button class="sendbtn" @click="send">Send!</button>
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
        alert("Cannot send in empty review");
      } else {
        let newComment = this.review.reviews;
        newComment.push(this.inputValue);
        this.$store.dispatch("postReview", newComment);
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
}
h2 {
  color: #cc4e01;
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
.sendbtn {
  margin-top: 1rem;
  margin-left: 0;
  max-width: 30%;
}
.thanks {
  display: flex;
  flex-direction: column;
  max-width: 40%;
}
</style>