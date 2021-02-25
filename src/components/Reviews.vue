<template>
  <div>
    <p> From: {{ review.email }} </p>
    <p> {{ review.review }} </p>
  </div>
</template>

<script>
export default {
    name: "Reviews",
    props: {
      review: Object
    }
}
</script>

<style scoped>
    div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2rem;
    border: rgba(58, 55, 55, 0.521) solid 0.7px;
    padding: 1rem;
  }
</style>