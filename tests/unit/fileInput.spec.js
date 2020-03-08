import { shallowMount, mount } from "@vue/test-utils";
import DFileInput from "../../src/components/DFileInput";

describe("testing file input component", () => {
    let wrapper;
    const onChange = jest.fn();
    beforeEach(() => {
        wrapper = mount(DFileInput, {
            propsData: {
                name: "img",
            }
        })
    })
    afterEach(() => {
        wrapper.destroy()
    })

    it("should render a button and an input field", () => {
        expect(wrapper.find('button')).toBeTruthy()
        expect(wrapper.find('input[type="file"]')).toBeTruthy()
    })

    it("should emit a click event on the input on button click", async () => {
        wrapper.find("input").trigger("click");
        expect(wrapper.emitted().change.length).toBe(1)
    });
})