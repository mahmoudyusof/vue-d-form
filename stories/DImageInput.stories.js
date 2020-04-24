import DImageInput from "../src/components/DImageInput.vue";

export default {
  title: "DImageInput",
  component: DImageInput,
};

export const CustomLabel = () => ({
  components: { DImageInput },
  template: `<DImageInput label="Upload Image" />`,
});
