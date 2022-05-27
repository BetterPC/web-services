<template>
  <div class="item">
      <img class="item-image" :src="image" alt="">
      <h6 class="text-h6 text-cyan-9 text-center item-title">{{ title }}</h6>
      <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ItemPage',
  props:{
    image:String,
    title:String,
    text:String,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.item{
  width: 400px;
}
.item-image{
  width: 400px;
  height: 200px;
  border-radius: 50px;
}
.item-title{
  margin: 10px 0;
}
</style>
