<template>
    <div>
         <ul class="sym_ul">
            <li v-for="(v,i) in newarr" :key="i" class="sym_li">
                <div v-for="(v,i) in v.skinSymptom" :key="i" @click="fun(v.id)" class="sym_li_li">{{v.title}}</div>
            </li>
        </ul> 
        <P></P>
    </div>
</template>
<script>


export default {
    data() {
       return {
           newarr:[]
       }
   },
    methods: {
       fun(num){
           this.$router.push({path:"/DetailPageskin",query:{id:num}})
       }
   },
    created() {
        this.axios({
            url:'/automenu/easonNew',
            // url:'http://47.95.140.83:8181/illness/findByNesCrowd',
            method:'get', 
            // params:{nesCrowd:"上班族"}
        }).then((ok)=>{
            // console.log(ok.data)
           var data=ok.data.autognosis
           var arr1=data.filter((v,i)=>{
                if(v.id=="bp_1"){
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


