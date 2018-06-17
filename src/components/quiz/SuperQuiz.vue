<template>
  <div class="container quiz-container">
    <h1>The Super Quiz</h1>
    <hr>
    <transition name="collapse" mode="out-in">
      <component
        :is="currentComponent"
        @nextQuestion="currentComponent='question'"
        @answerCorrect="currentComponent='quiz-success'">
      </component>
    </transition>
  </div>
</template>

<script>
  import Question from './Question.vue';
  import QuizSuccess from './Success.vue';
  export default {
    data() {
      return {
        currentComponent: 'question'
      }
    },
    computed: {},
    components: {
      Question, QuizSuccess
    }
  }
</script>

<style scoped>
  .quiz-container {
    text-align: center;
  }

  .collapse-enter {
    transform: scaleX(0);
  }

  .collapse-enter-active {
    transition: transform .5s;
  }

  .collapse-leave {

  }

  .collapse-leave-active {
    transition: transform .5s;
    transform: scaleX(0);
  }
</style>
