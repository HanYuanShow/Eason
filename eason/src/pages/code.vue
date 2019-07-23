<template>
    <div>
       <div class="nav">
        <van-nav-bar
            title="密码输入框"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            />
        </div>

    
        <!-- !-- 密码输入框 --> 
            <van-password-input
            :value="value"
            info=""
            @focus="showKeyboard = true"
            />

            <!-- 数字键盘 -->
            <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
            />
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      showKeyboard: true
    };
  },

  methods: {
       onClickLeft() {
                this.$router.go(-1)
            // Toast('返回');
            },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
}
</script>
<style scoped>
.van-nav-bar {
    background-color:#fbfbfb;
    }
    .van-nav-bar .van-icon {
        color:#6bce72;
        font-weight: 600;
    }
    .van-nav-bar__text{
       color:#6bce72;
         font-weight: 600;
         font-size: 16px;
    }
    .van-nav-bar__title{
        color: #343434;
        font-weight: 600
    }
.van-password-input{
    margin-top:100px;
}
</style>
