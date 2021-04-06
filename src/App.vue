<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~@/assets/fonts/Montserrat-Regular.woff2") format("woff2"),
    url("~@/assets/fonts/Montserrat-Regular.woff") format("woff");
}

@font-face {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("~@/assets/fonts/Montserrat-Medium.woff2") format("woff2"),
    url("~@/assets/fonts/Montserrat-Medium.woff") format("woff");
}

@font-face {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("~@/assets/fonts/Montserrat-Bold.woff2") format("woff2"),
    url("~@/assets/fonts/Montserrat-Bold.woff") format("woff");
}

body {
  padding: 0;
  margin: 0;
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #131313;
}

.container {
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
}
</style>
