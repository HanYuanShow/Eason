<template>
  <div>
    <div class="out" v-if="bool">
      <div class="inner">
        <van-image fit="fill" height="70" width="95" src="../../static/images/w/ay_.png" />
        <p>暂无医生</p>
        <h6>关注或者购买过服务的医生将显示在这里</h6>
        <router-link to="/FindDoctor">
          <span>去找医生</span>
        </router-link>
      </div>
    </div>

    <div class="list">
      <div class="content-doctor" v-for="(v,i) in mydoctor" :key="i" @click="sendDoctorid(v.id)">
        <div class="have">
          <van-image fit="fill" height="40" width="40" :src="v.impSrc" />
          <div class="docotor-list">
            <div class="name">
              <span class="black">{{v.realaName}}</span>
              <span>{{v.office}}</span>
              <span>{{v.title}}</span>
            </div>

            <div class="doctor-end">
              <span>{{v.hospital}}</span>
            </div>
          </div>
        </div>

        <div class="imges">
          <van-image
            fit="fill"
            height="20"
            width="44"
            src="../../static/images/w/aob.png"
            class="like"
          />
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydoctor: [],
      bool: true
    };
  },
  created() {
    //获取本地账户id
    // let userId = localStorage.getItem("userId");

    this.axios({
      url: "http://47.112.208.93:8181/doctorTopic/myDoctor/"+1,
      method: "get",
      // params:{
      //     userId=1
      // }
    }).then(ok => {
      this.mydoctor = ok.data;
      console.log(this.mydoctor);
    });
  },
  watch: {
    mydoctor() {
      if (this.mydoctor.length !==0) {
        this.bool = false;
      }
    }
  },
  methods: {
    sendDoctorid(num){
      console.log(num)
      this.$router.push("/DetailsOfDoctor/"+num)
    }
  },
};
</script>

<style scoped>
.imges {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.content-doctor {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid gainsboro;
  z-index: 2;
}
.black {
  font-weight: 700;
  font-size: 18px;
}
.doctor-end {
  margin-top: 5px;
  text-indent: 10px;
}
.name span {
  margin-left: 10px;
  margin-bottom: 5px;
}

.have {
  display: flex;
  align-items: center;
}
.list {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(243, 242, 242);
  z-index: -999;
  padding-top: 70px;
}

.out {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(243, 242, 242);
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inner p {
  font-size: 14px;
  margin: 15px 0;
  color: grey;
}
.inner span {
  display: block;
  width: 250px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  background-color: rgb(39, 224, 39);
  color: white;
}
.inner h6 {
  font-weight: 100;
  margin-bottom: 15px;
  color: grey;
}
</style>
