<template>
    <div class="box">
        <div>
            <van-nav-bar
                title="快速提问"
                right-text="下一步"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
             />
            
            <van-notice-bar :speed=this.speed>
                重要:&nbsp;&nbsp;&nbsp;急重症不适合网上咨询，请立即前往当地医院就诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                重要:&nbsp;&nbsp;&nbsp;急重症不适合网上咨询，请立即前往当地医院就诊
            </van-notice-bar>
            
            <div class="textbox" >
                <textarea name="" v-model="content" id="" rows="10" maxlength="500"  style="width:100%;height:100%;border:none" placeholder="请用10~500字详细描述您的症状、疾病和身体状况，否则可能无法获得医生的详细解答。请勿透露您的真实姓名或联系方式"></textarea>
            </div>

            <div class="uploadpic">
                <van-uploader v-model="fileList" multiple />
                <!-- <span class="note">上传相关图片(检查点、CT、病历、患处、药品等),春雨会确保您的隐私安全</span> -->
            </div>
        </div>
        
        <div class="end"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            speed:20,
            fileList:[],
            content:"",
        }
    },
    components:{

    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onClickRight(){
            console.log(this.content)
            localStorage.setItem("questionCentent",this.content)
            this.$router.push("/ChooseDoctor")         
        },

    },
    created() {
        let id = localStorage.getItem("userId")
        if(id==null){
            this.$router.push("/logon")
        }
    },
    // beforeCreate() {
    //     document.querySelector('body').setAttribute('style', 'background:#f0f0ee')
    // }
}
</script>

<style scoped>
.end{
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    background:#f0f0ee;
    z-index: -1;
}
.box{
    background: #ffffff;
}
.textbox{
    padding: 10px 15px;
}
.uploadpic{
    padding: 0 15px;

}
textarea{
    resize: none;
}
textarea::-webkit-input-placeholder{
    font-size: 14px;
    color: #c2c2c2;
}
.van-icon-arrow-left:before {
    font-size: 25px;
    color: #6bce72;
    font-weight: 800;
}
.van-nav-bar__text{
    color: #6bce72;
    font-size: 14px;
    font-weight: 800;
}
.van-nav-bar__title{
    font-weight: 800;
}
.van-nav-bar{
    border-bottom: 1px solid #dbdbdb;
}
</style>
