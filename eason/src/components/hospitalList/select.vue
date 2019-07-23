<template>
    <div>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" @change="site(option1[value1].text)"/>
            <van-dropdown-item v-model="value2" :options="option2" @change="department(option2[value2].text)"/>
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      activeColor:"#39D167",
      option1: [
        { text: '全国', value: 0 },
        { text: '北京市', value: 1 },
        { text: '天津市', value: 2 },
        { text: '河北省', value: 3 },
        { text: '山西省', value: 4 },
        { text: '内蒙古自治区', value: 5 },
        { text: '辽宁省', value: 6 },
        { text: '吉林省', value: 7 },
        { text: '黑龙江省', value: 8 },
        { text: '上海市', value: 9 },
        { text: '江苏省', value: 10 },
        { text: '浙江省', value: 11 },
      ],
      option2: [
        { text: '综合', value: 0 },
        { text: '妇科', value: 1 },
        { text: '儿科', value: 2 },
        { text: '皮肤性病科', value: 3 },
        { text: '内科', value: 4 },
        { text: '男科', value: 5 },
        { text: '产科', value: 6 },
        { text: '外科', value: 7 },
        { text: '中医科', value: 8 },
        { text: '骨伤科', value: 9 },
        { text: '精神心理科', value: 10 },
        { text: '口腔科', value: 11 },
        { text: '耳鼻咽喉科', value: 12 },
        { text: '肿瘤及防治科', value: 13 },
        { text: '整型美容科', value: 14 },
        { text: '综合科', value: 15 }
      ]
    }
  },
  methods: {
    department(ks){
      console.log(ks);
    },
    site(site){
      console.log(site);
    }
  },
};
</script>
<style scoped>

</style>
