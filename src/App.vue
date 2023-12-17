<template>
  <component :is="layout + 'Layout'" v-if="layout"></component>
</template>
<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';

const route = useRoute()
const layout = computed(() => route.meta.layout)
</script>
<script>
export default {
  components: {MainLayout, AuthLayout}
}
</script>
