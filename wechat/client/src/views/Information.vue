<template>
  <div class="information">
    <Header
      :isLeft="true"
      title="详细资料"
      btn_icon="more-o"
      @onClickLeft="onClickLeft"
    />
    <info-cell
      :userInfo="targetUser"
    />
    <div class="btn_wrapper">
      <u-button @click="$router.push({name:'chat',params:{user: targetUser}})">发消息</u-button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import InfoCell from '@/components/InfoCell'
import UButton from '@/components/YButton'
export default {
  data () {
    return {
    }
  },
  computed: {
    targetUser () {
      return this.$store.getters.targetUser
    }
  },
  components: {
    Header,
    InfoCell,
    UButton
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}

</script>
<style lang='scss' scoped>
.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
