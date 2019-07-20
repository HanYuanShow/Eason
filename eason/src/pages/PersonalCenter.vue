<template>
  <div>
    <div class="head">
      <div class="firstdiv">
        <div class="header">
          <img :src="imgs" alt @click="func()" />
        </div>
        <div class="center">
          <div class="centerleft" @click="funa()">
            <div class="toukuang" @click="funh()">
              <img :src="imgs1" alt />
            </div>

            <span>登录/注册</span>
          </div>

          <div class="qiandao">
            <!-- 签到 -->
          </div>
        </div>
        <div class="foot">
          <p>
            <span>0.00</span>
            <span>账户余额(元)</span>
          </p>
          <p>
            <span>0</span>
            <span>优惠券(张)</span>
          </p>
          <p>
            <span>0</span>
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
    <div class="content1">
      <personalcenteritam :arrb="obj[3]" ></personalcenteritam>
    </div>
    <div class="content1" @click="funf()">
      <personalcenteritam :arrb="obj[4]"></personalcenteritam>
    </div>
    <div class="content2" @click="fung()">
      <personalcenteritam :arrb="obj[5]"></personalcenteritam>
    </div>

    <!-- <div class="zyc"></div> -->



    <div class="Tool-out">
      <van-tabbar v-model="active" active-color="#07c160">
        <van-tabbar-item to="/Home">
          <span class="Tabbar-text">春雨</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active[0] : icon.normal[0]"
            fit="contain"
            width="30"
            height="40"
          />
        </van-tabbar-item>
        <van-tabbar-item icon="search" to="/Science">
          <span class="Tabbar-text">科普</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active[1] : icon.normal[1]"
            fit="contain"
            width="30"
            height="40"
          />
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/MyAdvice">
          <span class="Tabbar-text">我的咨询</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active[2] : icon.normal[2]"
            fit="contain"
            width="30"
            height="40"
          />
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/personalCentter">
          <span class="Tabbar-text">个人中心</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active[3] : icon.normal[3]"
            fit="contain"
            width="30"
            height="40"
          />
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import personalcenteritam from "../components/personalcenteritam/personalcenteritam";
export default {
  components: {
    personalcenteritam
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
      }
    };
  },
  methods: {
    funa() {
      this.$router.push({ path: "/PersonalInformation" });
    },
    funb() {
      this.$router.push({ path: "/Install" });
    },
    func() {
      this.$router.push({ path: "/MessageCenter" });
    },
    fund() {
      this.$router.push({ path: "/HealthRecord" });
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
      this.$router.push({ path: "/logon" });
    },
    // Dialog(){
    //    Dialog.alert({
    //   title: '标题',
    //   message: '弹窗内容'
    // }).then(() => {
    //   // on close
    // });
    // }
  }
};
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
.Tool-out{
  /* padding-top: 55px; */
  /* border-top: 1px solid gainsboro; */
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
  height: 85px;
  display: flex;
}
.foot p {
  width: 33%;
  text-align: center;
  font-size: 16px;
  /* height: 100%; */
}
p span {
  display: block;
  width: 100%;
  height: 50%;
  color: white;
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
