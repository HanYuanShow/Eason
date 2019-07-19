<template>
    <div>
         <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li">
                <div v-for="(v,i) in v.skySymptom" :key="i" class="sym_li_li">{{v.title}}</div>
            </li>
        </ul> 
    </div>
</template>
<script>


export default {
    data() {
       return {
           newarr:[]
       }
   },
    created() {
        this.axios({
            url:'/automenu/infor',
            method:'get', 
        }).then((ok)=>{
            var data=ok.data.autognosis[0].symptomList
            this.newarr=data
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


