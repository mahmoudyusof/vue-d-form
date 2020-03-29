<script>
// this component should support all text, email, password, number and textarea fields
export default {
  props: {
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
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    attrs: {
      type: Object
    }
  },
  methods: {
    emit(v) {
      this.$emit("input", v);
    }
  },
  render(h) {
    let element = null;
    if (this.type !== "textarea") {
      element = h("input", {
        attrs: {
          type: this.type,
          value: this.value,
          ...this.attrs
        },
        on: {
          input: e => {
            this.$emit("input", e.target.value);
          }
        }
      });
    } else {
      element = h(
        "textarea",
        {
          attrs: this.attrs,
          on: {
            input: v => {
              this.$emit("input", v);
            }
          }
        },
        [this.value, this.$slots.default]
      );
    }
    if (this.label) {
      return h("div", [
        h(
          "label",
          {
            attrs: {
              for: this.attrs.id || ""
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
</script>
