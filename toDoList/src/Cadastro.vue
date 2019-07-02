<template>
  <div>
    <form class="col s12 formContato">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input ref="myName" id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Nome</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">perm_contact_calendar</i>
          <input ref="myAge" id="last_name" type="text" class="validate" />
          <label for="last_name">Idade</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input ref="myPhone" id="icon_telephone" type="tel" class="validate" />
          <label for="icon_telephone">Telefone</label>
        </div>

        <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input ref="myEmail" id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
    </form>

    <meu-botao
      rotulo="REGISTRAR"
      icone="send"
      tipo="submit"
      classButton="btn waves-effect waves-light"
      classIcon="material-icons right"
      @botaoAtivado="adicionarPessoa()"
      :confirmacao="true"
    />
  </div>
</template>
<script>
import Botao from "./shared/Botao";
import axios from 'axios';

export default {
  components: {
    "meu-botao": Botao
  },
  methods: {
    adicionarPessoa() {
      let pessoa ={};
      pessoa.nome = this.$refs.myName.value;
      pessoa.idade = this.$refs.myAge.value;
      pessoa.telefone = this.$refs.myPhone.value;
      pessoa.email = this.$refs.myEmail.value;
      
      axios.post("http://localhost:3000/lista",pessoa).then(response => {
      
        console.log('Salvo com sucesso');
    })
    }
  }
}
</script>
<style>
</style>
