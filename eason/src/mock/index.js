var Mock = require("mockjs");

Mock.mock("/liuxiaojie","get",require("./json/data"))
Mock.mock("/aaa","get",require("./json/data1"))
Mock.mock("/automenu/eason","get",require("./json/easonNew"))
Mock.mock("/automenu/infor","get",require("./json/data10"))
Mock.mock("/automenu/eason","get",require("./json/easonNew"))
Mock.mock("/aaazyz","get",require("./json/datazyz"))
Mock.mock("/reqHospitalData","get",require("./json/findHospital"))
Mock.mock("/reqHospitalData/search","get",require("./json/goodHospital"))
Mock.mock("/reqHospitalData/hospitalDetail","get",require("./json/hospitalDetail"))
Mock.mock("/reqHospitalData/hospitalIntro/","get",require("./json/hospitalDetail"))

Mock.mock("/link/data","get",require("./json/data3"))
