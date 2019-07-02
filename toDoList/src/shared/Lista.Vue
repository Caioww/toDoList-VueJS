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
              <input type="checkbox" />
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
    />

    
  </div>
</template>
<script>
import Botao from "./Botao";
import axios from "axios";
export default {
  data() {
    return {
      info: null
    };
  },
  components: {
    "meu-botao": Botao
  },

  mounted() {
    axios.get("http://localhost:3000/lista").then(response => {
      this.info = response.data;
    });
  }
};
</script>
<style>
#botaoRemove{
  padding-top: 20px;
}

</style>

