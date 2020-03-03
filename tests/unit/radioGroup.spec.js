import { shallowMount } from "@vue/test-utils";
import DRadioGroup from "../../src/components/DRadioGroup.vue";

describe("test radio group functionality", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(DRadioGroup, {
      propsData: {
        name: "numbers",
        options: ["one", "two", "three"],
        value: "three"
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it("should render all options with thier labels", () => {
    expect(wrapper.is("div")).toBeTruthy()
    let radios = wrapper.findAll("input[type='radio']")
    let labels = wrapper.findAll('label')
    expect(radios.length).toBe(3)
    expect(labels.length).toBe(3)
    expect(radios.at(1).element.getAttribute('name')).toBe("numbers")
    expect(labels.at(2).text()).toBe("three")

  })

  it("should check the radio button that has the value of the 'value' prop", async () => {
    let opts = wrapper.findAll('input[type="radio"]')
    expect(opts.at(0).attributes('checked')).toBeFalsy()
    expect(opts.at(2).attributes('checked')).toBeTruthy()
    wrapper.setProps({
      options: [{key: 1, value: "one"}, {key: 2, value: "two"}, {key: 3, value: "three"}],
      value: 1
    })
    await wrapper.vm.$nextTick()
    opts = wrapper.findAll('input[type="radio"]')
    expect(opts.at(0).attributes('checked')).toBeTruthy()
    expect(opts.at(2).attributes('checked')).toBeFalsy()
  })

  it("should allow v-model directive usage", async () => {
    let opts = wrapper.findAll('input[type="radio"]');
    expect(opts.length).toBe(3)
    expect(opts.at(2).element.checked).toBeTruthy()
    opts.at(0).trigger("click")
    await wrapper.vm.$nextTick()
    expect(opts.at(0).element.checked).toBeTruthy()
    expect(wrapper.emitted().change[0]).toEqual(["one"])
  })
})
