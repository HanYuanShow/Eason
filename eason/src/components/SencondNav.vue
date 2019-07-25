<template>
  <div>
    <van-row type="flex" justify="center">
      <van-col span="22">
        <div class="SencondNav-out">
          
          <router-link to="/Autognosis">
            <div class="SencondNav-signle">
              <van-image src="../../static/images/w/ao2.png" width="30" height="30" />
              <p>症状自诊</p>
            </div>
          </router-link>

          <router-link to="/BuyMedicine">
            <div class="SencondNav-signle"  >
              <van-image src="../../static/images/w/anw.png" width="30" height="30" />
              <p>快速购药</p>
            </div>
          </router-link>

          <router-link to="/Specialist">
            <div class="SencondNav-signle">
              <van-image src="../../static/images/w/ao0.png" width="30" height="30" />
              <p>名院专家</p>
            </div>
          </router-link>

          <router-link to="/FindHospital">
            <div class="SencondNav-signle">
              <van-image src="../../static/images/w/acs.png" width="30" height="30" />
              <p>找医院</p>
            </div>
          </router-link>

          <router-link to="/Science/Topic">
            <div class="SencondNav-signle">
              <van-image src="../../static/images/w/anz.png" width="30" height="30" />
              <p>医生话题</p>
            </div>
          </router-link>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.SencondNav-signle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.SencondNav-signle p {
  font-size: 14px;
  color: gray;
  margin-top: 10px;
}
.SencondNav-out {
  display: flex;
  justify-content: space-around;
}
</style>
