<template>
<!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            
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
                <span>{{nome}}</span>
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
                  <span>{{idade}}</span>
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
                  <span>{{telefone}}</span>
                </td>
                <td>
                  <input ref="myPhone" type="tel" class="validate" v-mask="['(##) ####-####', '(##) #####-####']" />
                </td>
              </tr>

              <tr>
                <td>
                  <b>Email:</b>
                </td>
                <td>
                  <span>{{email}}</span>
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
    
</template>
<script>
import Botao from "./shared/Botao";
import axios from "axios";
export default {
  data() {
    return {
      info: null,
        
  }
  },
  props: {
    nome: {
      type: String,
      default: false
    },
    telefone: {
      type: String,
      default: false
    },
    idade: {
      type: String,
      default: false
    },
    email: {
      type: String,
      default: false
    },
  },

  components: {
    "meu-botao": Botao
  },

  methods:{

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


};
 
 document.addEventListener('DOMContentLoaded', function() {
    var elem= document.querySelector('.modal');
    var instance = M.Modal.init(elem, '');
    M.Modal.getInstance(instance).open();
  });



</script>
<style>

</style>
