<template>
    <div>
        <van-nav-bar
            title="购物车"
            left-text="返回"
            :right-text="deleteStatus ? '完成' : '编辑'"
            left-arrow
            @click-left="onClickLeft"
            @click-right="deleteStatus = !deleteStatus" 
            />
            
            <div v-for="(v,i) in dingdanarr" :key="i" >
                 <van-card
                         :num="v.drugnum"
                        :price="v.druginfor.drugPrice"
                        :title="v.druginfor.drugName"
                        :thumb="v.druginfor.drugImg" 
              >
                <div slot="footer">
               <!-- <van-stepper v-model="value" integer  @plus="onPlus" @minus="onMinus"/> -->
                 
            <div v-if="deleteStatus">
                 <van-button size="mini"  @click="deleteItem(v)">删除
                 </van-button>
                 <van-checkbox :change="checkBtn" v-model="v.checked"></van-checkbox>
            </div>
                
                 <div v-else>
                     <van-button size="mini" @click="onPlus(v, i)">+</van-button>
                     <van-button  :disabled="minitBool" size="mini" @click="onMinus(v,i)">-</van-button>
                     <van-checkbox  :change="checkBtn" v-model="v.checked"></van-checkbox>
                 </div>
                </div>
          </van-card>
          <div>
              <div>
                   <van-submit-bar
                   
                    :price="total*100"
                    :button-text="deleteStatus?'删除':'结算'"
                    @submit="onSubmit"
                    >
            
            <van-checkbox  :change="allBut" v-model="che">全选</van-checkbox>
            </van-submit-bar>
              </div>
             
            
          </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
        deleteStatus: false,
         checked:false,
         allChecked:false,
         value:1,
         radio: 0,
         bool:false,
         tatal:0,
         url:String,
       minitBool:false,
       deleteBool:false,
         dingdanarr:[],
         arraddress:'',
         userids:0,
         che:""
        }
    },
    methods: {
        allBut(){
            // this.checked = !this.checked;
        },
        checkBtn(index){
             this.dingdanarr[index].checked = !this.dingdanarr[index].checked
        },
        // 删除单个数据
        deleteItem(val) {
            // console.log(v, i)
            var param=new URLSearchParams();
            console.log(this.dingdanarr)
            this.axios({
            url: 'http://47.95.140.83:8181/shopcart/deletedrug',
            method: 'post',
            params:{
                userid:val.userId,
                drugid:val.druginfor.drugId
            }
            }).then((res) => {
                this.reload();
                // console.log(1111, res);
            
            }).catch((err) => {
                console.log(err)
            })
        },
    
        onClickLeft(){
            this.$router.go(-1)
        },
         onClickRight(){
            
        },
        butfun1(){
        this.cartbool=false
        
        },
        // 结算按钮
        onSubmit(){
            var param=new URLSearchParams();
            // console.log(this.button-text)
            param.append("userid",this.userids)
            // console.log( 333333,this.userids)
           
        
                this.$router.push({
                path:"/address",
                query:{total:this.total,userid:this.userids}
                })
            
             
        },
        fun(){
        this.bool=!this.bool
        },
        // 增加商品
        onMinus(v, i){
            // v.drugnum > 1 && v.drugnum--;
            if( v.drugnum==1){
                this.minitBool=!this.minitBool
            }else if( v.drugnum > 2){
                v.drugnum--;
                 var param=new URLSearchParams();
            param.append("userid",v.userId)
            param.append("drugid",v.druginfor.drugId)
            this.axios({
            url: 'http://47.95.140.83:8181/shopcart/reducedrug',
            method: 'post',
            data: param
            }).then((res) => {
                // console.log(666, res);
            
            }).catch((err) => {
                console.log(err)
            })
            }
           

        },
        onPlus(v, i){
            v.drugnum++
            var param=new URLSearchParams();
            param.append("userid",v.userId)
            param.append("drugid",v.druginfor.drugId)
            this.axios({
            url: 'http://47.95.140.83:8181/shopcart/adddrug',
            method: 'post',
            data: param
            }).then((res) => {
                // console.log(888, res);
            
            }).catch((err) => {
                console.log(err)
            })
            
        },
        reload(){
             this.userids=this.$route.query.userid;
            this.axios({
            url: 'http://47.95.140.83:8181/shopcart/shopingcart?userId='+this.userids,
            method: 'get',
               
            }).then((res) => {
                // console.log(res);
                this.dingdanarr=res.data
                console.log(this.dingdanarr)
                // this.drugid=this.dingdanarr.druginfor.drugId
            }).catch((err) => {
                console.log(err)
            })
        }
  },
    
    created(){
        //  userId = localStorage.getItem('userId')
          this.reload()
        },
     computed: {
        total(){
            // this.tatal = 0;
            for(let i = 0;i<this.dingdanarr.length;i++){
                if(this.che == true){
                    this.dingdanarr[i].checked = true
                    this.tatal += this.dingdanarr[i].druginfor.drugPrice*this.dingdanarr[i].drugnum
                }else{
                    this.dingdanarr[i].checked = false
                    this.tatal = 0
                }
            }
            return this.tatal
        },
    },
    watch: {
        checked(val){
            if(val===true){
                for(let i = 0;i<this.dingdanarr.length;i++){
                    this.dingdanarr[i].checked = true
                }
            }else{
                for(let i = 0;i<this.dingdanarr.length;i++){
                    this.dingdanarr[i].checked = false
                }
            }
        },

    },
    
}
</script>
<style scoped>
 .van-nav-bar {
    background-color:#fbfbfb;
    }
    .van-nav-bar .van-icon {
        color:#6bce72;
        font-weight: 600;
    }
    .van-nav-bar__text{
       color:#6bce72;
         font-weight: 600;
         font-size: 16px;
    }
    .van-nav-bar__title{
        color: #343434;
        font-weight: 600
    }
    /* 购物车 */
    .van-card__title{
        margin-top:20px;
    }
    .van-card__price{
        margin-top: 30px;
    }
    .shopBtn button{
        width: 30%;
        height: .26rem;
        background: white;
    }
     .jian{
        border: 2px solid #E3E3E3;
        border-right: 0px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .add{
        border: 2px solid #E3E3E3;
        border-left: 0px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
</style>
