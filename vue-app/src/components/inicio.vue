<template>

  <div class="hello">
 
   
   <form id="app" @submit="checkForm"  method="post" novalidate="true">
   <div class="row">
      <div class="input-field col s12">
          <input id="name" name="nome" type="text" v-model="name"  class="validate">
          <label for="name">Seu nome é : </label>
        </div>
        <p></p>
   </div>

     <div class="row">
        <div class="input-field col s12">
          <input id="email" name="email" type="email" v-model="email"  class="validate">
          <label for="email">Email</label>
        </div>
      </div>
 <div class="row">
        <div class="input-field col s12 ">
          <button type="submit" class="waves-effect waves-light btn"
        >
       Submit
    </button>
         
       </div>
  </div>
  
      
    </form>
   
  </div>
  
</template>

<script>
export default {
  name: 'nome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'Name',
      email: 'E-mail'
    }

  new App({
    el: 'app',
    data: {
      name: null,
      email: null,
    },
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
