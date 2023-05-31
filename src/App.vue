<template>
  <!-- 作为cesium的container元素 -->
  <div class="cesium-container" ref="cesiumContainer"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import * as Cesium from "cesium"

// 获取cesium的container元素
const cesiumContainer = ref();
onMounted(() => {
  // 判断container元素是否获取到了
  if(cesiumContainer) {
    // 初始化cesium场景
    const viewer = new Cesium.Viewer(cesiumContainer.value, {
      infoBox: false, // 解决默认的控制台报错
      baseLayerPicker: false, // 去掉底图选择器
      sceneModePicker: false, // 去掉场景模式选择器 （3D，2D）
      homeButton: false, // 去掉起始点按钮
      geocoder: false, // 去掉地理代码搜索
      navigationHelpButton: false, // 去掉导航帮助按钮
      animation: false, // 取消动画按钮
      timeline: false, // 去掉时间线
      fullscreenButton: false, // 去掉全屏按钮
      selectionIndicator: false, // 去掉选择指示器
    });
    (viewer.cesiumWidget.creditContainer as HTMLDivElement).style.display = 'none'; // 去掉cesium的左下角logo区域
    // 打印创建的viewer在控制台中
    console.log(viewer);
  }
})
</script>

<style lang="scss" scoped>
// 让cesium-container撑满整个屏幕
.cesium-container {
  width: 100%;
  height: 100%;
}
</style>
