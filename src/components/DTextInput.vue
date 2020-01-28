<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
      validator(x) {
        return ["text", "number", "textarea"].indexOf(x) > -1;
      }
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    emit(v) {
      this.$emit("input", v);
    }
  },
  render(createElement) {
    let element = null;
    var self = this;
    if (this.type !== "textarea") {
      element = createElement("input", {
        attrs: {
          type: this.type,
          value: this.value,
          ...this.$attrs
        },
        on: {
          input(e) {
            self.$emit("input", e.target.value);
          }
        }
      });
    } else {
      element = createElement(
        "textarea",
        {
          attrs: this.$attrs,
          on: {
            input(v) {
              this.$emit("input", v);
            }
          }
        },
        [this.value, this.$slots.default]
      );
    }

    return element;
  }
};
</script>
