<template>
  <q-page padding class="page">
    <h2>Sobre Nosotros:</h2>

    <section class="page-grid">
      <Item class="page-grid-item" image="https://media.discordapp.net/attachments/726490954160406588/979395813182668820/unknown.png"
            title="Andres Christian Reynoso"
            text="Mi nombre es Andres Reynoso, curso el 5to ciclo de la carrera de Ingeniería de Software. Me considero una persona puntual y responsable y tengo conocimiento en los lenguajes de HTML y C++. "/>

      <Item class="page-grid-item" image="https://media.discordapp.net/attachments/726490954160406588/979395900646510592/unknown.png"
            title="Ivan Moran Moreno"
            text="Mi nombre es Ivan Moran, tengo 19 años y actualmente curso la carrera de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas. Siempre he estado interesado en la tecnología por eso desde que tenía 13 años decidí que quería estudiar esta carrera; lo que mas me gusta de esta carrera es aprender a programar. Tengo el deseo de ayudar a la sociedad con mis conocimientos que tendré al terminar la carrera."/>

      <Item class="page-grid-item" image="https://media.discordapp.net/attachments/726490954160406588/979395771315138611/unknown.png"
            title="Farid Josue Izquierdo Cristobal"
            text="Me considero ser una persona sociable con todas las personas que se crucen en mi camino, también suelo ser una persona muy divertida cuando empiezo agarrar confianza con la gente, también me considero disciplinado con los objetivos que me propongo cumplirlos y por último suelo ser empático con los demás, ya que siempre me pongo en el lugar de la otra persona y suelo ser comprensivo."/>

      <Item class="page-grid-item" image="https://media.discordapp.net/attachments/726490954160406588/979395857285779566/unknown.png"
            title="Andy Jack del Aguila Villanueva"
            text="Soy una persona muy competitiva, me gusta trabajar en equipo, tiendo a ser comprensivo con las personas y las trato de ayuda en lo que está a mi alcance. Me considero una persona paciente y empática."/>

      <Item class="page-grid-item" image="https://media.discordapp.net/attachments/726490954160406588/979395946238574722/unknown.png"
            title="Christian Gabriel Gomez de la Curz"
            text="Considero que soy una persona muy persistente, ya que siempre busco lograr mis objetivos esforzándome y tratando de mejorar cada día. También soy muy juicioso, puesto que me gusta analizar los problemas desde distintos puntos de vista para poder tener varias soluciones."/>
    </section>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Item from '../components/AboutPage/Item.vue'

export default defineComponent({
  name: 'AboutPage',
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
