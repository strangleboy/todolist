<template>
  <div class="header">
    <van-nav-bar
    :left-text="title"
    :left-arrow="isLeft"
    @click-left="$emit('onClickLeft')"
    @click-right="$emit('onClickRight')"
    >
      <template #right>
        <van-icon :name="btn_icon" size="25" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: String,
    isLeft: {
      type: Boolean,
      default: false
    },
    btn_icon: String
  }
}

</script>
<style lang='scss' scoped>
.van-nav-bar,.van-icon{
  background: #f5f5f5;
  color: #000000;
  font-weight: 500;
}
.van-icon{
  margin-left: 20px;
}
/deep/.van-nav-bar__text {
  color: #000;
  font-size: 20px;
  font-weight: 500;
}
/deep/.van-nav-bar__arrow {
    min-width: 1em;
    margin-right: 4px;
    font-size: 20px;
    color: #000;
    font-weight: 500;
}
</style>
