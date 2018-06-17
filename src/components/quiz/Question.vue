<template>
  <div class="col-centered col-md-6">
    <div class="question-container">
      <p>What's {{firstNumber}} {{sign}} {{secondNumber}}</p>
      <div class="options-container">
        <div v-for="optionChunk in options"
             class="row">
          <quiz-option
            v-for="(option, index) in optionChunk"
            :key="index"
            @answered="answer(option)"
            :option="option">
          </quiz-option>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuizOption from './Option.vue';
  export default {
    name: 'question',
    data() {
      return {
        firstNumber: '',
        secondNumber: '',
        signs: ['+', '-'],
        sign: '',
        options: []
      }
    },
    methods: {

      generateQuestion() {
        this.firstNumber = Math.floor(Math.random() * 100);
        this.secondNumber = Math.floor(Math.random() * 100);
        this.sign = this.signs[Math.floor(Math.random() * 2)];
      },

      generateOptions() {
        let i;
        for (i = 0; i < 3; i++) {
          this.options.push(Math.floor(Math.random() * 300 - 100));
        }
        this.putRightOption();
        this.options = this.splitIntoSubArray(this.options, 2);
      },

      putRightOption() {
        this.options.splice(Math.floor(Math.random() * 4), 0, this.rightAnswer)
      },

      splitIntoSubArray(arr, count) {
        let newArray = [];
        while (arr.length > 0) {
          newArray.push(arr.splice(0, count));
        }
        return newArray;
      },

      answer(option) {
        if (option !== this.rightAnswer)
          alert(`The answer "${option} is incorrect"`);
        else {
          this.$emit('answerCorrect');
        }
      }
    },
    computed: {
      rightAnswer() {
        switch (this.sign) {
          case '-':
            return this.firstNumber - this.secondNumber;
          case '+':
            return this.firstNumber + this.secondNumber;

        }
      }
    },
    mounted() {
      this.generateQuestion();
      this.generateOptions();
    },
    components: {
      QuizOption
    }
  }
</script>

<style scoped>
  .col-centered {
    float: none;
    margin: 0 auto;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    padding: 5px;
    background: #f0f0f0;
    margin: 0;
    border-bottom: 1px solid darkgray;
  }

  .question-container {
    border: 1px solid darkgray;
  }

  .options-container {

  }
</style>
