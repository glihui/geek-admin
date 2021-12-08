<template>
   <div @click="add">首页</div>
  <div>test--commonCount--{{commonCount}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCommonData } from "./CommonStore";

export default defineComponent({
  setup() {
    const { commonCount, changeCount } = useCommonData()
    const add = () => {
      changeCount()
    }
    return {
      commonCount,
      add,
    }
  },
})
</script>



