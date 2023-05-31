import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// ------Cesium需要添加的内容
import { Ion } from "cesium"
import "cesium/Build/Cesium/Widgets/widgets.css" // 引入Cesium需要的css

// 使用自己的cesium ion的token，token获取地址：https://ion.cesium.com/signup/? 然后注册自己的账号，然后在Access Tokens里面将Default Token的token复制出来粘贴到这里就好了
// 这里的token是作者的，可以用于测试使用，建议自己注册
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOTNkMWU3NS0wM2JiLTQ4NmMtYTgyNi05NWU3MWVjMWEzMmYiLCJpZCI6NzE0MzQsImlhdCI6MTYzNTIxNjIyMX0.QnoSt0kZkqKMAL_9EHw6toCwONY-Ao2mRwYpS36FLAk";
window.CESIUM_BASE_URL = '/libs/cesium/'; // 这个地方通常会ts报错
// -------------------------

createApp(App).mount('#app')
