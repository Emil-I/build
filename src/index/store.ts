import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {Session} from '@/common/Authentication/session/session';
const initSession = new Session();

import {User} from '@/common/Authentication/user/user';
const initUser = new User();

import {Auth} from '@/common/Authentication/auth/auth';
const initAuth = new Auth(initUser, initSession);

export default new Vuex.Store({
  state: {
    auth: initAuth,
    session: initSession,
    user: initUser,
  },
  mutations: {

  },
  actions: {

  },
});
