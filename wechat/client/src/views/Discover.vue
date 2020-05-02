<template>
  <div class="discover">
    <Header title="发现" btn_icon="add-o"></Header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  data () {
    return {
    }
  },

  components: { Header },

  methods: {
    onClickRight () {
      console.log('right')
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
