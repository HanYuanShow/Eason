<template>
    <div>
        <div>
            <Seekitem></Seekitem>
        </div>
        
        <div>
           <van-row>
               <router-link to="/bodypic">
                    <van-col span="6">
                        <img src="../../static/images/w/b3h.png"/>
                        <p>症状自诊</p>
                    </van-col>
                </router-link>
                <van-col span="6">
                     <img src="../../static/images/w/b3d.png"/>
                    <p>疾病库</p>
                </van-col>
                <router-link to="/DrugStore">
                    <van-col span="6">
                        <img src="../../static/images/w/b3e.png"/>
                        <p>药品库</p>
                    </van-col>
                </router-link>
                <router-link to="SelfTest">
                    <van-col span="6">
                        <img src="../../static/images/w/b3i.png"/>
                        <p>自测工具</p>
                    </van-col>
                </router-link>
            </van-row>
        </div>
        <div class="search_recommand">
            <h4>搜索推荐</h4>
            <div class="recommand_list">
                <p>减肥训练营</p>
                <p>痤疮</p>
                <p>动态血压</p>
                <p>流感</p>  
            </div>
             <p class="recommand_list_second">发烧</p>
        </div>
    </div>
    
</template>

<script>

import Seekitem from '../components/Seekitem'
export default {
    components:{
        Seekitem
    },
    beforeCreate() {
        // document.querySelector("body").setAttribute("style","background:#f1f1f1")
    },
}
</script>
<style scoped>
    /* van-row */
    .van-row{
        padding: 12px 10px;
        text-align: center;
        border-top: 1px solid #dbdbdb;
        border-bottom: 1px solid #dbdbdb;
        background: #ffffff;
    }
    .van-col img{
        width: 40px;
        height: 40px;
    }
     .van-col p{
         font-size: 12px;
         margin: 8px 0px 0px;
         color: #686868;
     }
     /* search_recommand */
     .search_recommand{
         overflow: hidden;
         padding: 0px 10px;
         color: #757575;
         background: #ffffff;
         padding-bottom: 10px;
     }

     .recommand_list{
        display: flex;
        justify-content: space-between;
     }
     .recommand_list p{
         padding: 6px 10px;
         border-radius: 10px;
         border: 1px solid #f4f4f4;
         background: #f4f4f4;
         text-align: center;
     }
    .recommand_list_second{
         width: 20%;
         padding: 6px 10px;
         border-radius: 10px;
         border: 1px solid #f4f4f4;
         background: #f4f4f4;
         text-align: center;
         margin: 10px 0px 10px;
    }
    .search_recommand h4{
        margin: 16px 0px 0px;
    }
</style>



