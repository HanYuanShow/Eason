<template>
  <div>
        <van-row type="flex" justify="center">
        <van-col span="23" offset="1">
            <div v-for="(v,i) in getcontent" :key="i" class="out" @click="topicContent(v.id)">
                <h4>{{v.name}}</h4>
                <div class="inner">
                    <div class="content">
                    <van-image fit="fill" height="15" width="15" :src="v.img" />
                    <span class="span">{{v.doctorinfor.realaName}}</span>
                    <span  class="span">{{v.doctorinfor.hospital}}</span>
                    </div>
                    <div>
                        <span class="span">阅读{{v.reading}}</span>
                        <span class="span">点赞{{v.star}}</span>
                    </div>
                </div>
                
            </div>
        </van-col>
        
        </van-row>

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
            url:"http://47.95.140.83:8181/doctorTopic/findAllTopic",
            method:"get"
        }).then((ok)=>{
            this.getcontent=ok.data.slice(4,9);
        })
    },
    methods: {
      goMore(){
        this.$router.push("/Science/Topic")
      },
      //跳转出传参
      topicContent(num){
        this.$router.push("/ContentTopic/"+num)
      }
    },
};
</script>

<style scoped>
.HotSale-end{
    height: 8px;
    background-color: gainsboro;
}
.inner{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}
.span{
    font-size: 14px;
    color:gray;
    margin-left: 10px;
}
.content{
    display: flex;
    align-items: center;
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
  color:rgba(255, 166, 0, 0.952);
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
