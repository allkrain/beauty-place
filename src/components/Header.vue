<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img
          src="../assets/logo.svg"
          width="100"
          height="37"
        >
      </div>
      <nav>
        <router-link
          to="/"
          exact
        >Catalogue</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart ({{cartItems}})</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      cartItems: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 40px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: block;
    font-size: 0;
    line-height: 0;
    flex: none;
    width: 100px;
    height: 37px;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:not(:first-child) {
      margin-left: 50px;
    }
  }

  a {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
    color: #828282;
    text-decoration: none;

    &:not(:first-child) {
      margin-left: 50px;
    }

    &.is-active {
      color: #fff;
    }
  }
}
</style>
