<template>
  <div>
    <div class="HotSale-div">
      <van-row type="flex" justify="center">
        <van-col span="14" offset="5">
          <div class="HotSale-out">
            <van-image fit="contain" height="18" width="18" src="../../static/images/w/amt.png" />
            <span class="HotSale-tital">患者好评</span>
            <van-image fit="contain" height="18" width="18" src="../../static/images/w/amu.png" />
          </div>
        </van-col>

        <van-col span="5">
          <div>
            <div class="HotSale-more" @click="changeText()">
              <van-image fit="fill" height="18" width="18" src="../../static/images/w/amx.png" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

       <div>
        <van-row type="flex" justify="center">
        <van-col span="23" offset="1">
            <div v-for="(v,i) in getcontent" :key="i" class="out">
                <div>
                     <van-image fit="fill" height="18" width="18" src="../../static/images/w/abv.png" />
                     <span>{{v.content.number}}</span>
                     <span>评价{{v.content.name}}医生</span>
                     <van-image fit="fill" height="18" width="18" src="../../static/images/w/a6x.png" />
                     <span>好评</span>
                </div>
                <div>
                    <p>{{v.content.text}}</p>
                </div>
                
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
            getcontent:"",
        }
    },
        created() {
        this.axios({
            url:"/aaa",
            method:"get"
        }).then((ok)=>{
            this.getcontent=ok.data.discuss;
        })
    },
    methods: {
        changeText(){
        
        }
    },

};
</script>

<style scoped>
.HotSale-end{
    height: 8px;
    background-color: gainsboro;
}
.out{
    height:80px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.HotSale-tital {
  margin: 0 10px;
  color: rgba(255, 81, 0, 0.925);
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
