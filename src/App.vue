<template>
  <div id="app">
    <select v-model="selectedOption">
      <option v-for="(opt, i) in allOptions" :key="i" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>
<script>
import DForm from "./components/DForm.vue";
export default {
  created() {
    this.request().then(opts => {
      this.allOptions = opts;
      this.selectedOption = opts[0];
    });
  },
  data() {
    return {
      selectedOption: "",
      allOptions: []
    };
  },
  methods: {
    request() {
      return new Promise((resolve, reject) => {
        resolve(["firstOption", "secondOption", "thirdOption"]);
      });
    }
  }
};
</script>
<style>
.form-control {
  box-shadow: 0 0 0 0 #000;
  border: 1px solid #eee;
  padding: 5px;
  transition: box-shadow 0.3s ease-in-out;
}
.form-control:focus {
  box-shadow: 0 0 6px 0 #000;
}
</style>