import {shallowMount, mount} from '@vue/test-utils';
import Counter from "@/components/Counter";

describe('Counter component', () => {
    // test('Must be equal to the snapshot', () => {
    //     const wrapper = shallowMount(Counter, {props:{start:10}})
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 must have a default value',()=>{
        const wrapper   = shallowMount(Counter)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value   =  wrapper.find('h2').text()
        expect(h2Value).toBe('counter')
    })

    test('the default value must be 100 in the p tag',()=>{
        const wrapper   = shallowMount(Counter)
        // const pTags     = wrapper.findAll('p')
        // expect(pTags).toHaveLength(2)
        // expect(pTags[1].text()).toBe('100')
        const value     = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('100')
    })
})