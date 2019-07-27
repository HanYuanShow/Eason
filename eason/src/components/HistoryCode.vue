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
      <van-col span="16" class="inner">最近90天历史服务</van-col>
      <van-col span="4" class="inner">
        <span class="all" @click="goAll()">全部</span>
      </van-col>
    </van-row>

    <div class="Code" v-show="bool">
          <p class="one">最近90天无历史服务记录</p>
          <p class="two">请点击右上角筛选服务，查看 <span class="only-text" @click="goAll()">全部</span>历史记录</p>
    </div>

    <div class="shuru">

      <div v-for="(v,i) in history" :key="i" class="content">
        <p class="time">{{v.date}}</p>
        <p class="end">{{v.userProblem}}</p>
      </div>

      <div class="lishi">
        <p class="one">最近90历史服务记录展示完毕</p>
        <p class="two">
          请点击右上角筛选服务，查看
          <span class="only-text" @click="goAll()">全部</span>历史记录
        </p>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      history: [],
      bool: true,
      userid:0
    };
  },
  created() {
    
        //获取本地账户id
        this.userid =localStorage.getItem("userId")

    this.axios({
      url: " http://47.95.140.83:8181/talk/alluserproblems?userId="+ this.userid,
      method: "get",
        // params:{
        //         userId: this.userid,
        //     }
    }).then((ok) => {
      this.history = ok.data;
      console.log(this.mydoctor);
    });
  },
  watch: {
    history() {
      if (this.history !== []) {
        this.bool = false;
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goAll() {
      this.$router.push("/AllHistory");
    }
  }
};
</script>

<style scoped>
.end{
  margin-bottom: 10px;
}
.content{
  width: 100%;
  height:50px;
  padding: 10px 0;
  border-bottom: 1px solid gainsboro;
  background-color: white;
}
.time{
  margin-bottom: 10px;
}
.only-text {
  color: rgb(39, 224, 39);
}
.one {
  margin-bottom: 5px;
}
.two {
  color: rgb(201, 201, 201);
}
.shuru {
  /* position: fixed;
  top: 0; */
  width: 100%;
  height: 100%;
  background-color: rgb(243, 242, 242);
  z-index: -999;
  padding-top: 70px;
}
.Code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(243, 242, 242);
  z-index: -999;
}
.lishi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.more {
  /* display: flex; */
  position: fixed;
  top:0;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gainsboro;
  background-color: white;
  margin-bottom: 20px;
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
