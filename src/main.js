// Add sentry error logging
import * as Sentry from '@sentry/browser';
// add logrocket
import LogRocket from 'logrocket';

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

LogRocket.init('ov1gqs/vuejs-boilerplate-2019');
// This is an example script - don't forget to change it!
LogRocket.identify('123456', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  // subscriptionType: 'pro',
});

Sentry.configureScope((scope) => {
  scope.addEventProcessor(async (event) => {
    // eslint-disable-next-line no-param-reassign
    event.extra.sessionURL = LogRocket.sessionURL;
    return event;
  });
});
