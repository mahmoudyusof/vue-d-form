import { shallowMount } from '@vue/test-utils'
import DTextInput from '../../src/components/DTextInput'

describe('tests text input field', () => {
  let wrapper = null;
  afterEach(() => {
    wrapper.destroy()
  })

  // -- RENDERES -- //

  it("should return a text input field", () => {
    wrapper = shallowMount(DTextInput);
    expect(wrapper.contains("input[type='text']")).toBe(true)
  })

  it("should change type as passed to it by attrs", () => {
    wrapper = shallowMount(DTextInput, {
      propsData: {
        type: 'number'
      }
    })
    expect(wrapper.contains('input[type="number"]')).toBe(true)
  })

  it("should render a textarea", () => {
    wrapper = shallowMount(DTextInput, {
      propsData: {
        type: "textarea"
      }
    })
    expect(wrapper.contains("textarea")).toBe(true)
    expect(wrapper.contains('input')).toBe(false)
  })

  // -- VALUE EVALUATORS --//

  it("should have the value of v-model input", () => {
    wrapper = shallowMount(DTextInput, {
      propsData: {
        value: "123"
      }
    })
    expect(wrapper.vm.$el.value).toBe("123");
  })

  it("should have the value of v-model textarea", () => {
    wrapper = shallowMount(DTextInput, {
      propsData: {
        type: "textarea",
        value: "123"
      }
    })
    expect(wrapper.text()).toBe("123");
  })

  // test v-model

  it("should allow v-model directive usage", async () => {
    wrapper = shallowMount(DTextInput, {
      propsData: {
        value: "hello"
      }
    })
    const inp = wrapper.find('input')
    inp.setValue("bye")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input[0]).toEqual(['bye'])
  })
})
