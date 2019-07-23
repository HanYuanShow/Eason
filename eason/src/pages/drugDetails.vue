<template>
    <div>
        <div>
            <Navbar></Navbar>
            
        </div>
        <div>
                <div class='seek-input'>
                <van-search placeholder='请输入药品名' v-model='value' />
                </div>
        </div>
        
        <div>
            <Drug v-for="(v,i) in mList" :key="i" :url="v.url" :name="v.name" :standards="v.standards" :content="v.content" :price="v.price"></Drug>
        </div>
    </div> 
</template>
<script>


import Drug from "../components/drugDetails/drug"
import Navbar from "../components/navbar"

export default {
    data(){
        return{
            value:"",
           arr:[],
           itemList:{},
           mList:[],
           title:""
        }
    },
    methods: {
            onClickLeft() {
            this.$router.go(-1);
            },
    },
     created(){
         this.title=this.$route.query.title;
        //  console.log(this.title);
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.buyMedicine[0];
            this.itemList = this.arr.drugList[0];
            if(this.title=="妇科"){
                this.mList= this.itemList.fuke.medicine;
            }else if(this.title=="皮肤疾病"){
                 this.mList= this.itemList.pifuIll.medicine;
            }else if(this.title=="风湿骨病"){
                 this.mList= this.itemList.fengshiIll.medicine;
            }else if(this.title=="糖尿病"){
                 this.mList= this.itemList.tangniaoIll.medicine;
            }else if(this.title=="心血管病"){
                 this.mList= this.itemList.xinxueguanIll.medicine;
            }else if(this.title=="呼吸用药"){
                 this.mList= this.itemList.huxiIll.medicine;
            }else if(this.title=="肠胃用药"){
                 this.mList= this.itemList.changweiIDrug.medicine;
            }else if(this.title=="营养保健"){
                 this.mList= this.itemList.yingyang.medicine;
            }
            
        })
    },

    components:{
       
        Drug,
        Navbar
    },
   
}
</script>
<style scoped>

</style>
