import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue'

describe('MeetingItems.vue', () => {
    it('Should search after input in inputfield', () => {
        const filter = jest.spyOn(Home.methods, 'filter');
        const allMeetings = [
            {
                "id": 1,
                "Title": "Coffee date"
            },
            {
                "id": 2,
                "Title": "Study date"
            }
        ]
        const wrapper = shallowMount(Home, {
            propsData: {
                meetings: allMeetings
            }
        })
        const searchInput = wrapper.find('input');
        searchInput.setValue('Coff');
        searchInput.trigger('input');
        expect(filter).toHaveBeenCalled;
        expect(wrapper.vm.$data.filteredList.length).toBe(1);
    })
})
