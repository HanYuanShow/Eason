<template>
    <div class="quan">
      <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
        </div> 

        <div class="content">
            <p>{{txt}}</p>
                <form action="">
                    <textarea name="" id="" cols="44" rows="5" placeholder="这里针对产品意见进行收集，如需咨询健康问题，请在首页使用快速提问功能">
                                        
                    </textarea>
                    <div class="images">
                        <van-uploader v-model="fileList" multiple />
                          <span>添加图片</span>              
                    </div>
                    <p>{{text}}</p>
                    <input type="search" class="search">

                    <input type="submit" class="sbmit">
                </form>


                
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
        return {
             fileList: [],
             himg:"../../static/images/w/b1a.png",
            listtitle:"意见反馈",
            txt:"让我们懂得聆听，知错就改，您的意见是",
            text:"请留下你的手机号，以便我们联系你"
        }
    },

}
</script>
<style scoped>
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
.header{
    border-bottom: 1px solid #c1c1c1;
}
.content p{
    font-size: 15px;
    padding-left: 15px;
    color: #a0a0a0;
    line-height: 40px;
}
form{
    width: 100%;
}
textarea{
    display: block;
    margin: 0 auto;
    border: none;
    color: #5f5d5d;
    padding-left: 15px;
    padding: 15px;
    /* margin: 15px; */

    /* font-size: 14px; */
}
.images{
    /* width: 100%; */
    background: white;
    margin-top: 0px;
    padding-left: 15px;
}
.search{
    /* text-indent: 40%; */
    text-align: center;
caret-color:#20c02d;
    
}
.images span{
    color: #a0a0a0;
}
 input{
    width: 100%;
    height: 40px;
    border: none;
}
.sbmit{
    display: block;
    width: 260px;
    margin: 16px auto;
    color: white;
    background: #6bce72;
}
</style>
