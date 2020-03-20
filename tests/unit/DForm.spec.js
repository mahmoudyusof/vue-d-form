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

    it("should render given elements(override defaults)", () => {
        wrapper.setProps({
            fields: [
                {type: "text", label: "Name:", name: "name", placeholder: "John Doe"},
                {type: "select", options: ["male", "female"], label: "Gender", name: "gender", id: "gender"},
                {type: "checkbox", label: "I agree", name: "agree"}
            ]
        })
        wrapper.vm.$nextTick(() => {
            const textField = wrapper.find("input[type='text']")
            const checkbox = wrapper.find("input[type='checkbox']")
            const select = wrapper.find("select");
            const opts = wrapper.findAll("option");
            expect(textField).toBeTruthy()
            expect(checkbox).toBeTruthy()
            expect(select).toBeTruthy()
            expect(opts).toBeTruthy()
            expect(opts.length).toBe(2)
            expect(opts.at(0).text()).toBe("male")
        })
    })
})