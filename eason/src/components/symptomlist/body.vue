<template>
    <div>   
       <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li"> 
                 <div v-for="(v,i) in v.bodySymptom" :key="i" @click="fun(v.id)" class="sym_li_li">{{v.title}}</div>
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
           this.$router.push({path:"/DetailPagebody",query:{id:num}})
       }
   },
    created() {
        this.axios({
            url:'/automenu/easonNew',
            method:'get', 
        }).then((ok)=>{
            var data=ok.data.autognosis
            var arr1=data.filter((v,i)=>{
                if(v.id=="sl_1"){
                     return v
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


