<template>
  <div class="h-screen w-full">
    <div class="border-b w-full">
      header
    </div>
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
    Home: () => import('./pages/home/index.vue')
  }
})
</script>
