<template>
  <div id="app">
    <app-nav />
    <main role="main" class="container">
      <nuxt />
    </main>
  </div>
</template>
<script>
  import appNav from '@/components/app-nav';
  export default {
    components: {
      appNav
    }
  }
</script>