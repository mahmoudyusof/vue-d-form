<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String
    },
    label: {
      type: String
    }
  },
  model: {
    event: "change"
  },
  created() {
    this.$emit("change", this.options[0].key || this.options[0]);
  },
  render(h) {
    let opt_elements = [];
    this.options.forEach(opt => {
      opt_elements.push(
        h(
          "option",
          {
            attrs: {
              value: opt.key || opt,
              selected: (opt.key || opt) === this.value
            }
          },
          [opt.value || opt]
        )
      );
    });

    let element = h(
      "select",
      {
        attrs: {
          value: this.value,
          ...this.$attrs
        },
        on: {
          change: e => {
            this.$emit("change", e.target.value);
          }
        }
      },
      opt_elements
    );
    if (this.label) {
      element = h("div", [h("label", this.label), element]);
    }
    return element;
  }
};
</script>
