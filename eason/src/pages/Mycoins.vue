<template>
    <div>
       <div class="header">
           <Installhead :himg="himg" :headtitle="listtitle"  :righttitle="righttitle"></Installhead>
        </div> 
        <div class="maryg">
            <h1>{{userBalance}}</h1>
            <h4>{{jb}}</h4>
            <p><span>{{zhuanjinbi}}</span> <span>{{zhuanquyouohuiquan}}</span></p>
        </div>
        <div class="centerlist">
            <p>金币明细</p>
        </div>
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
            himg:"../../static/images/w/a63.png",
            listtitle:"我的金币",
            righttitle:"金币规则",
            m:"0.00",
            jb:"金币",
            zhuanjinbi:"赚取金币>",
            zhuanquyouohuiquan:"优惠券兑换>",
            userBalance:"",
            
        }
    },
    methods: {
    },
    created() {
          let id = localStorage.getItem("userId");
        if(id==null){
            this.$router.push("/logon")
        }else{
               this.userBalance = localStorage.getItem('userBalance')
        }
      
    },
}
</script>
<style scoped>

.content1{
    margin-top: 15px;
}
.maryg{
    width: 100%;
    height: 200px;
    /* background:#fd7c89; */
     background: url('../../static/images/w/a96.9.png') no-repeat center top;
}
.maryg h1{
    text-align: center;
    /* font-weight: 100; */
    padding-top: 30px;
    color: white;
    font-size: 36px;
}
.maryg h4{
    text-align: center;
    font-size: 18px;
    color: white;
    margin: 5px;
}
.maryg p{
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
p span{
    display: block;
    width: 100px;
    height: 27px;
    border: 1px solid white;
    border-radius: 14px;
    text-align: center;
    line-height: 27px;
    color: white;
    margin: 15px;

}
.centerlist p{
    width: 90%;
    margin: 15px auto;
    color: #777777;
}
</style>
