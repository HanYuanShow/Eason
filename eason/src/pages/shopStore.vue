<template>
    <div>
        <ShopStoreItem></ShopStoreItem>
    </div>
</template>
<script>
import ShopStoreItem from "../components/shopStoreItem"

export default {
    data(){
        return{
            // asyncData:"",
            arr:'',
            drugid:"",
            drugImg:"",
            drugName:"",
            drugStandard:"",
            drugPrice:"",
            drugId:"",

        }
    },
    components:{
       ShopStoreItem
    },

}
</script>
<style scoped>

</style>
