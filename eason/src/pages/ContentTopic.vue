<template>
    <div>
        <div v-if="bools" class="boolsText">
                专业疏通下水道<br>
                专业开锁,公安备案<br>
                请联系:1888888888
            </div>
        <van-pull-refresh 
        v-else
        v-model="isLoading" @refresh="onRefresh" pulling-text="松开刷新数据" loading-text="正在加载" success-text="">
            <ScienceDetailsTopic 
            :arr = add 
            :topicid = topicid
            :isGiveStar = isGiveStar
            :isFollowDoctor = isFollowDoctor
            :doctorid = doctorid
            >
            </ScienceDetailsTopic>
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
            isLoading: false,

            add:"",
            // 用户是否点赞话题
            isGiveStar:"",
            // 发布话题的医生的id
            doctorid:"",
            // 用户是否关注此医生
            isFollowDoctor:"",

            userid:"",
            bool:""

        }
    },
    
    computed: {
        bools(){
                if(this.arr == ""){
                    this.bool = true
                }else{
                    this.bool = false
                }
                return this.bool
            }
    },
    created(){
        this.topicid = this.$route.params.id
        // 获取所有医生话题
        this.axios({
            url:"http://47.95.140.83:8181/doctorTopic/findAllTopic",
            method:"get",
        }).then((ok)=>{
            this.arr = ok.data
            console.log(this.arr)
            this.add = this.arr.filter((v,i)=>{
                if(this.topicid == v.id){
                    return v
                }
            })
            // 获取到了此话题的医生id
            this.doctorid = this.add[0].doctorinfor.id
            console.log(this.add)

            //用户是否关注医生
            // this.userid = localStorage.getItem("userId")
            this.axios({
                                                                    // 预留用户id
                url:"http://47.95.140.83:8181/doctorTopic/isFollowDoctor/1/"+this.doctorid,
                method:"get"
            }).then((ok)=>{
                this.isFollowDoctor = ok.data
            })
        })

        // 判断用户是否给话题点赞
        this.axios({
                                                        // 预留用户id
            url:"http://47.95.140.83:8181/doctorTopic/isGiveStar/1/"+this.topicid,
            method:"get",
        }).then((ok)=>{
            this.isGiveStar = ok.data
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


