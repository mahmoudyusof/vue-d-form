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
      type: [String, Number, Boolean],
      validator(x){
        return this.valid_val(x)
      }
    }
  },
  model: {
    event: "change"
  },
  methods: {
    valid_val(v){
      return this.options.indexOf(v) > -1
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
