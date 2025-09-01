<template>
  <van-config-provider :theme="theme">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </van-config-provider>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "@/stores";
const appStore = useAppStore();

const theme = computed(() => appStore.theme);
</script>

<style scoped></style>
