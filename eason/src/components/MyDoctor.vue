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
      <div class="content-doctor" v-for="(v,i) in mydoctor" :key="i">
        <div class="have">
          <van-image fit="fill" height="30" width="30" src="../../static/images/w/aca.png" />
          <div class="docotor-list">
            <div class="name">
              <span class="black">{{v.doctor.name}}</span>
              <span>{{v.doctor.keshi}}</span>
              <span>{{v.doctor.work}}</span>
            </div>

            <div class="doctor-end">
              <span>{{v.doctor.hospital}}</span>
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
    this.axios({
      url: "/aaa",
      method: "get"
    }).then(ok => {
      this.mydoctor = ok.data.topic.slice(0, 2);
      console.log(this.mydoctor);
    });
  },
  watch: {
    mydoctor() {
      if (this.mydoctor !== []) {
        this.bool = false;
      }
    }
  }
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
