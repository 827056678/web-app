import { defineStore } from "pinia";
import { ref } from "vue";
export const useAppStore = defineStore("app", () => {
  const theme = ref<"light" | "dark">("light");
  const language = ref<"zh" | "en">("zh");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  return { theme, language, toggleTheme };
});
