import { shallowMount } from "@vue/test-utils";
import DSelect from "../../src/components/DSelect.vue";

describe("testing rendering and functionality of select input", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(DSelect, {
      propsData: {
        options: ['one', 'two', 'three'],
        value: 'three'
      }
    })
  });

  afterEach(() => {
    wrapper.destroy()
  })

  it("should render the select with all its options", () => {
    expect(wrapper.is('select')).toBe(true)
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options.at(1).text()).toBe('two')
  })

  it("should render all the options in case an object was passed", () => {
    wrapper.setProps({
      options: [{key: 1, value: "One"}, {key: 2, value: "Two"}]
    })
    wrapper.vm.$nextTick(() => {
      let opts = wrapper.findAll('option')
      expect(opts.length).toBe(2)
      expect(opts.at(0).text()).toBe("One")
      expect(opts.at(0).element.getAttribute('value')).toBe('1')
    })
  })

  it("should have one selected option which has the key of 'value' prop", () => {
    //  this is a very anxius test
    const opts = wrapper.findAll('option')
    expect(opts.at(2).element.getAttribute('selected')).toBeTruthy()
    expect(opts.at(0).element.getAttribute('selected')).toBeFalsy()
    expect(opts.at(1).element.getAttribute('selected')).toBeFalsy()
    expect(wrapper.element.getAttribute('value')).toBe('three')
  })

  it("should allow v-model directive to be used and should fire a change event", async () => {
    const sel = wrapper.find("select")
    sel.setValue("one")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().change[0]).toEqual(['one'])
    expect(wrapper.element.value).toBe('one')
  })
})