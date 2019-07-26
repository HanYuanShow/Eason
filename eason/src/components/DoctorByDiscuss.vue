<template>
  <div>

        <van-row type="flex" justify="center">
        <van-col span="23" offset="1">
            <div v-for="(v,i) in getcontent" :key="i" class="out" @click="send(v.doctorId)">
                <div class="Good-titel">
                     <van-image fit="fill" height="18" width="18" src="../../static/images/w/abv.png" />
                     <span class="Good-number">{{v.user.userNickname}}</span>
                     <span class="Good-discuss">评价{{v.doctorinfor.realaName}}医生</span>
                     <van-image fit="fill" height="18" width="18" src="../../static/images/w/a6x.png" />
                     <span class="Good-like">好评</span>
                </div>
                <div>
                    <p>{{v.userAppraise}}</p>
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
            url:"http://47.95.140.83:8181/talk/showall",
            method:"get"
        }).then((ok)=>{
            this.getcontent=ok.data;
            console.log(ok.data)
        })
    },
    methods: {
        changeText(){
          this.axios({
            url:"http://47.95.140.83:8181/talk/showall",
            method:"get"
        }).then((ok)=>{
            this.getcontent=ok.data;
            console.log(ok.data)
        })
        },
        send(num){
            this.$router.push("/DiscussContent?id="+num)
        }

    },

}
</script>

<style scoped>
.Good-titel{
  display: flex;
  margin-bottom: 15px;
  
}
.Good-like{
      font-size: 12px;
      color: rgb(255, 72, 0);
          margin-left: 10px;
}
.Good-number{
    font-size: 12px;
    margin-left: 10px;
}
.Good-discuss{
  font-size: 12px;
  color: gainsboro;
      margin-left: 10px;
           margin-right: 10px;
}
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
