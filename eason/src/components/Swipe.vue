<template>
  <div class="Swipe-out">
    <div class="Swipe-inner">
      <van-row type="flex" justify="center">
        <van-col span="24">
 
                <van-swipe :autoplay="1000" indicator-color="rgb(76, 207, 76)">
                    <van-swipe-item>
                         <van-image fit="fill" height="120" src="../../static/images/y/photo1.jpg" />
                    </van-swipe-item>
                    <van-swipe-item>
                         <van-image fit="fill" height="120" src="../../static/images/y/photo2.jpg" />
                    </van-swipe-item>
                    <van-swipe-item>
                         <van-image fit="fill" height="120" src="../../static/images/y/photo3.jpg" />
                    </van-swipe-item>
                    <van-swipe-item>
                         <van-image fit="fill" height="120" src="../../static/images/y/photo1.jpg" />
                    </van-swipe-item>
            </van-swipe>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       images: [
  //         "https://img.yzcdn.cn/vant/apple-1.jpg",
  //         "https://img.yzcdn.cn/vant/apple-2.jpg"
  //       ]
  //     };
  //   }
};
</script>

<style scoped>
.Swipe-out {
  margin-top: 20px;
}
.Swipe-inner{
    padding-bottom: 5px;
    background-color: gainsboro;
}
</style>
