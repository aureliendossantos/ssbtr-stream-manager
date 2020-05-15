import Vue from 'vue';
import Overlay from './Overlay.vue';

Vue.config.productionTip = false;

new Vue({
    render(h) { return h(Overlay); },
}).$mount('#app');
