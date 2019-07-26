<template>
<div class="quan">
    <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
    </div>
    <form action="">
    
        <div class="content1">
            <div class="left">
              姓名
            </div>
            
            <div class="reight">
                <input type="text" placeholder="请输入" class="name" v-model='jsondata.lealthName'>
                <!-- <span>{{jsondata.lealthName}}</span> -->
            </div>
        </div>


        <div class="content1">
            <div class="left">
                {{title2}}
            </div>
            
            <div class="reight">
                <!-- <input name="sex" type="radio" checked="checked" @click="fun1()"/>男   
                 <input name="sex" type="radio"  @click="fun2()"/>女 -->
                 <input type="radio" name="radios" value="1" v-model="number" checked><label>男生</label>
                    <input type="radio" name="radios" value="0" v-model="number" checked><label>女</label>
            </div>
        </div>

        <div class="content1">
            <div class="left">
                出生日期
            </div>
            
            <div class="reight">
                <input type="date" placeholder=" " class="infor1" v-model="jsondata.lealthBirth" >

            </div>
        </div>

         <div class="content1">
            <div class="left">
                {{title4}}
            </div>
            
            <div class="reight">
                <input type="text" placeholder="" class="infor4" v-model="userPhone">
            </div>
        </div>
        
        <input type="button" value="保 存" class="submit" @click="modifier()">

    </form>
</div>
</template>
<script>
import Installhead from "../components/Install/Installhead"



export default {
    components:{
        Installhead,
    },
    data(){
        return{
             himg:"../../static/images/w/b1a.png",
            listtitle:"修改个人档案",
            arr:[
                {title:"与您的关系" ,action:"昵称"},
                {title:"隐私协议" ,},

            ],
            title:"与您的关系",
            title1:"姓名",
            title2:"性别",
            title3:"出生日期",
            title4:"手机号码",
            jsondata:[],
            lealthName:"",  
            name:"",
            lealthBirth:"",
            phone:"",
            userPhone:"",
            // sex:"",
            bool:true,
            lealthSex:"",
            number:"",
            userId:"",
            value:"",
            higth:"",
            wight:"",
            Waistline:"",


            
        }
    }

    ,
    created() {
         this.userId=localStorage.getItem('userId');
         this.jsondata=this.$route.query.jsondata,
         this.higth=this.$route.query.height,
         this.wight=this.$route.query.wight,
         this.Waistline=this.$route.query.Waistline,

         console.log( this.Waistline)

          this.userPhone=localStorage.getItem('userPhone');
      
    },
    methods: {
        modifier(){
                //发送男女
           
            
                // console.log(this.lealthSex)
                //  console.log(this.lealthName)
               
          this.axios({
            url:"http://10.12.156.149:8181/lealth/updataLerlth",
            method:"post",
               params:{
                  lealthName:this.jsondata.lealthName,
                   lealthBirth:this.jsondata.lealthBirth,
                    lealthSex:this.number,
                     lealthId:this. userId,
                        lealthHeight:this.higth,
                        lealthWeight:this.wight,
                        lealthWaistline:this.Waistline,
                     
                                         },
                                       
          }).then((ok)=>{
           
              if(ok.data==1){
                  this.$toast('修改成功');
              }else{
                  this.$toast('修改失败请重新修改');

              }
          })
        }
    },
}
</script>
<style scoped>
.quan{
      position: fixed;
        width: 100%;
        height:100%;
        top: 0px;
        background-color: #f7f7f7;
}
.header{
    border-bottom: 1px solid #e9e6e6;
}
.content1{
    display: flex;
    width: 100%;
    height: 40px;
    background: white;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e2e2;
}
.infor4{
    display: block;
    width: 120px;
    font-size: 16px;
}
.left{
    margin-left: 15px;
}
.reight{
    margin-right: 15px;
}
.reight input{
    text-align: center;
    /* width: 100px; */
    /* height: 20px; */
    border:none;
}
.submit{
    width: 75%;
    height: 35px;
    background: #43e263;
    border: none;
    display: block;
    margin:20px auto;
    font-size: 18px;
    color: white;
}
.infor{
    
}
.name{
    width: 60px;
}
</style>

