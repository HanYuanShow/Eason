<template>
    <div class="navlist">
    <div class="tit">
        {{title}}
    </div>
   <div class="reight">
        <van-switch
        v-model="checked"
        active-color="#07c160"
        inactive-color="#7b7c7b"
        />
    </div> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  },
  props:{
      title:String
  },

  methods: {
    
  }
}; 
</script>
<style scoped>
.navlist{
    width: 100%;
    height: 50px;
    display: flex;
    background:white;
    justify-content: space-between;
    align-items: center;
}
.tit{
    margin-left: 15px;
}
.reight{
margin-right: 15px;
}
</style>

