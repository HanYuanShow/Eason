<template>
    <div>
        <P>belly</P>
         <ul>
            <li v-for="(v,i) in newarr" :key="i">
                <div v-for="(v,i) in v.belly" :key="i">{{v.title}}</div>
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
  
</style>


