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
  <div class="modal bg-secondary bg-opacity-50" tabindex="-1" @click="closeModal()">
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
import { ref } from 'vue'
export default {
  name: 'portfolioComponent',
  setup() {
    let src1 = ref('/src/components/icons/poert1.png')
    let src2 = ref('/src/components/icons/port2.png')
    let src3 = ref('/src/components/icons/port3 (1).png')

    const openModal = (portSrc) => {
      document.querySelector('.modal img').src = portSrc
      document.querySelector('.modal').classList.add('d-block')
    }
    const closeModal = () => {
      document.querySelector('.modal').classList.remove('d-block')
    }
    return { src1, src2, src3, openModal, closeModal }
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
