// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import SuperQuiz from './components/quiz/SuperQuiz.vue';

import datetime from 'vuejs-datetimepicker'

Vue.config.productionTip = false;

import Transition from './components/Transition.vue';

Vue.component('transition-vue', Transition);
Vue.component('super-quiz', SuperQuiz);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<div>
                <transition-vue></transition-vue>
                <super-quiz></super-quiz>
             </div>`
})
