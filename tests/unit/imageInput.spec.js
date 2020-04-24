import { shallowMount } from "@vue/test-utils";
import DImageInput from "../../src/components/DImageInput.vue";

let wrapper;

describe("testing image input component", () => {
  beforeEach(() => {
    wrapper = shallowMount(DImageInput);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render an invisible input field with type file and a div", () => {
    // const input = wrapper.find("input[type='file']");
    expect(wrapper.contains("input[type='file']")).toBe(true);
    expect(wrapper.find("div.soda--preview")).toBeTruthy();
  });
});
