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
        },
        img_preview: {
            type: Boolean,
            default: false
        }
    },
    model: {
        event: "change"
    },
    render(h){
        var elements = [];
        elements.push(h("input", {
            attrs: {
                type: "file",
                value: this.value,
                name: this.name,
                style: "display: none !important;",
                ...this.$attrs
            },
            on: {
                change: (event) => {
                    this.$emit("change", event)
                    if(this.img_preview){
                        const file = this.$refs.input.files[0];
                        if(file && file.split("/")[0] === "image"){
                            var img = this.$refs.img;
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                img.setAttribute("src", e.target.result)
                            }
                            reader.readAsDataURL(file || new Blob([""], {type: "image/jpeg"}))
                        }
                    }
                }
            },
            ref: "input"
        }));

        elements.push(h("button", {
            attrs:{
                ...this.$attrs,
            },
            on: {
                click: () => {
                    this.$refs.input.click()
                }
            },
        }, [this.label]))

        if(this.img_preview == true){
            elements.push(h("img", {
                ref: "img",
                attrs: {
                    src: ""
                }
            }))
        }

        return h("div", elements)
    }
}
</script>