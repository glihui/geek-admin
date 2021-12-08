<template>
  <FormProvider :form="form">
    <Field name="input" :component="[Input, {placeholder:'请输入'}]"></Field>
  </FormProvider>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Input} from "ant-design-vue";
  import { createForm } from "@formily/core";
  import { FormProvider, Field } from "@formily/vue";
  import 'ant-design-vue/dist/antd.css'
  
  export default defineComponent({
    components: {
      FormProvider,
      Field,
    },
    setup() {
      return {
        Input,
        form: createForm(),
      }
    },
  })

</script>