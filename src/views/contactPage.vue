<template>
  <div class="container-fluid text-center">
    <h1>contact us</h1>
    <form action="" method="post" class="w-50 m-auto">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message"></textarea>
      <input type="submit" class="btn btn-success" value="send" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'contactPage',
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
input,
textarea {
  border: none;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  outline: none;
}
textarea {
  height: 100px;
}
</style>
