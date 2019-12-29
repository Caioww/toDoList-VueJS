<template>
  
    
  <div id ="app" class="row container">
    <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import Navbar from './Navbar';
import { routes } from './routes';  
import Cadastro from './Cadastro'

const $ = require('jquery');
// We declare it globally
window.$ = $;

export default {
 
  
  data() {

    return {

      routes
    }
  },

   components: {
    'meu-menu' : Navbar,
    'meu-formulario' : Cadastro
  },
}

 $(document).ready(function() {
    M.updateTextFields();
  });

  

</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js');

.row .formContato {
  padding-top: 40px;

}

.pagina-enter{

     opacity: 0;
 }

 .pagina-enter-active{

     transition: opacity .4s;
 }
</style>
