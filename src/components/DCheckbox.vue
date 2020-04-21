<script>
export default {
  props: {
    label: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  model: {
    event: "change"
  },
  inheritAttrs: false,
  render(h) {
    let element = null;
    element = h("input", {
      attrs: {
        type: "checkbox",
        checked: this.value,
        ...this.$attrs
      },
      on: {
        change: e => {
          this.$emit("change", e.target.checked);
        }
      }
    });

    var label = h(
      "label",
      {
        attrs: {
          for: this.$attrs.id || ""
        }
      },
      this.label
    );

    element = h("span", [label, element]);
    return element;
  }
};
</script>
