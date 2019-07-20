<template>
    <div>
        <ScienceDetails :arr = listiddetails[0]></ScienceDetails>
        
        
    </div>
</template>
<script>
import ScienceDetails from "../components/ScienceDetails"
export default {
    data(){
        return {
            arr:[],
            routerid:""
        }
    },
    components:{
        ScienceDetails
    },
    computed:{
        listiddetails(){
            var details = this.arr.filter((v,i)=>{
                if(this.routerid == v.id){
                    return v
                }
            })
            return details
        }
    },
    created(){
        this.routerid = this.$route.params.id;
        this.axios({
            url:"/aaazyz",
            method:"get"
        }).then((ok)=>{
            console.log(ok)
            this.arr = ok.data.hot.list
        })
    }
}
</script>

<style scoped>

</style>


