import { shallowMount } from "vue-test-utils";
import DFileInput from "../../src/components/DFileInput";

describe("testing file input component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(DFileInput)
    })
    afterEach(() => {
        wrapper.destroy()
    })
    it("should render a button and an input field", () => {
        expect(wrapper.find('button')).toBeTruthy()
        expect(wrapper.find('input[type="file"]')).toBeTruthy()
    })
})