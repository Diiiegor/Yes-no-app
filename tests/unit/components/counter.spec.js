import {shallowMount, mount} from '@vue/test-utils';
import Counter from "@/components/Counter";

describe('Counter component', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })



    // test('Must be equal to the snapshot', () => {
    //     const wrapper = shallowMount(Counter, {props:{start:10}})
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 must have a default value',()=>{
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value   =  wrapper.find('h2').text()
        expect(h2Value).toBe('counter')
    })

    test('the default value must be 100 in the p tag',async ()=>{
        // const pTags     = wrapper.findAll('p')
        // expect(pTags).toHaveLength(2)
        // expect(pTags[1].text()).toBe('100')
        const value     = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('100')

        const [increaseBtn,decreaseBtn]     = wrapper.findAll('button')
        await increaseBtn.trigger('click')
    })

    test('Must be increment and decrement in 1 the counter value',async ()=>{
        const [increaseBtn,decreaseBtn]     = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value         = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    })
})