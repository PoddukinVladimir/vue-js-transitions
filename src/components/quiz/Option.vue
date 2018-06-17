<template>
  <div class="col-md-6 option-container">
    <button @click="answer(option)" class="btn btn-primary">{{option}}</button>
  </div>
</template>

<script>
  export default {
    name: 'quizOption',
    props: ['option'],
    methods: {
      answer(option) {
          this.$emit('answered', option);
      }
    }
  }
</script>

<style scoped>
  .option-container {
    padding: 15px;
  }
</style>
