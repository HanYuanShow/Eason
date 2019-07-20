<template>
  <div class="registeredWay">
      <div class="regTitle">挂号方式</div>
      <ul>
          <li class="regWay" v-for="(v,i) in registeredWayData" :key="i">
            <div>挂号方式{{i+1}}</div>
            <div>
                <span>可以通过 </span><span class="ways">{{v}} </span>挂号
            </div>
          </li>
      </ul>
      <PromptingMessage></PromptingMessage>
  </div>
</template>

<script>
import PromptingMessage from './PromptingMessage'
export default {   
    props:{
        registeredWayData:[Object,Array]
    },
    components:{
        PromptingMessage
    }
}

</script>

<style scoped>
.registeredWay{
    background: #fff;
    margin-bottom: 10px;
}
.regTitle{
    font-size: 16px;
    color: #666;
    padding: 10px 15px;
}
.regWay{
    font-size: 14px;
    line-height: 15px;
    color: #999;
    padding: 12px 15px;
    border-bottom: 1px solid #E7E7E7;
}
.regWay > div:first-of-type{
    margin-bottom: 12px;
}
.ways{
    color: #111;
}
.hospital-tips{
    background-color: #FEF8F3;
    display: flex;
    justify-content: space-between;
    padding: 8px 15px;
}
.tips{
    width: 80%;
    font-size: 14px;
    line-height: 22px;
    color: #999;
}
.tips span{
    color: #FFA800;
}
.tipsBtn{
    width: 20%;
    text-align: right;
    margin: auto;
}
.tipsBtn a{
    display: inline-block;
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 20px;
    color: #fff;
    background: #FFA800;
}
</style>

