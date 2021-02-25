<template>
  <div class="meet">
    <article class="meeting">
      <div class="left">
        <h2>Selected meeting:</h2>
        <h3>{{ meetingInfo.Title }}</h3>
        <p>{{ meetingInfo.Desc }}</p>
      </div>
      <aside class="aside">
        <h4>When? {{ meetingInfo.When }}!</h4>
        <img :src="meetingInfo.img" alt="no img avb" />
      </aside>
    </article>
    <SignUp :review="meetingInfo" />
    <h2>Reviews:</h2>
    <Reviwes v-for="review of meetingInfo.review" :key="review.review" :review="review" />
  </div>
</template>

<script>
import SignUp from "../components/SignUp";
import Reviwes from "../components/Reviews";
export default {
  props: {
    meetings: Array,
  },
  components: {
    SignUp, Reviwes
  },
  computed: {
    meetingInfo() {
      let pickedMeeting = {
        Title: this.infoChosen ? this.infoChosen.Title : "Title unavailabe",
        Desc: this.infoChosen ? this.infoChosen.Desc : "No description available",
        img: this.infoChosen ? this.infoChosen.img : "No img avb",
        When: this.infoChosen ? this.infoChosen.When : "No time for meet",
        review: this.infoChosen ? this.infoChosen.reviews : "No reviews been done yet"
      };
      return pickedMeeting;
    },
    infoChosen() {
      if (this.$route !== undefined) {
        return this.meetings.find((m) => m.id == this.$route.params.id);
      } else {
        return null;
      }
    },
  },
};
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
h2 {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
section {
    margin: 2rem;
}
</style>