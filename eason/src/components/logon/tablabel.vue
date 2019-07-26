<template>
    <div>
        <div class="list">  
            <router-link to="/bodypic"><p>人体图</p></router-link>
            <P class="list_p">|</P>
            <router-link to="/body"><p>症状列表</p></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>


export default {
    components:{
          
    },
     methods: {
    },
     data() {
         return{  

         }
  }
}
</script>

<style scoped>
  .list{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 40px;
      border-top: 1px solid #d7d5d5;
      border-bottom: 1px solid #d7d5d5;
  }
  .list p{
      color:#8e8e8e;
      margin: 10px 0px;
  }
  .list_p{
      width: 1px;
      height: 25px;
  }
.router-link-active{
    border-bottom: 4px solid #67c65f;
}
 .router-link-active p{
     color: #67c65f;
  }
</style>


