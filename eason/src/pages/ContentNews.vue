<template>
<!-- 热点新闻详情面 -->
    <div>
        <ScienceDetails 
        :arr = listiddetails[0] 
        :isCollect = isCollectCom 
        :isGiveStar = isGiveStarCom
        :newsid = routerid
        >

        </ScienceDetails>
    </div>
</template>
<script>
import ScienceDetails from "../components/ScienceDetails"
export default {
    data(){
        return {
            arr:[],
            // 获取到的新闻id
            routerid:"",
            isCollect:"",
            isGiveStar:""
        }
    },
    components:{
        ScienceDetails
    },
    computed:{
        listiddetails(){
            // 根据点击的某个新闻的id过滤到点击这条新闻的所有信息
            var details = this.arr.filter((v,i)=>{
                if(this.routerid == v.id){
                    return v
                }
            })
            return details
        },
        isCollectCom(){
            return this.isCollect
        },
        isGiveStarCom(){
            return this.isGiveStar
        }
    },
    created(){
        this.routerid = this.$route.params.id;
        // 获取全部热点新闻接口
        this.axios({
            url:"http://47.112.208.93:8181/news/findHotNews",
            method:"get"
        }).then((ok)=>{
            this.arr = ok.data
            console.log(this.arr)
        })
        // 获取用户是否点赞 收藏新闻接口
        this.axios({
                                                        // 1预留获取的用户id
            url:"http://47.112.208.93:8181/news/collectAndStar/1/"+this.routerid,
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


