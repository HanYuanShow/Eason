<template>
  <div class="HomeSeek-out" >
    <van-row type="flex" >
      <van-col span="21" >
        <van-search v-model="value" placeholder="输入疾病药品|症状|医生|检查" shape="round"></van-search>
      </van-col>
      <van-col span="3" class="HomeSeek-massages">
        <van-image width="25" height="25" src="../../static/images/w/awy.png" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
.HomeSeek-massages{
    display: flex;
    align-items: center;
}
.HomeSeek-out{
 position: fixed;
 top: 0;
 background-color: white;
width: 100%;
z-index: 1;
}

</style>
