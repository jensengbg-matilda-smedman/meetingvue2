import { shallowMount } from '@vue/test-utils';
import SignUp from '@/components/SignUp.vue'

describe('MeetingItems.vue', () => {
    it('Should search after input in inputfield', () => {
        const filter = jest.spyOn(SignUp.methods, 'filter');

        const wrapper = shallowMount(SignUp, {
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