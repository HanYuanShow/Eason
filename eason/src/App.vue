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
        margin-top:85px;
    }
.router-link-active {
  text-decoration: none;
  color: #111;
}
.Details{
  margin-bottom:70px;
}
.DetailsBody{
  margin-top:45px;
}
.boolsText{
  text-align: center;
  margin:80px 0;
  color: #66aa0d;
  font-size:28px;
}
</style>
