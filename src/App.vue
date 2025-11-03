<template>
  <div id="App">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}

</script>
<style>
/* Tambahkan import font di index.html atau di sini dengan @import */
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@400;500;700&display=swap');

/* Ganti font default seluruh aplikasi */
body {
  font-family: 'KoHo', sans-serif;
}
</style>
