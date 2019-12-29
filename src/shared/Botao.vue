<template>
<div :id="id">
  <button  @click="disparaAcao()"  :class="classButton" :type="tipo" name="action" :href="link">
    {{rotulo}}
    <i :class="classIcon">{{icone}}</i>
  </button>
  </div>
</template>
<script>
export default {
  props: {
    rotulo: {
      required: false,
      type: String
    },
    icone: {
      required: false,
      type: String
    },
    tipo: {
      type: String
    },
    classButton: {
      type: String
    },
    classIcon: {
      type: String
    },
    id: {
      type: String
    },
    funcao: {
      type: Function
    },
    link: {
      required: false,
      type: String
    },
      confirmacao: Boolean,
        estilo: String
  },

  methods:{
    disparaAcao() {

            if(this.confirmacao) {
                if(confirm('Confirma operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
  }
};
</script>
<style>
</style>
