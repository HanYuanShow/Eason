<template>
<div>
    <ReturnComp :routerTips="keyword" class="returnbar"></ReturnComp>
    <div class="location">
        <!-- 我是地图demo1 -->
        <!-- <label>关键词：<input v-model="keyword"></label>
        <label>地区：<input v-model="location"></label> -->
        <baidu-map>
            <bm-view class="map"></bm-view>
            <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
        </baidu-map>
    </div>
</div>
 
                 
</template>
 
<script>
import ReturnComp from "../components/returnComp/returnComp";

export default {
  name: "map",

  data() {
    return {
      location: "北京",
      keyword: "北京协和医院"
    }
  },
  components:{
    ReturnComp
  },
  methods: {},
  created() {
      this.location = this.$route.params.city;
      this.keyword = this.$route.params.keyword;
    //   console.log(this.location,this.keyword);
  },
};
</script>
 
<style>
.map {
  width: 100%;
  height: 500px;
}
.location{
    padding: 20px 15px;
}

.returnbar {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>