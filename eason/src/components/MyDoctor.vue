<template>
    <div class="out">
        <div class="inner">
              <van-image fit="fill" height="60" width="80" src="../../static/images/w/ay_.png" />
              <p>暂无医生</p>
              <h6>关注或者购买过服务的医生将显示在这里</h6>
              <span>快速提问</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.out{   
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(243, 242, 242);
    display: flex;
    justify-content: center;
    align-items: center;
}
.inner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.inner p{
    font-size: 14px;
    margin: 15px 0;
    color: grey;
}
.inner span{
    display: block;
    width: 250px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 2px;
    background-color:  rgb(39, 224, 39);
    color: white;
}
.inner h6{
    font-weight: 100;
    margin-bottom: 15px;
        color: grey;
}
</style>
