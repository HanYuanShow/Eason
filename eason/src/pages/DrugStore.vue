<template>
    <div>
<<<<<<< HEAD
        <div>
            <van-nav-bar title="药品库" fixed="true" left-text="" left-arrow @click-left="back()" @click-right="search()">
            </van-nav-bar>
        </div>
        <div class="drugSearch">
            <van-search placeholder="搜索" v-model="value" />
        </div>
        <div class="all_druglist">
            <van-index-bar  sticky-offset-top="100px" :index-list="indexList" v-for="(v,i) in arr" :key="i" class="druglist">
                <van-index-anchor :index="v.title" class="title">{{v.title}}</van-index-anchor>
                <van-cell :title="v.list1"/>
                <van-cell :title="v.list2"/>
                <van-cell :title="v.list3"/>
                <van-cell :title="v.list4"/>
            </van-index-bar>
        </div>
=======
           <div v-if="booleans" class="load">加载中</div>
      <div v-else>
            <div>
                <van-nav-bar title="药品库" :fixed='true' left-text="" left-arrow @click-left="back()" @click-right="search()">
                </van-nav-bar>
            </div>
            <div class="drugSearch">
                    <van-search placeholder="搜索" v-model="value" />
            </div>
            <div class="all_druglist">
                <van-index-bar sticky-offset-top="100px" :index-list="indexList" v-for="(v,i) in arr" :key="i" class="druglist">
                    <van-index-anchor :index="v.drugSign" @click="select(A)" class="title">{{v.str}}</van-index-anchor>
                    <!-- <van-cell :title="v" v-for="(v,i) in v.stringList" :key="i"/> -->
                    <!-- 或者要不就直接加下标吧 ，加下标之后，进入详情页的函数也要多写-->
                    <van-cell :title="v.stringList[0]" @click="fun(v.stringList[0])"/>
                    <van-cell :title="v.stringList[1]" @click="fun(v.stringList[1])"/>
                    <van-cell :title="v.stringList[2]" @click="fun(v.stringList[2])"/>
                    <van-cell :title="v.stringList[3]" @click="fun(v.stringList[3])"/>
                    <van-cell :title="v.stringList[4]" @click="fun(v.stringList[4])"/>
                    <van-cell :title="v.stringList[5]" @click="fun(v.stringList[5])"/>
                    <van-cell :title="v.stringList[6]" @click="fun(v.stringList[6])"/>
                </van-index-bar>
            </div>
      </div>
>>>>>>> ljh1
    </div>
</template>
<script>
export default {
     data() {
        return {
<<<<<<< HEAD
        indexList: ["A"," B","C"," D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        arr:[
           {title:"A","list1":"阿达帕林凝胶","list2":"阿德福韦酯胶囊","list3":"阿莫西林克拉维酸钾分散片"},
           {title:"B","list1":"八宝惊风散","list2":"八宝颗粒","list3":"八宝益母胶囊"},
           {title:"C","list1":"柴胡口服液","list2":"柴黄颗粒","list3":"产妇安合剂"},
           {title:"D","list1":"达克罗宁","list2":"大黄异黄酮胶囊","list3":"大黄碳酸氢钠片","list4":"丹参片"},
           {title:"E","list1":"达克罗宁","list2":"大黄异黄酮胶囊","list3":"大黄碳酸氢钠片","list4":"丹参片"},
           {title:"F","list1":"达克罗宁","list2":"大黄异黄酮胶囊","list3":"大黄碳酸氢钠片","list4":"丹参片"},
        ]
=======
        indexList: ["A"," B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        arr:[],
        arr1:[],
        value:''
>>>>>>> ljh1
        }
    },
    created() {
        this.axios({
            url:"http://10.12.156.94:8181/drug/loadallbysign",
            methods:'get',
        }).then((ok)=>{
            console.log(ok.data)
             this.arr=ok.data
        })
    },
      methods: {
        back(){
            this.$router.push('/seek')
<<<<<<< HEAD
=======
        },
        select(i){
            console.log(i)
        },
        fun(a){
            this.axios({
                url:'http://10.12.156.94:8181/druginfor/druginforbyname',
                params:{drugname:a},
                methods:'get',
            }).then((ok)=>{
                // console.log(ok)
            }),
            this.$router.push({path:'/DrugStoreDetail',query:{drugname:a}})
>>>>>>> ljh1
        }
    },
    computed: {
             booleans(){
                 if(this.arr==''){
                     this.boolean=true
                 }else{
                     this.boolean=false
                 }
                 return this.boolean
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
    }
    .all_druglist{
        overflow: hidden;
    }
    .druglist{
        height:315px;
    }
    .title{
        background-color:#ded7d3;
    }
      .load{
         font-size: 30px;
         text-align: center;
     }
</style>


