<script setup lang="jsx">
import { inject, computed } from 'vue'
const { pageData } = inject("visualData");
const currentBlock = computed(() => {
    return pageData.value.blocks.find((item) => item.focus);
})
// 根据当前选择的对象，动态渲染标题
const title = computed(() => {
    if (currentBlock.value) {
        return currentBlock.value.componentKey;
    } else {
        return "page";
    }
})
// 可选动作的配置
const actions = {
    alert: {
        name: "弹出提示框",
        param: {
            message: "",
        }
    },
    eval: {
        name: "自定义代码",
        param: {
            code: "",
        }
    }
}
</script>

<template>
    <div class="title">配置：{{ title }}</div>
    <!-- 组件配置 -->
    <div v-if="currentBlock">
        <!-- 属性 -->
        <div class="form-group">
            <div class="group-name">props</div>
            <div v-for="(value, key) in currentBlock.props" :key="key">
                <label>{{ key }}</label>
                <input type="text" v-model="currentBlock.props[key]" :placeholder="value" />
            </div>
        </div>
        <!-- 样式 -->
        <div class="form-group">
            <div class="group-name">styles</div>
            <div v-for="(value, key) in currentBlock.styles" :key="key">
                <label>{{ key }}</label>
                <input type="text" v-model="currentBlock.styles[key]" :placeholder="value" />
            </div>
        </div>
        <!-- 事件 -->
        <div v-if="currentBlock.actions[0]" class="form-group">
            <div class="group-name">events</div>
            <div v-for="event in currentBlock.actions" :key="event">
                <label>{{ event.event }}</label>
                <select v-model="event.action">
                    <option v-for="(value, key) in actions" :value="key" :key="key">{{ value.name }}</option>
                </select>
                <!-- 根据上面选择的动作，动态渲染参数项 -->
                <div v-if="actions[event.action]" v-for="(value, key) in actions[event.action].param" :key="key">
                    <label>{{ key }}</label>
                    <input type="text" v-model="event.param" />
                </div>
            </div>
        </div>
    </div>
    <!-- 页面配置 -->
    <div v-else>
        <div class="form-group">
            <div v-for="(value, key) in pageData.config" :key="key">
                <label>{{ key }}</label>
                <input type="text" v-model="pageData.config[key]" :placeholder="value" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    border-bottom: 1px solid rgb(161, 161, 161);
    padding-block: 5px;
    text-align: center;
}

.form-group {
    padding: 5px;
}

.group-name {
    font-weight: bold;
}

input,
select {
    display: block;
    width: 100%;
    margin-block: 5px;
}
</style>
