import DForm from "../src/components/DForm.vue";

export default {
    title: "DForm",
    component: DForm
}

export const Default = () => ({
    components: {DForm},
    template: `<DForm />`
})

export const More = () => ({
    components: {DForm},
    data() {
        return {
            fields: [
                {type: "email", label: "Email:", name: "email", placeholder: "JohnDoe@gmail.com"},
                {type: "checkbox", label: "I agree", name: "agree", id: "agree"},
                {type: "checkbox", label: "Remember me", name: "remember", id: "remember"}
            ]
        }
    },
    template: `<DForm :fields="JSON.parse(JSON.stringify(fields))" />`
})
  