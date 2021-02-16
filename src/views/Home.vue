<template>
  <div class="home">
    <h2>Meetings</h2>
    <div class="searchDiv">
      <input 
      type="text" 
      v-model.trim="input" 
      v-on:input="search()"
      placeholder="Search for meeting"
      >
    </div>

    <MeetingItems v-for="meeting in displayMeeting" :key="meeting.id" :meeting="meeting" />
  </div>
</template>

<script>
import MeetingItems from "../components/MeetingItems"
export default {
  name: "Home",
  data(){
    return {
      input: ""
    }
  },
  components: { 
    MeetingItems
   },
  computed: {
    displayMeeting() {
      return this.$store.state.meeting
    }
  },
}
</script>