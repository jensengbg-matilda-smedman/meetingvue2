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
      console.log('getters', this.$store.getters)
      if(!this.$store.getters.pickedMeeting)
        return {}
      return this.$store.getters.pickedMeeting(this.$route.params.id)
    }
  }   
}
</script>

<style scoped>
.meet {
    margin-bottom: 3rem;
    margin-left: 2rem;
}
h2 {
  color: #cc4e01;
}
.meeting {
  width: 100%;
  display: flex;
  flex-direction: row;
}
img {
  max-height: 60%;
  max-width: 60%;
}
.aside,
.left,
.rev {
  display: flex;
  flex-direction: column;
}
.aside {
  align-items: center;
}
.left {
  max-width: 50%;
  margin-right: 1rem;
}
section {
    margin: 2rem;
}
</style>