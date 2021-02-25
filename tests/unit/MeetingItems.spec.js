import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import MeetingItems from '@/components/MeetingItems.vue'
import VueRouter from 'vue-router';


describe('MeetingItems.vue', () => {
    it('should display all meetings from store when loaded', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(MeetingItems, {
            propsData: {
                meeting: {
                    "Title": "Coffee meetup"
                }
            },
            localVue,
            store
        });

        let meetingExist = wrapper.findAll('.meetDiv').exists()
        expect(meetingExist).toBeTruthy();
    })

    it('Should go to individual meeting when a meeting is clicked', async () => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        const router = new VueRouter();
        const wrapper = shallowMount( MeetingItems, {
            propsData: {
                meeting: {
                    "id": 1,
                    "Title": "Coffee meetup"
                }
            },
            localVue,
            router
        })
        await wrapper.find('.meetDiv').trigger('click');
        expect(wrapper.vm.$route.path).toBe('/Meeting/1')
    })
})