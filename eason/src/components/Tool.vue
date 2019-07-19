<template>
  <div>
    <div class="HotSale-div">
      <van-row type="flex" justify="center">
        <van-col span="14">
          <div class="HotSale-out">
            <van-image fit="contain" height="18" width="18" src="../../static/images/w/amq.png" />
            <span class="HotSale-tital">推荐工具</span>
            <van-image fit="contain" height="18" width="18" src="../../static/images/w/ams.png" />
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="Tool-out">
            <van-row type="flex" justify="center">
      <van-col span="22">
        <div class="SencondNav-out">
          <div class="SencondNav-signle">
            <van-image src="../../static/images/w/an2.png" width="30" height="30" />
            <p>计步器</p>
          </div>
          <div class="SencondNav-signle">
            <van-image src="../../static/images/w/amy.png" width="30" height="30" />
            <p>健康计划</p>
          </div>
          <div class="SencondNav-signle">
            <van-image src="../../static/images/w/an1.png" width="30" height="30" />
            <p>姨妈助手</p>
          </div>
          <div class="SencondNav-signle">
            <van-image src="../../static/images/w/amz.png" width="30" height="30" />
            <p>健康评测</p>
          </div>
        </div>
      </van-col>
    </van-row>
    </div>

     <div class="HotSale-end"></div>

        <div class="Tool-tui">
            <van-row type="flex" justify="center">
            <van-col span="24" class="Tool-add">
                 <van-image src="../../static/images/w/b17.png"  fit="fill" width="12" height="12" />
            <p>添加到我的健康计划</p>
            </van-col>
          
            </van-row>

        </div>


  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Tool-tui{
    padding: 14px 0;
}
.Tool-add p{
    font-size: 14px;
    color: rgb(13, 207, 13);
    margin-left: 10px;
}
.Tool-add{
    display: flex;
    align-items: center;
    justify-content: center;
}
.HotSale-end{
    height: 8px;
    background-color: gainsboro;
}
.Tool-out{
    padding-bottom: 14px;
}
.SencondNav-signle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.SencondNav-signle p {
  font-size: 14px;
  color: gray;
  margin-top: 10px;
}
.SencondNav-out {
  display: flex;
  justify-content: space-around;
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
