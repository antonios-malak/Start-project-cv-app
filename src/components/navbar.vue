<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container">
      <router-link :to="{ name: 'homeComponent' }" class="navbar-brand fs-1"
        >Start Framework</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'aboutComponent' }"
              class="nav-link"
              active-class="active"
              aria-current="page"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'portfolioComponent' }" class="nav-link" active-class="active"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contactPage' }" class="nav-link" active-class="active"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbarComponent',
}
</script>

<style scoped>
nav {
  background-color: #2c3e50;
}
a {
  color: white;
  font-weight: bold;
}
a.navbar-brand,
a.nav-link {
  color: white;
}
/* a.navbar-brand:hover,
a.nav-link:hover {
  color: #42b983;
} */
.navbar-nav .nav-item .nav-link.active {
  background-color: #28a745; /* Bootstrap success color */
  color: #fff;
  border-radius: 5px;
  padding-left: 5px;
}
</style>
