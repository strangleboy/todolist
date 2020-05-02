import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_USER: 'SET_USER', // 用户信息
  SET_TARGET_USER: 'SET_TARGET_USER'
}

export default new Vuex.Store({
  state: {
    user: {}, // 存储用户信息
    targetUser: {} // 目标用户详细信息
  },
  mutations: {
    [types.SET_USER] (state, user) {
      if (user) {
        state.user = user
      } else {
        state.user = {}
      }
    },
    [types.SET_TARGET_USER] (state, targetUser) {
      if (targetUser) state.targetUser = targetUser
      else state.targetUser = {}
    }
  },
  actions: {
    setUser: ({ commit }, user) => {
      commit(types.SET_USER, user)
    },
    setTargetUser: ({ commit }, targetUser) => {
      commit(types.SET_TARGET_USER, targetUser)
    }
  },
  getters: {
    user: state => state.user,
    targetUser: state => state.targetUser
  }
})
