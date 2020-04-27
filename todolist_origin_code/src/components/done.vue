<template>
  <div>
    <button class="delete btn btn-dark" @click="delAll">清空</button>
    <div class="item_list_phone" v-show="isPhone">
      <van-swipe-cell v-for="(item,key) in oldlist" :key="key">
        <van-cell :border="false" :title="item" value="请右滑" />
        <template #right>
          <van-button type="danger" text="删除"  @click.prevent="deleteWord(key)"/>
          <van-button type="primary" text="修改" @click.prevent="updateWord(key)" />
        </template>
      </van-swipe-cell>
    </div>
    <div class="item_list" v-show="!isPhone">
      <ul>
          <li v-for="(items,key) in oldlist" :key="key">
            <span>{{ key+1 }}</span>
            <label>{{ items }}</label>
            <a class="del" @click.prevent="delItem(key)">刪除</a>
            <a class="recover" @click.prevent="recover(key)">恢复</a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      oldlist: []
    }
  },

  components: {
  },
  created () {
    this.ScreenWidth = document.body.clientWidth
  },
  mounted () {
    var old = JSON.parse(localStorage.getItem('done'))
    if (old) {
      this.oldlist = old
    }
  },
  computed: {
    isPhone () {
      if (this.ScreenWidth <= 500) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    delAll () {
      var len = this.oldlist.length
      this.oldlist.splice(0, len)
      localStorage.setItem('done', JSON.stringify(this.oldlist))// 保存更改
    },
    delItem (key) {
      this.oldlist.splice(key, 1)
      localStorage.setItem('done', JSON.stringify(this.oldlist))
    },
    recover (key) {
      var keyWord = this.oldlist[key]
      try {
        var reDo = JSON.parse(localStorage.getItem('todo'))
        reDo.push(keyWord)
        localStorage.setItem('todo', JSON.stringify(reDo))
      } catch (error) {
        localStorage.setItem('todo', keyWord)
      }
      this.oldlist.splice(key, 1)
      localStorage.setItem('done', JSON.stringify(this.oldlist))
    }
  }
}

</script>
<style lang='scss' scoped>
button{
  margin-bottom: 20px;
  margin-top: -40px;
}
ul li{
  & a{
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
  &:hover{
    .del{
      color: rgb(134, 23, 23);
      transition-duration: color 2s;
    }
    .recover{
      color: rgb(18, 114, 18);
      transition-duration: color 2s;
    }
  }
}
</style>
