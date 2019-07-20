<template>
  <div>
    <div class="HotSale-div">

      <van-row type="flex" justify="center" fixed="top">
        <van-col span="14" offset="5">  

            <div class="Advice-out">
                
                <router-link to="/MyAdvice/NowConsult" class="left">当前咨询</router-link>
                <router-link to="/MyAdvice/MyDoctor" class="right">我的医生</router-link>
            </div>

        </van-col>

        <van-col span="5">
          <div>
            <div class="HotSale-more" @click=goMore()>
              <van-image fit="fill" height="15" width="15" src="../../static/images/w/ayb.png" />
              <span class="HotSale-text">历史</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <router-view></router-view>
    
      <div class="Tool-out">
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item icon="search"   to="/Home">
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
  },
  methods: {
      goMore(){
          this.$router.push("/HistoryCode")
      }
  },
};
</script>

<style scoped>
.HotSale-more {
  display: flex;
  justify-content: center;
  align-items: center;
}
.HotSale-text {
  font-size: 14px;
  margin-right: 5px;
  color: rgb(39, 224, 39);
  margin-left: 6px;
}
.HotSale-div {
  padding: 14px 0;
  position: relative;
  top:0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: white;
}

.Tabbar-text{
    font-size: 12px;
}
.van-tabbar-item__icon img{
    height: 30px;
}
.van-tabbar{
    padding: 5px 0;
}
.router-link-exact-active{
    color:white;
    background-color: red   ;
}
.left{
    display: block;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: white;
   color: rgb(39, 224, 39);
   border: 1px solid rgb(39, 224, 39);
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
    
}
.right{
    display: block;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: white;
   color: rgb(39, 224, 39);
     border: 1px solid rgb(39, 224, 39);
     border-top-right-radius: 10px;
     border-bottom-right-radius: 10px;
}
.Advice-out{
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(39, 224, 39);
}

</style>
