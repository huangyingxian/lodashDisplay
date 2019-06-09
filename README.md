# lodash包的实用fun展示

## 展示方法列表
- transform
  _.transform(object, [iteratee=_.identity], [accumulator])；  
  _.reduce的替代方法;此方法将转换object对象为一个新的accumulator对象，结果来自iteratee处理自身可枚举的属性。 每次调用可能会改变 accumulator 对象。如果不提供accumulator，将使用与[[Prototype]]相同的新对象。iteratee调用4个参数：(accumulator, value, key, object)。如果返回 false，iteratee 会提前退出