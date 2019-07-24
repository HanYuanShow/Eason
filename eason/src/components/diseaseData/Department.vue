<template>
    <div class="typical">  
       
            <ul class="typical_all_ul"> 
                <li v-for="(v,i) in arr1" :key="i" @click="fun(v.title,i)" class="typical_li" :class="{style:newindex==i}">
                    <img :src="v.img"/>
                    <p>{{v.title}}</p>
                 </li>
            </ul>
        
             <ul v-for="(v,i) in arr2" :key="i" class="uls">
                <li v-for="(v,i) in v.list" :key="i" class="uls_li" @click="fun1(v.content)">{{v.content}}</li>
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
            arr2:[],
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
            var newdata=[]
            for(var i=0;i<this.arr1.length;i++){
                 if(this.arr1[i].title=="皮肤科"){
                     newdata.push(this.arr1[i])
                     this.arr2=newdata
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
            
        },
        fun1(b){
               this.$router.push({path:"/detailDepartment",query:{title:b}})
          },

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
    }
    .uls_li{
        border-bottom: 1px solid #cccccc;
        padding: 10px 0px;
    }
</style>


