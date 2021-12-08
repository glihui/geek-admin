<template>
  <div @click="add">首页</div>
  <div>commonCount--{{commonCount}}</div>
  <Test/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCommonData } from "../components/CommonStore";
import  Test from "../components/Test.vue";

export default defineComponent({
  components: {
    Test
  },
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



