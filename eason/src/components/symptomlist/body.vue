<template>
    <div>
        
       <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li"> 
                    <div v-for="(v,i) in v.title" :key="i" @click="fun(v.id)" class="sym_li_li">{{v.title}}</div>
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
       fun(num){
           this.$router.push({path:"/DetailPage",query:{id:num}})
       }
   },
    created() {
        this.axios({
            url:'/automenu/eason',
            method:'get', 
        }).then((ok)=>{
            var data=ok.data.autognosis[0].symptomList
            var arr1=data.filter((v,i)=>{
                if(v.id==123456789){
                     return v.title
                }  
            })
            this.newarr=arr1;
        })
    },
}
</script>

<style scoped>
 .sym_ul{
        margin-left:30px; 
        width: 200px;
    }
  .sym_li{
    height: 50px;
    line-height: 50px;
  }
  .sym_li_li{
      border-bottom: 1px solid #dedede;  
      color: #666666;
  }
</style>


