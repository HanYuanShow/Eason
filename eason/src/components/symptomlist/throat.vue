<template>
    <div>
         <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li"> 
                <P class="sym_li_p">{{v.name}}</p>
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
            url:'http://10.12.156.39:8181/symptom/findByBadyParts',
            method:'get', 
            params:{badyParts:"咽颈部"}
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


