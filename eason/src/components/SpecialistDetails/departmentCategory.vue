<template>
    <div class="category">
        <h4 class="categoryTitle">{{category}}</h4>
        <ul>
            <li class="categoryItem" v-for="(v,i) in department" :key="i" @click="selectDepartment(v)">{{v}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        category:String,
        department:Array
    },
    methods: {
        // 定义函数抛出要传给父元素的值
        selectDepartment(val){
            this.$emit("departmentType",val)
            console.log(val)
        }
    },
}
</script>

<style scoped>
.category{
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
}
.categoryItem{
    font-size: 14px;
    line-height: 14px;
    color: #666;
    float: left;
    padding: 4px 10px;
    background: #eee;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}
.categoryTitle ul{
    overflow: hidden;
}
.categoryTitle{
    font-size: 14px;
    line-height: 14px;
    font-weight: normal;
    display: inline-block;
    padding: 0px 6px;
    border-left: 2px solid #39D167;
    margin: 10px 0;
}
</style>
