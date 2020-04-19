<template>
  <div>
      <div>
          <input type="text" x-webkit-speech v-if="speech">
          <input type="text" class="todo" v-model="word" @keyup.enter="writelist" v-else>
          <svg t="1585375453901" class="icon icon-size" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2473" width="200" height="200"><path d="M226.8 608.1m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2474"></path><path d="M766.1 607.7m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2475"></path><path d="M495.7 803.8c-22.6 0-41 18.3-41 41v85.9c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41v-85.9c0-22.7-18.3-41-41-41z" fill="#242424" p-id="2476"></path><path d="M382.2 961.3c0 22.6 18.3 41 41 41h146.6c22.6 0 41-18.3 41-41 0-22.6-18.3-41-41-41H423.2c-22.6 0.1-41 18.4-41 41zM656.9 206.1c-22.6 0-41 18.3-41 41v311.7c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V247.1c0-22.6-18.3-41-41-41zM334.6 206.1c-22.6 0-41 18.3-41 41v311.7c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41V247.1c0-22.6-18.4-41-41-41z" fill="#242424" p-id="2477"></path><path d="M376.2 250.6c0-1.3-0.1-2.6-0.1-3.9 0-66.1 53.6-119.7 119.7-119.7s119.7 53.6 119.7 119.7v2.7l82.4-6.8C695.6 132.9 606 44.7 495.8 44.7c-111.6 0-202.1 90.5-202.1 202.1 0 5.2 0.2 10.4 0.6 15.5l81.9-11.7zM615.4 553.3v1.4c0 66.1-53.6 119.7-119.7 119.7S376 620.8 376 554.7c0-1.5 0-2.9 0.1-4.3h-82.5c0 1.4-0.1 2.9-0.1 4.3 0 111.6 90.5 202.1 202.1 202.1s202.1-90.5 202.1-202.1v-0.2l-82.3-1.2z" fill="#242424" p-id="2478"></path><path d="M725.3 605C706 713.9 610.9 796.5 496.5 796.5c-114.5 0-209.6-82.7-228.8-191.7L186 612c23.1 150.8 153.3 266.3 310.6 266.3 157.4 0 287.7-115.7 310.6-266.6l-81.9-6.7z" fill="#242424" p-id="2479"></path></svg>
          <button class="submit" @click="writelist">提交</button>
      </div>
      <div>
        <ul>
            <li v-for="(item,key) in list" :key="key">
              {{ item }}
              <a class="delete" href="" @click.prevent="deleteWord(key)">刪除</a>|
              <a class="update" href="" @click.prevent="updateWord(key)">修改</a>|
              <a class="play" href="" @click.prevent="speckText(key)">播放</a>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: '',
      list: [],
      dellist: [],
      speech: false,
      info: ''
    }
  },

  components: {},

  mounted () {
    var history = JSON.parse(localStorage.getItem('todo'))
    if (history) {
      this.list = history
    }
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
    speckText (key) {
      var url = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=6&text=' + encodeURI(this.list[key])
      var n = new Audio(url)
      n.src = url
      if (this.tip) {
        n.play() // $("...").play(); // var sound = new Sound(request); // sound.play();
      } else {
        n.pause()
      }
    }
  }
}

</script>
<style lang='scss' scoped>
a{
    text-decoration: none;
    cursor: point;
}
.icon-size{
  width: 29px;
  height: 20px;
  margin-left: -26px;
  margin-right: 0.5%;
}
input[type=text]{
  padding-right: 29px;
}
</style>
