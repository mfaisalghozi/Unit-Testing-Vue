import {mount} from '@vue/test-utils'
import SubmitButton from '@/components/PropsTest.vue'

describe('PropsTest.vue', () => {
    it('display a non authorized message', () => {
        const msg = "submit"
        const wrapper = mount(SubmitButton, {
            propsData: {
                msg: msg
            }
        })
        console.log(wrapper.html())

        expect(wrapper.find("span").text()).toBe("Not Authorized")
        expect(wrapper.find("button").text()).toBe("submit")
    })
})