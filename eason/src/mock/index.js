var Mock = require("mockjs");

Mock.mock("/automenu/infor","get",require("./json/data10"))
Mock.mock("/automenu/eason","get",require("./json/easonNew"))

Mock.mock("/aaa","get",require("./json/data1"))