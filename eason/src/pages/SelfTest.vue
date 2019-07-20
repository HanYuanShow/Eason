<template>
    <div>
        <!-- <div> -->
            <van-nav-bar title="自测工具" fixed="" left-text="" left-arrow @click-left="back()" @click-right="search()">
            </van-nav-bar>
        <!-- </div>   -->
        <div class="refresh">
           <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="松开刷新数据" loading-text="正在加载">
                <p></p>
                <div class="test">
                    <Testpic></Testpic>
                </div>
            </van-pull-refresh> 
        </div>

      
        
    </div>
</template>
<script>
import Testpic from "../components/testtool/testpic"
export default {
    components:{
        Testpic
    },
    data() {
        return {
             count: 0,
            isLoading: false
        }
    },
   methods: {
        back(){
            this.$router.push('/seek')
        },
        onRefresh() {
            setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
            }, 500);
        }
    }
 }
</script>

<style scoped>
.van-nav-bar .van-icon{
    color: #67c65f;
    font-size: 22px;
}
.van-nav-bar__title{
    color: #5c5c5c;
    font-size: 16px;
}
.refresh{
    overflow: hidden;
}
</style>


