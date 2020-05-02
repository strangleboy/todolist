<template>
  <div class="contacts">
    <Header btn_icon="photograph"></Header>
    <div class="container">
      <info-cell :userInfo="user" @click="$router.push('/me/userinfo')"></info-cell>
      <div class="btn_wrapper">
        <Button @click="loginOut">退出登录</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import InfoCell from '@/components/InfoCell.vue'
import Button from '../components/YButton'

export default {
  data () {
    return {
    }
  },

  components: {
    Header,
    InfoCell,
    Button
  },
  methods: {
    loginOut () {
      localStorage.removeItem('wxUserToken')
      this.$router.push('/login')
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}

</script>
<style lang='scss' scoped>
/deep/.van-nav-bar{
  background: #fff;
}
.mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 46px);
  margin-top: 0;
  box-sizing: border-box;
  padding: 0;
  background-color: #f1f1f1;
}

.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
