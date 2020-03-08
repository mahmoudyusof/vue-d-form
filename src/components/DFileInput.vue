<script>
export default {
    props: {
        label: {
            type: String,
            default: "Upload File"
        },
        name: {
            type: String,
            required: true
        },
        value: {
            default: null
        }
    },
    model: {
        event: "change"
    },
    render(h){
        var input = h("input", {
            attrs: {
                type: "file",
                value: this.value,
                name: this.name,
                style: "display: none !important;",
                ...this.$attrs
            },
            on: {
                click: (e) => {
                    this.$emit("change", e)
                }
            },
            ref: "input"
        })

        var btn = h("button", {
            attrs:{
                ...this.$attrs,
            },
            on: {
                click: () => {
                    this.$refs.input.click()
                }
            },
        }, [this.label])

        return h("div", [btn, input])
    }
}
</script>