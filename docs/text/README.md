# DTextInput

## normal input field

### usage

```js
import { DTextInput } from "vue-d-form";
export default {
  components: { DTextInput },
};
```

```html
<template>
  <div>
    <DTextInput
      type="text"
      v-model="name"
      placeholder="John Doe"
      class="form-control"
    />
  </div>
</template>
```
