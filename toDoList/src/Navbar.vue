<template>

 <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">VueJs App</a>
      <ul class="left hide-on-med-and-down">

        <li v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">
              {{ rota.titulo }}
            </router-link>
          </li>
        
      </ul>
    </div>
  </nav>
    
</template>
<script>
export default {
  props: {

        rotas: {
            type: Array,
            required: true
        }
    }
    
}
</script>
<style>
nav {
    background-color:#26a69a ;
  }

</style>
