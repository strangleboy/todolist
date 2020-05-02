<template>
  <div>
    <button
      class="y-button"
      :class="{'is-disabled':disabled}"
      :type="type"
      :disabled="disabled"
      @click="$emit('click')"
    >
    <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang='scss' scoped>
$color: #20af0e;
$lightcolor: #75b56c;
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  background-color: $color;
  border-color: $color;
  outline: 0;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
}

.is-disabled {
  &，
  &:focus,
  &:hover {
    color: #fff;
    background-color: $lightcolor;
    border-color: $lightcolor;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
