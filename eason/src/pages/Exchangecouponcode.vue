<template>
    <div class="quan">
       <div class="header">
           <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
        </div> 
        <form action="">
            <input type="text" class="txt" placeholder="">
            <input type="button" value="兑  换" class="button">
        </form>

<div class="conten">
    <h4>{{title}}</h4>
    <p>{{txt1}}</p>
    <p>{{txt2}}</p>
    <p>{{txt3}}</p>
    <p>{{txt4}}</p>
     <p>{{txt5}}</p>

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
            imgs:"../../static/w/ay9.png",
            himg:"../../static/images/w/b1a.png",
           
            listtitle:"兑换优惠券",
            title:"兑换规则",
            txt1:"1.支持通过优惠码兑换区优惠券)和问诊卡总换金);",
            txt2:"2.总换得到的《优惠券)可以在“个人中心→我的优惠券”中查看;您可以通过优惠券描述，了 解如何使用",
            txt3:";3.总换得到的区问诊卡总换金)可以在“个人中心一账户余额”中查看;",
            txt4:"4.每个优惠码，仅支持兑换一次",
            txt5:"5.如有任何疑问，请及时与春雨医生工作人员联系"
        }
    },
    methods: {
       
    },
}
</script>
<style scoped>
.quan{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #faf9f9;
}
form{
    display: block;
    width: 100%;
    margin-top: 40px
}

.txt{
    display: block;
    width: 80%;
    height: 35px;
    margin: 15px auto;
    border-radius: 6px;
    border: none;
    background: white;
    text-align: center;
    caret-color:#20c02d;
}
.button{
    display: block;
    width: 80%;
    height: 37px;
    margin: 20px auto;
    border: none;
    background: #0ee17b;
    font-size: 17px;
     color:white;
}
.conten{
    width: 88%;
    margin: 30PX auto;
    color: #b3b3b3;
}
.conten h4{
    width: 100%;
    height: 30px;
    font-weight: 100;

}
.conten p{
    width: 100%;
    line-height: 24px;
    text-indent: 15px;
}
</style>
