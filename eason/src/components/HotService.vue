<template>
  <div>
    <div class="HotSale-div">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <div class="HotSale-out">
            <van-image fit="fill" height="18" width="18" src="../../static/images/w/amv.png" />
            <span class="HotSale-tital">热门服务</span>
            <van-image fit="fill" height="18" width="18" src="../../static/images/w/amw.png" />
          </div>
        </van-col>
      </van-row>  
    </div>

    <div>
        <van-row type="flex" justify="center">
              <van-col span="22" >
                  <div class="HotSerice-border">
                      <div class="HotSerice-left">
                          <div class="HotSerice-left-top">
                            <div class="HotSerice-inner">
                                <van-image fit="fill" height="18" width="18" src="../../static/images/w/aif.png" />
                                <span class="HotSerice-span">快捷电话</span>
                              
                            </div>
                            <span class="HotSerice-min">10分钟内专家回电</span>
                          </div>
                          <div class="HotSerice-left-mind">
                               <div class="HotSerice-inner">
                                <van-image fit="fill" height="18" width="18" src="../../static/images/w/aca.png" />
                                <span class="HotSerice-span">名医咨询</span>
                            </div>
                             <span class="span">找名医 更准更放心</span>
                          </div>
                          <div class="HotSerice-left-end">
                               <div class="HotSerice-inner">
                                <van-image fit="fill" height="18" width="18" src="../../static/images/w/aup.png" />
                                <span class="HotSerice-span">护士上门</span>
                            </div>  
                             <span class="span">专业护士 预约到家</span>
                          </div>
                      </div>
                      <div class="HotSerice-right">
                           <div class="HotSerice-left-top">
                               <div class="HotSerice-inner">
                                <van-image fit="fill" height="18" width="18" src="../../static/images/w/a85.png" />
                                <span class="HotSerice-span">图文急诊</span>
                            </div>
                            <span class="HotSerice-minl">60秒快速回复</span>
                           </div>
                          <div class="HotSerice-left-mind">
                              <div class="HotSerice-inner">
                                <van-image fit="fill" height="18" width="18" src="../../static/images/w/ax2.png" />
                                <span class="HotSerice-span">美肤祛痘</span>
                            </div>
                             <span class="span">一站式解决皮肤难题</span>
                          </div>
                          <div class="HotSerice-left-end">
                              <div class="HotSerice-inner">
                                <van-image fit="fill" height="18" width="18" src="../../static/images/w/b4b.png" />
                                <span class="HotSerice-span">试管名医</span>
                            </div>
                             <span class="span">专治不孕不育</span>
                          </div>
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
.span{
    font-size: 10px;
    color: gainsboro;
}
.HotSerice-span{
    font-size: 16px;
    margin-left: 5px;
}
.HotSerice-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}
.HotSerice-minl{
       display: block;
    border: 1px solid #ff4800e1;
    font-size: 10px;
    color:#ff4800e1;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}
.HotSerice-min{
    display: block;
    border: 1px solid orange;
    font-size: 10px;
    color: orange;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}
.HotSerice-left-top{
height: 33%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.HotSerice-left-mind{
height: 33%;
border-top:1px solid  rgba(255, 217, 0, 0.719);
border-bottom: 1px solid  rgba(255, 217, 0, 0.719);
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.HotSerice-left-end{
height: 33%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.HotSerice-right{
    flex:1;
    border-left: 1px solid rgba(255, 217, 0, 0.719);
}
.HotSerice-left{
    flex: 1;
    display: flex;
    flex-direction: column;

    align-items: center;
}
.HotSerice-border{
    height: 240px;
    border: 1px solid rgba(255, 217, 0, 0.719);
    margin-bottom:12px;
    display: flex;
}
.HotSale-end{
    height: 8px;
    background-color: gainsboro;
}
.HotSale-tital {
  margin: 0 10px;
  color: rgba(255, 166, 0, 0.904);
}
.HotSale-out {
  display: flex;
  justify-content: center;
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
