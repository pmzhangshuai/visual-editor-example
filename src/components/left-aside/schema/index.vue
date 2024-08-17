<script setup>
import { computed, inject } from 'vue'
import { Codemirror } from "vue-codemirror";
import { json } from '@codemirror/lang-json'

const { pageData } = inject("visualData");
// 动态更新编辑器数据
const codeString = computed(() => {
    return JSON.stringify(pageData.value, null, 2)
});
// 编辑器配置
const extensions = [json()];
</script>

<template>
    <codemirror style="max-width:300px" :extensions="extensions" v-model="codeString" />
</template>

<style scoped></style>
