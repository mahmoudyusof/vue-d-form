<script>
import DSelect from "./DSelect";
import DRadioGroup from "./DRadioGroup";
export default {
  components: {
    DCheckbox: () => import("./DCheckbox"),
    DTextInput: () => import("./DTextInput"),
    DSelect,
    DRadioGroup,
    DFileInput: () => import("./DFileInput"),
    DImageInput: () => import("./DImageInput")
  },
  props: {
    value: null,
    fields: {
      type: [Array, Object],
      default: () => [
        {
          type: "text",
          label: "Name:",
          name: "name",
          placeholder: "John Doe"
        },
        {
          type: "checkbox",
          label: "I agree",
          name: "agree",
          id: "agree"
        }
      ]
    }
  },
  model: {
    event: "change"
  },
  // inheritAttrs: false,
  methods: {
    onSubmit(e) {
      this.$emit("submit", e);
    }
  },
  render(h) {
    var fields_components = [];
    this.fields.forEach(field => {
      if (
        !field.type ||
        ["text", "textarea", "number", "password", "email"].includes(field.type)
      ) {
        fields_components.push(
          h("DTextInput", {
            attrs: { ...field },
            on: {
              input: v => {
                this.$emit("change", { ...this.value, [field.name]: v });
              }
            }
          })
        );
      } else if (field.type === "checkbox") {
        fields_components.push(
          h("DCheckbox", {
            attrs: { ...field },
            on: {
              change: v => {
                this.$emit("change", { ...this.value, [field.name]: v });
              }
            }
          })
        );
      } else if (field.type === "select") {
        fields_components.push(
          h("DSelect", {
            attrs: { ...field },
            on: {
              change: v => {
                this.$emit("change", { ...this.value, [field.name]: v });
              }
            }
          })
        );
      } else if (field.type === "radio") {
        fields_components.push(
          h("DRadioGroup", {
            attrs: { ...field },
            on: {
              change: v => {
                this.$emit("change", { ...this.value, [field.name]: v });
              }
            }
          })
        );
      } else if (field.type === "file") {
        fields_components.push(
          h("DFileInput", {
            attrs: { ...field },
            on: {
              change: v => {
                this.$emit("change", { ...this.value, [field.name]: v });
              }
            }
          })
        );
      } else if (field.type === "image") {
        fields_components.push(
          h("DImageInput", {
            attrs: { ...field },
            on: {
              change: v => {
                this.$emit("change", { ...this.value, [field.name]: v });
              }
            }
          })
        );
      }
    });

    fields_components.push(
      h("input", {
        attrs: {
          type: "submit",
          value: "Submit"
        }
      })
    );

    var form = h(
      "form",
      {
        attrs: this.$attrs,
        on: {
          submit: e => {
            e.preventDefault();
            this.$emit("submit", e);
          }
        }
      },
      fields_components
    );

    return form;
  }
};
</script>
