/*
 * @Description: transform的用法测试
 * @Author: 黄瀛先
 * @Date: 2019-06-08 16:16:02
 * @LastEditTime: 2019-06-08 17:53:18
 * @LastEditors: Please set LastEditors
 */

 /**
  * 用法：
  * 1.遍历第一个参数的每一项，均跑第二个参数->回调函数
  * 2.第二个参数为一个回调函数：
  *     第一项result为累计器，收集每次跑回调函数之后的结果；
  *     第二项value为一个参数的当前项的值
  *     第三项key为一个参数的当前项key
  *     回调函数的返回值决定是否进行遍历第一个参数的下一项（即控制结束）,默认返回true（即不写，则遍历第一个参数结束为止）
  * 3.第三个参数则是累计器的定义，可以不写。不写默认为{}（即Object）;
  */

//测试1：
const _ = require('lodash');
// let source = [2, 3, 4];
let index = [2, 3, 4].length-1;
let a = _.transform([2, 3, 4], function (result, n, k) {
    result.push(n *= n);
    console.log(k)
    // return n % 2 == 0;
    // return k!==index;
}, []);
// => [4, 9]
console.log(JSON.stringify(a));



//测试2：
let b = _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    // console.log((result[value] || (result[value] = [])))
    (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
console.log(JSON.stringify(b));