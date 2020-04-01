<template>
  <div id="app">
    <DTextInput name="some" type="text" v-model="name" label="Name: " :attrs="{class: 'form-control'}" />
  </div>
</template>
<script>
import { DTextInput } from "vue-d-form";
export default {
  components: { "DTextInput": DTextInput },
  data() {
    return {
      name: "Mahmoud"
    }
  }
}
</script>
<style>
.form-control{
  box-shadow: 0 0 0 0 #000;
  border: 1px solid #eee;
  padding: 5px;
  transition: box-shadow 0.3s ease-in-out;
}
.form-control:focus{
  box-shadow: 0 0 6px 0 #000;
}
</style>