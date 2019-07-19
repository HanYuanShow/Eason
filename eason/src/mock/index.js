var Mock = require("mockjs");

Mock.mock("/reqHospitalData","get",require("./json/findHospital"))

Mock.mock("/reqHospitalData/search","get",require("./json/goodHospital"))

Mock.mock("/reqHospitalData/hospitalDetail","get",require("./json/hospitalDetail"))

Mock.mock("/reqHospitalData/hospitalIntro/","get",require("./json/hospitalDetail"))