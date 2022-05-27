<template>
  <q-page padding class="page">
    <section class="page-section">
      <img class="page-section-image" src="https://media.discordapp.net/attachments/974475987398053948/979196345804001310/unknown.png" alt="">

      <div class="page-section-form">
        <form>
          <h2 class="text-h6 text-center">Bienvenidos a Finansy</h2>
          <div class="form-item">
            <label>Correo Electronico</label>
            <q-input bg-color="cyan-3" outlined></q-input>
          </div>
          <div class="form-item">
            <label>Contraseña</label>
            <q-input bg-color="cyan-3" outlined></q-input>
          </div>

          <div class="text-center q-mt-sm">
            <q-btn label="Iniciar Sesion" text-color="cyan-9"></q-btn>
            <p class="q-mt-md">o inicia sesion en un click</p>
          </div>

          <div class="form-social-media">
            <div class="form-social-media-item">
              <img class="form-social-media-item-image" src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="">
              <q-btn text-color="cyan-9" label="Facebook"></q-btn>
            </div>

            <div class="form-social-media-item">
              <img class="form-social-media-item-image" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="">
              <q-btn text-color="cyan-9" label="Google"></q-btn>
            </div>
          </div>

          <p class="text-center q-mt-md">Todavia sin cuenta? Solucionalo</p>

          <div class="text-center">
            <q-btn text-color="cyan-9" label="Registrate"></q-btn>
          </div>

        </form>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'RegisterPage.vue'
}
</script>

<style scoped>
.page{
  background-color: #00ffff14;
}


.page-section{
  display: flex;
  gap: 20px;

}

.page-section-image{
  min-width: 450px;

}

.page-section-form{
  max-width: 600px;
  min-width: 400px;

}

.form-item{
  display:flex;
  flex-direction: column;
  gap:15px;
}

.form-social-media{
  display:flex;
  justify-content: space-between;
}

.form-social-media-item{
  display:flex;
  gap: 20px;
}

.form-social-media-item-image{
  width: 37px;
  height: 37px;
}
</style>
