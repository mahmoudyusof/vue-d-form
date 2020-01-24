<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
      validator(x) {
        return ["text", "number", "textarea"].indexOf(x) > -1;
      }
    }
  },
  render(createElement) {
    let element = null;
    if (this.type !== "textarea") {
      element = createElement("input", {
        attrs: {
          type: this.type,
          ...this.$attrs
        }
      });
    } else {
      element = createElement(
        "textarea",
        {
          attrs: this.$attrs
        },
        [this.$slots.default]
      );
    }

    return element;
  }
};
</script>
