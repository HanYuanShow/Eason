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
        //请求热点内的所有新闻接口
        this.axios({
            url:"http://47.112.208.93:8181/news/findHotNews",
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


