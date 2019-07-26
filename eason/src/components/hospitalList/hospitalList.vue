<template>
<div>
  <div v-if="notEmpty">
    <div class="hospitalListItem" v-for="(v,i) in hospitalListData" :key="i" @click="toDetail(v.id)">
        <div class="listItem_L">◆</div>
        <!-- <div class="listItem_L">{{v.comprehensive}}</div> -->
        <div class="listItem_R">
            <div class="hospitalTitles">
                <h3>{{v.name}}</h3>
                <p>{{v.province}}</p>
            </div>
            <!-- <div class="rank">全国综合排名第{{comprehensive}}</div> -->
        </div>
    </div>
  </div>
  <div class="emptycon" v-else>
    <img src="../../../static/images/w/aok.png" alt="">
    <p>暂无数据...</p>
  </div>
</div>
</template>

<script>
export default {
  
  props: {
    hospitalName: String, //医院名字
    comprehensive: Number, //排名
    address: String, //地址
    hospitalListData: Array,
    notEmpty: true,
  },
  methods: {
    // 跳转至医院详情页
    toDetail(clickId) {
      // 路由跳转
      this.$router.push("/hospitaDetails/" + clickId);
    },  
  }
};
</script>

<style scoped>
.emptycon {
  padding: 30px 15px 15px;
  width: 100%;
  height: 150px;
  text-align: center;
  box-sizing: border-box;
}
.emptycon img{
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
}
.emptycon p{
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}
.hospitalTitles > h3 {
  font-weight: normal;
  font-size: 18px;
  color: #323232;
  margin-right: 10px;
  vertical-align: middle;
}
.hospitalTitles > p {
  font-size: 14px;
  color: #999;
  vertical-align: middle;
  margin-top: 0px;
}
.rank {
  font-size: 14px;
  height: 14px;
  color: #999;
  margin-top: 10px;
}
.hospitalListItem {
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
}
.listItem_L {
  width: 18px;
  height: 18px;
  font-size: 14px;
  color: #39d167;
  font-weight: bold;
  line-height: 18px;
  background-color: #f1fcf1;
  /* background: #F8F8F8 url("../../../static/images/w/h1.png") no-repeat center; */
  background-size: auto 100%;
  border-radius: 50%;
  text-align: center;
  margin-right: 9px;
}
.listItem_R {
  width: 90%;
  height: 100%;
}
.hospitalTitles {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

