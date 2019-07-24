<template>
    <div>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
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
        { text: '综合', value: 'a' },
        { text: '妇科', value: 'b' },
        { text: '儿科', value: 'c' },
        { text: '皮肤性病科', value: 'd' },
        { text: '内科', value: 'e' },
        { text: '男科', value: 'f' },
        { text: '产科', value: 'g' },
        { text: '外科', value: 'h' },
        { text: '中医科', value: 'i' },
        { text: '骨伤科', value: 'j' },
        { text: '精神心理科', value: 'k' },
        { text: '口腔科', value: 'l' },
        { text: '耳鼻咽喉科', value: 'm' },
        { text: '肿瘤及防治科', value: 'n' },
        { text: '整型美容科', value: 'o' },
        { text: '综合科', value: 'p' }
      ]
    }
  },
  methods: {
      
  },
};
</script>
<style scoped>
.van-dropdown-menu__title{
    color: #39D167;
}
</style>
