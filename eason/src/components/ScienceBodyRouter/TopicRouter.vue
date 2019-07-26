<template>
    <div>
        
        <div class="rout" >
            <div v-if="bools" class="boolsText">
                专业疏通下水道<br>
                专业开锁,公安备案<br>
                请联系:1888888888
            </div>
            <Topic 
            v-else 
            :arr = arr >
            </Topic>
         </div>
    </div>
    
</template>

<script>
import Topic from "./ScienceCom/Topic"
export default {
    components:{
        Topic,
    },
    data(){
        return {
            arr:"",
            bool:""
        }
    },
    created(){
        this.axios({
            url:"http://47.95.140.83:8181/doctorTopic/findAllTopic",
            method:"get",
        }).then((ok)=>{
            this.arr = ok.data
            console.log(ok.data)
            console.log(this.arr)
        })
    },
    computed: {
        bools(){
            if(this.arr == ""){
                this.bool = true
            }else{
                this.bool = false
            }
            return this.bool
        }
    },
}
</script>

<style scoped>
    
</style>


