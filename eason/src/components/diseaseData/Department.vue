<template>
    <div class="typical">  
       
            <ul class="typical_all_ul"> 
                <li v-for="(v,i) in arr1" :key="i" @click="fun(v.title,i)" class="typical_li" :class="{style:newindex==i}">
                    <div @click="funt(v.title)">
                        <img :src="v.img" />
                        <p>{{v.title}}</p>
                    </div>
                 </li>
            </ul>
        
             <ul class="uls">
                <li class="uls_li" v-for="(item,index) in arr3" :key="index">
                    <P @click="fund(item.officeTypeName)">{{item.officeTypeName}}</P>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    components:{
    },
    data() {
        return { 
            arr1:[],
            arr3:[],
            newindex:0,
            boll:true,
            bolls:false
        }
    },
    created() {
        this.axios({
            url:"/automenu/easonNew",
            methods:"get"
        }).then((ok)=>{
            var data=ok.data.departmentClassify
            this.arr1=data
        }),

        // 这个是页面打开后要默认的列表里的数据
          this.axios({
            url:"http://47.95.140.83:8181/officeType/findByName",
             params:{name:'皮肤科'},
            methods:"get"
        }).then((ok)=>{
            var newdata1=[],
            newdata1=ok.data
            this.arr3=ok.data 
        })
    },


    methods: {
        // 这个函数暂时没用
        fun(a,num){    
            var newdata=[];
            for(var i=0;i<this.arr1.length;i++){
                 if(this.arr1[i].title==a){
                     newdata.push(this.arr1[i])
                     this.arr2=newdata
                 }
            }
            this.newindex=num 
        },




         funt(c){
        this.axios({
            url:"http://47.95.140.83:8181/officeType/findByName",
            // 这个接口是搜索所有的数据，根据点击的导航，去获取到相应的列表
            methods:"get",
            params:{name:c}
        }).then((ok)=>{
            this.arr3=ok.data
        })
        },
        fund(n){
             this.$router.push({path:"/detailDepartment",query:{officeTypeName:n}})
        }

    },
}
</script>
<style scoped>

    .style{
        background-color:white;
    }
    li{
        list-style: none;
    }
    .typical{
       display: flex;
       justify-content: space-between;
    }

    .typical_all_ul{
         width: 30%;
         border-right: 1px solid #cccccc;
         text-align: center;
         background-color: #f1f1f1;
    }
    .typical_li{
        border-bottom: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
    }
    .typical_li img{
        width: 60px;
        height: 60px;
        margin-top: 8px;
    }

    .typical_li p{
        margin: 8px 0px;
    }
    .uls{
        width: 60%;
        padding-left:10%;
        height:547px;
        overflow: auto;
    }
    .uls_li{
        border-bottom: 1px solid #cccccc;
        padding: 10px 0px;
    }
</style>


