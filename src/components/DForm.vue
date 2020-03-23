<script>
import DCheckbox from "./DCheckbox";
import DTextInput from "./DTextInput";
import DSelect from "./DSelect";
import DRadioGroup from "./DRadioGroup";
import DFileInput from "./DFileInput";
export default {
    components: {
        DCheckbox,
        DTextInput,
        DSelect,
        DRadioGroup
    },
    props: {
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
                ["text", "textarea", "number", "password", "email"].includes(
                    field.type
                )
            ) {
                fields_components.push(
                    h("DTextInput", {
                        attrs: {...field}
                    })
                );
            } else if (field.type === "checkbox") {
                fields_components.push(
                    h("DCheckbox", {
                        attrs: {...field}
                    })
                );
            }else if(field.type === "select"){
                fields_components.push(h("DSelect", {
                    attrs: {...field}
                }))
            }else if(field.type === "radio"){
                fields_components.push(h("DRadioGroup", {
                    attrs: {...field}
                }))
            }else if(field.type === "radio"){
                fields_components.push(h("DFileInput"), {
                    attrs: {...field}
                })
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
