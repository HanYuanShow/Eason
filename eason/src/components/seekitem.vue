<template>
    <div class="search">
        <form action="/">
            <van-search
                v-model="value"
                placeholder="输入疾病 | 药品 | 症状 | 医生 | 检查"
                show-action
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>

<style scoped>
    .van-field__control{
        background-color: #e9e9e9
    }
    .van-search__action{
        color: #747577;
    }
    .van-search{
        padding: 10px 10px;
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
       onSearch(){},
       onCancel(){}
   },
}
</script>


