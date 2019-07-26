<template>
    <div>
         <div v-if="booleans" class="load">加载中</div>
        <div v-else>
        <div class="top_bar">
            <img src="../../static/images/w/b1a.png" class="img1"  @click="fun()"/>
            <form class="form" v-for="(v,i) in newarr2.detailsList" :key="i">
                <img src="../../static/images/w/ard.png" class="img2"/>
                <router-link to="/seek"><input type="search" :placeholder="v.nesName" class="input"/></router-link>
            </form>
        </div>
        <div>
            <P class="tip_p">疾病确诊因人而异，请勿根据搜索结果擅自治疗，如需获取治疗方案和用药指导请向专业医生咨询</P>
            <div v-for="(v,i) in newarr2.detailsList" :key="i" class="title">
                <P>{{v.nesName}}</P>
                <P class="detail">{{v.nesDetails}}</P>
                <div class="title_list">
                     <P>|</P> 
                     <p>就诊科室</p>
                     <P>|</P> 
                     <p>症状</p>
                     <P>|</P> 
                     <p>病因</p> 
                     <P>|</P> 
                     <p>治疗</p>
                     <P>|</P> 
                </div>
            </div>

            <div class="relConsult">
                <P class="relConsult_pp">
                    <span class="relConsult_span1">相关资讯记录</span>
                    <span class="relConsult_span2">更多></span>
                </P>
                <div v-for="(v,i) in newarr2.talks" :key="i">
                   <P class="relConsult_p">
                        <img src="../../static/images/w/b2w.png" class="relConsult_ul_li_img">
                        {{v.userProblem}}
                   </P>
                </div>
            </div>

            <div class="redommandDoc"> 
                <P class="relConsult_pp">
                    <span class="relConsult_span1">医生推荐</span>
                    <span class="relConsult_span2">更多></span>
                </P>
              <div v-for="(v,i) in newarr2.all" :key="i"> 
                   <div class="redommand_img"> 
                         <img :src="v.impSrc"/>
                         <div class="recommand_infor">
                                <P>
                                    <span class="p_span1">{{v.realaName}}</span>
                                    <span>{{v.office}}</span>
                                    <span>{{v.title}}</span>
                                </P>
                                <P>
                                    <span>{{v.hospital}} </span>
                                    <span class="fame">{{'知名医院'}}</span>
                                </P>
                                <P class="specialize">{{v.adept}}</P>   
                                <P>
                                    <span class="price">{{'￥66起'}}</span>
                                    <span>{{'3323人购买'}}</span>
                                </P>
                         </div>     
                    </div>
                </div>  
            </div>

            <div v-for="(v,i) in newarr1" :key="i" class="cure">
                <P>可能的治疗方法</P>
                <ul v-for="(v,i) in v.mayMethod" :key="i">
                    <li>
                        <span>{{v.list}}</span>
                        <span class="mention">{{v.mention}}</span>
                    </li>
                </ul>
            </div> 
            
           <div class="topic" >
                 <P class="relConsult_pp">
                    <span class="relConsult_span1">医生话题</span>
                    <span class="relConsult_span2">更多></span>
                </P>
                <ul >
                    <li v-for="(v,i) in newarr2.topicBydoctorName" :key="i">{{v.name}}
                        <span class="span1">></span>
                    </li>
                </ul>
                
            </div> 
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newarr1:[],
            newarr2:[],
             boolean:''
        }
    },
    created() {
        this.axios({
            url:"/automenu/easonNew",
            method:"get" 
        }).then((ok)=>{
            var data =ok.data.diseaseLibirary[0].list
            var arr=data.filter((v,i)=>{
                if(v.content==this.$route.query.title){
                    return v
                }
            })
            this.newarr1=arr
            console.log(this.newarr1)
        }),
        this.axios({
            url:"http://10.12.156.149:8181/illness/findByNesDetails",
            //这步是通过接受到的关键字来请求数据
            params:{nesDetails:this.$route.query.nesDetails},
            method:"get" 
        }).then((ok)=>{
            this.newarr2=ok.data
            console.log(ok.data)
        })
    },


     methods: {
         fun(){
            this.$router.go(-1) 
         }
   },
    computed: {
             booleans(){
                 if(this.newarr2==''){
                     this.boolean=true
                 }else{
                     this.boolean=false
                 }
                 return this.boolean
             }
         },
}
</script>
<style scoped>
    /* top_bar */
    .top_bar{
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top: 0px;
        margin-bottom: 100px;
        background: white;
    }
    .top_bar .img1{
        width:15px;
        height: 20px;
        margin-right: 20px;
    }
    .top_bar .img2{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10px;
        top: 5px;
    }
    .form{
        width:100%;
        position: relative;
    }
    .input{
       width: 300px;
       height: 30px;
       display: block;
       border:1px solid #d7d5d5;
       border-radius: 10px;
       background: white;;
    }
     input::-webkit-input-placeholder{
         text-indent: 35px;
     }
     .van-field__control{
        background-color: #e9e9e9
    }
    .van-search__action{
        color: #747577;
    }
    .van-search{
        padding: 10px 10px;
    }
  .van-search__content{
        border-radius: 30px;
    }
    /* tip_p */
    .tip_p{
        background: #fdf8f2;
        color:#f8cea8;
        padding: 20px 10px;
        position: fixed;
        top: 40px;
        background: white;
        margin:0px;
    }
    .detail{
        color: #4e4e4e;
        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    /* title */
    .title{
        padding: 0px 10px;
        border-bottom: 6px solid #f1f1f1;
        margin-top: 120px;
        z-index: 1;
    }
    .title span{
        width: 100px;
    }
    .title_list{
        display: flex;
        justify-content: space-around;
        margin: 10px 0px;
    }
    .title_list p:nth-child(n){
        color: #f4f4f4;
    }
    .title_list p:nth-child(2n){
    color: #666666;
    }
    /* relConsult */
    .relConsult{
        padding: 0px 10px 10px;
        border-bottom: 6px solid #f1f1f1;
    }
    .relConsult_p{
        margin: 5px 0px;
    }
     .relConsult_pp{
        margin: 10px 0px 0px;
    }
    .relConsult_span1{
        color:black;
        font-weight: bold;
    }
    .relConsult_span2{
        float: right;
        color: #c2c2c2;
    }
    .relConsult_ul_li_img{
        width: 18px;
        height:18px;
        margin-top: 15px;
        margin-right: 8px;
    }
    /* redommand */
    .redommandDoc{
        padding: 0px 10px 10px;
        border-bottom: 6px solid #f1f1f1;
        height: 282px;
        overflow: hidden;
    }
   
     .redommand_img{
         display: flex;
         justify-content: space-around;
         margin:5px 0px;
     }
    .redommand_img img{
        width:80px;
        height: 80px;
        margin-right: 20px;
    }
    .recommand_infor p{
        font-size: 14px;
        margin: 0px 0px 5px;
        color: 6e6e6e；
    }
    .p_span1{
        color: #323232;
        font-weight: bold;
        font-size: 16px;
    }
    .fame{
        color:#ffa800;
    }
    .specialize{
        font-size:12px;
        color: #999999;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .price{
        color:#ff8259;
        margin-right: 5px;
    }
    .cure{
        padding: 0px 10px 10px;
        border-bottom: 6px solid #f1f1f1; 
    }
     .cure li{
         border-bottom: 1px solid #f4f4f4;
         padding: 10px 0px;
     }
    .mention{
        float: right;
        color: #999999;
        font-size: 14px;
    }
    /* topic */
    .topic{
         padding: 0px 10px 10px;
         border-bottom: 6px solid #f1f1f1; 
    }
     .topic li{
          border-bottom: 1px solid #f4f4f4;
         padding: 10px 0px; 
     }
     .topic .span1{
         float: right;
         color: #666666;
     }
      .load{
         font-size: 30px;
         text-align: center;
     }
</style>


