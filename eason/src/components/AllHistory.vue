<template>
<div>
  <div class="all-out">
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
      <van-col span="16" class="inner">全部历史服务</van-col>
      <van-col span="4" class="inner">
        <span class="all">全部</span>
      </van-col>
    </van-row>

    <div>
      <van-row type="flex" class="text">
        <van-col span="22" offset="1">请筛选服务类型查看历史服务</van-col>
      </van-row>
    </div>
    <div v-for="(v,i) in titel" :key="i">
      <router-link :to="v.url">
        <van-row type="flex" justify="center" class="content">
          <van-col span="21" offset="1">
            <P>{{v.name}}</P>
          </van-col>
          <van-col span="2">
            <van-image fit="contain" height="15" width="15" src="../../static/images/w/a8q.png" />
          </van-col>
        </van-row>
      </router-link>
    </div>
  </div>

  <div class="end"></div>

  </div>

</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      titel: [
        { id: 1, name: "图文咨询", url: "/HistoryEnd" },
        { id: 2, name: "电话咨询", url: "/HistoryEnd" },
        { id: 3, name: "院后指导", url: "/HistoryEnd" },
        { id: 4, name: "预约就诊", url: "/HistoryEnd" },
        { id: 5, name: "视频咨询", url: "/HistoryEnd" },
        { id: 6, name: "私人医院", url: "/HistoryEnd" },
        { id: 7, name: "特色服务", url: "/HistoryEnd" },
        { id: 8, name: "服务订单", url: "/HistoryEnd" }
      ]
    };
  }
};
</script>

<style scoped>
.all-out{
    position: relative;
    z-index: 1;
}
.text {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgb(240, 240, 240);
  font-size: 14px;
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
  color: rgb(250, 250, 250);
}
.content{
    width: 100%;
    height: 45px;
    border-top: 1px solid gainsboro;
    display: flex;
    align-items: center;
}
.content p{
    color: black;
}
.end{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(243, 242, 242);
}
</style>
