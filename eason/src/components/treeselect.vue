<template>
      <div class="treeselct">
             <div class="symptom">
                
                <router-link to="/body">
                    <div class="symptom_list">
                        <img src="../../static/images/w/aqd.png" class="tree_img"/>
                        <p class="diagnosis_p">全身症状</p>
                    </div>
                </router-link>
                <router-link to="/skin">
                    <div class="symptom_list">
                         <img src="../../static/images/w/ar2.png" class="tree_img"/>
                         <p class="diagnosis_p">皮肤症状</p>
                    </div>
                </router-link>
                <router-link to="/head">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aqq.png" class="tree_img"/>
                         
                         <p class="diagnosis_p">头部</p>
                    </div>
                </router-link>
                 <router-link to="/throat">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aqw.png" class="tree_img"/>
                         <p class="diagnosis_p">咽颈部</p>
                    </div>
                </router-link>
                <router-link to="/breast">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aqg.png" class="tree_img"/>
                         <p class="diagnosis_p">胸部</p>
                    </div>
                </router-link>
                <router-link to="/belly">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aqc.png" class="tree_img"/>
                         <p class="diagnosis_p">腹部</p>
                    </div>
                </router-link>
                <router-link to="/reproduction">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aqo.png" class="tree_img"/>
                         <p class="diagnosis_p">生殖部位</p>
                    </div>
                </router-link>
                 <router-link to="/bone">
                    <div class="symptom_list">
                         <img src="../../static/images/w/ar0.png" class="tree_img"/>
                         <p class="diagnosis_p">骨盆</p>
                    </div>
                </router-link>
                <router-link to="/arm">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aq7.png" class="tree_img"/>
                         <p class="diagnosis_p">四肢</p>
                    </div>
                </router-link>
                <router-link to="/belt">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aqa.png" class="tree_img"/>
                         <p class="diagnosis_p">腰背部</p>
                    </div>
                </router-link>
                 <router-link to="/hip">
                    <div class="symptom_list">
                         <img src="../../static/images/w/aq9.png" class="tree_img"/>
                         <p class="diagnosis_p">臀部及肛门</p>
                    </div>
                </router-link>
            </div>
               <router-view></router-view>
        </div>
</template>
<script>
import Treeselectitem from './Treeselectitem'
export default {
    components:{
       Treeselectitem
    },
    data() {
        return {
       
        boolean:true
        }
    },
    methods: {
      func(){
           this.boolean=!this.boolean  
      }
    }
}
</script>

<style scoped>
    .symptom{
        height: 500px;
        overflow: auto;
        width: 30%;
    }
     .symptom_list{
        width: 100%;
        text-align: center;
    }
    .treeselct{
        display: flex;
    } 
    .red{
        background: #f1f1f1;
    }
     .diagnosis_p{
       margin: 0px;
       font-size: 14px;
       color: #777777;
   }
   .tree_img{
       width: 60px;
       height: 60px;
   } 
   .router-link-active .symptom_list{
       background: #f1f1f1;
   }

</style>


