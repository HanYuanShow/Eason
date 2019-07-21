<template>
  <div class="Doctor">
    <div @click="goQuestion()">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div class="FindDoctor-div">
            <div class="FindDoctor-out">
              <div class="FindDoctor-logo">
                <van-image width="45" height="45" src="../../static/images/w/awx.png" />
              </div>

              <div class="FindDoctor-qulick">
                <h3>快速提问</h3>
                <p class="FindDoctor-answer">每天330000个问题被专业医生解答</p>
              </div>
            </div>
            <div class="FindDoctor-arrows">
              <van-image width="15" height="15" fit="contain" src="../../static/images/w/ajr.png" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div @click="goFind()">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div class="FindDoctor-div">
            <div class="FindDoctor-out">
              <div class="FindDoctor-logo">
                <van-image width="45" height="45" src="../../static/images/w/atb.png" />
              </div>

              <div class="FindDoctor-qulick">
                <h3>找医生</h3>
                <p class="FindDoctor-answer">搜索全国名医 对症咨询</p>
              </div>
            </div>
            <div class="FindDoctor-arrows">
              <van-image width="15" height="15" fit="contain" src="../../static/images/w/ajr.png" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goQuestion() {
      this.$router.push("Question");
    },
    goFind() {
      this.$router.push("FindDoctor");
    }
  }
};
</script>
<style scoped>
.Doctor {
  padding-top: 20px;
}
.FindDoctor-out {
  display: flex;
}
.FindDoctor-qulick {
  margin-left: 10px;
}
.FindDoctor-qulick h3 {
  font-size: 20px;
}
.FindDoctor-logo {
  display: flex;
  align-items: center;
}
.FindDoctor-answer {
  color: gray;
  font-size: 14px;
  margin-top: 4px;
}
.FindDoctor-div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.FindDoctor-arrows {
  display: flex;
  align-items: center;
}
</style>
