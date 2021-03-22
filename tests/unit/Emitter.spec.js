import { mount } from '@vue/test-utils'
import emitter from '@/components/Emitter.vue'

describe("Emitter.vue", () => {
    it("Emitted : MyEvent", () => {
        const wrapper = mount(emitter)
    
        wrapper.vm.emitEvent()
        wrapper.vm.emitEvent()
        
        expect(wrapper.emitted().myEvent[0]).toEqual(["name","password"])
    })

    it("Emitted : emits event without mounting", () => {
        const events = {}
        const $emit = (event, ...args) => {
            events[event] = [...args]
        }

        emitter.methods.emitEvent.call({ $emit })
        expect(events.myEvent).toEqual(["name","password"])
    })
})