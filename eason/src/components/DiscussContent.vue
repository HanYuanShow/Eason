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
          <span class="name">{{discussContent[itemid-1].realaName}}</span>
          <span>{{discussContent[itemid-1].title}}</span>
          <span>{{discussContent[itemid-1].hospital}}</span>
        </van-col>
      </van-row>
    </div>

    <div class="background"></div>

    <div>
      <van-row type="flex" justify="center">
        <van-col span="14">
          <span class="tacking">{{discussContent[itemid-1].realaName}}医生接受了你的聊天请求，现在可以聊天了</span>
        </van-col>
      </van-row>
    </div>

        <p>{{itemid}}</p>

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
      url: "http://47.95.140.83:8181/talk/alldoctorinfors",
      method: "get"
    }).then((ok) => {
       this.discussContent = ok.data;
      console.log(ok);
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    created() {
        this.itemid = this.$route.query.id; 
        this.axios({
            url:"/aaa",
            method:"get"
            }).then((ok)=>{
               this.new= this.discussContent=ok.data.discuss;
          
            })
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
  }
}
</script>

<style scoped>

</style>
