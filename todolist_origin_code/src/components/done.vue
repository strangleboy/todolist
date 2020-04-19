<template>
  <div>
    <button class="delete btn btn-dark" @click="delAll">清空</button>
      <ul>
          <li v-for="(items,key) in oldlist" :key="key"> {{ items }}
            <a class="delete badge badge-danger" @click.prevent="delItem(key)">刪除</a>
            <a class="recover badge badge-primary" @click.prevent="recover(key)">恢复</a>
          </li>
      </ul>
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

  mounted () {
    var old = JSON.parse(localStorage.getItem('done'))
    if (old) {
      this.oldlist = old
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
ul{
  margin-top: 30px;
}
ul li{
  text-align: center;
}
ul li a{
  margin-left: 5px;
  color: rgb(250, 250, 250);
  cursor: pointer;
  &:hover{
    color: #fff;
  }
}
</style>
