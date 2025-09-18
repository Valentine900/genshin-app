<template>
  <div class="app">
    <div class="background-fixer"></div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

#app {
  position: relative;
  width: 100vw;
  min-height: 100vh;
}

.background-fixer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

@media (max-width: 390px) {
  .background-fixer {
    background-image: none !important;
    background-color: #141C4A;
  }
}
</style>



