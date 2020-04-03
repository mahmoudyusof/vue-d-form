<script>
import DForm from "./DForm.vue";
export default {
  components: { DForm },
  props: {
    steps: {
      type: Array,
      required: true
    },
    title: {
      type: String
    }
  },
  render(h) {
    const forms = steps.map(step =>
      h("div", [h("DForm", { props: step })], { attrs: { class: "step" } })
    );
  }
};
</script>
