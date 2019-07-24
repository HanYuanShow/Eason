<template>
    <div>
        <div>
            <van-nav-bar title="药品库" :fixed='true' left-text="" left-arrow @click-left="back()" @click-right="search()">
            </van-nav-bar>
        </div>
        <div class="drugSearch">
                <van-search placeholder="搜索" v-model="value" />
        </div>
        <div class="all_druglist">
            <van-index-bar sticky-offset-top="100px" :index-list="indexList" v-for="(v,i) in arr" :key="i" class="druglist">
                <van-index-anchor :index="v.title" @click="select(index-list)" class="title">{{v.title}}</van-index-anchor>
                <van-cell :title="v.list1"/>
                <van-cell :title="v.list2"/>
                <van-cell :title="v.list3"/>
                <van-cell :title="v.list4"/>
            </van-index-bar>
        </div>
    </div>
</template>
<script>
export default {
     data() {
        return {
        indexList: ["A"," B","C"," D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

       arr:[
           {'title':"A","list1":"阿达帕林凝胶","list2":"阿德福韦酯胶囊","list3":"阿莫西林克拉维酸钾分散片"},
           {'title':"B","list1":"八宝惊风散","list2":"八宝颗粒","list3":"八宝益母胶囊"},
           {'title':"C","list1":"柴胡口服液","list2":"柴黄颗粒","list3":"产妇安合剂"},
           {'title':"D","list1":"达克罗宁","list2":"大黄异黄酮胶囊","list3":"大黄碳酸氢钠片","list4":"丹参片"},
           {'title':"E","list1":"达克罗宁","list2":"大黄异黄酮胶囊","list3":"大黄碳酸氢钠片","list4":"丹参片"},
           {'title':"F","list1":"达克罗宁","list2":"大黄异黄酮胶囊","list3":"大黄碳酸氢钠片","list4":"丹参片"},
        ],
        value:''
        }
    },
      methods: {
        back(){
            this.$router.push('/seek')
        },
        select(i){
            this.index=i
        }
    },
}
</script>
<style scoped>
     .van-nav-bar .van-icon{
        color: #67c65f;
        font-size: 22px;
    }
    .van-nav-bar__title{
        color: #5c5c5c;
        font-size: 16px;
    }
    .drugSearch{
        margin-top: 40px;
        overflow: hidden;
        position: sticky;
        top: 40px;
        z-index: 2;
    }
    .all_druglist{
        overflow: hidden;
    }
    .druglist{
        height:200px;
    }
    .title{
        background-color:#ded7d3;
    }
</style>


