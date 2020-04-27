<template>
  <div id="todo">
      <div>
          <input type="text" x-webkit-speech v-if="speech">
          <input type="text" class="todo" v-model="word" @keyup.enter="writelist" v-else>
          <!-- <svg t="1585375453901" class="icon icon-size" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2473" width="200" height="200"><path d="M226.8 608.1m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2474"></path><path d="M766.1 607.7m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2475"></path><path d="M495.7 803.8c-22.6 0-41 18.3-41 41v85.9c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41v-85.9c0-22.7-18.3-41-41-41z" fill="#242424" p-id="2476"></path><path d="M382.2 961.3c0 22.6 18.3 41 41 41h146.6c22.6 0 41-18.3 41-41 0-22.6-18.3-41-41-41H423.2c-22.6 0.1-41 18.4-41 41zM656.9 206.1c-22.6 0-41 18.3-41 41v311.7c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V247.1c0-22.6-18.3-41-41-41zM334.6 206.1c-22.6 0-41 18.3-41 41v311.7c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V247.1c0-22.6-18.4-41-41-41z" fill="#242424" p-id="2477"></path><path d="M376.2 250.6c0-1.3-0.1-2.6-0.1-3.9 0-66.1 53.6-119.7 119.7-119.7s119.7 53.6 119.7 119.7v2.7l82.4-6.8C695.6 132.9 606 44.7 495.8 44.7c-111.6 0-202.1 90.5-202.1 202.1 0 5.2 0.2 10.4 0.6 15.5l81.9-11.7zM615.4 553.3v1.4c0 66.1-53.6 119.7-119.7 119.7S376 620.8 376 554.7c0-1.5 0-2.9 0.1-4.3h-82.5c0 1.4-0.1 2.9-0.1 4.3 0 111.6 90.5 202.1 202.1 202.1s202.1-90.5 202.1-202.1v-0.2l-82.3-1.2z" fill="#242424" p-id="2478"></path><path d="M725.3 605C706 713.9 610.9 796.5 496.5 796.5c-114.5 0-209.6-82.7-228.8-191.7L186 612c23.1 150.8 153.3 266.3 310.6 266.3 157.4 0 287.7-115.7 310.6-266.6l-81.9-6.7z" fill="#242424" p-id="2479"></path></svg> -->
          <button class="submit" @click="writelist">提交</button>
      </div>
      <div class="item_list_phone" v-show="isPhone">
        <van-swipe-cell v-for="(item,key) in list" :key="key">
          <van-cell :border="false" :title="item" value="请右滑" />
          <template #right>
            <van-button squre type="danger" text="删除"  @click.prevent="deleteWord(key)"/>
            <van-button squre type="primary" text="修改" @click.prevent="updateWord(key)" />
          </template>
        </van-swipe-cell>
      </div>
      <div class="item_list" v-show="!isPhone">
        <ul>
            <li v-for="(item,key) in list" :key="key">
              <span>{{ key + 1 }}</span>
              <label>{{ item }}</label>
              <a class="delete" href="" @click.prevent="deleteWord(key)">删除</a>
              <a class="update" href="" @click.prevent="updateWord(key)">修改</a>
            </li>
        </ul>
      </div>
      <div class="footer">
        <span>{{ list.length }}件事</span>
        <a @click.prevent="deleteAllWord">clear</a>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { SwipeCell, Cell, Button } from 'vant'

Vue.use(SwipeCell)
Vue.use(Cell)
Vue.use(Button)
export default {
  data () {
    return {
      word: '',
      list: [],
      dellist: [],
      speech: false,
      info: '',
      item_num: '',
      ScreenWidth: ''
    }
  },

  components: {},
  computed: {
    isPhone () {
      if (this.ScreenWidth <= 500) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    var history = JSON.parse(localStorage.getItem('todo'))
    if (history) {
      this.list = history
    }
    this.ScreenWidth = document.body.clientWidth
  },

  created () {
    if (document.createElement('input').webkitSpeech === undefined) {
      // Not supported
      this.speech = false
    } else {
      // Supported!
      this.speech = true
    }
  },

  methods: {
    writelist () {
      // 對空字符和空白字符串做非法處理
      if (this.word === '') return
      var reg = /(^\s+$)/g
      if (reg.test(this.word)) return
      // 將合法字符串壓入list中
      this.list.push(this.word)
      localStorage.setItem('todo', JSON.stringify(this.list))
      this.word = ''
    },
    deleteWord (key) {
      var del = this.list[key]
      try {
        var oldDel = JSON.parse(localStorage.getItem('done'))
        if (oldDel.length === 0) {
          this.dellist.push(del)
        } else {
          this.dellist = oldDel
          this.dellist.push(del)
        }
      } catch (error) {
        this.dellist.push(del)
      }
      localStorage.setItem('done', JSON.stringify(this.dellist))// 將刪除的事件存儲起來
      this.list.splice(key, 1)
      localStorage.setItem('todo', JSON.stringify(this.list))
    },
    updateWord (key) {
      this.word = this.list[key]
      this.list.splice(key, 1)
      localStorage.setItem('todo', JSON.stringify(this.list))
    },
    deleteAllWord () {
      var del = this.list
      try {
        // 获取done
        var oldDel = JSON.parse(localStorage.getItem('done'))
        // 判断是否存储在数据，存在直接拼接，
        if (oldDel.length === 0) {
          this.dellist = del
        } else {
          this.dellist = oldDel
          this.dellist = this.dellist.concat(del)
        }
      } catch (error) {
        this.dellist = del
      }
      localStorage.setItem('done', JSON.stringify(this.dellist))// 將刪除的事件存儲起來
      this.list.splice(0)
      localStorage.setItem('todo', JSON.stringify(this.list))
    }
  }
}

</script>
<style lang='scss' scoped>
#todo{
  height: 100%;
  width: 100%;
  text-align: center;
}
ul li{
  & a{
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
  &:hover{
    .delete{
      color: rgb(134, 23, 23);
      transition-duration: color 2s;
    }
    .update{
      color: rgb(18, 114, 18);
      transition-duration: color 2s;
    }
  }
}
input[type=text]{
  width: 60%;
  height: 2rem;
  padding-left: 10px;
  outline: 0;
  border: 1px solid #2c3e50;
  border-right: 0;
  line-height: 1.2;
  margin-bottom: 20px;
}
.item_list button{
  padding: 1px 20px 1px 20px;
  outline: 0;
  border: 1px solid #2c3e50;
  border-left: 0;
  background-color: #2c3e50;
  color:rgb(235, 230, 230);
  height: 2rem;
}
.item_list{
  width: 100%;
  height: 100%;
  text-align: center;
}
.footer {
  color: #777;
  width: 90%;
  height: 20px;
  text-align: center;
  margin: auto;
  border-top: 1px solid #e6e6e6;
  & span{
    float: left;
    vertical-align: baseline;
  }
  & a{
    float: right;
    vertical-align: baseline;
  }
}

</style>
