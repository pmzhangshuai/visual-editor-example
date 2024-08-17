import { ref } from 'vue'

export function initVisualData() {
    const pageData = ref({
        title: "首页",
        config: {
            backgroundColor: "#ffffff",
            padding: "5px",
        },
        blocks: []
    })
    
    return { pageData }
}