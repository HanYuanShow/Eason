<template>
    <div>
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
            url:"/aaazyz",
            method:"get",
        }).then((ok)=>{
            console.log(ok)
            this.arr = ok.data.topic
        })
    }
}
</script>

<style scoped>
    
</style>


