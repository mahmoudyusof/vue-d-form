# DSelect

## Allows you to use a group of radio buttons

### passing an array of premitive values will cause the value and label of each option to be equal

```js
import { DSelect } from "vue-d-form";
export default {
  components: { DSelect },
  data() {
    return {
      name: "",
      options: ["one", "two", "three"],
    };
  },
};
```

```html
<template>
  <div>
    <DSelect v-model="name" class="form-control" :options="options" />
  </div>
</template>
```

### passing an array of objects on the form {key: "the_key", value: "val"} will set the key as the value of the option and the value as the label

```js
import { DSelect } from "vue-d-form";
export default {
  components: { DSelect },
  data() {
    return {
      name: "one",
      options: [
        { key: "one", value: 1 },
        { key: "two", value: 2 },
        { key: "three", value: 3 },
      ],
    };
  },
};
```

As you can see the name state is set to one since v-model will emit the "key"
