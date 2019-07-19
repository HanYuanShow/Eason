<template>
    <div>
        
        <div class="forList">
            <div v-for="(v,i) in arr.list" :key="i" class="List" @click="details(v.id)">
                <div>
                    <img :src="v.imgurl" class="ListImg">
                </div>
                <div class="titleRigth">
                    <span class="titleFontSize">{{v.title}}</span>
                    <div class="titleFooter">
                        <div>
                            <span class="nonTitleFontSize">{{v.time}}</span>
                        </div>
                        <div>
                            <span class="nonTitleFontSize">阅读{{v.readNumber}}</span>
                            <span class="nonTitleFontSize">点赞{{v.praiseNumber}}</span>
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

        }
    },
    props:{
        arr:"",
    },
    methods: {
        details(val){
            this.$router.push("/ContentNews/"+val)
        }
    },
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
    }
    .titleRigth{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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


