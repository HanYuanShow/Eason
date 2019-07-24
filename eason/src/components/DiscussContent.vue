<template>
  <div>
    <van-row type="flex" justify="center" class="more">
      <van-col span="4" class="inner">
        <van-image
          fit="fill"
          height="15"
          width="15"
          src="../../static/images/w/a60.png"
          @click="back()"
        />
      </van-col>
      <van-col span="16" class="inner">问题详情</van-col>
      <van-col span="4" class="inner">
        <van-button type="primary" @click="showPopup" class="btn">
          <van-image
            fit="fill"
            height="20"
            width="20"
            src="../../static/images/w/arj.png"
            name="fen"
          />
        </van-button>
      </van-col>
    </van-row>

    <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }">
      <van-row type="flex" justify="center">
        <van-col span="4" class="fare">
          <span>分享到</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="18" class="fare">
          <van-image
            fit="fill"
            height="40"
            width="40"
            src="../../static/images/w/ark.png"
            name="fen"
            class="imgs"
          />
          <van-image
            fit="fill"
            height="40"
            width="40"
            src="../../static/images/w/aro.png"
            name="fen"
            class="imgs"
          />
          <van-image
            fit="fill"
            height="40"
            width="40"
            src="../../static/images/w/arp.png"
            name="fen"
            class="imgs"
          />
          <van-image
            fit="fill"
            height="40"
            width="40"
            src="../../static/images/w/arn.png"
            name="fen"
            class="imgs"
          />
        </van-col>
      </van-row>
    </van-popup>

    <div class="titel">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <van-image
            fit="fill"
            height="25"
            width="25"
            src="../../static/images/w/abv.png"
            name="fen"
          />
          <span class="name">{{discussContent[itemid-1].content.name}}</span>
          <span>{{discussContent[itemid-1].content.keshi}}</span>
          <span>{{discussContent[itemid-1].content.work}}</span>
        </van-col>
      </van-row>
    </div>

    <div class="background"></div>

    <div>
      <van-row type="flex" justify="center">
        <van-col span="14">
          <span class="tacking">{{discussContent[itemid-1].content.name}}医生接受了你的聊天请求，现在可以聊天了</span>
        </van-col>
      </van-row>
    </div>

    <div class="talk" v-if="bool">
      <div v-for="(v,i) in myuser" :key="i" class="text">
        <span class="right">{{v.my}}</span>
        <div class="clear"></div>
        <span class="left">{{v.doctor}}</span>
        <div class="clear"></div>
      </div>
    </div>

    <div class="end">
      <van-row type="flex" justify="center">
        <van-col span="24" offset="3">
          <van-cell-group>
            <van-field v-model="sms" center  label="请输入内容"  type="textarea"  autosize  rows="1" size="large">
              <van-button slot="button" size="small" type="primary" @click="send()">发送</van-button>
            </van-field>
          </van-cell-group>
        </van-col>
      </van-row>
    </div>

    
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemid: "",
      discussContent: [],
      show: false,
      sms: "",
      myuser: [{ my: "", doctor: "" }],
      bool:false,
    };
  },
  created() {
    this.itemid = this.$route.query.id;
    this.axios({
      url: "/aaa",
      method: "get"
    }).then(ok => {
      this.new = this.discussContent = ok.data.discuss;
      console.log(ok);
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goAll() {
      this.$router.push("/AllHistory");
    },
    fen() {
      this.show = false;
      console.log(1);
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },
    send() {
      this.myuser.push({ my: "", doctor: "" });
      this.myuser[this.myuser.length - 1].my = this.sms;
      this.sms = " ";
      //请求对话接口
      this.axios({
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        },
        url: "/api/api.php?key=free&appid=0&msg=" + this.myuser,
        method: "get"
      }).then(ok => {
        this.myuser[this.myuser.length - 1].doctor = ok.data.content;
      });
    },
    showPopup() {
      this.show = true;
    }
  },
  // computed: {
  // //判断过滤 等于id的数据
  //     content() {
  //     var newarr = this.discussContent.filter((v, i) => {
  //         if (v.id == this.itemid) {
  //         return v;
  //         }
  //     });
  //     return newarr;
  //     },
  // },
  watch: {
    myuser() {
      if (this.myuser[0].my!==" " && this.myuser[0].doctor!==" "){
        this.bool = true;
      }
    }
  },
  // beforeCreate() {
  //    document.querySelector(".text")[0].setAttribute("style","dispaly:none")
  // },
};
</script>

<style scoped>
.btn{
  background: none;
  border:none;
}
.fare {
  margin-top: 25px;
}
.imgs {
  margin-left: 20px;
}
.tacking {
  padding: 5px;
  display: block;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 20px;
  background-color: rgb(224, 224, 224);
}
.clear {
  height: 0px;
  clear: both;
}
.left {
  float: left;
  margin-left: 20px;
  /* padding: 10px; */
  background-color: white;
  color: black;
  margin-top: 20px;
  border-radius: 5px;
  max-width: 300px;
}
.right {
  float: right;
  margin-right: 20px;
  /* padding: 10px; */
  background-color: rgb(18, 230, 18);
  color: black;
  margin-top: 20px;
  border-radius: 5px;
  max-width: 300px;
}
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  background: rgb(241, 241, 241);
  z-index: -1;
}
.end {
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
.titel span {
  margin-left: 8px;
}
.name {
  font-size: 18px;
  font-weight: 700;
}
.titel {
  widows: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.more {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gainsboro;
}
.inner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.all {
  color: rgb(39, 224, 39);
}
</style>
