<template>
  <div class="hospitalDetailHeader">
    <div class="hospitalBg">
      <ul class="rankingList">
        <h3>{{hospitalName}}</h3>
        <li v-for="(v,i) in hospitalRanking" :key="i">{{v}}</li>
        <br>
        <span class="morebtn" @click="isloadMore()">查看更多>></span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTrue:true,
    }
  },
    props:{
      hospitalName:String,
      hospitalRankingList:Array
    },
    methods: {
      isloadMore(){
        this.isTrue = !this.isTrue;
      },
    },
    computed: {
      hospitalRanking(){
        // console.log(this.hospitalRankingList)
        if(this.isTrue){
          return this.hospitalRankingList;
        }else{
          let ranking = this.hospitalRankingList
          this.hospitalRankingList = ranking.slice(0,4)
          return this.hospitalRankingList;
        }
      }
    }
}

</script>

<style scoped>
.hospitalDetailHeader{
  background:#fff;
}
.hospitalBg{
  background: url("../../../static/images/w/h5.png") no-repeat center top;
  background-size: 100% auto;
  padding: 25px 8px 8px;
}
.rankingList{
  margin: 7px;
  padding: 20px;
  border-radius: 2px;
  background-color: #FFF;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.06);
}
.rankingList h3{
  font-size: 18px;
  font-weight: normal;
  color: #323232;
  margin-bottom: 17px;
}
.rankingList li{
    font-size: 14px;
    color: #666;
    padding: 4px 6px;
    background-color: #F6F6F6;
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 12px;
}
.morebtn{
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #F6F6F6;
  color: #39D167;
  padding: 4px 6px;
}
</style>

