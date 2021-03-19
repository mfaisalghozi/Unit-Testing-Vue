import { mount,shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'
import Child from '@/components/Children.vue'

describe('Parent Component Test', () => {
    it('renders parent', () => {
        const shallowWrapper = shallowMount(Parent)
        const mountWrapper = mount(Parent)

    })
})