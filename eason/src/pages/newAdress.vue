<template>
    <div>
       
        <van-nav-bar
            title="收货人信息"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            />
        <div>
            <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            areaList:{},
            searchResult: []
    }
  },

  methods: {
      onClickLeft(){
          this.$router.go(-1)
      },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>
<style scoped>
.address{
     width:100%;
    height:62px;
    position:fixed;
    top:0px;
    border-bottom: 1px solid #f4f4f4;
    line-height: 62px;
    background:#fbfbfb;
 }
 .addressGo{
    float:left;
    width: 40%;
 }
 .addressGet{
    float:left;
 }
 .address img{
    width: 16px;
    height: 16px;
     padding-left:16px;
 }
 .addressGo span{
     font-size: 16px;
    color: #6bce72;
    font-weight:600;
 }
 .addressGet span{
     margin:0 auto;
 }
</style>
