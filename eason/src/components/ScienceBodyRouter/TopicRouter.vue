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
            url:"/aaazyz",
            method:"get",
        }).then((ok)=>{
            this.arr = ok.data.topic.list
            console.log(this.arr)
        })
    }
}
</script>

<style scoped>
    
</style>


