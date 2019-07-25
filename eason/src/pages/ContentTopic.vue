<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="松开刷新数据" loading-text="正在加载" success-text="">
            <ScienceDetailsTopic :arr = add></ScienceDetailsTopic>
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
            topicidss:"",
            isLoading: false,
            add:""

        }
    },
    
    // computed: {
    //     topiclistiddetails(){
    //         var add = this.arr.filter((v,i)=>{
    //             if(this.topicid == v.id){
    //                 return v
    //             }
    //         })
    //         return add
    //     }
    // },
    created(){
        this.topicidss = this.$route.params.id
        // 获取所有医生话题
        this.axios({
            url:"http://47.112.208.93:8181/doctorTopic/findAllTopic",
            method:"get",
        }).then((ok)=>{
            this.arr = ok.data
            console.log(this.arr)
            this.add = this.arr.filter((v,i)=>{
                if(this.topicidss == v.id){
                    return v
                }
            })
            console.log(this.add)
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


