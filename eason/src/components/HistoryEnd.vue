<template>
  <div>
    <van-row type="flex" justify="center" class="more">
      <van-col span="4" class="inner" >
        <van-image fit="fill" height="15" width="15" src="../../static/images/w/a60.png" @click="back()" />
      </van-col>
      <van-col span="16" class="inner">图文咨询</van-col>
      <van-col span="4" class="inner"> <span class="all" > 全部</span></van-col>
    </van-row>

      <div class="end">
        <p>未找到相关数据</p>
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
  color: rgb(250, 250, 250);
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
