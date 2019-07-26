<template>
    <div>
        <div v-for="(v,i) in arr" :key="i" @click="topicids(v.id)" class="easons">
            <div class="photoBig">
                <img :src="v.img" class="photo">
                <div class="photoBigRigth">
                    <div>
                        <span class="photoBigRigthTopa">{{v.doctorinfor.realaName}}</span>
                        <span class="photoBigRigthTopb">{{v.doctorinfor.office}}</span>
                        <span class="photoBigRigthTopc">{{v.doctorinfor.title}}</span>
                    </div>
                    <div>
                        <span class="photoBigRigthbottoma">原创</span>
                        <span class="photoBigRigthbottomb">{{v.date|filtersdate}}</span>
                    </div>
                </div>
            </div>

            <div>
                <p class="photoTitle">{{v.name}}</p>
            </div>
            <div>
                <span class="photoContent">{{v.text|s}}...</span>
            </div>
            <div>
                <span class="photoreadNumber">阅读{{v.reading}}</span>
                <span class="photopraiseNumber">赞{{v.star}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            topicidaaa:""
        }
    },
    props:{
        arr:"",
        
    },
    filters:{
        s(val){
            return val.slice(0,40)
        },
        filtersdate(val){
            return val.slice(0,10)
        }
    },
    methods: {
        topicids(val){
            this.$router.push("/ContentTopic/"+val)
            this.topicidaaa = val
            // 话题阅读量
            this.axios({
                url:"http://47.95.140.83:8181/doctorTopic/addReading/"+val,
                method:"put"
            }).then((ok)=>{
                
            })
            
        }
    },
}
</script>

<style scoped>
    .easons{
        padding:10px 15px;
        border-bottom:1px solid #e7e7e7;
    }
    .photoBig{
        display: flex;
    }
    .photo{
        width:40px;
        height:40px;
        margin-right:14px;
    }
    .photoBigRigthTopa{
        font-size:14px;
        color:#323232;
    }
    .photoBigRigthTopb{
        color:#666666;
        font-size:12px;
    }
    .photoBigRigthTopc{
        color:#999999;
        font-size:12px;
    }
    .photoBigRigthbottoma{
        color:#999999;
        font-size:12px;
        border:1px solid #999999;
        padding:0 5px;
        border-radius: 10px;
    }
    .photoBigRigthbottomb{
        color:#999999;
        font-size:12px;

    }
    .photoTitle{
        font-size:16px;
        font-weight: 600;
        margin:10px 0;
    }
    .photoContent{
        color:#999999;
        font-size:13px;
        line-height:20px;
    }
    .photoreadNumber{
        font-size:12px;
        color:#666666;
        margin-right:8px;
    }
    .photopraiseNumber{
        font-size:12px;
        color:#666666;
    }
</style>


