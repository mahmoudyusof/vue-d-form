import { mount } from "@vue/test-utils";
import DForm from "../../src/components/DForm";

describe("testing the whole form", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(DForm, {
            propsData: {
                fields: [
                    {type: "text", label: "Name:", name: "name", placeholder: "John Doe"},
                    {type: "checkbox", label: "I agree", name: "agree"}
                ]
            }
        });
    });

    afterEach(() => {
        wrapper.destroy();
    })

    it("should render all given elements(default is text input and checkbox", () => {
        const textField = wrapper.find("input[type='text']")
        const checkbox = wrapper.find("input[type='checkbox']")
        expect(textField).toBeTruthy()
        expect(checkbox).toBeTruthy()

        expect(textField.attributes().placeholder).toBe("John Doe")
        expect(textField.attributes().name).toBe("name")
    })
})