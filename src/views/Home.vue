<template>
    <div class="home">
      <div class="searchDiv">
        <h2>Meetings</h2>
        <input type="text" placeholder="Search..." v-model="search" @input="filter()" />
      </div>
      <div v-if="!filteredList || !filteredList.length">
        <h2 class="error">No events matching your search</h2>
      </div>
      <div v-else>
        <MeetingItems v-for="meeting in filteredList" :key="meeting.id" :meeting="meeting" />
      </div>
    </div>
</template>

<script>
import MeetingItems from "../components/MeetingItems";
export default {
  name: "Home",
  components: {
    MeetingItems,
  },
  data: () => ({
    search: ''
  }),
  methods: {
    filter() {
      this.$store.dispatch('filterMeetings',  this.search)
    }
  },
  computed: {
    filteredList() {
      return this.$store.getters['filteredList']
    }
  }
};
</script>
<style scoped>
.searchDiv {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  padding: 1rem;
  border-radius: 3px;
  border: rgba(75, 68, 68, 0.397) solid 1px;
}

.error {
  color: red;
  text-align: center;
}
</style>