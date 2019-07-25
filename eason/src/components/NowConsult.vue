<template>
  <div class="out">
    <div class="inner" v-if="bool">
      <van-image fit="fill" height="92" width="100" src="../../static/images/w/abo.png" />
      <p>暂无进行中的服务</p>
      <router-link to="/Question">
        <span>快速提问</span>
      </router-link>
    </div>

    <div class="list">
      <div class="content-doctor" v-for="(v,i) in mydoctor" :key="i" @click="send(v.id)">
        <div class="have">
          <van-image fit="fill" height="40" width="40" src="../../static/images/w/aca.png" />
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
            height="30"
            width="30"
            src="../../static/images/w/arn.png"
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
    //获取本地医生id
    let doctorarr =localStorage.getItem("doctorIdList")
    console.log(doctorarr)
    this.axios({
      url: "http://47.95.140.83:8181/talk/showdoctorinfors",
      method: "get",
        params:{
                doctorinforIdlist :doctorarr
            }
    }).then((ok) => {
      this.mydoctor = ok.data;
      console.log(this.mydoctor);     
    });



  },
  watch: {
    mydoctor() { 
      if (this.mydoctor !== []) {
        this.bool = false;
      }
    }
  },
  methods: {
     send(num){
            this.$router.push("/DiscussContent?id="+num)
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
  margin: 20px 0;
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
</style>
