<template>
    <div>

        <div class="bodyPic" v-if="boolean">
            <router-link to="/arm"><img src="../../static/images/w/axk.png" class="img1"/></router-link>
            <router-link to="/reproduction"><img src="../../static/images/w/axg.png" class="img2"/></router-link>
            <router-link to="/belly"><img src="../../static/images/w/axh.png" class="img3"/></router-link>
            <router-link to="/breast"><img src="../../static/images/w/axi.png" class="img4"/></router-link>
            <router-link to="/throat"><img src="../../static/images/w/axl.png" class="img5"/></router-link>
            <router-link to="/head"><img src="../../static/images/w/axj.png" class="img6"/></router-link>  
            <router-link to="/arm"><img src="../../static/images/w/axf.png" class="img7"/></router-link>  
        </div>
         <div class="bodyPic" v-else>
             <router-link to="/arm"><img src="../../static/images/w/axd.png" class="img1_1"/></router-link>
              <router-link to="/hip"><img src="../../static/images/w/axb.png" class="img2_1"/></router-link>
             <router-link to="/belly"><img src="../../static/images/w/axa.png" class="img3_1"/></router-link>
             <router-link to="/throat"><img src="../../static/images/w/axe.png" class="img5_1"/></router-link>
             <router-link to="/head"><img src="../../static/images/w/axc.png" class="img6_1"/></router-link>  
            <router-link to="/arm"><img src="../../static/images/w/ax_.png" class="img7_1"/></router-link>  
         
        </div>
        <div @click="fun()" class="exchange">
            <div class="exchange_position">
                 <img src="../../static/images/w/ak4.png"/>
                 <p>正反切换</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components:{
    },
     methods: {
         fun(){
             this.boolean=!this.boolean
         }
    },
     data() {
         return{  
             boolean:true
         }
  }
}
</script>

<style scoped>
    .bodyPic{
        position: relative;
        height: 100%;
    }
    .img1{
        width: 100px;
        height: 200px;
        height:225px ;
        position: absolute;
        left:125px;
        top: 324px;
    }
    .img2{
        width: 100px;
        position: absolute;
        left:127px;
        top: 295px;
        z-index: 2;
    }
     .img3{
        width: 100px;
        position: absolute;
        left:125px;
        top: 237px;
        z-index: 2;
    }
     .img4{
        width: 100px;
        position: absolute;
        left:125px;
        top: 153px;
        z-index: 2;
    }
    .img5{
        width:100px;
        position: absolute;
        left:126px;
        top: 120px;
    }
    .img6{
        width:100px;
        height: 100px;
        position: absolute;
        left:125px;
        top: 30px;
    }
     .img7{
        width:258px;
        height: 200px;
        position: absolute;
        left:47px;
        top: 158px;
        z-index: 1;
    }
    .img1_1{
        width: 100px;
        height: 200px;
        height:225px ;
        position: absolute;
        left:125px;
        top: 320px;  
    }
    .img2_1{
        width: 100px;
        position: absolute;
        left:125px;
        top: 278px;
        z-index: 2;
    }
    .img3_1{
        width: 100px;
        position: absolute;
        left:125px;
        top:171px;
        z-index: 2;
    }
    .img5_1{
        width:100px;
        position: absolute;
        left:125px;
        top: 135px;
    }
    .img6_1{
        width:100px;
        height: 100px;
        position: absolute;
        left:125px;
        top: 46px; 
    }
    .img7_1{
        width:218px;
        height: 200px;
        position: absolute;
        left:68px;
        top: 173px;
        z-index: 1; 
    }
    .exchange{
        position: relative;
    }
    .exchange_position{
        position: absolute;
        top: 450px;
        right:35px;
    }
    /* fsdf */
</style>


