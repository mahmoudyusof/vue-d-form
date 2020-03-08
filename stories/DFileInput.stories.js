import DFileInput from "../src/components/DFileInput.vue";

export default {
  title: "DFileInput",
  component: DFileInput
}

export const Default = () => ({
  components: {DFileInput},
  template: `<DFileInput name="img"/>`
})

export const ImageWithoutPreview = () => ({
  components: {DFileInput},
  template: `<DFileInput label="Upload Image" name="img" />`
})
