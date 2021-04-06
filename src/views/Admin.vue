<template>
  <div class="container">
    <form
      id="add-product"
      class="form"
      action="/"
    >
      <input
        type="text"
        name="image"
      >
    </form>
    <div class="products">
      <Product
        v-for="item in productList"
        :id="item.id"
        :key="item.id"
        :image="item.image"
        :alt="item.alt"
        :describe="item.describe"
        :price="item.price"
        :sizes="item.sizes"
      ></Product>
    </div>
  </div>
</template>
