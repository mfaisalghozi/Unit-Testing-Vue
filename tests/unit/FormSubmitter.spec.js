import { mount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter.vue'

describe("Form Submitter", () => {
    it("Reveals a notification when submitted", async () => {
        const wrapper = mount(FormSubmitter)

        await wrapper.find("[data-username]").setValue("alice")
        await wrapper.find("form").trigger("submit.prevent")

        expect(wrapper.find(".message").text())
            .toBe("Thank You For Your Submission, alice")
    })
})