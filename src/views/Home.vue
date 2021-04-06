<template>
  <div class="home">
    <div class="container">
      <GoodsCounter
        :count=totalProducts
        :describe="goodsMessage"
      ></GoodsCounter>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue';
import GoodsCounter from '@/components/GoodsCounter.vue';

export default {
  name: 'Home',
  data() {
    return {
      goodsMessage: 'goods total',
    };
  },
  computed: {
    productList() {
      return this.$store.getters.getProductList;
    },
    totalProducts() {
      return this.$store.getters.getTotalProductCount;
    },
  },
  components: {
    Product,
    GoodsCounter,
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  .product {
    width: calc(33.333333% - 27px);
    margin-top: 40px;

    &:not(:nth-child(3n)) {
      margin-right: 40px;
    }
  }
}
</style>
