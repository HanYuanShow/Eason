<template>
    <div>
        <div v-if="bool1" class="loading">
            <van-loading type="spinner" color="#6bce72" />
        </div>
        <div v-else>
            <!-- 导航 -->
            <div class="topbox">
                <div class="daohang">
                    <van-icon name="arrow-left" class="leftarrow" @click="back()"/>
                    <img src="../../static/images/a/share.png" class="share">
                </div>
            </div>
            <!-- 医生信息绿色 -->
            <div class="doctorbox" @click="DoctorIntroduce()">
                <div class="headpic"><img :src="this.newarr.impSrc" class="doctorheadpic"></div>
                <div class="doctorintro">
                    <ul>
                        <li>
                            <h4 class="doctorname">{{this.newarr.realaName}}</h4>
                        </li>
                        <li class="doctorkind">
                            {{this.newarr.office}} {{this.newarr.title}}
                        </li>
                        <li class="doctorlabel">
                            <span class="label">知名医院</span>
                            <span class="label">从业14年</span>
                            <span class="label">北京市</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <van-icon name="arrow" class="rightarrow"/>
                </div>
            </div>
            <!-- 咨询信息 -->
            <div class="doctorconsult">
                <span>
                    <div>
                        <p class="num">{{this.newarr.peopleNumint}}</p>
                        <span class="per">次</span>
                    </div>
                    <p class="context">咨询人数</p>
                </span>
                <span>
                    <div>
                        <p class="num">{{this.newarr.goodRateint}}</p>
                        <span class="per">%</span>
                    </div>
                    <p class="context">好评率</p>
                </span>
                <span>
                    <div>
                        <p class="num">{{this.newarr.degreeint}}</p>
                        <span class="per">分</span>
                    </div>
                    <p class="context">同行认可</p>
                </span>
            </div>
            <!-- 轮播图类 -->
            <div class="lunbox">
                <div class="lun">
                    <ul>
                        <li :class="{newlunli:newindex==i}" class="lunli" v-for="(v,i) in consultarr" :key="i" @click="lunli(i,v.title,v.price)">
                            <p class="lunp">{{v.title}}</p>
                            <img :src="v.imgurl" class="lunpic">
                            <p class="lunp">{{v.price==null?'暂未开通':'￥'+v.price+'元/次'}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <!-- 热度咨询 -->
        <div>
            <div class="goodat">
                <p class="goodatp">热度咨询</p>
                <van-icon name="arrow" class="right"/>
            </div>
            <div class="goodattext">
                <DoctorByDiscuss></DoctorByDiscuss>
            </div>
        </div>
        <hr/>
        <!-- 执业医院 -->
        <div>
            <div class="goodat">
                <p class="goodatp">执业医院</p>
            </div>
            <div class="goodattext">
                {{this.newarr.hospital}}
            </div>
            <hr/>
            <!-- 医生话题 -->
            <div>
                <div class="goodat">
                    <p class="goodatp">医生话题</p>
                    <van-icon name="arrow" class="right"/>
                </div>
                <div class="goodattext huati">
                  <DoctorByTopic></DoctorByTopic>
                </div>
            </div>
            <hr/>
            <!-- 医生寄语 -->
            <div>
                <div class="goodat">
                    <p class="goodatp">医生寄语</p>
                </div>
                <div class="goodattext jiyu">
                    {{this.newarr.sendWord}}
                </div>
            </div>
        </div>
        <hr/>
        <!-- 底部关注栏 -->
        <!-- <div class="bottomnav">
            <div class="guanzhu">
                <div :class="style?'star':'newstar'" @click="guanzhu()" v-if="bool"></div>
                <div :class="style?'star':'newstar'" @click="Closeguanzhu()" v-else></div>
                <span class="guanzhutxt">{{style?"关注":"已关注"}}</span>
            </div>
            <div class="zixunbtn">{{newprice==null?'暂未开通':newtitle+'(￥'+newprice+'元/次)'}}</div>
        </div> -->
         <!-- 底部关注栏 -->
        <div class="bottomnav">
            <div class="guanzhu">
                <div :class="style?'star':'newstar'" @click="guanzhu()" v-if="bool"></div>
                <div :class="style?'star':'newstar'" @click="Closeguanzhu()" v-else></div>
                <span class="guanzhutxt">{{style?"关注":"已关注"}}</span>
            </div>
            <div class="zixunbtn">{{newprice==null?'暂未开通':newtitle+'(￥'+newprice+'元/次)'}}</div>
        </div>

    </div>  
</template>

<script>
import DoctorByTopic from "../components/DoctorByTopic"
import DoctorByDiscuss from "../components/DoctorByDiscuss"
export default {
    data() {
        return {
            consultarr:[
                {title:"图文咨询",imgurl:"../../static/images/a/z1.png",price:''},
                {title:"电话咨询",imgurl:"../../static/images/a/z2.png",price:''},
                {title:"私人医生",imgurl:"../../static/images/a/z3.png",price:''},
                {title:"院后指导",imgurl:"../../static/images/a/z4.png",price:''},
                {title:"预约就诊",imgurl:"../../static/images/a/z5.png",price:''},
                {title:"视频咨询",imgurl:"../../static/images/a/z6.png",price:''}
            ],
            newindex: 0,
            style:true,
            newtitle:'',
            newprice:'',
            newid:'',
            newarr:[],
            userid:0,  //用户id
            bool:true,
            bool1:true
        }
    },
    created(){
        // 显示第一个按钮咨询方式title
        this.newtitle=this.consultarr[0].title;
        // ------------------------------------
        // 接收各个医生列表传的医生id
        this.newid=this.$route.params.id;
        this.axios({
            url:"http://10.12.156.39:8181/Doctorin/findById?id="+this.newid,
            method:"get"
        }).then((ok)=>{
            this.newarr=ok.data.Doctorinfor;
            if(this.newarr==''){
                this.bool1=true
            }else{
                this.bool1=false
            }
            this.consultarr[0].price = this.newarr.printreferint;
            this.consultarr[1].price = this.newarr.phonereferint;
            this.consultarr[2].price = this.newarr.privaterferint;
            this.consultarr[3].price = this.newarr.backyardint;
            this.consultarr[4].price = this.newarr.printreferint;
            this.consultarr[5].price = this.newarr.phonereferint;
            // 显示第一个按钮价格price 位置不能变 一定要在this.consultarr[0]之后
            this.newprice=this.consultarr[0].price;
        })
        // -----------------------------------------
        this.userid = localStorage.getItem("userID");

        //判断用户是否已经关注医生
        //发送 用户id  userid 医生id  newid
        this.axios({
            url:"http://10.12.156.83:8181/doctorTopic/isFollowDoctor/"+this.userid +"/"+this.newid,
            method:"get"
        }).then((ok)=>{
            if(ok.data==true){
                //关注 style = true
                this.style=false;
            }else if(ok.data==false){
                this.style=true;
            }
        })
    },
    methods: {
        lunli(i,title,price){
            this.newindex=i;
            this.newtitle=title;
            this.newprice=price;
        },
        DoctorIntroduce(){
            this.$router.push({
                path:"/DoctorIntroduce",
                query:{newarr:this.newarr}
                })
        },
        guanzhu(){
            //关注 用户id 医生id
            this.style=!this.style;

            this.axios({
                url:"http://10.12.156.83:8181/doctorTopic/followDoctor/"+this.userid +"/"+this.newid,
                method:"get",
            })
            this.bool=false;
            
        },
        Closeguanzhu(){
            //取消关注
                 this.style=!this.style;
             this.axios({
                url:"http://10.12.156.83:8181/doctorTopic/reverseFollowDoctor/"+this.userid +"/"+this.newid,
                method:"get",
            })
            this.bool=true;
        },
        back(){
            this.$router.go(-1);
        }
    },
    components:{
        DoctorByTopic,
        DoctorByDiscuss
    }
}
</script>

<style scoped>
.loading{
    height: 100px;
    text-align: center;
    padding-top: 50px;
}
.doctorheadpic{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #cdcdcd;
}
.guanzhutxt{
    display: block;
    font-size: 12px;
    color: #666666;
}
.star{
    width: 100%;
    height:24px;
    background:url(../../static/images/a/star.png) no-repeat 50% 0;
    background-size: 24px;
}
.newstar{
    width: 100%;
    height:24px;
    background:url(../../static/images/a/star1.png) no-repeat 50% 0;
    background-size: 24px;
}
.bottomnav{
    display: flex;
    position: sticky;
    bottom: 0px;
}
.guanzhu{
    width: 30%;
    padding: 3px 0 1px;
    text-align: center;
    background: #ffffff;
}
.zixunbtn{
    background: #69cc75;
    flex: auto;
    padding: 5px 10px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    line-height: 30px;
}
hr{
    height: 8px;
    background: #f0f0ee;
    border: none;
}

.goodat{
    display: flex;
    justify-content: space-between;
    padding: 15px;
}
.goodatp{
    font-size: 14px;
    color: #666666;
}
.goodattext{
    font-size: 14px;
    color: #666666;
    padding: 0 15px 15px;
}
.huati{
    color: #323232;
}
.jiyu{
    color: #323232;
    font-size: 15px;
}
.goodatcontent{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.right{
    color: #e0e0e0;
    /* vertical-align: middle; */
}
.lunbox{
    margin: 15px 15px;
    overflow: auto;
}
.lun{
    width:700px;
    text-align: center;
    /* padding: 10px; */
}
.lunli{
    width: 86px;
    float: left;
    padding: 5px 0;
}
.newlunli{
    width: 86px;
    background: #dbf4e1 url(../../static/images/a/okgreen.png) no-repeat 70px 3px;
    background-size: 12px;
    float: left;
    padding: 5px 0;
    border-radius: 5px;
}
.lunp{
    font-size: 12px;
    color: #c1c1c1;
}
.lunpic{
    width: 25px;
    height: 25px;
    margin: 5px 0;
}
.rightarrow{
    font-size: 14px;
    color: #ffffff;
    padding-top: 30px;
}
.num{
    float: left;
    font-size: 16px;
    color: #ffffff;
    font-weight: 800;
}
.context{
    font-size: 12px;
    color: #ffffff;
    margin-top: 5px;
}
.per{
    font-size: 12px;
    color: #ffffff;
}
.doctorconsult{
    display: flex;
    justify-content: space-around;
    background: #69cc75;
    text-align: center;
    padding: 10px 0 15px;
}
.topbox{
    background: #69cc75;
    padding: 10px 15px 10px 10px;
}
.daohang{
    display: flex;
    justify-content: space-between;
}
.leftarrow{
    font-size: 22px;
    color: #ffffff;
}
.share{
    width: 22px;
    height: 22px;
}
.doctorlabel{
    line-height: 30px;
    padding-bottom: 5px;
}
.label{
    padding: 2px 5px;
    font-size: 12px;
    color: #69cc75;
    background: #ffffff;
    border-radius: 2px;
    margin-right: 5px;
    font-weight: 800;
}

.okok{
    font-size: 14px;
    color: #666666;
    font-weight: 800;
}
.doctorhospital{
    font-size: 14px;
    color: #666666;
}
.doctorname{
    margin-right: 20px;
    font-weight: 800;
    color: #ffffff;
}
.doctorkind{
    font-size: 14px;
    color: #ffffff;
    font-weight: 800;
}
.doctorbox{
    display: flex;
    background: #69cc75;
    padding: 0 10px;
}
.headpic{
    width: 25%;
    border-radius: 0 0 0 5px;
    text-align: center;
}
.doctorintro{
    line-height: 25px;
    width: 70%;
}
</style>
