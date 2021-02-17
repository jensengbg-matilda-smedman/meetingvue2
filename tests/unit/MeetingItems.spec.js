import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import MeetingItems from '@/components/MeetingItems.vue'
import Index from '@/store/index.js'


describe('MeetingItems.vue', () => {
    it('should display all meetings from store when loaded', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Index)

        const wrapper = shallowMount(MeetingItems, {
            propsData: {
                meeting: {
                    "Title": "Coffee date"
                }
            },
            localVue,
            store
        });

        let meetingExist = wrapper.findAll('.meetDiv').exists()
        expect(meetingExist).toBeTruthy();
    })
})