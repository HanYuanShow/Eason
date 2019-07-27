<template>
    <div class="rout">
        <NonTopicBanner></NonTopicBanner>
        <div v-if="bools" class="boolsText">
                专业疏通下水道<br>
                专业开锁,公安备案<br>
                请联系:1888888888
            </div>
        <NonTopic :arr="arr" v-else></NonTopic>
    </div>
</template>

<script>
import NonTopic from "./ScienceCom/NonTopic"
import NonTopicBanner from "./ScienceCom/NonTopicBanner"
export default {
    data(){
        return {
            arr:"",
            bool:""
        }
    },
    components:{
        NonTopic,
        NonTopicBanner
    },
    created(){
        this.axios({
            url:"http://47.95.140.83:8181/news/findNewsByType/%E6%AF%8D%E5%A9%B4",
            method:"get",
        }).then((ok)=>{
            console.log(ok)
            this.arr = ok.data
        })
    },
    computed:{
        bools(){
            if(this.arr == ""){
                this.bool = true
            }else{
                this.bool = false
            }
            return this.bool
        }
    }
}
</script>

<style scoped>
    
</style>


