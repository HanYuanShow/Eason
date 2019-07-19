<template>
    <div class="test">
        <div class="test_img">
             <TestpicItem v-for="(v,i) in arr" :key="i" :imgurl="v.imgurl"></TestpicItem>
        </div>
    </div>
    
</template>
<script>

import TestpicItem from "./testpicItem"
export default {
    components:{
        TestpicItem
    },
    data() {
        return {
          arr:[
               {imgurl:"../../../static/images/selfTest/pic0.png"},
               {imgurl:"../../../static/images/selfTest/pic2.png"},
               {imgurl:"../../../static/images/selfTest/pic3.png"},
               {imgurl:"../../../static/images/selfTest/pic4.png"},
               {imgurl:"../../../static/images/selfTest/pic5.png"}
            ] 
        }
    },
   methods: {
        
   }
}
</script>

<style scoped>
    .test{
        overflow: auto;
        margin-top: 35px;
    }
    .test_img{
        padding: 10px 10px;
        height:600px;
    }
</style>


