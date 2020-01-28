import DCheckbox from "../src/components/DCheckbox.vue";

export default {
  title: "DCheckbox",
  component: DCheckbox
}

export const Default = () => ({
  components: {DCheckbox},
  data() {
    return {
      what: true
    }
  },
  template: `<DCheckbox label="i am checked" id="check" v-model="what"/>`
})