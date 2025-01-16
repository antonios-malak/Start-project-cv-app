<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 text-center mb-md-1 mb-sm-4">
        <h3>About the Web</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
      <div class="col-md-4 text-center mb-md-1 mb-4">
        <h3>About Freelance</h3>
        <div class="icons">
          <a target="-blank" href="https://twitter.com/"
            ><i class="fa-brands fa-twitter fa-xl me-3"></i
          ></a>
          <a target="-blank" href="https://www.facebook.com/"
            ><i class="fa-brands fa-facebook-f fa-xl me-3"></i
          ></a>
          <a target="-blank" href="https://www.linkedin.com/"
            ><i class="fa-brands fa-linkedin fa-xl"></i
          ></a>
        </div>
      </div>
      <div class="col-md-4 text-center mb-md-1 mb-4">
        <h3>Location</h3>
        <p>2215 Hohn Daniel Drive</p>
        <p>Clark Mo 6543</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactComponent',
}
</script>

<style scoped>
.row {
  padding: 30px 0;
  color: #fff;
}
.container-fluid {
  background-color: #2c3e50;
}
a {
  color: white;
  transition: 0.3s;
}
a:hover {
  color: #1abc9c;
}
h3 {
  width: fit-content;
  margin: 0 auto 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
}
</style>
