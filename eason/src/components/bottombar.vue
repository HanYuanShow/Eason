<template>
    <div style="margin:50px">
      
     <van-goods-action>
          <van-goods-action-icon
            :info=newInfo
            icon="cart-o"
            text="购物车"
             @click="onClickIcon" 
          />
         <van-popup
            v-model="show"
            round
            position="bottom"
            :style="{ height: '20%' }"
          >

          <van-card
                :price="price"
                desc="描述信息"  
                title="商品标题"
                :thumb="url"
              >
              <div>
                <span>购买数量</span>
              </div>
                <div slot="footer">
                   <span class="buy">购买数量</span>
                 <van-stepper v-model="value" integer />
                  <p class="ok" @click="okfun(value)">确定</p>
                </div>
               
          </van-card>
          </van-popup>
          <van-goods-action-button
            type="warning"
            text="加入购物车"
             @click="onClickButton"
          />
    </van-goods-action>
    </div>
  </template>

  
<script>

export default {
  props:{
    price:Number,
    url:String,
    drugid:String,
    dingdanarr:[]
  },
  data() {
    return { 
          show: false,
          value: 1,
          arr:[],
          userid:2
    }   
  },
   methods: {
    test() {
      // console.log(this.newInfo)
    },
    onClickIcon(v) {
     this.$router.push(
     {path:"/cart",
     query:{userid:this.userid}
     })
    //  var objid = []
      // this.$store.commit("cartMutation",this.$store.state.info);
      // userId = localStorage.getItem('userId')
      // obj.drugid = this.$route.query.drugid;
      // obj.num = v
     
      


    },
    onClickButton() {
      let id = localStorage.getItem("userId");
      if(id==null){
        this.$router.push("/logon")
      }else{
           this.show=!this.show
      }
   
    },
    butfun1(){
      this.cartbool=false;
    },
    okfun(v){
      
      // this.$store.commit("cartMutation",this.$store.state.info);
      // obj.userId = localStorage.getItem('userId')
      // obj.userid = 2
      // this.userid = this.$route.query.userid;
      // obj.drugnum = v;
       var param=new URLSearchParams();
      param.append("userid",this.userid)
      param.append("drugid",this.$route.query.drugid)
      param.append("drugnum",v)
      this.axios({
        url: 'http://47.95.140.83:8181/shopcart/adddrug',
        method: 'POST',
        data: param
      }).then((res) => {
      
      }).catch((err) => {
        // console.log(err)
      })
      this.show=!this.show;
    },
        showPopup() {
      this.show = true;
    }
  },
  computed:{
    newInfo(){
      return this.$store.state.info
    }
  },
  created(){
    //  this.typeid=this.$route.query.typeid;
    // this.axios({
    //         url:"http://47.95.140.32:8181/drug/findallbyid?drugid="+ this.drugid,
    //         method:"get"
    //     }).then((ok)=>{
    //         this.allDrugArr=ok.data.druginfor;
    //         this.price=this.allDrugArr.drugPrice
    //          this.allDrugType=ok.data.drugtype
    //         console.log(ok.data)
    //     })
  },
  fiters:{
  newarr(val){
    return val.length;
  }
  }
}
</script>
<style scoped>
.buy{
  float: left;
    font-size: 16px;
    color: #666666;
}
.van-popup--bottom{
  height:28%!important
}
.ok{
  margin-top:10px;
  width:100%;
  height:50px;
  background:#ec6b43;
  text-align: center;
  font-size: 14px;
  color:#ffffff;
  line-height: 50px;
}
</style>
