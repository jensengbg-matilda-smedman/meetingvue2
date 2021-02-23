<template>
  <section>
    <div class="meetDiv" @click="goTo(meeting.id)">
      <h3>{{ meeting.Title }}</h3>
      <h3>{{ meeting.When }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    meeting: Object,
  },
  methods: {
    goTo(id) {
      this.$router.push(`/Meeting/${id}`)
    }
  }
};
</script>

<style>
.meetDiv {
  margin: 15px;
  padding: 1rem;
  border: 1px solid rgba(15, 15, 15, 0.329);
  background-color: #c9c9c750;
  box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
  width: 240px;
  float: left;
  color: #3d2f27;
}
  .meetDiv:hover {
    cursor: pointer;
  }
</style>