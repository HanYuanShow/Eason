<template>
  <div class="Tool-out">
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item>
        <span class="Tabbar-text">春雨</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active[0] : icon.normal[0]" fit="contain" width="30"  height="40" />
      </van-tabbar-item>
      <van-tabbar-item icon="search"   to="/Science">
          <span  class="Tabbar-text">科普</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active[1] : icon.normal[1]" fit="contain" width="30"  height="40"/>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o"   to="/MyAdvice">
          <span  class="Tabbar-text"> 我的咨询</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active[2] : icon.normal[2]" fit="contain" width="30"  height="40"/>
      </van-tabbar-item>
       <van-tabbar-item icon="setting-o"   to="/PersonalCenter">
           <span  class="Tabbar-text">个人中心</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active[3] : icon.normal[3]"   fit="contain" width="30"  height="40"/>
       </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: ["../../static/w/b4w.png","../../static/w/b4s.png","../../static/w/b4y.png","../../static/w/b50.png"],
        active: ["../../static/w/b4x.png","../../static/w/b4t.png","../../static/w/b4z.png","../../static/w/b51.png"]
      }
    };
  }
};
</script>

<style scoped>
.Tabbar-text{
    font-size: 12px;
}
.van-tabbar-item__icon img{
    height: 30px;
}
.van-tabbar{
    padding: 5px 0;
}
.Tool-out{
  padding-top: 55px;
  border-top: 1px solid gainsboro;
}
</style>
