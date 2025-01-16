<template>
  <div class="container-fluid text-center">
    <h1>About Component</h1>
    <div class="row g-5">
      <div class="col-md-6">
        <p class="text-lead text-secondary">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete
          source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
          easy customization.
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-lead text-secondary">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete
          source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
          easy customization.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutComponent',
}
</script>

<style scoped>
.container-fluid {
  padding: 100px 30px;
}
h1 {
  width: fit-content;
  margin: 0 auto 40px;
  padding: 20px;
  border-bottom: 2px solid black;
}
</style>
