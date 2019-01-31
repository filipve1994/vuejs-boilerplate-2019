// Add sentry error logging
import * as Sentry from '@sentry/browser';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app');

const VueInstance = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Sentry.init({
  dsn: 'https://c735336807e44b6597088d0a8386b3bd@sentry.io/1384039',
  integrations: [new Sentry.Integrations.Vue({ VueInstance })],
});
