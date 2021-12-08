import { ref } from 'vue'
const commonCount = ref(0)

const changeCount = () => {
  commonCount.value += 3
}
export const useCommonData = () => {
  return {
    commonCount,
    changeCount,
  }
}