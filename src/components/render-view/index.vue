<template>
    <renderElement :data="props.data" v-on="events" />
</template>

<script setup lang="jsx">
const props = defineProps({ data: Object });
// 渲染元素
const renderElement = (block) => {
    const { componentKey, props, styles } = block.data;
    return (
        <componentKey style={styles}>{props.text}</componentKey>
    );
};
// 事件处理
const events = props.data.actions.reduce((prev, curr) => {
    prev[curr.event] = (event) => {
        switch (curr.action) {
            case 'alert':
                alert(curr.param);
                break;
            case 'eval':
                // 注意：在实际应用中应避免使用 eval，这里仅为示例
                eval(curr.param);
                break;
            // 可以根据需要添加更多的动作处理
            default:
                console.warn(`Unsupported action: ${curr.action}`);
        }
    }
    return prev;
}, {});
</script>
  
<style scoped></style>