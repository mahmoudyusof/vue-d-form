import DSelect from "../src/components/DSelect.vue";

export default {
  title: "DSelect",
  component: DSelect
}

export const Default = () => ({
  components: {DSelect},
  template: `<DSelect :options="['one', 'two', 'three']" value="three" />`
})

export const Labeled = () => ({
  components: {DSelect},
  template: `<DSelect :options="['one', 'two', 'three']" value="three" label="Numbers" />`
})