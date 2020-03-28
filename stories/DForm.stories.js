import DForm from "../src/components/DForm.vue";
import "./styles/main.css";

export default {
  title: "DForm",
  component: DForm
};

export const Default = () => ({
  components: { DForm },
  template: `<DForm />`
});

export const More = () => ({
  components: { DForm },
  data() {
    return {
      fields: [
        {
          type: "email",
          label: "Email:",
          name: "email",
          placeholder: "JohnDoe@gmail.com"
        },
        {
          type: "select",
          options: ["male", "female"],
          label: "Gender",
          name: "gender",
          id: "gender"
        },
        { type: "checkbox", label: "I agree", name: "agree", id: "agree" }
      ]
    };
  },
  template: `<DForm class="form" :fields="JSON.parse(JSON.stringify(fields))" />`
});

export const Styled = () => ({
  components: { DForm },
  data() {
    return {
      fields: [
        {
          type: "text",
          label: "First Name:",
          name: "fname",
          placeholder: "John",
          class: ["form-control"]
        },
        {
          type: "text",
          label: "Last Name:",
          name: "lname",
          placeholder: "Doe",
          class: ["form-control"]
        },
        {
          type: "email",
          label: "Email:",
          name: "email",
          placeholder: "JohnDoe@gmail.com",
          class: ["form-control"]
        },
        {
          type: "select",
          options: ["male", "female"],
          label: "Gender",
          name: "gender",
          id: "gender",
          class: ["form-control"]
        },
        { type: "checkbox", label: "I agree", name: "agree", id: "agree" }
      ]
    };
  },
  template: `<DForm :fields="JSON.parse(JSON.stringify(fields))" />`
});
