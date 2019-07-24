<template>
    <div>
        <div v-for="(v,i) in newarr" :key="i">
            <div class="sym_top">
                <van-nav-bar :title="v.title" fixed="" left-text="" left-arrow @click-left="back()" @click-right="search()">
                </van-nav-bar>
            </div>
            <div>
                <div class="sym_per">
                    <div class="sym_per_tit">
                        <span>自己</span>，
                        <span>{{v.personInfor.gender}}</span>,
                        <span>{{v.personInfor.age}}</span>
                    </div>
                </div>

                <div class="mayResult">
                    <div class="result">
                         <P>可能的患病结果</P>
                        <div class="tip">疾病确诊因人而异，以下结果仅供参考。您还可以详述自身症状。去听听医生怎么说>></div>
                    </div>
                    <div class="rate">
                        <div class="rate_list1">
                            <span>多食症</span>
                            <span class="rate_list1_span">38.0%相似病例</span>
                            <van-progress
                                pivot-text=""
                                color="#76d138"
                                :percentage="38.0"
                            />
                        </div>
                        <div class="rate_list1">
                            <span>肥胖症及营养过度</span>
                            <span class="rate_list1_span">36.0%相似病例</span>
                            <van-progress
                                pivot-text=""
                                color="#76d138"
                                :percentage="36.0"
                            />
                        </div>
                         <div class="rate_list1">
                            <span>心境障碍（情感障碍）</span>
                            <span class="rate_list1_span">14.0%相似病例</span>
                            <van-progress
                                pivot-text=""
                                color="#76d138"
                                :percentage="14.0"
                            />
                        </div>
                         <div class="rate_list1">
                            <span>糖尿病</span>
                            <span class="rate_list1_span">9.0%相似病例</span>
                            <van-progress
                                pivot-text=""
                                color="#76d138"
                                :percentage="9.0"
                            />
                        </div>
                         <div class="rate_list1">
                            <span>精神分裂症</span>
                            <span class="rate_list1_span">4.0%相似病例</span>
                            <van-progress
                                pivot-text=""
                                color="#76d138"
                                :percentage="4.0"
                            />
                        </div>
                    </div>
                </div>

                <div class="relConsult" >
                    <P class="relConsult_p">
                        <span>相关资讯记录</span>
                        <span class="relConsult_p_span">更多></span>
                    </P>
                    <ul v-for="(v,i) in v.relConsult" :key="i" class="relConsult_ul">
                        <li class="relConsult_ul_li">
                            <img src="../../static/images/w/b2w.png" class="relConsult_ul_li_img">
                            <p>{{v.q}}</p>
                        </li>
                    </ul>
                </div>

                <div class="docRecommand">
                     <P class="relConsult_p">
                        <span>医生推荐</span>
                        <span class="relConsult_p_span">更多></span>
                    </P>
                    <div v-for="(v,i) in v.docRecommand" :key="i">
                        <div class="docInfor">
                             <img src="../../static/images/w/a__.png"/>
                             <div class="docInfor_detail">
                                    <p class="p1">
                                        <span class="p_span">{{v.name}}</span>
                                        <span>{{v.department}}</span>
                                        <span>{{v.position}}</span>
                                    </p>
                                    <p class="p2">春雨公众营养专家团<span class="respond">回复快</span></p>
                                    <p class="p3">{{v.specialize}}</p>
                             </div>
                        </div>
                      <P class="price_p">
                          <span class="span1">{{v.price}}</span>
                          <span>{{v.buy}}</span>
                      </P>

                    </div>
                </div>

                <div class="healTopic">
                      <P class="relConsult_p">
                        <span>健康话题</span>
                        <span class="relConsult_p_span">更多></span>
                    </P>
                    <ul v-for="(v,i) in v.healTopic" :key="i">
                        <li v-for="(v,i) in v.title" :key="i" class="heal_li">{{v}}
                            <span class="heal_span">></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    components:{     
    },
   data() {
       return {
           newarr:[]
       }
   },
    created() {
        this.axios({
            url:'/automenu/easonNew',
            method:'get', 
        }).then((ok)=>{
            var data=ok.data.autognosis[0].bodySymptom
            var arr1=data.filter((v,i)=>{
               if(v.id==this.$route.query.id){
                   return v
               }
             })
           this.newarr =arr1;
        })
    },
    methods: {
         back(){
            this.$router.go(-1)
        },
    },
}
</script>

<style scoped>
   .sym_top{
    overflow: hidden;
  }  
  .van-nav-bar .van-icon{
    color: #67c65f;
    font-size: 22px;
  }
  .van-nav-bar__title{
     color: #5c5c5c;
     font-size: 16px;
 }
  .sym_per{
    margin-top: 50px;
    border-bottom: 6px solid #f1f0ee;
    height: 40px;
    line-height: 40px;
  }
  .sym_per_tit{
        padding: 0px 15px;
    }
    .mayResult{
        padding: 0px 15px; 
        border-bottom:  6px solid #f1f0ee;
    }
    .result p{
        margin: 10px 0px;
    }
    .tip{
        padding: 10px;
        background: #fdf8f2;
        color: #faa14d;
    }
    .rate{
        margin-top: 40px;
    }
    .rate_list1{
        border-bottom: 1px solid #e7e7e7;
        padding: 0px 0px 10px;
        margin-bottom: 10px;
    }
    .rate_list1_span{
        float: right;
    }
    .van-progress{
        margin-top: 10px;
    }
    .relConsult{
        padding: 0px 15px;
        border-bottom:  6px solid #f1f0ee;
    }
    .relConsult_p_span{
        float: right;
    }
    .relConsult_ul_li{
        display: flex;
        border-bottom: 1px solid #e7e7e7;
    }
    .relConsult_ul_li_img{
        width: 20px;
        height:20px;
        margin-top: 15px;
        margin-right: 10px;
    }
    .docRecommand{
        padding: 0px 15px;
         border-bottom:  6px solid #f1f0ee;
    }
    .docInfor{
        display: flex;
        justify-content: space-around;
    }
    .docInfor_detail{
        width: 200px;
        border-bottom: 1px solid #e7e7e7;
    }
    .docInfor_detail p{
        margin: 10px 0px;
        color: #666666;
        font-size: 14px;
    }
     .docInfor_detail .p1 .p_span{
         color: black;
         font-weight: bold;
     } 
    .price_p{
        margin-left: 115px;
    }
    .respond{
        color: #faa14d;
        margin-left: 8px;
        font-size: 12px;
    }
    .price_p{
        color: #666666;
        font-size: 16px;
    }
    .price_p .span1{
        color: #ef6540;
        font-size: 14px;
    }
    .healTopic{
        padding: 0px 15px;
        font-size: 14px;
        color: #0e0e0e;
    }
    .heal_span{
        float: right;
    }
    .heal_li{
    
        padding: 5px 0px;
        border-bottom: 1px solid #efefef;
    }
</style>




