<template>
    
  <button class="btn waves-effect waves-light" type="submit" name="action">{{rotulo}}
    <i class="material-icons right">send</i>
  </button>
        
</template>
<script>
export default {
    props:{
        rotulo:{
            required:true,
            type:String
        }
    }
    
}
</script>
<style>

</style>
