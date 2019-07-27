<template>
  <div>
    <div class="head">
      <div class="firstdiv">
        <div class="header">
        
            <img :src="imgs" alt @click="func()"  />
        </div>
        <div class="center">
          <div class="centerleft" >
            <div class="toukuang" @click="funa()">

           <img :src="getuserIMG" alt/>

            </div>

            <span @click="funh()" >{{userNickname}}</span>
            <!-- <span @click="funh()" >{{userNickname}}</span> -->

          </div>

          <div class="qiandao">
            <!-- 签到 -->
          </div>
        </div>
        <div class="foot">
          <p @click="funm">
            <span>{{userBalance}}</span>
            <span>账户余额(元)</span>
          </p>
          <p @click="funyou()">
            <span>{{Coupon}}</span>
            <span>优惠券(张)</span>
          </p>
          <p @click="funcon()">
            <span>{{Goldcoin}}</span>
            <span>金币</span>
          </p>
        </div>
      </div>
    </div>
    <div class="content" @click="fund()">
      <personalcenteritam :arrb="obj[0]"></personalcenteritam>
    </div>
    <div class="content9" @click="fune()">
      <personalcenteritam :arrb="obj[1]"></personalcenteritam>
    </div>
    <div class="content1" @click="funb()">
      <personalcenteritam :arrb="obj[2]"></personalcenteritam>
    </div>
    <div class="content1" @click="onSelect(actions)">
      <personalcenteritam :arrb="obj[3]" ></personalcenteritam>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />

    <div class="content1" @click="funf()">
      <personalcenteritam :arrb="obj[4]"></personalcenteritam>
    </div>
    <div class="content2" @click="fung()">
      <personalcenteritam :arrb="obj[5]"></personalcenteritam>



    </div>
    <PersonalTabbar></PersonalTabbar>


</div>

</template>


<script>
import personalcenteritam from "../components/personalcenteritam/personalcenteritam"
import PersonalTabbar from "../components/PersonalTavbbar"


export default {
  components: {
    personalcenteritam,
    PersonalTabbar

  },
  data() {
    return {
      imgs: "../../static/images/w/b63.png",



      imgs1: "../../static/images/w/ab7.png",
      




      obj: [
        {
          titleimg1: "../../static/images/w/awp.png",
          text: "健康档案",
          titleimg2: "../../static/images/w/b2o.png"
        },
        {
          titleimg1: "../../static/images/w/awq.png",
          text: "我的收藏",
          titleimg2: "../../static/images/w/b2o.png"
        },
        {
          titleimg1: "../../static/images/w/b3n.png",
          text: "设置与帮助",
          titleimg2: "../../static/images/w/b2o.png"
        },
        {
          titleimg1: "../../static/images/w/asn.png",
          text: "春雨客服",
          titleimg2: "../../static/images/w/b2o.png"
        },
        {
          titleimg1: "../../static/images/w/awt.png",
          text: "意见反馈",
          titleimg2: "../../static/images/w/b2o.png"
        },
        {
          titleimg1: "../../static/images/w/aso.png",
          text: "邀请好友",
          titleimg2: "../../static/images/w/b2o.png",
          sec: "得奖励"
        }
      ],
      active: 0,
      icon: {
        normal: [
          "../../static/w/b4w.png",
          "../../static/w/b4s.png",
          "../../static/w/b4y.png",
          "../../static/w/b50.png"
        ],
        active: [
          "../../static/w/b4x.png",
          "../../static/w/b4t.png",
          "../../static/w/b4z.png",
          "../../static/w/b51.png"
        ]
      },
      show: false,
      actions: [
        { name: '在线联系客服' },
        { name: '400-001-8855' },
        // { name: '', subname: '' }
      ],
      getuserIMG:"",
      userNickname:"",
      userBalance:"",
      Goldcoin :"",
      Coupon:"",
      bools:true,
      // name:true

    };
  },
  
  methods: {
    funa() {
      this.$router.push({ path: "/PersonalInformation"});
    },
    funb() {
      this.$router.push({ path: "/Install" });
    },
    func() {
      this.$router.push({ path: "/MessageCenter" });
    },
    fund() {
      this.$router.push({ path: "/HealthRecord"});
    },
    fune() {
      this.$router.push({ path: "/MyCollect" });
    },
    funf() {
      this.$router.push({ path: "/Opinion" });
    },
    fung() {
      this.$router.push({ path: "/InviteSomeOne" });
    },
    funh() {
      let id = localStorage.getItem("userId")
      if(id==null){
          
          this.$router.push({ path: "/logon" });
      }else{
           this.$router.push({ path: "/PersonalInformation" });
      }
     
    },
    funm(){
      this.$router.push({path:"/accountbalance"})
    },
    funyou(){
      this.$router.push({path:"/discountcoupon"})
    },
    funcon(){
      this.$router.push({path:"/Mycoins"})
    },
    onSelect(item){
      this.show = true;
      this.$toast(item.name);
    }
  
  },
  created(){
    // if(!localStorage.getItem("userId")){
    //   this.name =false;
    // }
    this.getuserIMG=localStorage.getItem('userImg');
    this.userNickname = localStorage.getItem('userNickname')
    this.userBalance = localStorage.getItem('userBalance')
    this.Coupon = localStorage.getItem('Coupon')
    this.Goldcoin  = localStorage.getItem('Goldcoin ')
    console.log(this.Coupon)

   

    // console.log( localStorage.getItem('userImg'))
  },

  }

</script>
<style scoped>
.Tabbar-text{
     
    font-size: 12px;
}
.van-tabbar-item__icon img{
    height: 30px;
}
.van-tabbar{
    padding: 5px 0;
  border-top: 1px solid gainsboro;

}


.head {
  width: 100%;
  height: 230px;
  background: #6bce72;
}
.header {
  /* padding-top: 20px; */
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: 10px;
}
.header img {
  width: 31px;
  height: 31px;
  display: block;
  margin-right: 20px;
}
.center {
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.centerleft {
  display: flex;
  align-items: center;
}
.toukuang {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: white;
  text-align: center;
  line-height: 60px;
  margin-left: 15px;
  background: url("../../static/images/w/ab7.png")no-repeat center top;
  background-size: 70px 70px;
}
.toukuang img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.centerleft span {
  display: block;
  margin-left: 15px;
  font-size: 17px;
  color: white;
}

.foot {
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 15px;
}
.foot p {
  width: 33%;
  text-align: center;
  font-size: 16px;
  /* height: 100%; */
}
p span {
  /* vertical-align: middle; */
/* display: flex; */
  display: block;
  width: 100%;
  height: 50%;
  color: white;
  /* line-height: 30px; */
  /* margin-top: 10px; */
  /* align-items: center; */
  /* line-height: 100%; */
}
.content {
  /* margin-bottom: 15px; */
  /* border-bottom: 15px solid #f8f6f6; */
  border-top: 15px solid #f8f6f6;


}
.content1 {
  border-bottom: 1px solid #e4e4e4;
}
.content9 {
  border-bottom: 15px solid #f8f6f6;
  border-top: 15px solid #f8f6f6;

}
.content2 {
  border-bottom: 27.5px solid #f8f6f6;


}
</style>
