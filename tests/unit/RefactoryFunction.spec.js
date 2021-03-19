import {factory} from './refactor.js'

describe('SubmitButton', () => {

    describe('admin access', () => {
        it('display admin privileges', () => {
            const wrapper = factory({ isAdmin: true })
            console.log(wrapper.html())
    
            expect(wrapper.find("span").text()).toBe("Admin Previleges")
            expect(wrapper.find("button").text()).toBe("submit")
        })
    })

    describe('non admin access', () => {
        it('display a non authorized message', () => {
            const wrapper = factory()
            console.log(wrapper.html())
    
            expect(wrapper.find("span").text()).toBe("Not Authorized")
            expect(wrapper.find("button").text()).toBe("submit")
        })
    })

})