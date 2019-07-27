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
            <Drug :arr="arr"  :drugId="drugId" ></Drug>
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
           title:"",
           typeid:"",
            drugId:""
        }
    },
    methods: {
            onClickLeft() {
            this.$router.go(-1);
            },
    },
     created(){
         this.typeid=this.$route.query.typeid;
         this.axios({
                url:"http://47.95.140.83:8181/drug/findallbytypeid?typeid="+this.typeid,
                method:"get"
            }).then((ok)=>{
                console.log(this.arr)
                this.arr=ok.data;
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
