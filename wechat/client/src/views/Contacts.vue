<template>
  <div class="contacts">
    <Header title="通讯录" btn_icon="add-o"></Header>
    <!-- 上面 搜索框 -->
      <div class="search_wrap">
        <div class="sear_content">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="搜索" v-model="search_value">
        </div>
      </div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 中间 -->
        <div class="content_wrap">
          <info-cell
            @click="cellClick(friend)"
            v-for="(friend) in friendsList"
            :key="friend._id"
            :userInfo="friend"
          />
        </div>
        <!-- 下面 -->
        <div class="count_wrap">
          <span>{{ friendsList.length }}位联系人</span>
        </div>
      </van-pull-refresh>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import InfoCell from '@/components/InfoCell.vue'
export default {
  data () {
    return {
      friendsList: [],
      allFriends: [],
      search_value: '',
      isLoading: false
    }
  },

  components: {
    Header,
    InfoCell
  },
  created () {
    this.getFriendList()
  },
  methods: {
    // 获取所有朋友数据（数据库中所有已经注册的）
    // 后续改进：增加添加好友功能，好友同意，再加入好友列表
    getFriendList () {
      this.$axios.get('/api/users/all')
        .then(res => {
          // 把自己从好友列表中移除
          const myName = this.$store.getters.user.name
          var friendsData = res.data.filter(data => {
            return data.name !== myName
          })
          this.friendsList = friendsData
          this.allFriends = friendsData
        })
    },
    filterData () {
      this.friendsList = this.allFriends.filter(friend => {
        return friend.name.indexOf(this.search_value) !== -1
      })
    },
    cellClick (friend) {
      // console.log(friend)
      this.$store.dispatch('setTargetUser', friend)
      this.$router.push('/information')
    },
    onRefresh () {
      this.getFriendList()
    }
  },
  watch: {
    search_value () {
      this.filterData()
    }
  }
}

</script>
<style lang='scss' scoped>
Header{
  background-color: #fff;
}
.contacts {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
  overflow: auto;
}

.search_wrap {
  background-color: #f1f1f1;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
}
.sear_content {
  height: 40px;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.sear_content i {
  color: #888;
  margin-right: 10px;
}
.sear_content input {
  height: 36px;
  width: 90%;
  outline: none;
  border: none;
  font-size: 14px;
}

.count_wrap {
  min-height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  color: #888;
  font-size: 16px;
  width: 100%;
  line-height: 50px;
  text-align: center;
}
</style>
