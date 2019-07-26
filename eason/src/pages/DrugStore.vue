<template>
    <div>
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
    </div>
</template>
<script>
export default {
     data() {
        return {
        indexList: ["A"," B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        arr:[],
        arr1:[],
        value:''
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
        position: sticky;
        top: 40px;
        z-index: 2;
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


