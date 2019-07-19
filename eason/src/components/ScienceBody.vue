<template>
    <div>
        <div class="ScienceBodyTitleBox">
            <div class="ScienceBodyTitle">
                <router-link to="/Science/Hot"><p>热点</p></router-link>
                <router-link to="/Science/Topic"><p>话题</p></router-link>
                <router-link to="/Science/Live"><p>生活</p></router-link>
                <router-link to="/Science/Sleep"><p>睡眠</p></router-link>
                <router-link to="/Science/Sleep"><p>男性</p></router-link>
                <router-link to="/Science/Sleep"><p>两性</p></router-link>
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
            <!-- <div>
                <div>
                    <span>切换频道</span>
                    <span>^</span>
                </div>
                <div>
                    <li></li>
                </div>
                
            </div> -->
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
        data(){
            return {
                
        
            }
        },
        methods:{
            fun(){
                this.$router.push('/Science/Hot')
            }
        }
}
</script>

<style scoped>
    .ScienceBodyTitleBox{
        overflow-x: auto;
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
</style>


