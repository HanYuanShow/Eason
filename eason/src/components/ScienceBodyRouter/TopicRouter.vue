<template>
    <div class="rout">
       <Topic :arr = arr></Topic>
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
            arr:""
        }
    },
    created(){
        this.axios({
            url:"http://47.112.208.93:8181/doctorTopic/findAllTopic",
            method:"get",
        }).then((ok)=>{
            this.arr = ok.data
            console.log(this.arr)
        })
    }
}
</script>

<style scoped>
    
</style>


