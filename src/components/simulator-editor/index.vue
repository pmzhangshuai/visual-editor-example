<script setup lang="jsx">
import { watch, inject } from "vue";
import draggable from 'vuedraggable'
// 编辑器组件拖拽规则
const editor = {
    name: 'component',
    pull: false,
    put: true
}
const { pageData } = inject("visualData");
/**
 * 渲染元素
 *
 * @param props.data.componentKey 组件类型
 * @param props.data.props 组件的属性对象
 * @param props.data.styles 组件的样式对象
 * @returns 渲染后的组件
 */
const renderElement = (props) => {
    const { componentKey, props: elementProps, styles } = props.data;
    return (
        <componentKey style={styles}>{elementProps.text}</componentKey>
    );
}
// 选中组件
const selectComponent = (element) => {
    pageData.value.blocks.forEach((block) => {
        block.focus = false;
    });
    element.focus = true;
}
// 选中页面
const selectPage = () => {
    pageData.value.blocks.forEach((block) => {
        block.focus = false;
    });
}
</script>

<template>
    <div class="title">画布</div>
    <div :style="pageData.config" @mousedown="selectPage">
        <draggable style="min-height: 120px;border: 1px dashed #ccc;" v-model="pageData.blocks" :group="editor"
            animation="300" item-key="vid">
            <template #item="{ element }">
                <div :data-label="element.componentKey" :class="{ focus: element.focus }"
                    @mousedown.stop="selectComponent(element)">
                    <renderElement :data="element" />
                </div>
            </template>
        </draggable>
    </div>
</template>

<style scoped>
.title {
    border-bottom: 1px solid rgb(161, 161, 161);
    padding-block: 5px;
    text-align: center;
}

/* 为组件添加选中时的样式 */
.focus {
    outline: 2px solid #006eff;
    outline-offset: -2px;
    position: relative;
}

.focus::before {
    top: 0;
    left: -3px;
    transform: translate(-100%, 0);
    position: absolute;
    padding: 3px 5px;
    font-size: 12px;
    font-weight: 700;
    color: white;
    background-color: #006eff;
    border-radius: 3px;
    content: attr(data-label);
}
</style>
