import {mount} from '@vue/test-utils'
import billingual from '@/components/Billingual.vue'


describe("Billingual Test", () => {
    it("Renders Succesfully", () => {
        const wrapper = mount(billingual,{
            mocks: {
                $t: (msg) => msg
            }
        })
    })
})