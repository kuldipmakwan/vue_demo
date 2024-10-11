<template>
  <div>
    <template v-for="(component, index) in widgets" :key="index">
      <div v-if="component.place == 'top'">
        <component :is="component.comp" :config="component.config" />
        {{ console.log(component) }}
      </div>
      <div v-else-if="component.place == 'main'">
        <!-- {{ component }} -->
        <component :is="component.comp" :config="component.config" />
        <!-- {{ console.log(component) }} -->
        <Main v-if="component === 'MyDataGrid' "  :config="component.config" /> 
      </div>
    </template>
    <Footer class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import allWidgets from "../../json/config";
import Footer from '../components/Footer.vue'

          
import { ref, defineAsyncComponent, onBeforeMount } from 'vue';

const widgets = ref({});

onBeforeMount(async () => {
  const route = useRoute();
  const routeName = route.path;
  let currentRoute = {}
  for (const name in allWidgets) {
    if (allWidgets[name]['path'] == routeName) {
      currentRoute = allWidgets[name]
    }
  }
  for (const comp in currentRoute.widgets) {
    widgets.value[currentRoute.widgets[comp]['place']] = currentRoute.widgets[comp]
    widgets.value[currentRoute.widgets[comp]['place']]['comp'] = await loadDynamicData(comp)
  }

});
async function loadDynamicData(component) {
  const dynamicModules = import.meta.glob('../**/*.vue');
  let loadingComponent = component;
  console.log(dynamicModules[`./${loadingComponent}.vue`]);

  return defineAsyncComponent(dynamicModules[`./${loadingComponent}.vue`])
}
</script>