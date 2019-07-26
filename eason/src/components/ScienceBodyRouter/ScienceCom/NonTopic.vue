<template>
    <div>
        
        <div class="forList">
            <div v-for="(v,i) in arr" :key="i" class="List" @click="details(v.id)" >
                <div class="titleLeft">
                    <img :src="v.img" class="ListImg">
                </div>
                <div class="titleRigth">
                    <span class="titleFontSize">{{v.title}}</span>
                    <div class="titleFooter">
                        <div>
                            <span class="nonTitleFontSize">{{v.date|filtersdate}}</span>
                        </div>
                        <div>
                            <span class="nonTitleFontSize">阅读{{v.reading}}</span>
                            <span class="nonTitleFontSize">点赞{{v.star}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsId:""
        }
    },
    props:{
        arr:"",
    },
    methods: {
        details(val){
            this.$router.push("/ContentNews/"+val);
            this.newsId = val;
            // 点击新闻增加阅读量接口
            this.axios({
                url:"http://47.95.140.83:8181/news/addReading/"+this.newsId,
                method:"put"
            }).then((ok)=>{
                
            })
        }
    },
    filters:{
        filtersdate(val){
            return val.substring(0,10)
        }
    }
}
</script>

<style scoped>
    
    .List{
        display: flex;
        border-bottom:1px solid #e7e7e7;
        padding-bottom:20px;
        padding-top:20px;
        padding-left:15px;
        padding-right:15px;
        /* justify-content: space-between; */
    }
    .titleRigth{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex:1;
    }
    .ListImg{
        width:90px;
        height:75px;
        margin-right:10px;
    }
    .titleFooter{
        display: flex;
        justify-content:space-between;
    }
    .titleFontSize{
        font-size:15px;
        font-weight: 500;
    }
    .nonTitleFontSize{
        font-size:12px;
        color:#b2b2b2;
    }

    
</style>


