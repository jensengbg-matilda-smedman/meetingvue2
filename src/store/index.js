import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/v3/b/60351265f1be644b0a63b5c8",
    apiKey: "$2b$10$yQ6glU4Q8glUPN2YpQqv.Ojv313PPzdUFBxhOu7efzKMFWxohmbG.",
    meetings: {
      type: Array,
      default: []
    },
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
    fetchBackend(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey, 
          "X-Bin-Versioning": "false"
        }
      }
      ax.get(`${ctx.state.apiUrl}`, options).then( data => {
        ctx.commit('displayMeeting', data.data.record.meetings)
        console.log(data.data.record.meetings, 'data record')
      }) 
    },
    

    async postUser(ctx, value) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey, 
          "X-Bin-Versioning": "false"
        }
      }
      console.log(value, 'this is value')
      try {
        let data = await ax.put(`${ctx.state.apiUrl}`, {
          meetings: ctx.state.meetings,
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