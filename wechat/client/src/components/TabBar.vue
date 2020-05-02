<template>
  <div class="tab-bar">
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="(item, index) in data" :key="index" router :to="item.path">
            <span>{{ item.title }}</span>
            <template slot="icon" slot-scope="props">
              <img :src="props.active ? item.icon.active : item.icon.normal"/>
            </template>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },

  props: {
    data: Array
  },
  created () {
    // 刷新页面时候，保证active指向正确
    var name = ['chats', 'contacts', 'discover', 'me']
    // console.log(name.toString().includes(this.real_name))
    // console.log(this.real_name)
    if (name.toString().includes(this.$route.name)) {
      this.active = name.indexOf(this.$route.name)
    }
  },
  // 由于路由懒加载不会触发生命周期钩子，所以要watch监听路由参数的变化
  watch: {
    '$route' (to, from) {
      // 使tabbar跟随路由跳转
      var name = ['chats', 'contacts', 'discover', 'me']
      // console.log(name.toString().includes(this.real_name))
      // console.log(this.real_name)
      if (name.toString().includes(to.name)) {
        this.active = name.indexOf(to.name)
      }
    }
  }
}

</script>
<style lang='scss' scoped>
span{
  color: #000;
}
.van-tabbar-item--active{
  & span{
    color: #07b160;
  }
}
.van-tabbar{
  background: #f5f5f5;
}
</style>
