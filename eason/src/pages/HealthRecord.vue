<template>
 <div class="quan">
    <div class="header">
        <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
    </div>

    <div class="person" @click="funmodfiy()">
        <div class="left">
            <div class="imgs">
                <img :src="getuserIMG" alt="">
            </div>
            <div class="titlename">
                <div><span>{{jsonp.lealthName}}</span></div>
                <div><span>{{jsonp.lealthSex}}</span> </div>
            </div>
        </div>
        <div class="reight">
            <img :src="rimg" alt="">
        </div>
    </div>


    <div class="content">
    <van-tabs v-model="activeName"  line-width="33.3%" title-active-color="#6bce72" line-height="2px"
   :animated="ceshi" color="#6bce72">
  <van-tab title="个人资料" name="a">
      <div class="contentlist1">
          <div class="center1">
             <div>身高</div>
             <input type="text" placeholder="请选择" v-model="jsonp.lealthHeight">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>体重</div>
             <input type="text" placeholder="请选择" v-model="jsonp.lealthWeight">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>腰围</div>
             <input type="text" placeholder="请选择" v-model="jsonp.lealthWaistline">
          </div>
      </div>

<div class="footer">
      <div class="contentlist1">
          <div class="center1">
             <div>是否有过敏史</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>对什么过敏</div>
             <input type="text" placeholder="请填写">
          </div>
      </div>

     </div>

  </van-tab>
  <van-tab title="生活习惯" name="b">
 <div class="contentlist1">
          <div class="center1">
             <div>抽烟</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>饮酒</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>饮食是否规律</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>睡眠是否规律</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>

      <div class="contentlist1">
          <div class="center1">
             <div>大小便是否正常</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>
      <div class="contentlist1">
          <div class="center1">
             <div>是否长期服用止疼药或者镇定催眠药</div>
             <input type="text" placeholder="是/否">
          </div>
      </div>

    
 </van-tab>
  <van-tab title="专属病例" name="c">
     <div class="self">
        <div class="contentlist1">
          <div class="center1" @click="funz()">
             <div>孕产信息</div>
             <div>
                 <img :src="rimg" alt="">
             </div>
          </div>
        </div>

        <div class="contentlist1" @click="funy()">
          <div class="center1" >
             <div>健康历史</div>
             <div>
                 <img :src="rimg" alt="">
             </div>
          </div>
        </div>

        <p>我的病程</p>

        <div class="txt">
            {{txt}}
        </div>
    
    </div> 


  </van-tab>
</van-tabs>

    </div>
</div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
export default {
    components:{
      Installhead  
    },
    data(){
        return{
            //  activeName: 'a',
            himg:"../../static/images/w/b1a.png",
            rimg:"../../static/images/w/b2o.png",
            listtitle:"健康档案",
            arr1:[
                // {title:"身高",value:""}
            ],
            txt:"你的具体病程由医生为您添加",
            getuserIMG:"",
             userId:"",
             jsondata:"",
             jsonp:"",
             activeName:"",
             active: 1,
            //  swipeable:"",
            ceshi:true,
            
        }
    },
    methods: {
          funmodfiy(){
             
           
            //   console.log(this.userId)
              this.axios({
                  url:"http://47.95.140.83:8181/lealth/findByid",
                    method:"post",
                     params:{
                        lid:this.userId,
                      }
                 }).then((ok)=>{
                     console.log(ok)
                    this.$router.push({path:"/ModifyPersonalInformation",query:{jsondata:ok.data,height:this.jsonp.lealthHeight,wight:this.jsonp.lealthWeight,Waistline:this.jsonp.lealthWaistline}})
              })
         
          
        },
          funz(){
              this.$router.push({path:"/Maternityinformation"})
          
        },
         funy(){
              this.$router.push({path:"/HealthHistory"})    
          
        },
          home(){
      this.$router.push("/home");
    }
        
    },
    created() {
            //回踢效果
            let id = localStorage.getItem("userId");
            if(id==null){
            this.$router.push("/logon")    
        }else{
                    this.userId=localStorage.getItem('userId')
        this.getuserIMG=localStorage.getItem('userImg');
        this.axios({
                  url:"http://47.95.140.83:8181/lealth/findByid",
                    method:"post",
                     params:{
                        lid:this.userId,
                      }
                 }).then((ok)=>{
                     this.jsonp=ok.data
                     console.log(ok.data)
              })
        }

       
    },

}
</script>
<style scoped>
.homeback{
  margin-left: 8px;
    color: rgb(39, 224, 39);
}
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #faf7f7;
}
body{
    background-color: red;
}
.header{
    border-bottom: 1px solid #c6c5c5;
}
.person{
    width: 100%;
    height: 100px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    display: flex;
    align-items: center;
}
.imgs{
    width: 70px;
    height: 70px;
  
   background: url("../../static/images/w/ab7.png")no-repeat center top;
  background-size: 70px 70px;
    border-radius: 50%;
   
    margin-left: 15px;


}
.imgs img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.titlename{
    margin-left: 15px;
}
.titlename div span{
    font-size: 15px;
}
.titlename div:nth-child(1){
   font-weight: 600;
}
.titlename div:nth-child(2){
    color: #c9c9c9;
}
.reight{
    margin-right: 15px;
}
.reight img{
    width: 12px;
    height: 24px;
}
.content{
    margin-top: 15px;
    
}
.contentlist1{
    width: 100%;
    height:50px;
    border-top: 1px solid #e4e3e3;
    background: white;
    /* align-items: center */
    
}
.center1{
    width: 95%;
    height:50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.center1 input{
    width: 60px;
    height: 30px;
    border:none;

}
.center1 img{
    width: 11px;
    height: 20px;
    margin-right: 12px;
}
.footer{
    margin-top: 15px;
}
.self p{
    font-size: 15px;
    color: #858585;
    margin-left: 15px;
}
.txt{
    width: 100%;
    height: 305px;
    background: white;
    color: #c6c5c5;
    text-align: center;
    /* margin: auto; */
}
</style>
