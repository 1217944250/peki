<template>
    <div>HelloWorld</div>
    <button @click="toDetail">跳转到detail</button>
    <button @click="toMine">跳转到mine</button>
    <div>{{ count }}</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useCountStore } from '@store/useCountStore'
import { storeToRefs } from 'pinia'


const router = useRouter();
const countStore = useCountStore();
const { count} = storeToRefs(countStore)
function toDetail() {
    router.push('/detail')
}

function toMine() {
    router.push('/mine')
}



</script>
<style lang="scss" scoped></style>