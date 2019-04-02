<template>

  <div class="hello">
 
   
   
   <p>vc esta aqui</p>
   <h1>{{nome}}</h1>
  </div>
  
</template>

<script>
export default {
    name: 'resposta',
  data () {
    return {
      nome: console.log(this.$route.params.nome)
      
    }

  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
