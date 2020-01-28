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
  render(h) {
    let element = null;
    var self = this;
    element = h("input", {
      attrs: {
        type: "checkbox",
        checked: this.value,
        ...this.$attrs
      },
      on: {
        change(e) {
          self.$emit("input", e.target.checked);
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
