import Indesition from "../../../src/components/Indesition";
import {shallowMount} from "@vue/test-utils";

describe('Tests for the indesition component',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(Indesition)
    })

    test('Must be match with the snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

})