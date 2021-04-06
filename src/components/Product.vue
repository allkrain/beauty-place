<template>
  <div class="product">
    <div class="product__image">
      <img
        :src="require(`@/${image}`)"
        :alt=alt
      >
    </div>
    <p>{{describe}}</p>
    <div class="product__data">
      <div class="product__price">{{`$${price}`}}</div>
      <div class="product__sizes">
        <CheckItem
          v-for="(size, index) in sizes"
          :key="index"
          type="radio"
          :value="size"
          :name="`size-${id}`"
          :valueName="size"
        ></CheckItem>
      </div>
    </div>
  </div>
</template>

<script>
import CheckItem from './CheckItem.vue';

export default {
  name: 'product',
  props: {
    id: String,
    image: String,
    alt: String,
    describe: String,
    sizes: Array,
    price: Number,
    button: Object,
  },
  components: { CheckItem },
};
</script>

<style lang="scss" scoped>
.product {
  display: block;
  color: #fff;

  &__image {
    position: relative;
    width: 100%;
    padding-top: 115%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }

  &__data {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__price {
    font-size: 14px;
    font-weight: 700;
    color: #828282;
  }

  &__sizes {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:not(:first-child) {
      margin-left: 40px;
    }
  }
}
</style>
