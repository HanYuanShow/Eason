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

<style>
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
ul,li{
  list-style: none;
}
.rout{
        margin-top:95px;
    }
</style>
