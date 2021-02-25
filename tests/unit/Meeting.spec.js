import { shallowMount } from '@vue/test-utils'; 
import Meeting from '../../src/views/Meeting'

describe('Meeting.vue', () => {
    it('Should display selected meeting with corrent info', async () => {
        const wrapper = shallowMount(Meeting, {
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
            }
        })
        const information = await wrapper.find('h3').text();
        const expected = "Title";
        expect(information).toMatch(expected);
    })
})