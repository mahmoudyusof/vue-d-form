<script>
import DCheckbox from "./DCheckbox";
import DTextInput from "./DTextInput";
import DSelect from "./DSelect";
export default {
    components: {
        DCheckbox,
        DTextInput,
        DSelect
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
                        attrs: JSON.parse(JSON.stringify(field))
                    })
                );
            } else if (field.type === "checkbox") {
                fields_components.push(
                    h("DCheckbox", {
                        attrs: JSON.parse(JSON.stringify(field))
                    })
                );
            }else if(field.type === "select"){
                fields_components.push(h("DSelect", {
                    attrs: JSON.parse(JSON.stringify(field))
                }))
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
