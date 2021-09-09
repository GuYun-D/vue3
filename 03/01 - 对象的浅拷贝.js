// 浅拷贝
var obj = { name: "zhangsan", age: 12 }
var obj1 = Object.assign({}, obj)
// console.log(obj);
// console.log(obj1);
obj1.name = "万民庆"
// console.log(obj);
// console.log(obj1);

// 深拷贝
let info = {
  name: "万民庆",
  age: 19,
  hobbies: {
    name1: '女人',
    name2: "游戏"
  }
}

const resInfo = Object.assign({}, info)
// resInfo.hobbies.name1 = "学习"
// console.log(info);

// 通过JSON实现深拷贝
const infoStr = JSON.parse(JSON.stringify(info))
infoStr.hobbies.name1 = "打网球"
console.log(info);

// lodash
