<template>
  <div class="input_group">
      <label :for="name">{{label}}</label>
      <input :type="type" :value="value" :placeholder="placeholder" :name="name" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    placeholder: String,
    name: String,
    label: String
  }
}

</script>
<style lang='scss' scoped>
    .input_group{
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding: 10px 0;
        line-height: 60px;
        label{
            display: inline-block;
            width: 25%;
            margin-left: 5%;
            font-size: 16px;
        }
        input{
            display: inline-block;
            width: 65%;
            font-size: 16px !important;
            line-height: 16px;
            border: none;
            outline: 0;
            padding: 5px 5px 5px 5px;
            background-color: rgb(233, 232, 232);
            &:hover{
              border-bottom: 1px solid #5f5e5e;
            }
        }
    }
</style>
