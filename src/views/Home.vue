<template>
    <div class="home">
      <div class="searchDiv">
        <h2>Meetings</h2>
        <input
          type="text"
          placeholder="Search..."
          v-model="search"
          @input="filter()"
        />
      </div>
      <div v-if="!filteredList || !filteredList.length">
        <h2 style="color: red">No events matching your search</h2>
      </div>
      <div v-else>
        <MeetingItems
          v-for="meeting in filteredList"
          :key="meeting.id"
          :meeting="meeting"
        />
      </div>
    </div>
</template>

<script>
import MeetingItems from "../components/MeetingItems";
export default {
  name: "Home",
  props: {
    meetings: Array,
  },
  components: {
    MeetingItems,
  },
  data() {
    return {
      search: "",
      filteredList: Array,
    };
  },
  methods: {
    filter() {
      if (
        this.search == "undefined" ||
        this.search == null ||
        this.search == ""
      ) {
        this.filteredList = this.meetings;
      } else {
        this.filteredList = this.meetings.filter((meeting) => {
          return meeting.Title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
  },
  beforeMount() {
    this.filter();
  },
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
</style>