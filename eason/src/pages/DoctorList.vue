<template>
    <div>
        <p>11111111</p>
        {{title}}
    </div>
</template>

<script>
export default {
    props:{
        title:String
    },
    data() {
        return {
            title:[]
        }
    },
    created(){
        this.title=this.$route.query.i
    },
}
</script>

<style scoped>

</style>
