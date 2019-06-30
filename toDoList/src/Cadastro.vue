<template>
<div>
    <form class="col s12 formContato">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">Nome</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">perm_contact_calendar</i>
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Idade</label>
        </div>
      </div>
    <div class="row">
     <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">Telefone</label>
        </div>

        <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
  
    </div>
    </form>
  <meu-botao rotulo="REGISTRAR"/>
</div>

</template>
<script>
import Botao from './shared/Botao'
export default {
    components:{
        'meu-botao': Botao
    }
    
}
</script>
<style>

</style>
