<template>
<div>
    <div class="hospitalListItem" v-for="(v,i) in hospitalListData" :key="i" @click="toDetail(v.id)">
        <div class="listItem_L">{{v.comprehensive}}</div>
        <div class="listItem_R">
            <div class="hospitalTitle">
                <h3>{{v.hospitalName}}</h3>
                <p>{{v.address}}</p>
            </div>
            <div class="rank">全国综合排名第{{comprehensive}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    hospitalName: String, //医院名字
    comprehensive: Number, //排名
    address: String, //地址
    hospitalListData: [Array, Object],
  },
  methods: {
    // 跳转至医院详情页
    toDetail(clickId) {
      // 路由跳转
      this.$router.push("/hospitaDetails/" + clickId);
    }
  }
};
</script>

<style scoped>
.hospitalTitle > h3 {
  font-weight: normal;
  font-size: 18px;
  color: #323232;
  margin-right: 10px;
  vertical-align: middle;
}
.hospitalTitle > p {
  font-size: 14px;
  color: #999;
  vertical-align: middle;
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
  width: 28px;
  height: 28px;
  font-size: 14px;
  color: #666;
  line-height: 28px;
  background-color: #f8f8f8;
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
.hospitalTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

