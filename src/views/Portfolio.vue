<template>
  <div class="container-fluid text-center">
    <h1>Portfolio</h1>
    <div class="row g-3">
      <div class="col-md-4">
        <div class="wrapper position-relative rounded overflow-hidden">
          <img class="w-100" :src="src1" alt="project3" />
          <div class="layer position-absolute" @click="openModal(src1)">
            <i class="fa-solid fa-plus fa-4x text-white"></i>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wrapper position-relative rounded overflow-hidden">
          <img class="w-100" :src="src2" alt="project1" />
          <div class="layer position-absolute" @click="openModal(src2)">
            <i class="fa-solid fa-plus fa-4x text-white"></i>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wrapper position-relative rounded overflow-hidden">
          <img class="w-100" :src="src3" alt="project2" />
          <div class="layer position-absolute" @click="openModal(src3)">
            <i class="fa-solid fa-plus fa-4x text-white"></i>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wrapper position-relative rounded overflow-hidden">
          <img class="w-100" :src="src1" alt="project3" />
          <div class="layer position-absolute" @click="openModal(src1)">
            <i class="fa-solid fa-plus fa-4x text-white"></i>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wrapper position-relative rounded overflow-hidden">
          <img class="w-100" :src="src2" alt="project1" />
          <div class="layer position-absolute" @click="openModal(src2)">
            <i class="fa-solid fa-plus fa-4x text-white"></i>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wrapper position-relative rounded overflow-hidden">
          <img class="w-100" :src="src3" alt="project2" />
          <div class="layer position-absolute" @click="openModal(src3)">
            <i class="fa-solid fa-plus fa-4x text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal bg-secondary bg-opacity-50" ref="modal" tabindex="-1" @click="closeModal()">
    <div class="modal-dialog h-100 d-flex align-items-center justify-content-center">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          ></button>
        </div>
        <div class="modal-body">
          <img class="w-100" src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolioComponent',
  data() {
    return {
      src1: '/src/components/icons/poert1.png',
      src2: '/src/components/icons/port2.png',
      src3: '/src/components/icons/port3 (1).png',
    }
  },
  methods: {
    openModal(src1) {
      document.querySelector('.modal img').src = src1
      this.$refs.modal.classList.add('d-block')
    },

    closeModal() {
      this.$refs.modal.classList.remove('d-block')
    },
  },
}
</script>

<style scoped>
h1 {
  width: fit-content;
  margin: 0 auto 40px;
  padding: 20px;
  border-bottom: 2px solid black;
}
.container-fluid {
  padding: 30px;
}
.layer {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1aba9f;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
}
.wrapper:hover .layer {
  opacity: 0.8;
}
</style>
