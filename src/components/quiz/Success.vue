<template>
  <div class="col-centered col-md-6 success-container">
    <h2 class="success-title">That's Correct!</h2>
    <hr>
    <button
      @click="nextQuestion"
      class="btn btn-primary success-button">
      Next Question
    </button>
  </div>
</template>

<script>
  export default {
    name: 'quizSuccess',
    methods: {
      nextQuestion() {
          this.$emit('nextQuestion');
      }
    }
  }
</script>

<style scoped>
  .col-centered {
    float: none;
    margin: 0 auto;
  }

  .success-container {
    background: rgba(137, 255, 49, 0.59);
  }

  .success-title {
    padding: 10px;
  }

  .success-button {
    margin: 10px 0
  }
</style>
