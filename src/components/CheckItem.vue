<template>
  <label class="check-item">
    <input
      :type="type"
      :value="value"
      :name="name"
      :checked="isChecked"
      :disabled="isDisabled"
      :required="isRequired"
    >
    <span class="check-item__label">{{valueName}}</span>
  </label>
</template>

<script>
export default {
  name: 'CheckItem',
  props: {
    type: String,
    value: String,
    valueName: String,
    name: String,
    isChecked: Boolean,
    isDisabled: Boolean,
    isRequired: Boolean,
  },
};
</script>

<style lang="scss" scoped>
</style>
