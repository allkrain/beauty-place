<template>
  <div class="goods-counter">
    <span>{{count}} {{describe}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'GoodsCounter',
  props: {
    count: Number,
    describe: String,
  },
};
</script>

<style lang="scss" scoped>
.goods-counter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  overflow: hidden;

  &::after {
    display: block;
    content: "";
    flex: 1;
    height: 1px;
    background-color: #333;
    margin-left: 30px;
  }
}
</style>
