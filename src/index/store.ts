import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {Auth} from '@/common/Authentication/auth/auth';
const initAuth = new Auth();

export default new Vuex.Store({
  state: {
    auth: initAuth,
  },
  mutations: {

  },
  actions: {

  },
});
