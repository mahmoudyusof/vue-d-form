<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DSelect :options="slct_opts" v-model="selected" class="form-control" label="Number"/>
    <DRadioGroup :options="rdo_opts" v-model="selected" name="somename"/>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
import DRadioGroup from "./components/DRadioGroup";
import DSelect from "./components/DSelect";
export default {
  name: "app",
  components: {DRadioGroup, DSelect},
  data() {
    return {
      slct_opts: ["one", "two", "three"],
      rdo_opts: ["one", "two"],
      selected: "two"
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
