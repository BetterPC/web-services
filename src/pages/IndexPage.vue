<template>
  <q-page padding class="page">

    <section class="page-section">
      <Item image="https://i.pinimg.com/736x/fd/72/7d/fd727db859403b1d94373ec4f118cd3f--work-ethic-ego.jpg"
      text=" 'La computadora es la mejor herramienta que pudo haberse ideado' "
      text-button="Registrate Ya!"/>
    </section>

    <section class="page-selection -image">
      <div class="page-section-image"></div>
    </section>

    <section class="page-section">
      <Item image="https://www.pcworld.es/cmsdata/features/3793273/laptop_images_10_thumb1200_4-3.jpg"
            text=" Visualiza todos los equipos disponibles que tenemos para usted "
            text-button="Ver"/>
    </section >

    <section class="page-section">
      <Item image="https://m.media-amazon.com/images/I/712IcPS6jnL._AC_SL1500_.jpg"
            text=" Visualiza todas las caracteristicas que tiene tu equipo deseado "
            text-button="Ver"/>
    </section>
  </q-page>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import Item from '../components/IndexPage/Item.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    Item
  },
  setup () {

    return {};
  }
});
</script>

<style scoped>
.page{
  background-color: #00ffff14;
}
.page-section.-image{
  max-width: 100%;
}
.page-section{
  margin: 40px auto;
  max-width: 1024px;
}
.page-section-image{
  width: 100%;
  height: 100px;
  background-size: cover;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qGWe8cla_YEFDoZ_KseTMnflm0uxvSV3b0Gld9yjDJinSTypFCdJCB5spYu55_f-7eo&usqp=CAU);
}
</style>
