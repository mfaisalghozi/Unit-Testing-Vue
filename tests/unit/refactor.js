import {mount} from '@vue/test-utils'
import ButtonSubmit from '@/components/PropsTest.vue'


const factory = (propsData) => {
    return mount(ButtonSubmit, {
       propsData: {
           msg: "submit",
           ...propsData
       }
    })
}

export {factory}