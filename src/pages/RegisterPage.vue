<template>
  <q-page padding class="page">
    <section class="page-section">
      <img class="page-section-image" src="https://media.discordapp.net/attachments/974475987398053948/979196345804001310/unknown.png" alt="">

      <div class="page-section-form">
        <form>
          <h2 class="text-h6 text-center">Crea tu cuenta de BetterPC</h2>
          <div class="form-item">
            <label>Nombres y Apellidos</label>
            <q-input bg-color="cyan-3" outlined></q-input>
          </div>
          <div class="form-item">
            <label>Numero de Celular</label>
            <q-input bg-color="cyan-3" outlined></q-input>
          </div>
          <div class="form-item">
            <label>Correo Electronico</label>
            <q-input bg-color="cyan-3" outlined></q-input>
          </div>
          <div class="form-item">
            <label>Contraseña</label>
            <q-input bg-color="cyan-3" outlined></q-input>
          </div>

          <div class="form-item">
            <q-checkbox label="He leido y aceptado los terminos de uso y politica de privacidad" />
          </div>

          <div class="form-item">
            <q-checkbox label="Autorizo el tratamiento de mis datos para fines de promocion comercial por parte de Better PC y sus convenios con empresas vinculadas." />
          </div>

          <div class="text-center">
            <q-btn label="Crear Cuenta" text-color="cyan-9"></q-btn>
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

}

.form-item{
  display:flex;
  flex-direction: column;
  gap:15px;
}
</style>
