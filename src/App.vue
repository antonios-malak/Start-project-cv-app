<template>
  <header>
    <navbarComponent />
  </header>
  <router-view />
  <contactComponent />
  <footerComponent />
</template>

<script>
import navbarComponent from './components/navbar.vue'
import contactComponent from './components/contact.vue'
import footerComponent from './components/footer.vue'
export default {
  name: 'App',
  components: {
    navbarComponent,
    footerComponent,
    contactComponent,
  },
}
</script>

<style></style>
