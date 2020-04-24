import { shallowMount, mount } from "@vue/test-utils";
import DFileInput from "../../src/components/DFileInput";

describe("testing file input component", () => {
  let wrapper;
  const onChange = jest.fn();
  beforeEach(() => {
    wrapper = mount(DFileInput, {
      propsData: {
        name: "img",
        img_preview: false,
      },
      listeners: {
        change: onChange,
      },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("should render a button and an input field", () => {
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find('input[type="file"]').exists()).toBe(true);
    wrapper.setProps({
      label: "Upload Image",
    });
    expect(wrapper.find("button").text()).toBe("Upload Image");
  });

  it("should emit a change event on the input on input change", async () => {
    wrapper.find("input").trigger("change");
    expect(wrapper.emitted().change.length).toBe(1);
  });

  it("should render img component if only img_preview is set", async () => {
    expect(wrapper.findAll("img").length).toBe(0);
    wrapper.setProps({
      img_preview: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("img").length).toBe(1);
  });

  it("should preview image if img_preview prop is set", async () => {
    wrapper.setProps({
      img_preview: true,
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find("img").attributes("src")).toBeFalsy();
    wrapper.find("input").trigger("change");
    await wrapper.vm.$nextTick();
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.find("img").attributes("src")).toBe("");
  });
});
