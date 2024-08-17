<script setup>
import { ref } from 'vue'
import Widgets from './widgets/index.vue';
import Schema from './schema/index.vue';
const activeName = ref('first')
</script>

<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="组件" name="first">
            <Widgets />
        </el-tab-pane>
        <el-tab-pane label="源码" name="second">
            <Schema />
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
.demo-tabs {
    margin-inline: 20px;
    margin-block: 10px;
}

.el-tab-pane {
    padding: 10px;
}</style>
