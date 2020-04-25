<script>
/*
this file is important
however it needs some refactoring
TODO: Make a separate image upload component 
*/
export default {
  props: {
    value: {
      default: null
    }
  },
  inheritAttrs: true,
  model: {
    // the data binding will respond to change events ... default is input
    event: "change"
  },
  render(h) {
    return h("input", {
      attrs: {
        type: "file",
        ...this.$attrs
      },
      on: {
        change: ev => {
          this.$emit("change", ev);
        }
      }
    });
  }
};
</script>
