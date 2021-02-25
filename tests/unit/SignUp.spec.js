import { createLocalVue, shallowMount } from '@vue/test-utils';
import SignUp from '@/components/SignUp.vue'
import Vuex from 'vuex'


describe('signup.vue', () => {
    it('Should not be able to click submit button if inputs are empty', async () => {
        const submit = jest.spyOn(SignUp.methods, 'submit')
        const wrapper = shallowMount(SignUp, {
            propsData: {
                meeting: {
                    id: 1
                }
            },
        })
        const emailInput = wrapper.find('.emailInput')
        const userInput = wrapper.find('userInput')

        let submitBtn = wrapper.find('.submitBtn')
        
        await submitBtn.trigger('click')
        expect(emailInput.length).toBe(undefined)
        expect(userInput.length).toBe(undefined)
        expect(submit).toBeCalledTimes(0)
    })
/*
    it('Should show "thanks for signing up" when "join meeting" is clicked', async () => {
        const submit = jest.spyOn(SignUp.methods, 'submit')
        const wrapper = shallowMount(SignUp, {
            propsData: {
                meeting: {
                    id: 1
                }
            },
        })

        let submitBtn = wrapper.find('.submitBtn')
        //submitBtn.setValue(false)
        
        await submitBtn.trigger('click')
        expect(submit).toHaveBeenCalled()
        const displayThanks = wrapper.find('.thanksH')
        expect(displayThanks).toBeTruthy()
    }) */
})