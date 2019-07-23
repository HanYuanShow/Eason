<template>
    <div>
        <van-search
            v-model="value"
            placeholder="输入地区、医院、科室、疾病"
            show-action
            shape="round"
            @search="onSearch"
        >
            <div slot="action" @click="onSearch" style="color: #39D167;">搜索</div>
        </van-search>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value:""
        }
    },
    methods: {
        onSearch(){
            this.axios({
                url:"/reqHospitalData/search"+this.value,
                method:"get"
            }).then((OK)=>{
                console.log(this.value);
            })
        }
    },
};
</script>
<style scoped>
</style>
