import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import App from '@/App.vue'
import About from '@/views/About.vue'
import VueRouter from 'vue-router';


describe('About.vue', () => {
    it('Should display about information', () => {
        const wrapper = shallowMount(About)
        const heading = wrapper.find('h1').text()
        const information = wrapper.find('p').text()

        expect(heading).toBe('What is meetup?')
        expect(information).toMatch('Want to have')        
    })
})