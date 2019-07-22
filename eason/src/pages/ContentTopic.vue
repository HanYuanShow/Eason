<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="松开刷新数据" loading-text="正在加载" success-text="">
            <ScienceDetailsTopic :arr = topiclistiddetails[0]></ScienceDetailsTopic>
        </van-pull-refresh>
        
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
            topicid:"",
            isLoading: false
        }
    },
    
    computed:{
        topiclistiddetails(){
            var add = this.arr.filter((v,i)=>{
                if(this.topicid == v.id){
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
    },
    methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }

}
</script>

<style scoped>
    
</style>


