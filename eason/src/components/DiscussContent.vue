<template>
    <div>
        <p>{{discussContent[itemid-1]}}</p>

        <p>{{itemid}}</p>

    </div>
</template>
<script>
export default {
    data() {
        return {
            itemid: "",
            discussContent:[],
        }
    },
    created() {
        this.itemid = this.$route.query.id; 
        this.axios({
            url:"/aaa",
            method:"get"
            }).then((ok)=>{
               this.new= this.discussContent=ok.data.discuss;
          
            })
    },
    // computed: {
    // //判断过滤 等于id的数据
    //     content() {
    //     var newarr = this.discussContent.filter((v, i) => {
    //         if (v.id == this.itemid) {
    //         return v;
    //         }
    //     });
    //     return newarr;
    //     },
    // },
    filters:{
        
    }
}
</script>

<style scoped>

</style>
