
<template>
  <h1>this is about page</h1>
  <Heading :level="3">hello h3</Heading>
  <div>
  count
  {{
    counter.count
  }}

  commonCount---{{commonCount}}
  </div>
</template>

<script setup>
import Heading from "../components/Head.jsx";
import { useCounterStore } from "@/store/counter";
import { useCommonData } from "../components/CommonStore";

const { commonCount } = useCommonData()

const counter = useCounterStore()

counter.count++

counter.increment()

</script>
