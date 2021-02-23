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
    <section>
      <h5>People already signed up for meeting: {{ meetingInfo.Going }}</h5>
    </section>
    <SignUp />
  </div>
</template>

<script>
import SignUp from "../components/SignUp";
export default {
  props: {
    meetings: Array,
  },
  components: {
    SignUp,
  },
  computed: {
    meetingInfo() {
      let pickedMeeting = {
        Title: this.infoChosen ? this.infoChosen.Title : "Error",
        Desc: this.infoChosen
          ? this.infoChosen.Desc
          : "No description available",
        img: this.infoChosen ? this.infoChosen.img : "No img avb",
        When: this.infoChosen ? this.infoChosen.When : "No time for meet",
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
.left {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
section {
    margin: 2rem;
}
</style>