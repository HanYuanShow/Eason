<template>
    <div>
        <ScienceDetailsTopic :arr = topiclistiddetails[0]></ScienceDetailsTopic>
    </div>
</template>

<script>
import ScienceDetailsTopic from "../components/ScienceDetailsTopic"
export default {
    components:{
        ScienceDetailsTopic
    },
    data(){
        return {
            arr:[],
            topicid:""
        }
    },
    computed:{
        topiclistiddetails(){
            var add = this.arr.filter((v,i)=>{
                if(this.topicid == v.id){n
                    return v
                }
            })
            return add
        }
    },
    created(){
        this.topicid = this.$route.params.id
        this.axios({
            url:"/aaazyz",
            method:"get"
        }).then((ok)=>{
            // console.log(ok)
            this.arr = ok.data.topic.list
        })
    }
}
</script>

<style scoped>
    
</style>


