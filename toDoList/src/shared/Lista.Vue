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

    <meu-modal
    :nome="pessoa.nome"
    :idade="pessoa.idade"
    :telefone="pessoa.telefone"
    :email="pessoa.email"

    />

  </div>
</template>
<script>
import Botao from "./Botao";
import axios from "axios";
import Form from "../Form";
export default {
  data() {
    return {
      info: null,
      pessoa:{},
      
    
  }
  },

  components: {
    "meu-botao": Botao,
    "meu-modal": Form
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

  

},


  created() {
    axios.get("http://localhost:3000/lista").then(response => {
      this.info = response.data;
    });
    
    
  }



};
 

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

