<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  },
  model: {
    event: "change"
  },
  render(h) {
    let opt_elements = [];
    var self = this;
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
          change(event) {
            self.$emit("change", event.target.value);
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
