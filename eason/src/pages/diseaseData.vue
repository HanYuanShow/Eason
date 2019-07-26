<template>
    <div>
         <div>
            <van-nav-bar title="疾病库" left-text="" left-arrow @click-left="back()" @click-right="search()">
                <van-icon name="search" slot="right"/>
            </van-nav-bar>            
        </div>
        <div>
            <div class="typical_menu">
                 <li  @click="fun1()" :class="style?'green':''">典型人群</li>
                 <li  @click="fun2()" :class="style?'':'green'">科室分类</li>
            </div>
           
            <div v-if="boolean">
                <Department></Department>
            </div>
            <div v-else> <typicalPerson></typicalPerson></div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import typicalPerson from '../components/diseaseData/typicalPerson'
import Department from '../components/diseaseData/Department'
export default {
    components:{
        typicalPerson,
        Department
    },
    data() {
        return {
            boolean:true,
            style:''
        }
    },
     methods: {
        back(){
            this.$router.push('/seek')
        },
        search(){
            this.$router.push("/seek")
        },
        fun1(){
            this.boolean=!this.boolean
            this.style=!this.style
        },
         fun2(){
            this.boolean=!this.boolean
            this.style=!this.style
        },
    },
}
</script>
<style scoped>
    .green{
         border-bottom: 4px solid #67c65f;
    }
    .van-nav-bar .van-icon{
        color: #67c65f;
        font-size: 22px;
    }
    .van-nav-bar__title{
        color: #5c5c5c;
        font-size: 16px;
    }
    .typical_menu{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #d7d5d5;
        list-style: none;
    }
    .typical_menu li{
        margin-bottom: 2px;
        line-height: 35px;
    }
</style>


