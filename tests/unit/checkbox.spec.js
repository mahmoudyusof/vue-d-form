import { shallowMount } from "@vue/test-utils";
import DCheckbox from "../../src/components/DCheckbox.vue";

describe("testing checkbox", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(DCheckbox, {
      propsData: {
        label: "checkme",
        attrs: {id: "checky"}
      }
    });
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it("should render with label", () => {

    expect(wrapper.contains("label")).toBe(true)
    expect(wrapper.contains('input[type="checkbox"]')).toBe(true)

  })

  // test v-model
  it("should allow v-model directive usage", async () => {
    var checkbox = wrapper.findAll('input[type="checkbox"]').at(0)
    checkbox.setChecked()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().change[0]).toEqual([true])
  })

})

