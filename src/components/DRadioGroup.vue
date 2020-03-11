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
  model: {
    event: "change"
  },
  watch: {
    value(old_val, new_val){
      if(this.options instanceof Array && this.options.indexOf(new_val) == -1){
        this.$emit("change", this.options[0])
        console.log(new_val, old_val)
      }else if(!this.options instanceof Array && this.options.keys().indexOf(new_val) === -1){
        this.$emit("change", this.options.keys()[0])
      }else{
        console.log(new_val, old_val)
        this.$emit("change", new_val)
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
