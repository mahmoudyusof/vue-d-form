import DTextInput from "../src/components/DTextInput.vue";

export default {
  title: "DTextInput",
  component: DTextInput
}

export const Default = () => ({
  components: {DTextInput},
  template: `<DTextInput />`
})

export const Number = () => ({
  components: {DTextInput},
  data() {
    return{
      str: 123
    }
  },
  template: `<DTextInput type='number' v-model="str" />`
})


export const Textarea = () => ({
  components: {DTextInput},
  data() {
    return{
      str: "something"
    }
  },
  template: `<DTextInput type='textarea' v-model="str" />`
})