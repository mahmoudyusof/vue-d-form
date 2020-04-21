<script>
export default {
  props: {
    // select elements must have options
    // array strings, numbers or objects
    // if objects then each object must be in the following form
    // { key: '', value: '' }
    // where key and value can be strings or numbers
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
  inheritAttrs: false,
  // this will make two way binding (aka v-model) work on change event
  model: {
    event: "change"
  },
  // once created select first element by default
  created() {
    this.$emit("change", this.options[0].key || this.options[0]);
  },
  render(h) {
    // options are eventually going to be <option></option> elements
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
    // the wrapping select element
    let element = h(
      "select",
      {
        attrs: {
          // this is the element that should be bound with data binding
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
