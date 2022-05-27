<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-white text-teal-9">
      <q-toolbar style="height: 70px">

        <div class="header-logo">
          <img class="header-logo-img" src="https://media.discordapp.net/attachments/974475987398053948/979196345804001310/unknown.png"
               alt="logo">
          <label class="header-logo-title">BetterPC</label>
        </div>

        <q-btn v-for="(item,index) in linksList"
          :key="index" :label="item.label" flat
          :to="item.link">

        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const linksList = [
  {
    label: 'Inicio',
    link: '/',
  },
  {
    label: 'Compara',
    link: '/compare',
  },
  {
    label: 'Nosotros',
    link: '/about',
  },
  {
    label: 'Servicios',
    link: '/Services',
  },
  {
    label: 'Registro',
    link: '/register',
  },
  {
    label: 'Log In',
    link: '/login',
  },
];

export default defineComponent({
  name: 'MainLayout',


  setup () {
    const leftDrawerOpen = ref(false)

    return {linksList}
  }
});
</script>

<style scoped>
.header-logo{
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.header-logo-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.header-logo-title {
  font-size: 14px;
  line-height: 1.715em;
  text-decoration: none;
  color: inherit;
  background: transparent;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
