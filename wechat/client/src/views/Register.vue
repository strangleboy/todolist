<template>
  <div class="register">
      <div class="header">
        <button @click="$router.go(-1)">取消</button>
      </div>
      <div class="container">
        <div class="title">注册账户</div>
        <div class="content">
          <!-- 表单 -->
          <form>
            <input-group
              label = "昵称"
              placeholder = "例如：米奇"
              v-model = "user.name"
            />
            <input-group
              label = "邮箱"
              placeholder = "请填写邮箱"
              v-model = "user.email"
            />
            <input-group
              label = "密码"
              placeholder = "请填写密码"
              v-model = "user.password"
              type = "password"
            />
            <input-group
              label = "确认密码"
              placeholder = "请确认密码"
              v-model = "user.password_r"
              type = "password"
            />
          </form>
          <div class="btn_wrap">
            <y-button :disabled="isDisabled" @click="registerClick">注册</y-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup.vue'
import YButton from '../components/YButton.vue'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_r: ''
      }
    }
  },

  components: {
    InputGroup,
    YButton
  },
  computed: {
    isDisabled () {
      if (
        this.user.name &&
        this.user.email &&
        this.user.password &&
        this.user.password_r
      ) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    registerClick () {
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
      if (!reg.test(this.user.email)) {
        this.$toast.fail('请输入合法的邮箱地址')
        this.user.email = ''
        return false
      }
      if (this.user.password !== this.user.password_r) {
        this.$toast.fail('两次密码输入不一致')
        this.user.password = ''
        this.user.password_r = ''
        return false
      }
      this.$axios.post('/api/users/register', this.user).then(res => {
        // 注册成功
        this.$toast.success('注册成功')
        this.$router.push('/login')
      })
    }
  }
}

</script>
<style lang='scss' scoped>
  .register{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .header{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    line-height: 50px;
  }

  .header button{
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    color: #20af0e;
  }

  .container{
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }

  .title{
    margin-top: 30px;
    font-size: 22px;
    text-align: center;
  }

  .btn_wrap {
    margin: 50px 16px 0 16px;
  }
</style>
