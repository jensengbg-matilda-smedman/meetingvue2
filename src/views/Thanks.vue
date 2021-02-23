<template>
  <section class="thanks">
      <h2>Thanks {{ username }} for signing up for this meetup {{ meetingInfo.Title }} !</h2>
      <p>Don´t forget to give the meetup a review after if you liked it! <br>
          <strong> PS </strong> you have to remember your email to write a review!
      </p>
  </section>
</template>

<script>
export default {
    props: {
      meetings: Array,
    },
    name: "Thanks",
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
}
</script>

<style scoped>
.thanks {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>