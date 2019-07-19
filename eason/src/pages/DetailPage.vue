<template>
    <div>
        
       <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li"> 
               <!-- <router-link to="/seek">  -->
                    <div v-for="(v,i) in v.title" :key="i" @click="fun(v.id)" class="sym_li_li">{{v.title}}</div>
                <!-- </router-link> -->
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
    created() {
        this.axios({
            url:'/automenu/eason',
            method:'get', 
        }).then((ok)=>{
            var data=ok.data.autognosis[0].symptomList
            var arr1=data.filter((v,i)=>{
                    return v.title
            })
            var arr2=arr1[0].title.filter((v,i)=>{
                if(v.id==this.$route.query.id){
                     console.log(v.detail)
                     return v.detail;
                }
                
            })
            
           
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




