import DRadioGroup from "../src/components/DRadioGroup.vue";

export default {
  title: "DRadioGroup",
  component: DRadioGroup
}

export const Default = () => ({
  components: {DRadioGroup},
  template: `<DRadioGroup name="numbers" :options="['one', 'two', 'three']" value="two"/>`
})