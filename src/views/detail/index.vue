<template>
    <div>detail </div>
    <div>{{ douleCount }}</div>
    <div>{{ douleCountadd }}</div>

    <button @click="increment">数字增加</button>
    <button @click="$reset">数字重置</button>
    <button @click="toHome">跳转到Home</button>
</template>
<script setup lang="ts">
import { useCountStore } from '@store/useCountStore'
import { storeToRefs } from 'pinia'
import { useRouter } from "vue-router";
const router = useRouter();
const countStore = useCountStore();
const { douleCount, douleCountadd } = storeToRefs(countStore)
const { increment, $reset } = countStore
console.log(countStore.secret)

function toHome() {
    router.push('/')
}
</script>
<style lang="scss" scoped></style>