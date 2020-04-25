import { mount } from "@vue/test-utils";
import DForm from "../../src/components/DForm";

describe("testing the whole form", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(DForm, {
      propsData: {
        fields: [
          {
            type: "text",
            label: "Name:",
            name: "name",
            placeholder: "John Doe",
          },
          { type: "checkbox", label: "I agree", name: "agree" },
        ],
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render all given elements(default is text input and checkbox", () => {
    const textField = wrapper.find("input[type='text']");
    const checkbox = wrapper.find("input[type='checkbox']");
    expect(textField.exists()).toBe(true);
    expect(checkbox.exists()).toBe(true);

    expect(textField.attributes().placeholder).toBe("John Doe");
    expect(textField.attributes().name).toBe("name");
  });
  it("should render given elements(override defaults)", () => {
    wrapper.setProps({
      fields: [
        {
          type: "text",
          label: "Name:",
          name: "name",
          placeholder: "John Doe",
        },
        {
          type: "select",
          options: ["male", "female"],
          label: "Gender",
          name: "gender",
          id: "gender",
        },
        { type: "checkbox", label: "I agree", name: "agree" },
        {
          type: "radio",
          options: ["one", "two", "three"],
          name: "number",
        },
        {
          type: "file",
          name: "avatar",
        },
      ],
    });
    wrapper.vm.$nextTick(() => {
      const textField = wrapper.find("input[type='text']");
      const checkbox = wrapper.find("input[type='checkbox']");
      const select = wrapper.find("select");
      const opts = wrapper.findAll("option");
      const radioOpts = wrapper.findAll("input[type='radio']");

      expect(textField.exists()).toBe(true);
      expect(checkbox.exists()).toBe(true);
      expect(select.exists()).toBe(true);
      expect(opts.exists()).toBe(true);
      expect(opts.length).toBe(2);
      expect(opts.at(0).text()).toBe("male");
      expect(radioOpts.length).toBe(3);
      expect(radioOpts.at(0).attributes().name).toBe("number");

      // TODO: fix file component
      // expect(wrapper.find('input[type="file"]').exists()).toBe(true);
    });
  });
});
