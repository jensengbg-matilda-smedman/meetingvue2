import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: process.env.PORT || 'http://localhost:8000',
    meetings: Array,
    users: {}
  },
  mutations: {
    displayMeeting(state, data) {
      state.meetings = data
    },
    setGoing(state, going) {
      state.going = going
    }
  },
  actions: {
    async fetchBackend(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}/meeting`)
      ctx.commit('displayMeeting', data.data)
      console.log(process.env.PORT, 'port')
    },

    async postUser(ctx, value) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
      console.log(value, 'this is value')
      try {
        let data = await ax.post(`${ctx.state.apiUrl}/users`, {
          user: value,
        }, options)
        console.log('data', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
    modules: {
    }
  })