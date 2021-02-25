import { createLocalVue, shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue'
import Vuex from 'vuex'

describe('MeetingItems.vue', () => {
    it('Should show meetings that matches the input search', ( )=> {
        const filter = jest.spyOn(Home.methods, 'filter')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const actions = { filterMeetings: jest.fn() }
        const store = new Vuex.Store({ actions })
        const wrapper = shallowMount(Home, {
            propsData: {
                meetings: [
                    {
                        "id": 1,
                        "when": "Coffee meetup"
                    }
                ]
            },
            localVue,
            store
        })
        const inputField = wrapper.find('input')
        inputField.setValue('Coff')
        expect(filter).toBeCalled()
        expect(inputField.element.value).toBe('Coff')
    })
})


