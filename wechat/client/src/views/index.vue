<template>
  <div class="index">
      <router-view></router-view>
      <tab-bar :data="tabbarData"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'index',
  data () {
    return {
      tabbarData: [
        {
          title: '微信',
          path: '/chats',
          icon: {
            active: require('@/assets/TabBarIcon/chats-fill.png'),
            normal: require('@/assets/TabBarIcon/chats.png')
          }
        },
        {
          title: '通讯录',
          path: '/contacts',
          icon: {
            active: require('@/assets/TabBarIcon/contacts-fill.png'),
            normal: require('@/assets/TabBarIcon/contacts.png')
          }
        },
        {
          title: '发现',
          path: '/discover',
          icon: {
            active: require('@/assets/TabBarIcon/discover-fill.png'),
            normal: require('@/assets/TabBarIcon/discover.png')
          }
        },
        {
          title: '我',
          path: '/me',
          icon: {
            active: require('@/assets/TabBarIcon/me-fill.png'),
            normal: require('@/assets/TabBarIcon/me.png')
          }
        }
      ]
    }
  },

  components: {
    TabBar
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
