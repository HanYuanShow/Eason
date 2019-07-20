<template>
    <div class="out">
        <div class="inner">
              <van-image fit="fill" height="130" width="130" src="../../static/images/w/abo.png" />
              <p>暂无进行中的服务</p>
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
    margin: 20px 0;
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
</style>
