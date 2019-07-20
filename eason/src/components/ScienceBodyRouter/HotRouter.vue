<template>
    <div class="rout">
        <NonTopicBanner></NonTopicBanner>
        <NonTopic :arr="arr"></NonTopic>
    </div>
</template>

<script>
import NonTopic from "./ScienceCom/NonTopic"
import NonTopicBanner from "./ScienceCom/NonTopicBanner"
export default {
    data(){
        return {
            arr:""
        }
    },
    components:{
        NonTopic,
        NonTopicBanner
    },
    created(){
        this.axios({
            url:"/aaazyz",
            method:"get",
        }).then((ok)=>{
            console.log(ok)
            this.arr = ok.data.hot
        })
    }
}
</script>

<style scoped>
    
</style>


