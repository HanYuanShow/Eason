<template>
  <div id="app">
   
    <router-view/>

  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>


<style scoped>
 *{
   margin: 0;
   padding: 0;
 }
 .body{
  color: #111;
  font-size: 12px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
 a{
   text-decoration: none;
 }
li{
  list-style: none;
}
</style>
