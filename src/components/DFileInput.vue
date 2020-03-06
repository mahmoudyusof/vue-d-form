<script>
export default {
    props: {
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
        return h("input", {
            type: "file",
            value: this.value,
            name: this.name,
            ...this.$attrs
        })
    }
}
</script>