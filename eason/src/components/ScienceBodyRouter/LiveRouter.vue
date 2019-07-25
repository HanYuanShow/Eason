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
            url:"http://47.112.208.93:8181/news/findNewsByType/%E7%94%9F%E6%B4%BB",
            method:"get",
        }).then((ok)=>{
            console.log(ok)
            this.arr = ok.data
        })
    }
}
</script>

<style scoped>
    
</style>


