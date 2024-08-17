<template>
        <div v-for="block in pageData.blocks">
            <RenderView :data="block" />
        </div>
</template>

<script setup>
import { onMounted } from 'vue'
import RenderView from '@/components/render-view/index.vue';
const pageData = JSON.parse(localStorage.getItem("visualData"));
// 处理页面样式
onMounted(() => {
    if (pageData.config) {
        const { backgroundColor, padding } = pageData.config;
        const styleElement = document.createElement('style');
        // styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(`
            body {
                background-color: ${backgroundColor};
                padding: ${padding};
            }
        `));
        document.head.appendChild(styleElement);
    }
})
</script>
  
<style scoped></style>