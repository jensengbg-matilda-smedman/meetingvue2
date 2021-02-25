import { createLocalVue, shallowMount } from '@vue/test-utils'; 
import Meeting from '@/views/Meeting'
import Vuex from 'vuex'

describe('Meeting.vue', () => {
    it('Should display selected meeting with corrent info', async () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const getters = { pickedMeeting: jest.fn() }
        const store = new Vuex.Store(Vuex, { getters })
       /* const wrapper = shallowMount(Meeting, {
            global: {
                mocks: {
                    $route: {
                        params: { id:1 }
                    }
                }
            },
            propsData: {
                meeting: [{
                    id: 1,
                    Title: "Coffee meetup"
                }]
            },
            localVue,
            store
        }) 
        const information = await wrapper.find('h3').text();
        const expected = "Title";
        expect(information).toMatch(expected);
    */}) 
})