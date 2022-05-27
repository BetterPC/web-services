<template>
  <div class="item">
    <img class="item-img" :src="image"
    alt="">
    <div>
      <p class="text">
        {{ text }}
      </p>
      <q-btn class="button" color="light-blue-3" text-color="black" :label="textButton" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-page',
  props: {
    image:String,
    text: String,
    textButton: String
  },
  setup(){
    return{}
  }
}
</script>

<style scoped>
.item{
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 700px;
}
.item-img{
  width: 400px;
  height: 250px;

}
.text{
  font-size:  30px;
  font-family: Monospaced;
}
</style>
