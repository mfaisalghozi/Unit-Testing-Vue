import { mount } from '@vue/test-utils'
import emitter from '@/components/Emitter.vue'

describe("Emitter.vue", () => {
    const wrapper = mount(emitter)
    
    wrapper.vm.emitEvent()
    
    console.log(wrapper.emitted())
})