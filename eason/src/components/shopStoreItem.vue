<template>
    <div class="shopStore">
        
        <Nav2></Nav2>
        <div class="sec">
            <div class="cart">
            <van-swipe @change="onChange">
                <van-swipe-item><img :src="imgurl"/></van-swipe-item>
                <van-swipe-item><img :src="imgurl"/></van-swipe-item>
                <van-swipe-item><img :src="imgurl"/></van-swipe-item>  
            </van-swipe>
        </div>
        <div class="drugName">
            <h3>{{name}}  {{standards}}</h3>
            <p >{{content}}</p>
            <span>￥{{price}}</span>
        </div>
        <div class="free-Shipping">
            <span><img src="../../static/images/w/ao6.png" >{{shipping}}</span>
            <span><img src="../../static/images/w/ao6.png" >{{normal}}</span>
        </div>
        <div class="choose">
            <h3>{{choosed}}  {{name}}  {{standards}},{{number}}</h3>
            <span><img src="../../static/images/w/ajr.png" ></span>
            
        </div>
        <div class="medicineH" @click="fun()" >
            <h3>{{medicineDetail}}</h3>
            <span><img src="../../static/images/w/ajr.png" ></span>
        </div>
        <div class="shopdetail" v-if="bool">
            <div class="shopdetails" v-for="(v,i) in arr.medicineDetails" :key="i">
            <h4>【{{v.title}}】</h4>
            <p>{{v.content}}</p>
        </div>
        <div class="shopImg">
            <img :src="urlsrc1" />
            <img :src="urlsrc2" />
        </div>
        </div>
        
    </div>

        <Bottombar ></Bottombar>
      
    </div>
</template>
<script>
import Bottombar from "../components/bottombar"
import Nav2 from "../components/nav2"
export default {
    data() {
        return {
            current: 0,
            arr:[],
            imgurl:String,
            name:String,
            standards:String,
            content:String,
            price:String,
            shipping:String,
            normal:String,
            choosed:String,
            number:String,
            medicineDetail:String,
            title:String,
            contents:String,
            urlsrc1:String,
            urlsrc2:String,
            bool:false,
             typeData:[],
            chilkId:0,
            type:""
        }
  },
  methods: {
        onChange(index) {
        this.current = index;
        },
        fun(){
            this.bool=!this.bool;
        }
  },
    components:{
       Bottombar,
       Nav2
    },
    props:{
        
    },
     created(){
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            if(this.type=="shopSrore"){
                this.typeData=ok.data.shopStore;
            }
            this.arr=ok.data
            this.imgurl= this.arr.shopStore.imgurl;
            this.name = this.arr.shopDetails.name;
            this.standards=this.arr.shopDetails.standards;
            this.content = this.arr.shopDetails.content;
            this.price=this.arr.shopDetails.price;
            this.shipping=this.arr.mass.title1;
            this.normal=this.arr.mass.title2;
            this.choosed=this.arr.choose.choosed;
            this.number=this.arr.choose.number;
            this.medicineDetail=this.arr.medicineDetail;
            this.urlsrc1=this.arr.url.urlsrc1;
            this.urlsrc2=this.arr.url.urlsrc2;
            console.log(this.urlsrc1);
        })
    }
}
</script>
<style scoped>
.sec{
    margin-bottom: 50px;
}

.shopStore{
    overflow:auto;
    margin-bottom: 30px;
}
.cart{
    height:310px;
    text-align: center;
    border-bottom:1px solid #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
}
.van-swipe{
    position:static;
    width:100%
}
.van-swipe__indicator--active {
    background-color: #75fb4c;
    opacity: 1;
}
.van-swipe__indicators{
    position: absolute;
    bottom: 0;
    
}
.free-Shipping{
    height:36px;
    background: #fafafa;
    border-bottom:6px solid #f0f0ee;
    padding-left:11px;
    line-height: 42px;
}
.free-Shipping img{
    width:14px;
    height:14px;
    display: inline-block;
    margin-right:4px;
}
.free-Shipping span{
    font-size:14px;
    color:#999999;
    margin-right:18px;    
}
.drugName{
    height:136px;
    margin-top:10px;
     padding:0 11px;

}
.drugName h3{
    font-size:16px;
    color:#323232;
    line-height:36px;
}
.drugName p{
    color:#676767;
    font-size:14px;
}
.drugName span{
    color:#ec6b43;
    font-weight: 600;
    font-size:12px;
    margin-top: 24px;
    display: inline-block;

}
.choose{
    height:44px;
    border-bottom:6px solid #f0f0ee;
    color:#323232;
    font-size:14px;
    padding: 0 11px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.choose span{
    vertical-align: middle;
    width:12px;
    height:12px;
}
.choose img{
    height:14px;
    
}

/* 商品详情 */
.medicineH{
    height:36px;
    border-bottom:1px solid #f4f4f4;
    padding: 0 11px;
     display:flex;
    justify-content: space-between;
    align-items: center;
}
.medicineH h3{
     font-size:16px;
    color:#323232;
    line-height: 36px;
}
.medicineH img{
    height:16px;
}

.shopdetails{
    margin-top:20px;
    padding:0 11px;
}
.shopdetails h4{
    font-size:14px;
    color:#666666;
    margin-bottom:10px;
}
.shopdetails p{
    font-size:14px;
    color:#666666;
    line-height: 20px;
}
.shopImg{
    padding: 0 50px;
}
.shopImg img{
  margin-top:120px;
  width: 100%;
  
}
</style>
