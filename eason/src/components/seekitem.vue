<template>
    <div class="search">
         <img src="../../static/images/w/b1a.png" class="img1"  @click="fun()"/>
        <form action="/">
            <van-search
                v-model="value"
                placeholder="输入疾病 | 药品 | 症状 | 医生 | 检查"
                show-action
                @search="onSearch(value)"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>

<style scoped>
    .search {
        display: flex;
        padding: 0px 10px;
    }
    .search .img1{
        width:13px;
        height: 20px;
        margin:18px 6px 0px
    }
    .van-field__control{
        background-color: #e9e9e9
    }
    .van-search__action{
        color: #747577;
    }
    
    .van-search{
        padding: 10px 10px;
        width:335px;
    }
  .van-search__content{
        border-radius: 30px;
    }
</style>
<script>



export default {
   data() {
       return {
           value:"",
       }
   },
   methods: {
       onSearch(value){
           this.$router.push({path:'/detailDepartment',query:{officeTypeName:value}})
       },
       onCancel(){},
       fun(){
            this.$router.push('/home') 
       }
   },
}
</script>


