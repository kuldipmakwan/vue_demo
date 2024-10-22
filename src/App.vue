<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const loading = ref(true)
const router = useRouter();
router.push(router.currentRoute.value.fullPath);

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <div>
    <div v-if="loading" class="loader flex justify-center items-center h-screen">
      <span class="loader-spinner"></span>
    </div>
    <div v-else>
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #0ff02daa);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #0b32dfaa);
}

.loader {
  background: rgba(255, 255, 255, 0.8);
}

.loader-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3498db;
  width: 80px;
  height: 80px;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
