<template>
  <div>
    <div class="start">
      <van-row type="flex" justify="center" class="more">
        <van-col span="4" class="inner">
          <van-image
            fit="fill"
            height="15"
            width="15"
            src="../../static/images/w/a60.png"
            @click="back()"
          />
        </van-col>
        <van-col span="16" class="inner">选医生</van-col>
        <van-col span="4" class="inner">
          <span class="all" @click="goAll()">更多</span>
        </van-col>
      </van-row>
    </div>

    <div class="tatle">
      <P>
        您可以选择
        <span class="red">多位医生</span>听取更多的意见
      </P>
    </div>

    <div>
      <div v-for="(v,i) in history" :key="i">
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

          <div class="right" @click="change(i)">
            <van-checkbox v-model="v.checked" checked-color="#07c160"></van-checkbox>
          </div>
          
        </div>
      </div>
    </div>

    <div class="shuru"></div>
    <div class="choose" @click="sendContent()">
      <span class="white">提问(免费)</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      history: [],
      checked: false,
      doctorid:[],
      contentqusetion:"",
    };
  },
  created() {
    this.axios({
      url: "http://47.95.140.83:8181/talk/alldoctorinfors",
      method: "get"
    }).then(ok => {
      this.history = ok.data;
      console.log(ok.data);
    });

    let text= localStorage.getItem("questionCentent")
    this.contentqusetion = text;
    console.log(text)
  
  },
  watch: {
    history() {
      if (this.history !== []) {
        this.bool = false;
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goAll() {
      this.$router.push("/FindDoctor");
    },
    sendContent(){
      //转医生id数组
        var code = new Array();
        code = this.doctorid; 
        let newcode = code.toString();
      //转提问内容为字符串类型
        let newcontent = String(this.contentqusetion);
        let id = localStorage.getItem("userId")
        localStorage.setItem("doctorIdList",newcode)
        this.axios({
            url:"http://47.95.140.83:8181/talk/addproblem",
            method:"post",
            params:{
                userId:id,
                userProblem:newcontent,
                doctorIdList:newcode
            }
        }).then((ok)=>{
            console.log(ok.data);
        })
        let num = code[0];
        //默认对话选择的第一个医生
        this.$router.push("/DiscussContent?id="+num)
    },
    change(num){
        this.history[num].checked=!this.history[num].checked;
        console.log(num);
        this.doctorid.push(num+1);
        console.log(this.doctorid);
    }
  }
};
</script>

<style scoped>
.right{
    float: right;
    margin-left: 20px;
}
.white {
  color: white;
}
.choose {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: rgb(34, 184, 34);
  text-align: center;
  line-height: 40px;
}
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
  background-color: white;
  border-bottom: 1px solid gainsboro;
  height: 100px;
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
.red {
  color: rgb(243, 8, 8);
}
.tatle {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 25px;
}
.only-text {
  color: rgb(39, 224, 39);
}
.one {
  margin-bottom: 5px;
}
.two {
  color: rgb(201, 201, 201);
}
.shuru {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(243, 242, 242);
  z-index: -999;
  padding-top: 70px;
}
.Code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(243, 242, 242);
}
.lishi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.more {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gainsboro;
  background-color: white;
}
.inner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.all {
  color: rgb(39, 224, 39);
}
</style>
