import Vue from 'vue';
import Buefy from 'buefy';
import Index from './Index.vue';

import 'buefy/dist/buefy.css';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
    render(h) { return h(Index); },
}).$mount('#app');
