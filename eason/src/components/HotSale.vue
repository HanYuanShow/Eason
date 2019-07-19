<template>
  <div class="HotSale-content-out">
    <div class="HotSale-div">
      <van-row type="flex" justify="center">
        <van-col span="14" offset="5">
          <div class="HotSale-out">
            <van-image fit="fill" height="18" width="18" src="../../static/images/w/amj.png" />
            <span class="HotSale-tital">春雨热卖</span>
            <van-image fit="fill" height="18" width="18" src="../../static/images/w/aml.png" />
          </div>
        </van-col>

        <van-col span="5">
          <div>
            <div class="HotSale-more">
              <span class="HotSale-text">更多</span>
              <van-image fit="fill" height="18" width="18" src="../../static/images/w/amk.png" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="HotSale-content">
      <van-row type="flex" justify="center">
        <van-col span="12">
          <div class="HotSale-lef">
            <div class="HotSale-lef-top">
                <p class="HotSale-nan">18元战 · 男言之隐</p>
                <p class="HotSale-small">呵护男性健康</p>
            </div>
            <div class="HotSale-lef-bottom">
                <p class="HotSale-yima">轻松告别姨妈困扰</p>
                <p class="HotSale-small">资深专家为你支招</p>
            </div>
          </div>
        </van-col>

        <van-col span="12">
          <div class="HotSale-right">
            <div class="HotSale-right-top">
                <p  class="HotSale-yima">30天，远离</p>
                <p  class="HotSale-yima">高血压</p>
                <p class="HotSale-small">足不出户控制血压</p>
            </div>
            <div class="HotSale-right-mind">
                <p  class="HotSale-yima">妇产名医治不孕</p>
                <p class="HotSale-small">有春雨好孕不难</p>
            </div>
            <div class="HotSale-right-bottom">
                <p  class="HotSale-yima">拯救脱发星人</p>
                <p class="HotSale-small">专业名医生发有道</p>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="HotSale-end"></div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.HotSale-end{
    height: 8px;
    background-color: gainsboro;
}
.HotSale-yima{
      font-size: 14px;
}
.HotSale-nan{
    font-size: 14px;
    color: orange;
}
.HotSale-small{
    font-size: 12px;
    color: gainsboro;

}
.HotSale-right-top {
  height: 33%;
  border-bottom: 1px solid gainsboro;
    padding-left: 14px;
  padding-top: 10px;
}
.HotSale-right-mind {
  height: 28%;
  border-bottom: 1px solid gainsboro;
    padding-left: 14px;
  padding-top: 10px;
}
.HotSale-right-bottom {
  height: 33%;
    padding-left: 14px;
  padding-top: 10px;
}
.HotSale-right {
  height: 240px;
}
.HotSale-lef-top {
  height: 66%;
  border-bottom: 1px solid gainsboro;
  padding-left: 14px;
  padding-top: 10px;
  
}
.HotSale-lef-bottom{
    height: 33%;
  padding-left: 14px;
    padding-top: 10px;
}
.HotSale-lef {
  border-right: 1px solid gainsboro;
  height: 240px;
}
.HotSale-tital {
  margin: 0 10px;
  color: brown;
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
