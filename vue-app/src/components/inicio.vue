<template>

  <div class="hello">
 
   
   <form id="app" v-on:submit="checkForm" >
    <p> {{nomefim}} </p>
   <div class="row">
      <div class="input-field col s12">
          <input id="name" name="nome" type="text" v-model="nome"  class="validate">
          <label for="name">Seu nome</label>
        </div>
        <p></p>
   </div>

     <div class="row">
        <div class="input-field col s12">
          <input id="email" name="email" type="text" v-model="email"  class="validate">
          <label for="email">Email</label>
        </div>
      </div>
 <div class="row">
        <div class="input-field col s12 ">

          <input type="submit"  class="waves-effect waves-light btn" value="enviar"/>
         
         
       </div>
  </div>
  
      
    </form>
   
  </div>
  
</template>

<script>
export default {
 mounted() {
  console.log(this.$route.params.nome)
   
},
  data () {
    return {
      
    
    }

 var app = new App ({
    el: '#app',
    data: {
      nome: this.nome,
      email: this.email,
    },
    methods: {
      checkForm:function(event){
        alert('nome')
        //if(this.nome == "" || this.email == ""){
        //  this.log = "peencha o campo correto";
        //  event.preventDefault();
      //  }else{
        //   var nomeFim = this.nome;
        //  }   
      },

     
    }
  })
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
