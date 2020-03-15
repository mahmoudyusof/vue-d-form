<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number, Boolean]
    }
  },
  computed: {
    indecies() {
      return this.options.map(el => el.key || el);
    }
  },
  model: {
    event: "change"
  },
  watch: {
    value(new_val){
      if(this.indecies.indexOf(new_val) === -1){
        this.$emit("change", this.options[0].key || this.options[0])
        this.$refs["soda__" + (this.options[0].key || this.options[0])].checked = true;
      }else{
        this.$refs["soda__" + new_val].checked = true;
      }
    }
  },
  render(h) {
    let els = [];
    this.options.forEach(opt => {
      els.push(
        h("div", [
          h(
            "label",
            {
              attrs: {
                for: "soda__" + (opt.key || opt)
              }
            },
            opt.text || opt
          ),
          h("input", {
            attrs: {
              type: "radio",
              name: this.name,
              checked: (opt.key || opt) === this.value,
              id: "soda__" + (opt.key || opt)
            },
            ref: "soda__" + (opt.key || opt),
            on: {
              change: e => {
                if (e.target.checked) {
                  this.$emit("change", opt.key || opt);
                }
              }
            }
          })
        ])
      );
    });

    return h("div", els);
  }
};
</script>
