<template>
    <div>
        <div>
              <img :src="imgurl"/>
        </div>
      
    </div>
</template>
<script>


export default {
    props:{
        imgurl:String
    }
}
</script>

<style scoped>
  img{
      width: 100%;
      margin-bottom: 5px;
  }
</style>


