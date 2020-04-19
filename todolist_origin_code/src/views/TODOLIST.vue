<template>
  <div class="TODOLIST">
    <todo/>
  </div>
</template>

<script>
// @ is an alias to /src
import todo from '@/components/todo.vue'

export default {
  name: 'TODOLIST',
  components: {
    todo
  }
}
</script>
