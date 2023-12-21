import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCountStore = defineStore('count', () => {
    const count = ref(100)
    function increment() {
        // if (num) count.value += num
        // else count.value++
        count.value++
    }

    const douleCount = computed(() => {
        return count.value * 2
    })

    const douleCountadd = computed(() => {
        return douleCount.value + 1
    })

    function $reset() {
        count.value = 100
    }

    return {
        count,
        increment,
        douleCountadd,
        douleCount,
        $reset
    }
})
