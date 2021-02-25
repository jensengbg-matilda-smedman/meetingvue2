<template>
  <div class="meet">
    <article class="meeting">
      <div class="left">
        <h2>Selected meeting:</h2>
        <h3>{{ meeting.Title || 'Title unavailabe' }}</h3>
        <p>{{ meeting.Desc || 'No description available'}}</p>
      </div>
      <aside class="aside">
        <h4>When? {{ meeting.When || 'Ne meeting time'}}!</h4>
        <img :src="meeting.img" alt="no img avb" />
      </aside>
    </article>
    <SignUp :review="meeting" />
    <h2 class="rev">Reviews:</h2>
    <Reviwes v-for="review of meeting.reviews" :key="review.review" :review="review" />
  </div>
</template>

<script>
import SignUp from "../components/SignUp";
import Reviwes from "../components/Reviews";
export default {
  components: {
    SignUp, Reviwes
  },
  computed: {
    meeting() {
      return this.$store.getters.pickedMeeting(this.$route.params.id)
    }
  }   
}
</script>

<style scoped>
.meet {
    margin-bottom: 3rem;
    margin: 2rem;
}
.meeting {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
img {
  max-height: 70%;
  max-width: 70%;
}
.aside,
.left,
.rev {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
section {
    margin: 2rem;
}
</style>