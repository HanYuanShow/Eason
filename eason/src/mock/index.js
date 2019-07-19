var Mock = require("mockjs");


Mock.mock("/aaa","get",require("./json/data1"))
Mock.mock("/automenu/eason","get",require("./json/easonNew"))