<template>
    <div class="lol">
        <h1>{{ msg }}</h1>
    </div> 
</template>

<script>

export default {
  name: 'lol',
  data () {
    return {
      msg: 'This is the LOL component'
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  background: green;
}   

a {
  color: red
}
</style>
