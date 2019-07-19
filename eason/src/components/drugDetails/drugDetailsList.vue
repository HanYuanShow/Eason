<template>
    <div>
        <div>
            <Navbar></Navbar>
            
        </div>
        <div>
            <!-- <van-nav-bar -->
                    <div class='seek-input'>
           
                <van-search placeholder='请输入药品名' v-model='value' />
                </div>
                    <!-- left-text="<img src='../../../static/images/w/ajv.png /'>"
                    right-text="<img src='../../../static/images/w/ajv.png /'>"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight" -->
                 <!-- /> -->
        </div>
        
        <div>
            <Drug v-for="(v,i) in arr.drug" :key="i" :url="v.url" :name="v.name" :standards="v.standards" :content="v.content" :price="v.price"></Drug>
        </div>
    </div>
</template>
<script>

import Drug from "./drug"
import Navbar from "../navbar"

export default {
    data(){
        return{
            value:"",
           arr:[]
        }
    },
    methods: {
            onClickLeft() {
            Toast('返回');
            },
            onClickRight() {
            Toast('按钮');
            }
        },
    components:{
       
        Drug,
        Navbar
    },
    created(){
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.drugDetails
            console.log(this.arr)
        })
    }
}
</script>
<style scoped>

</style>
