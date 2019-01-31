import Vue from 'vue';
import Vuex from 'vuex';
import createPlugin from 'logrocket-vuex';

// add logrocket
import LogRocket from 'logrocket';

const logrocketPlugin = createPlugin(LogRocket);


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [logrocketPlugin],
});
