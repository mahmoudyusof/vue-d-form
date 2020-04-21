<script>
// this component should support all text, email, password, number and textarea fields
export default {
  inheritAttrs: false,
  props: {
    // similar to html type attribute
    type: {
      type: String,
      default: "text",
      validator(x) {
        return (
          ["text", "number", "textarea", "password", "email", "range"].indexOf(
            x
          ) > -1
        );
      }
    },
    // when using v-model this property is bound to the state
    value: {
      type: String,
      default: ""
    },
    // optional Label
    label: {
      type: String,
      default: ""
    }
  },
  // emits an input event to update the value prop
  methods: {
    emit(v) {
      this.$emit("input", v);
    }
  },
  // the main render function // h is a function that creates an element
  render(h) {
    let element = null;
    // textareas use a different tag: not <input />
    if (this.type !== "textarea") {
      element = h(
        /* tag */ "input",
        /* props and attributes */ {
          attrs: {
            type: this.type,
            value: this.value,
            ...this.$attrs
          },
          // event listeners
          on: {
            input: e => {
              this.$emit("input", e.target.value);
            }
          }
        }
      );
    } else {
      element = h(
        "textarea",
        {
          attrs: this.$attrs,
          on: {
            input: v => {
              this.$emit("input", v);
            }
          }
        },
        [this.value, this.$slots.default]
      );
    }
    // in case there is a label I want to wrap them in a div
    if (this.label) {
      return h("div", [
        h(
          "label",
          {
            attrs: {
              for: this.$attrs.id || ""
            }
          },
          this.label
        ),
        element
      ]);
    }
    return element;
  }
};

// the h function
// h('tag-name', [...children], {...attributes_and_props})
</script>
