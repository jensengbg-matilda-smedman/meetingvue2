import { shallowMount, createLocalVue } from '@vue/test-utils';
import Reviews from '@/components/Reviews.vue'
import Vuex from 'vuex'

describe('Reviews.vue', () => {
    it('Should show already existing reviews', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Reviews, {
            propsData: {
                review: {
                    email: 'mattan@hotmail.se',
                    review: 'loved the coffee date'
                }
            },
            localVue,
            store
        })
        const expectedMail = 'mattan@hotmail.se'
        const expectedReview = 'loved the coffee date'
        const actualMail = wrapper.find('.revMail').text()
        const actualReview = wrapper.find('.revRev').text()

        expect(actualMail).toMatch(expectedMail)
        expect(actualReview).toBe(expectedReview)
    })
})