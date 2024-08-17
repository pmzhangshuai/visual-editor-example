<script setup>
import { onMounted, provide } from 'vue'
import { initVisualData } from "@/hooks/visualData";
import LeftAside from '@/components/left-aside/index.vue';
import SimulatorEditor from '@/components/simulator-editor/index.vue';
import RightPanel from '@/components/right-panel/index.vue';

const visualData = initVisualData();
// 全局注入可视化数据以便其他组件获取
provide("visualData", visualData);

const runPreview = () => {
  // 保存可视化数据以供预览时获取
  const { pageData } = visualData;
  localStorage.setItem("visualData", JSON.stringify(pageData.value));
  // 打开预览窗口
  window.open('/preview', '_blank');
}

onMounted(() => {
  // 防止拖拽事件触发浏览器打开新标签页
  document.body.ondrop = function (event) {
    event.preventDefault();
    event.stopPropagation();
  }
})
</script>

<template>
  <header>
    <h2>可视化编辑器示例</h2>
    <button @click="runPreview">预览</button>
  </header>
  <container>
    <box>
      <left-aside />
    </box>
    <box>
      <simulator-editor />
    </box>
    <box>
      <right-panel />
    </box>
  </container>
</template>

<style scoped>
header {
  margin-block: 50px;
  text-align: center;
}

container {
  display: flex;
  flex-wrap: wrap;
}

box {
  flex: 1 300px;
  border: 1px solid rgb(161, 161, 161);
  border-radius: 5px;
  margin: 10px;
}
</style>
