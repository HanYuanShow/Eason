<template>
  <div>
    <van-row type="flex" justify="center" class="more">
      <van-col span="4" class="inner" >
        <van-image fit="fill" height="15" width="15" src="../../static/images/w/a60.png" @click="back()" />
      </van-col>
      <van-col span="16" class="inner">最近90天历史服务</van-col>
      <van-col span="4" class="inner"> <span class="all" @click="goAll()"> 全部</span></van-col>
    </van-row>
    <div class="Code">
          <p class="one">最近90天无历史服务记录</p>
          <p class="two">请点击右上角筛选服务，查看 <span class="only-text" @click="goAll()">全部</span>历史记录</p>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    back(){
      this.$router.go(-1);
    },
    goAll(){
      this.$router.push("/AllHistory")
    }
  },
};
</script>

<style scoped>
.only-text{
  color:rgb(39, 224, 39);
}
.one{
  margin-bottom: 5px;
}
.two{
  color: rgb(201, 201, 201);
}
.Code{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(243, 242, 242);
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
.all{
  color: rgb(39, 224, 39);
}
</style>
