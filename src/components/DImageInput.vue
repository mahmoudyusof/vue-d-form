<script>
export default {
  props: {
    label: {
      typs: String,
      default: "Upload Image"
    },
    value: {
      default: null
    }
  },
  model: {
    event: "change"
  },
  inheritAttrs: false,
  render(h) {
    return h("span", [
      h("input", {
        attrs: { type: "file", style: "display: none !important;" },
        ref: "input",
        on: {
          change: event => {
            this.$emit("change", event);
            const file = this.$refs.input.files[0];
            if (file && file.type.split("/")[0] === "image") {
              var img = this.$refs.img;
              const reader = new FileReader();
              reader.onload = e => {
                img.setAttribute("src", e.target.result);
                this.$refs.label.style.display = "none";
              };

              reader.readAsDataURL(
                file || new Blob([""], { type: "image/jpeg" })
              );
            }
          }
        }
      }),
      h(
        "div",
        {
          attrs: { class: "soda--preview" },
          on: {
            click: () => {
              this.$refs.input.click();
            }
          }
        },
        [h("img", { ref: "img" }), h("p", { ref: "label" }, [this.label])]
      )
    ]);
  }
};
</script>
<style scoped>
.soda--preview {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  width: 500px;
  height: 300px;
  cursor: pointer;
}
</style>