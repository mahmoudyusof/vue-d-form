<template>
  <div id="app">
    <DForm :fields="fields" v-model="form_data" />
  </div>
</template>
<script>
import DForm from "./components/DForm.vue";
export default {
  components: { DForm },
  data() {
    return {
      fields: [
        {
          name: "fname",
          type: "text",
          placeholder: "John",
          label: "First Name"
        },
        {
          name: "lname",
          type: "text",
          placeholder: "Doe",
          label: "Last Name"
        },
        {
          name: "gender",
          type: "radio",
          options: ["Male", "Female"]
        }
      ],
      form_data: {
        fname: "Mahmoud"
      }
    };
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