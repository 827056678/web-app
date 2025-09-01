<template>
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link value="内容" />
  <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
  <van-button type="primary" @click="toggleTheme">切换主题色</van-button>
  <h3>当前主题色{{ theme }}</h3>
  <van-calendar
    title="日历"
    :poppable="false"
    :show-confirm="false"
    :style="{ height: '500px' }"
  />
  <van-floating-bubble icon="chat" @click="showToast('提示内容')" />
</template>

<script setup lang="ts">
// import { login } from "@/api/user";
// login("gystest1", "Ztb345612").then((res) => {
//   console.log(res);
// });
import { computed } from "vue";
import { useAppStore } from "@/stores";

import { showToast } from "vant";

const appStore = useAppStore();
const toggleTheme = () => {
  return appStore.toggleTheme();
};
const theme = computed(() => appStore.theme);
</script>
