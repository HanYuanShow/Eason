<template>
    <div class="shopStore">
        
        <Nav2></Nav2>
        <div class="sec">
            <div class="cart" >
            <van-swipe @change="onChange">
                <van-swipe-item><img :src="asyncData.drugImg"/></van-swipe-item>
                <van-swipe-item><img :src="asyncData.drugImg"/></van-swipe-item>
                <van-swipe-item><img :src="asyncData.drugImg"/></van-swipe-item>  
            </van-swipe>
        </div>
        <div class="drugName" >
            <h3>{{asyncData.drugName}}  {{asyncData.drugStandard}}</h3>
            <p>{{asyncData.drugFunction}}</p>
            <span>￥{{asyncData.drugPrice}}</span>
        </div>
        <div class="free-Shipping">
            <span><img src="../../static/images/w/ao6.png" >满99元包邮</span>
            <span><img src="../../static/images/w/ao6.png" >正品保证</span>
        </div>
        <div class="choose">
            <h3>已选  {{asyncData.drugName}}  {{asyncData.drugStandard}}</h3>
            
        </div>
        <div class="medicineH" @click="fun()" >
            <h3>商品详情</h3>
            <span><img src="../../static/images/w/ajr.png" ></span>
        </div>
        <div class="shopdetail" v-if="bool" >
            <div class="shopdetails">
                <h4>【药品成分】</h4>
                <p>{{details.drugElement}}</p>
            </div>
            <div class="shopdetails">
                <h4>【药品成分】</h4>
                <p>xxxxx</p>
            </div>
            <div class="shopdetails">
                <h4>【主治功能】</h4>
                <p>{{ details.drugFunction}}</p>
            </div>
            <div class="shopdetails">
                <h4>【用法用量】</h4>
                <p>{{ details.drugUsage}}</p>
            </div>
            <div class="shopdetails">
                <h4>【药品性状】</h4>
                <p>{{ details.drugStandard}}</p>
            </div>
            <div class="shopdetails">
                <h4>【不良反应】</h4>
                <p>药不能乱吃</p>
            </div>
        <div class="shopImg">
            <img :src="asyncData.drugImg" />
            <img :src="asyncData.drugImg" />
        </div>
        </div>
        
    </div>

        <Bottombar :price="asyncData.drugPrice" :url="asyncData.drugImg"></Bottombar>
      
    </div>
</template>
<script>
import Bottombar from "../components/bottombar"
import Nav2 from "../components/nav2"
export default {
    data() {
        return {
            asyncData: '',
            current: 0,
            arr:[],
            imgurl:String,
            name:String,
            standards:String,
            content:String,
            price:Number,
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
            type:"",
            drugId:"",
            details: ''
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
     created(){
          this.drugid=this.$route.query.drugid;
          this.axios({
                url:"http://47.95.140.83:8181/drug/findallbyid?drugid="+ this.drugid,
                method:"get"
            }).then((ok)=>{
                this.asyncData=ok.data;
                // console.log(this.arr)
            })
            this.axios({
                url:"http://47.95.140.83:8181/drug/findall?drugid="+ this.drugid,
                method:"get"
            }).then((ok)=>{
                this.allDrugArr=ok.data;
                console.log( this.allDrugArr)
                const result =  this.allDrugArr.druginfor.find((item)=>{
                    return item.drugId === Number(this.drugid)
                })
                this.details = result
                console.log(result)
            })
        
    },
    
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
    overflow:hidden;
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
