<template>
<!-- 热点新闻详情面 -->
    <div>
        <div v-if="bools" class="boolsText">
                专业疏通下水道<br>
                专业开锁,公安备案<br>
                请联系:1888888888
            </div>
        <ScienceDetails
        v-else
        :arr = listiddetails[0] 
        :isCollect = isCollect
        :isGiveStar = isGiveStar
        :newsid = newsid
        >

        </ScienceDetails>
    </div>
</template>
<script>
import ScienceDetails from "../components/ScienceDetails"
export default {
    data(){
        return {
            arr:"",
            // 获取到的新闻id
            newsid:"",
            isCollect:"",
            isGiveStar:"",
            userid:"",
            bool:""
        }
    },
    components:{
        ScienceDetails
    },
    computed:{
        listiddetails(){
            // 根据点击的某个新闻的id过滤到点击这条新闻的所有信息
            var details = this.arr.filter((v,i)=>{
                if(this.newsid == v.id){
                    return v
                }
            })
            return details
        },
        bools(){
            if(this.arr == ""){
                this.bool = true
            }else{
                this.bool = false
            }
            return this.bool
        }
        // isCollectCom(){
        //     return this.isCollect
        // },
        // isGiveStarCom(){
        //     return this.isGiveStar
        // }
    },
    created(){
        this.newsid = this.$route.params.id;
        // 获取全部热点新闻接口
        this.axios({
            url:"http://47.95.140.83:8181/news/findHotNews",
            method:"get"
        }).then((ok)=>{
            this.arr = ok.data
            console.log(this.arr)
        })
        // 获取用户是否点赞 收藏新闻接口
        // this.userid = localStorage.getItem("userId")
        this.axios({
                                                        // 1预留获取的用户id
            url:"http://47.95.140.83:8181/news/collectAndStar/1/"+this.newsid,
            method:"get"
        }).then((ok)=>{
            console.log(ok.data)
            //  收藏
            this.isCollect = ok.data.isCollect
            // 点赞
            this.isGiveStar = ok.data.isGiveStar
        })
    }
}
</script>

<style scoped>

</style>


