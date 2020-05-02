<template>
  <div class="userinfo">
    <Header :isLeft="true" @onClickLeft="$router.go(-1)"/>
    <van-cell-group>
      <van-cell title="头像">
        <img :src="user.avatar" alt="头像">
      </van-cell>
      <van-cell title="昵称" :value="user.name" />
    </van-cell-group>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  components: { Header },

  methods: {
  }
}

</script>
<style lang='scss' scoped>
img{
  width: 100px;
  height: 100px;
}
</style>
