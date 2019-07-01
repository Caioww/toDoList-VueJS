<template>
<div>
<span class="pessoas" v-for="peoples in info">
    {{peoples.nome}}
    
</span>
</div>
</template>
<script>
export default {
    data () {
    return {
      info: null
    }
  },

created() {
    this.$http.get('http://localhost:3000/lista')
      .then(response => {
        this.info = response.body;
      })
     
  }
}

</script>
<style>
.pessoas{
    display: block;
}
</style>

