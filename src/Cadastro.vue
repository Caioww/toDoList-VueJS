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
          <input ref="myPhone" id="icon_telephone" type="tel" class="validate" v-mask="['(##) ####-####', '(##) #####-####']"/>
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

    <transition name="fade">
      <h1 :class="classe" v-if="add">Deu certo!</h1>
      <h1 v-if="notAdd">Falhou!</h1>
    </transition>
  </div>
</template>
<script>
import Botao from "./shared/Botao";
import axios from "axios";

export default {
  props: {
    add: {
      type: Boolean,
      default: false
    },
    notAdd: {
      type: Boolean,
      default: false
    },
    classe: {
      type: String
    }
  },
  components: {
    "meu-botao": Botao
  },
  created() {
    this.startInterval();
  },

  methods: {
    startInterval() {
      setInterval(() => {
        this.add = false;
        this.notAdd = false;
        this.classe = "faded";
      }, 5000);
    },

    adicionarPessoa() {
      let pessoa = {};
      pessoa.nome = this.$refs.myName.value;
      pessoa.idade = this.$refs.myAge.value;
      pessoa.telefone = this.$refs.myPhone.value;
      pessoa.email = this.$refs.myEmail.value;

      axios
        .post("http://localhost:3000/lista", pessoa)
        .then(response => {
          this.add = true;
          this.notAdd = false;
          console.log("Salvo com sucesso");
        })
        .catch(error => {
          if (error.response) {
            this.notAdd = true;
            this.add = false;
          }
        });
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
