import { shallowMount, mount } from "@vue/test-utils";
import DFileInput from "../../src/components/DFileInput";

describe("testing file input component", () => {
  let wrapper;
  const onChange = jest.fn();
  beforeEach(() => {
    wrapper = mount(DFileInput, {
      listeners: {
        change: onChange,
      },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("should render an input field", () => {
    expect(wrapper.find('input[type="file"]').exists()).toBe(true);
  });

  it("should emit a change event on the input on input change", async () => {
    wrapper.find("input").trigger("change");
    expect(wrapper.emitted().change.length).toBe(1);
  });
});
