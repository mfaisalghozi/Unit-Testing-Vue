import {mount} from '@vue/test-utils'
import ButtonSubmit from '@/components/PropsTest.vue'

describe('SubmitButton.vue', () => {
    it('display admin privileges', () => {
        const msg = "submit"
        const isAdmin = true
        const wrapper = mount(ButtonSubmit,{
            propsData: {
                msg,
                isAdmin
            }
        })

        console.log(wrapper.html())

        expect(wrapper.find("span").text()).toBe("Admin Previleges")
        expect(wrapper.find("button").text()).toBe("submit")
    })
})