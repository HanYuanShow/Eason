<template>
  <div>
    <div class="HotSale-div">
      <van-row type="flex" justify="center">
        <van-col span="14" offset="5">
          <div class="HotSale-out">
            <van-image fit="contain" height="18" width="18" src="../../static/images/w/amq.png" />
            <span class="HotSale-tital">春雨小讲堂</span>
            <van-image fit="contain" height="18" width="18" src="../../static/images/w/ams.png" />
          </div>
        </van-col>

        <van-col span="5">
          <div>
            <div class="HotSale-more" @click="getText()">
              <van-image fit="fill" height="18" width="18" src="../../static/images/w/amx.png" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="Lectrue-fun">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div v-for="(v,i) in getcontent" :key="i">
            <h4 class="Lectrue-titel">{{v.content.titel}}</h4>
            <p class="Lectrue-text">{{v.content.text}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
              <div class="HotSale-end"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getcontent: ""
    };
  },
  created() {
    this.axios({
      url: "/aaa",
      method: "get"
    }).then(ok => {
      this.getcontent = ok.data.room.slice(0, 1);
    });
  },
  methods: {
    getText(){
      let num =1;
       num++;
      this.axios({
      url: "/aaa",
      method: "get"
    }).then(ok => {
      this.getcontent = ok.data.room.slice(0+num, 1+num);
    });

      
    }
  },
};
</script>

<style scoped>
.HotSale-end{
    height: 8px;
    background-color: gainsboro;
}
.Lectrue-fun{
    padding-bottom: 10px;
}
.Lectrue-text{
    font-size: 14px;
}
.Lectrue-titel{
    margin-bottom: 10px;
}
.HotSale-tital {
  margin: 0 10px;
  color: rgba(255, 166, 0, 0.952);
}
.HotSale-out {
  display: flex;
  justify-content: center;
}
.HotSale-more {
  display: flex;
  justify-content: center;
  align-content: center;
}
.HotSale-text {
  font-size: 12px;
  margin-right: 5px;
  color: gray;
}
.HotSale-div {
  padding: 20px 0;
}
.HotSale-content {
  height: 240px;
  width: 100%;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
}
</style>
