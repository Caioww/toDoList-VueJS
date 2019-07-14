<template>
  <div>
    <table class="centered">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Idade</th>
          <th>Telefone</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="peoples in info">
          <td>
            <label>
              <input ref="checkOk" type="checkbox" :value="peoples._id" />
              <span>&nbsp;</span>
            </label>
          </td>
          <td>{{peoples.nome}}</td>
          <td>{{peoples.idade}}</td>
          <td>{{peoples.telefone}}</td>
          <td>{{peoples.email}}</td>
        </tr>
      </tbody>
    
    </table>
    <meu-botao id="botaoRemove"
      icone="remove"
      tipo="button"
      classButton="btn-floating btn-large waves-effect waves-light red"
      classIcon="material-icons"
      @botaoAtivado="apagarSelecionados()"
    />

    <meu-botao id="botaoEditar"
      icone="edit"
      tipo="button"
      classButton="btn-floating btn-large waves-effect waves-light green modal-trigger"
      classIcon="material-icons"
      link="#modal1"
      @botaoAtivado="editarSelecionado()"

    />

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Atualizar Informações</h4>
            <table id="modalTable">
              <tr>
                <th></th>
                <th>Informações atuais</th>
                <th>Novas informações</th>
              </tr>

              <tr>
                <td>
                  <b>Nome:</b>
                </td>
                <td>
                <span>{{pessoa.nome}}</span>
                </td>
                <td>
                  <input ref="myName" type="text" class="validate" />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Idade:</b>
                </td>
                <td>
                  <span>{{pessoa.idade}}</span>
                </td>
                <td>
                  <input ref="myAge" type="text" class="validate" />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Telefone:</b>
                </td>
                <td>
                  <span>{{pessoa.telefone}}</span>
                </td>
                <td>
                  <input ref="myPhone" type="tel" class="validate" />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Email:</b>
                </td>
                <td>
                  <span>{{pessoa.email}}</span>
                </td>
                <td>
                  <input ref="myEmail" type="email" class="validate" />
                </td>
              </tr>

            </table>
        </div>
        <div class="modal-footer">

            <meu-botao
      tipo="link"
      classButton="modal-close waves-effect waves-green btn-flat "
      @botaoAtivado="efetuarAtualizacao()"
      rotulo="EDITAR"

    />
    
        </div>
    </div>

  </div>
</template>
<script>
import Botao from "./Botao";
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      pessoa:{},
      
    
  }
  },

  components: {
    "meu-botao": Botao
  },

  methods:{
    apagarSelecionados() {
    var $selecionados = document.querySelectorAll('td [type="checkbox"]:checked') // aqui seleciona todos os elementos checados
    for(let i = 0; i < $selecionados.length; i++) {
      $selecionados[i].parentNode.parentNode.parentNode.remove();
      axios.delete("http://localhost:3000/lista/"+$selecionados[i].value).then(response => {
        console.log('Excluido');
      
    })
    }
},
    editarSelecionado(){
     var $selecionados = document.querySelector('td [type="checkbox"]:checked').value // aqui seleciona todos os elementos checados
      axios.get("http://localhost:3000/lista/"+$selecionados).then(response => {
        this.pessoa=response.data;
      
      
    })
    },

    efetuarAtualizacao(){
      var $selecionados = document.querySelector('td [type="checkbox"]:checked').value
       let pessoa = {};
      pessoa.nome = this.$refs.myName.value;
      pessoa.email = this.$refs.myEmail.value;
      pessoa.telefone = this.$refs.myPhone.value;
      pessoa.idade = this.$refs.myAge.value;

      console.log(pessoa);
     
      axios
        .put("http://localhost:3000/lista/"+$selecionados, pessoa)
        .then(response => {
          console.log("Atualizado com sucesso");
        })
    }



  

},


  created() {
    axios.get("http://localhost:3000/lista").then(response => {
      this.info = response.data;
    });
    
    
  }



};
 
 document.addEventListener('DOMContentLoaded', function() {
    var elem= document.querySelector('.modal');
    var instance = M.Modal.init(elem, '');
    M.Modal.getInstance(instance).open();
  });



</script>
<style>
#botaoRemove{
  padding-top: 20px;
  float: left;
}

#botaoEditar{
  padding-top: 20px;
  float:left;
}

</style>

