<script setup>
import './assets/base.css'
import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import page3 from './components/page3.vue'
import headerr from './components/header.vue'
import footerr from './components/footer.vue'
</script>

<template>
  <header>
    <headerr />
  </header>

  <main>
    <body>
      <div>вы находитесь на странице под названием {{ $route.fullPath }}</div>
      <RouterView />
    </body>
  </main>

  <footer>
    <footerr />
  </footer>
</template>

<style scoped>

</style>
