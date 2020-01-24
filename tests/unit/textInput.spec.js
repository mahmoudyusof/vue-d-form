import { shallowMount } from '@vue/test-utils'
import DTextInput from '../../src/components/DInput'

describe('tests text input field', () => {
  let wrapper = null;
  afterEach(() => {
    wrapper.destroy()
  })

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
})
