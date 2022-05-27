<template>
  <q-page padding class="page">
  <h2>Servicios:</h2>

    <section class="page-grid">
      <Item class="page-grid-item" image="https://hardzone.es/app/uploads-hardzone.es/2018/03/pwm-pc-sobremesa.jpg?x=480&y=375&quality=40"
      title="Informe de Comparacion Simple"
      text="Aqui podras encontrar las comparaciones, simples entre todas tus alternativas de equipos que tienes"/>

      <Item class="page-grid-item" image="http://2.bp.blogspot.com/_SHHRgwskjwk/TJcXZ5qJtOI/AAAAAAAAACg/Zln_-2-jdQc/s1600/cpu+abierto.jpg"
            title="Informe de Comparacion Detallado"
            text="Aqui podras encontrar las comparaciones mas detalladas entre todas tus alternativas de equipos que tienes"/>

      <Item class="page-grid-item" image="https://noticias.bidcom.com.ar/wp-content/uploads/2021/08/Mejores-notebooks-para-diseno-1.jpg"
            title="Diferente Rendimiento de Aplicaciones Profesionales"
            text="Aqui podras encontrar el rendimiento de las aplicaciones y programas profesionales que tienes pensado tener en tu equipo"/>

      <Item class="page-grid-item" image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SX355_.jpg"
            title="Rendimiento de Juegos en Equipos"
            text="Aqui encontraras el rendimiento que tendra tu equipo a ciertos juegos que tengas pensado instalarlos."/>
    </section>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Item from '../components/ServicesPage/Item.vue'

export default defineComponent({
  name: 'ServicesPage',
  components:{
    Item
  },
  setup(){
    return{}
  },
})
</script>

<style scoped>
.page{
  background-color: #00ffff14;
}
.page-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
}

.page-grid-item{
  grid-column: auto;
  margin: 0 auto;
}
</style>
