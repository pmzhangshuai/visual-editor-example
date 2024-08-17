<script setup>
import { ref } from "vue";
import draggable from 'vuedraggable'
import { customAlphabet } from 'nanoid';
import { cloneDeep } from 'lodash-es';
// 控制组件的拖拽行为
const widgets = {
    name: 'component',
    pull: 'clone',
    put: false
}
// 组件数据
const widgetArray = ref([
    { id: 1, componentKey: 'h1', props: { text: '一级标题' }, styles: { color: "#000000" }, actions: [], preview: '<h1>一级标题</h1>' },
    { id: 2, componentKey: 'h2', props: { text: '二级标题' }, styles: { color: "#cb4042" }, actions: [], preview: '<h2>二级标题</h2>' },
    { id: 3, componentKey: 'p', props: { text: '文本段落' }, styles: { color: "#000000" }, actions: [], preview: '<p>文本段落</p>' },
    { id: 4, componentKey: 'button', props: { text: '按钮' }, styles: { backgroundColor: "" }, actions: [{ event: "click", action: "", param: "" }], preview: '<button>按钮</button>' }
]);
// 在克隆组件事件回调中，根据组件拖拽组的组件数据，返回最终用于画布渲染的组件数据
const generateId = customAlphabet('1234567890abcdef', 10);
const generateBlock = (block) => {
    const newBlock = cloneDeep(block);
    return {
        vid: `vid_${generateId()}`,
        componentKey: newBlock.componentKey,
        props: newBlock.props,
        styles: newBlock.styles,
        actions: newBlock.actions
    }
}
</script>

<template>
    <draggable v-model="widgetArray" :group="widgets" animation="300" :clone="generateBlock" @start="console.log('start')"
        @end="console.log('end')" item-key="id">
        <template #item="{ element }">
            <div v-html="element.preview"></div>
        </template>
    </draggable>
</template>

<style scoped></style>
