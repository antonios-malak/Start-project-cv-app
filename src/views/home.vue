<template>
  <div class="container-fluid text-center">
    <div class="wrapper d-block m-auto">
      <img :src="imgSrc" alt="Avatar" class="w-100" />
    </div>
    <h1 class="fw-bold text-capitalize">Start FrameWork</h1>
    <p class="pb-2 text-secondary">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</template>

<script>
export default {
  name: 'homeComponent',
  data() {
    return {
      imgSrc: '/src/components/icons/avataaars.svg',
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 250px;
  height: 300px;
}
h1 {
  width: fit-content;
  margin: 0 auto 20px;
  padding: 20px;
  border-bottom: 2px solid black;
}
</style>
