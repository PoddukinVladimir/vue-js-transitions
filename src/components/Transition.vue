<template>
  <div class="container" style="text-align: center">
    <br><br>
    <button @click="show = !show" class="btn btn-default">Toggle</button>
    <br><br>
    <transition name="alert">
      <div v-if="show" class="alert alert-info">I am some useful info</div>
    </transition>
    <br><br>
    <button @click="componentToShow = 'danger'" class="btn btn-primary">Show danger</button>
    <button @click="componentToShow = 'warning'" class="btn btn-primary">Show warning</button>
    <br><br>
    <transition name="alert" mode="out-in">
      <component :is="componentToShow"></component>
    </transition>
  </div>
</template>

<script>
  import danger from './DangerAlert.vue';
  import warning from './WarningAlert.vue';
  export default {
    data() {
      return {
        show: false,
        componentToShow: 'danger'
      }
    },
    components: {
      danger, warning
    }
  }
</script>

<style scoped>
  .alert-enter {
    opacity: 0;
  }

  .alert-enter-active {
    transition: opacity 1s;
  }

  .alert-leave {

  }

  .alert-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

</style>
