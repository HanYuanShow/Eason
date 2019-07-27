<template>
<div class="adds">
    <div class="address">
        <div class="addressGo"  @click="gofun()" >
            <img src="../../static/images/w/agf.png" @click="gofun()"/>
            <span @click="gofun()">返回</span>
        </div>
        <div class="addressGet" >
            <span>收货地址</span>
        </div>
    </div>
    <!-- <div >
            <p v-for="(v,i) in arra" :key="i">{{v.cneename}}</p>
    </div> -->
    <div>
        <div class="buildAdress" @click="addressFun()">
            <img src="../../static/images/w/aj5.png" >
            <span  @click="addressFun()">新建地址</span>
        </div>
        <div class="newAdress" >
            <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    add-button-text="确定"
                    @add="onAdd"

                    />
        </div>
        <div class="newbody"></div>
    </div>
    <!-- <div class="sure">
            <van-submit-bar
            :price="total*100"
            button-text="提交订单"
            @submit="onSubmit"
            >
        </van-submit-bar>
    </div> -->
</div>
    
</template>
<script>
export default {
    data(){
        return{
             checked:false,
             total:Number,
            //  arra:[],
             chosenAddressId: '1',
             arr:[],
             userids:"",
             
       chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
        }
       
    },
    methods:{
       onAdd(){
            this.$router.push(
            {path:"/payoff",query:{total:this.total}}
            )
        },
        
        checkBtn(){

        },
        gofun(){
            this.$router.go(-1);
        },
        addressFun(){
            
             this.$router.push({
                path:"/address",
                query:{total:this.total}
                })
            this.$router.push("/newaddress")
        }, 
         

    },
    created(){
        this.total=this.$route.query.total;
        this.userids=this.$route.query.userid

        // console.log(this.total)
        // var param=new URLSearchParams();
        // param.append("userid",Number(this.userids))
            console.log( 333333,this.userids)
            this.axios({
            url: 'http://47.95.140.83:8181/usershopcart/findaddress',
            method: 'post',
            params:{
                userid:this.userids
            }
            }).then((res) => {
                var arra=[];
                console.log(res)
                this.arra = res.data
                // console.log(res)
            this.arra.push(res.data)
            console.log(this.arra)
            var arr=[];
            for(var i=0;i<this.arra.length;i++){
                if(this.userids==this.arra[i].userId){
                    this.arr=this.arra[i]
                    console.log(this.arr)
            }

        }
                // this.list.id=this.arr[0].cneeid
                //  this.list.name=this.arr[0].cneename
                // this.list.address=this.arr[0].neeaddress
                // this.list.tel=this.arr[0].cneephone
                // this.list.city=this.arr[0].cneecity
                // console.log(this.list.city)
    
            })
    }
}
</script>
<style scoped>
 .address{
     width:100%;
    height:62px;
    position:fixed;
    top:0px;
    border-bottom: 1px solid #f4f4f4;
    line-height: 62px;
    background:#fbfbfb;
 }
 .addressGo{
    float:left;
    width: 40%;
 }
 .addressGet{
    float:left;
 }
 .address img{
    width: 16px;
    height: 16px;
    /* top: 50%; */
    /* position: absolute; */
     padding-left:16px;
  
 }
 .addressGo span{
     font-size: 16px;
    color: #6bce72;
    font-weight:600;
 }
 .addressGet span{
     /* text-align: center; */
     margin:0 auto;

 }
.buildAdress{
    text-align: center;
     background:#fbfbfb;
     border-bottom: 1px solid #f4f4f4;
     height:44px;
     margin-top:63px;
     line-height:44px;
}
.buildAdress img{
    vertical-align: center;
    margin-right:8px;
    width:16px;
    height:16px;
}
.buildAdress span{
    vertical-align: center;
    font-size:16px;
}
.newbody{
    height:480px;
    background:#f3f3f3;
}
.sure{
    height:50px;
    background:#ffffff;
    position:fixed;
    bottom:0;
    margin:10px;
}
.sureAdsress{
    width:350px;
    height:40px;
    line-height: 40px;
    background:#6bce72;
    text-align: center
}
.srue p{
    line-height: 40px;
    color:#fbfdfb;
    font-size: 16px;
}
</style>
