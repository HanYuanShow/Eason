<template>
    <div class="typical">  
       
            <ul class="typical_all_ul"> 
                <li v-for="(v,i) in arr1" :key="i" @click="fun(v.title,i)" class="typical_li" :class="{style:newindex==i}">
                   <div @click="funt(v.title)">
                       <img :src="v.img"/>
                       <p>{{v.title}}</p>
                   </div>
                 </li>
            </ul>
        
            <ul class="uls">
                <li class="uls_li" v-for="(item,index) in arr3" :key="index">
                    <P @click="fund(item.nesName)">{{item.nesName}}</P>
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
            newindex:0
        }
    },
    created() {
        this.axios({
            url:"/automenu/easonNew",
            methods:"get"
        }).then((ok)=>{
            var data=ok.data.diseaseLibirary
            this.arr1=data
        }),
        
         this.axios({
            url:"http://10.12.156.149:8181/illness/findAll",
            methods:"get"
        }).then((ok)=>{
            var newdata1=[],
            newdata1=ok.data
            this.arr3=[]
            for(var i=0;i<newdata1.length;i++){
                if(newdata1[i].nesCrowd=='上班族'){
                    this.arr3.push(newdata1[i])
                } 
            }
        })
    },
    methods: {
        fun(a,num){    
            var newdata=[];
            for(var i=0;i<this.arr1.length;i++){
                 if(this.arr1[i].title==a){
                     newdata.push(this.arr1[i])
                     this.arr2=newdata
                 }
            }
            this.newindex=num 
            this.boolean=!this.boolean
        },

        funt(c){
        this.axios({
            url:"http://10.12.156.149:8181/illness/findAll",
            //这个接口所对应是搜索所有数据
            methods:"get"
        }).then((ok)=>{
            var newdata1=[],
            newdata1=ok.data
            this.arr3=[]
            //这个给的是点击每个导航栏所对应的列表（）
            for(var i=0;i<newdata1.length;i++){
                if(newdata1[i].nesCrowd==c){
                    this.arr3.push(newdata1[i])
                } 
            }
        })
        },
        fund(n){
            this.$router.push({path:"/detailDiease",query:{nesDetails:n}})
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


