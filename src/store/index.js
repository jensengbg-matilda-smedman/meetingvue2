import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    meetings: Array,
  },
  mutations: {
    displayMeeting(state, data) {
      state.meetings = data
    }
  },
  actions: {
    async fetchBackend(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}/meeting`)
      ctx.commit('displayMeeting', data.data)
    }
  },
  modules: {
  }
})