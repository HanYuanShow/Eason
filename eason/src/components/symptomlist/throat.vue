<template>
    <div>   
       <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li"> 
                <P class="sym_li_p" @click="fun(v.name)">{{v.name}}</p>
             </li>
        </ul>
    </div>
</template>
<script>


export default {
    components:{     
    },
   data() {
       return {
           newarr:[]
       }
   },
   methods: {
       fun(n){
           //传参到详情页
           this.$router.push({path:"/DetailPagethroat",query:{hehe:n}})
       }
   },
    created() {
        this.axios({
            url:'http://47.95.140.83:8181/symptom/findByBadyParts',
            method:'get',
            params:{badyParts:"胸部"}
        }).then((ok)=>{
             this.newarr=ok.data;
        })
    },
}
</script>

<style scoped>

 .sym_ul{
        height:500px;
        margin-left:30px; 
        width: 220px;
        overflow: auto;
    }
  .sym_li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dedede;  
  }
  .sym_li_p{
      color: #666666;
  }
</style>


