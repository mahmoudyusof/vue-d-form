<script>
/*
this file is important
however it needs some refactoring
TODO: Make a separate image upload component 
*/
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
    // for now this will act as a flag for whether the user wants to preview the image or not
    img_preview: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  model: {
    // the data binding will respond to change events ... default is input
    event: "change"
  },
  render(h) {
    var elements = [];
    elements.push(
      h("input", {
        // attributes and props
        attrs: {
          type: "file",
          value: this.value,
          name: this.name,
          style: "display: none !important;",
          ...this.$attrs
        },
        // lestiners
        on: {
          change: event => {
            this.$emit("change", event);
            if (this.img_preview) {
              const file = this.$refs.input.files[0];
              if (file && file.type.split("/")[0] === "image") {
                var img = this.$refs.img;
                const reader = new FileReader();
                reader.onload = e => {
                  img.setAttribute("src", e.target.result);
                };
                reader.readAsDataURL(
                  file || new Blob([""], { type: "image/jpeg" })
                );
              }
            }
          }
        },
        // reference used by this.$refs
        ref: "input"
      })
    );

    elements.push(
      h(
        "button",
        {
          attrs: {
            ...this.$attrs
          },
          on: {
            click: () => {
              this.$refs.input.click();
            }
          }
        },
        [this.label]
      )
    );
    // push the image with which you shall preview the uploaded file
    if (this.img_preview == true) {
      elements.push(
        h("img", {
          ref: "img",
          attrs: {
            src: ""
          }
        })
      );
    }

    return h("div", elements);
  }
};
</script>
