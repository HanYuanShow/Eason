<template>
    <div>
        <div class="commenttop">
            <input class="commentInput" type="text" placeholder="输入关键字搜索科普文章">
        </div>
            <div class="ScienceBodyTitleBox">
                <div class="ScienceBodyTitle">
                    <router-link to="/Science/Hot"><p>热点</p></router-link>
                    <router-link to="/Science/Topic"><p>话题</p></router-link>
                    <router-link to="/Science/Live"><p>生活</p></router-link>
                    <router-link to="/Science/Sleep"><p>睡眠</p></router-link>
                    <router-link to="/Science/ManRouter"><p>男性</p></router-link>
                    <router-link to="/Science/BothRouter"><p>两性</p></router-link>
                    <router-link to="/Science/Sleep"><p>辟谣</p></router-link>
                    <router-link to="/Science/Sleep"><p>减肥</p></router-link>
                    <router-link to="/Science/Sleep"><p>女性</p></router-link>
                    <router-link to="/Science/Sleep"><p>母婴</p></router-link>
                    <router-link to="/Science/Sleep"><p>美容</p></router-link>
                    <router-link to="/Science/Sleep"><p>营养</p></router-link>
                    <router-link to="/Science/Sleep"><p>情感</p></router-link>
                    <router-link to="/Science/Sleep"><p>癌症</p></router-link>
                    <router-link to="/Science/Sleep"><p>糖尿病</p></router-link>
                </div>
            </div>
        <!-- <router-view></router-view> -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="松开刷新数据" loading-text="正在加载">
            <router-view></router-view>
        </van-pull-refresh>
    </div>
</template>

<script>

export default {
        data(){
            return {
                value:"",
                isLoading: false
            }
        },
        methods:{
            fun(){
                this.$router.push('/Science/Hot')
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
    .ScienceBodyTitleBox{
        overflow-x: auto;
        background: #ffffff;
        width:100%;

        position: fixed;
        top:45px;
        z-index:9999;
        box-sizing: border-box;
    }
    .ScienceBodyTitle{
        display: flex;
    }
    .ScienceBodyTitle p{
        width:45px;
        flex-shrink: 0;
        text-align: center;
        font-size: 13px; 
        line-height: 37px;
        box-sizing: border-box;
        margin-right:22px;
        color:#333333;
    }
    .router-link-active p{
        border-bottom:2px solid #6bce72;
        color: #6bce72;
    }
    .van-search-class{
        border-bottom:1px solid #b2b2b2;
    }
    .ScienceBodytop{
        box-sizing: border-box;
    }
    /* .ScienceBody{
        position: fixed;
        top:45px;
        z-index:9999;
        box-sizing: border-box;
    } */

     .commenttop{
        padding:7px 15px;
        background: #ffffff;
        position:fixed;
        top:0;
        width:100%;
        z-index: 1;
        box-sizing: border-box;
        border-bottom:1px solid #d9d9dd;
    }
    .commentInput{
        width:100%;
        border-radius: 20px;;
        border:1px solid #cdcdcd;
        line-height: 28px;
        text-indent: 15px;
        background: #f5f4f4;
    }
    .commentInput::-webkit-input-placeholder{
         color:#d9d9dd; 
        padding-left:15px;
        
    }
</style>


