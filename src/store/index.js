import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/v3/b/6038cdcd81087a6a8b914224",
    apiKey: "$2b$10$qySlSeF350lIVqt.TubiA.VB.1whJMisVyUfyoS7Q9tPeeUBs/XMC",
    meetings: {
      type: Array,
      default: [],
    },
    filteredMeetings: Array,
      filter: {
        search: ''
      }
  },
  mutations: {
    displayMeeting(state, data) {
      state.meetings = data
    },
    setFilter(state, data) {
      state.filteredMeetings = data
      state.filter.search = data
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
      ax.get(`${ctx.state.apiUrl}`, options).then(data => {
        ctx.commit('displayMeeting', data.data.record.meetings)
      })
    },

    async filterMeetings(ctx, search) {
      await ctx.commit('setFilter', search)
      ctx.dispatch['filteredList']
    },

    async postReview(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
          "X-Bin-Versioning": "false"
        }
      }
      try {
        let data = await ax.put(`${ctx.state.apiUrl}`, {
          meetings: ctx.state.meetings
        }, options)
        ctx.commit('displayMeeting', data.data.record.meetings)
      } catch (error) {
        console.log(error, 'submit not possible')
      }
    }
  },
  getters: {
    pickedMeeting(state) {
      return(meetID) => {
        if(state.meetings.find) {
          let meetPicked = state.meetings.find((meeting) => meeting.id == meetID)
          return meetPicked
        } else {
          return {}
        }
      }
    },
    filteredList(ctx) {
      if (
        ctx.filter.search == "" ||
        ctx.filter.search === undefined ||
        ctx.filter.search === null
        ) {
        ctx.filteredMeetings = ctx.meetings
      } else {
        ctx.filteredMeetings = ctx.meetings.filter((meeting) => {
          return meeting.Title.toLowerCase().includes(ctx.filter.search.toLowerCase());
        })
      }
      return ctx.filteredMeetings
    }
  }
})