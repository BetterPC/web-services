<template>
  <q-page padding class="page">
      <section class="page-section">

        <div class="page-section-switch">
          <q-toggle
            v-model="toogle"
            label="Modo Detallado"
            color="white"
            class="text-white text-h6"
          />
        </div>

        <div class="page-section-wrapper">
          <form>

            <h2 class="text-h4 text-center text-white">Empezamos a comparar</h2>
            <q-input v-model="input1" label="Escribe aqui el equipo" bg-color="white" outlined>
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
            <h2 class="text-h4 text-center text-white">VS</h2>
            <q-input v-model="input1" label="Escribe aqui el equipo" bg-color="white" outlined>
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
            <p class="text-white">Ejemplo: Samsung Odyssey G5, Asus TUF Gaming  WG32AQL1A</p>

          </form>
        </div>
      </section>
  </q-page>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'ComparisonPage.vue',
    setup(){
    const input1=ref()
    const input2=ref()
      const toggle = ref(false)

    return {input1, input2, toggle}
  },
})
</script>

<style scoped>

.page{
  background-color: rgb(42,41,47);
}

.page-section-wrapper{

  display:flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.page-section{
  position: relative;
}

.page-section-switch{
  position: absolute;
  right: 0;
}

</style>
