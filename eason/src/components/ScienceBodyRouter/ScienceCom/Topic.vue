<template>
    <div>
        <div v-for="(v,i) in arr" :key="i" @click="topicid(v.id)">
            <div>
                <img :src="v.imgurl">
                <div>
                    <div>
                        <span>{{v.name}}</span>
                        <span>{{v.desk}}</span>
                        <span>{{v.position}}</span>
                    </div>
                    <div>
                        <span>原创</span>
                        <span>{{v.time}}</span>
                    </div>
                </div>
            </div>
            <div>
                <p>{{v.title}}</p>
            </div>
            <div>
                <span>{{v.click.content|s}}...</span>
            </div>
            <div>
                <span>{{v.readNumber}}</span>
                <span>{{v.praiseNumber}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        arr:"",
    },
    filters:{
        s(val){
            return val.slice(0,44)
        }
    },
    methods: {
        topicid(val){
            this.$router.push("/ContentTopic/"+val)
        }
    },
}
</script>

<style scoped>
    
</style>


