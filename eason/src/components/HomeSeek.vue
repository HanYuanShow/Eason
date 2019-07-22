<template>
  <div class="HomeSeek-out" >
    <van-row type="flex" >
      <van-col span="21" >

        <div @click="goContent()">
            <van-search v-model="value" placeholder="输入疾病药品|症状|医生|检查" shape="round"></van-search>
        </div>
        
      </van-col>
      <van-col span="3" class="HomeSeek-massages">
        <router-link to="/MessageCenter">
              <van-image width="25" height="25" src="../../static/images/w/awy.png" />
        </router-link>
      
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
  methods: {
    goContent(){
      this.$router.push("seek")
    }
  }
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
