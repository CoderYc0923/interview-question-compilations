## 1.JS数据类型
```
基本数据类型：Number String Boolean Null Undefined BigInt Symbol
引用数据类型：Object(包括Array Date 正则 Function Object Map Set WeakMap WeakSet)
```

## 2.包装类型
```
为了能在基本数据类型上执行操作，JS提供了相应的包装类型:
Number String Boolean
```
:::tip
“装箱”<br>
在读取基本数据类型的方法和属性时，JS会自动将基本数据类型转化为包装类型，这种自动转换被称为装箱
```js
//例子
let str = "Hello"; // 基本数据类型
let strObj = str.toUpperCase(); // 自动装箱并调用String对象的toUpperCase方法
str.constructor //自动装箱读取String对象的constructor属性
```
:::

## 3.如何判断JS数据类型
```
1.typeof 基本数据类型
2.instanceof 引用数据类型，通过原型链
3.Object.prototype.toString.call()
4.constructor
```

::: tip
Object.prototype.toString.call()可以检测数据类型，为什么对象obj.toString就不行<br>
因为Object的toString是Object原型上的方法，而Array\Function这些Object的实例对象，他们的toString都重写了相应的toString，所以不同
:::

## 4.如何判断两个对象相等
```js
    1. 使用JSON.stringify(obj) 来判断，但是如何两个对象中key顺序不同就会出错
    //2.
    const deepEqual = (a, b) => {
        if (a === b) return true
        if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        if (aKeys.length !== bKeys.length) return false
        for (let key of aKeys) {
            if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) return false
        }
        return true
    }
```

## 5.如何判空对象
```js
Reflect.ownKeys(obj).length === 0
```

## 6.为什么0.1 + 0.2 !== 0.3
```
因为在相加计算时，发生了两次精度丢失。
JS中Number类型是双精度浮点型，由于0.1转化为二进制是一个无限循环二进制数。但是内存保存的二进制浮点数的小数位数只有52位，所以发生了第一次精度丢失
当0.1 + 0.2做加操作时要对阶，0.1的阶数比0.2小，所以0.1的尾数位要右移，发生第二次精度丢失
```
## 7.类型转换
### 7.1显式类型转换 he 隐式类型转换
```js
通过包装类型进行转换
Number('123') //123
Number(false) //0
Number(null) //0
Number('') //0
Number(undefined) //NaN
Number('学习') //NaN

引用类型转化为数字类型
1.调用对象自带的valueOf,若返回的是一个基本类型，就转换为数字类型返回
2.调用对象的toString方法，若返回的是一个基本类型，就转换为数字类型返回
3.报错

Number([]) //0
Number([1,1]) //NaN

引用类型转化为字符串
1.调用对象的toString方法，若返回的是一个基本类型，就转换为数字类型返回
2.调用对象自带的valueOf,若返回的是一个基本类型，就转换为数字类型返回
3.报错

String({}) //'[object object]'
```

## 8.===和==的区别
```
===严格相等运算符（比较变量的值和类型是否相等）
==宽松相等运算符（先将变量进行类型转换，再比较值是否相等）
```

## 9.null和undefined的区别
```
null 表示没有对象，此处不该有值，代表一个空对象指针
undefined 表示缺少值，此处应该有值，但未定义
```

## 10.什么情况下会返回undefined
```
1.当访问一个声明但未赋值或者赋值为undefined的变量
2.当访问一个对象中不存在的属性
3.当访问一个没有return或者rentur没有内容的函数
```

## 11.如何区分对象和数组
```js
//instanceof
[] instanceof Array //true
//constructor
([]).constructor //Array
//Object.prototype.toString.call
Object.prototype.toString.call([]) //[object Array]
//Array.isArray
Array.isArray([]) //true
```

## 12.多维数组如何降维
```js
1.数组字符串化
let arr = [[11,22,33],44,[55,66]]
arr += ''
let newArr = arr.split(',')

2.递归
function a(arr) {
    let resArr = []
    let toArr = (arr) => {
        arr.forEach(item => {
            item instanceof Array ? toArr(item) : resArr.push(item)
        })
    }
    toArr(arr)
    return resArr 
}

3.flat函数
let arr = [[11,22,33],44,[55,66]]
let newArr = arr.flat()
```

## 13.什么是类数组， 如何将其转化为真正的数组
```js
类数组就是类似数组的对象，具有类似数组的索引属性和length属性，可以使用一些数组的方法， 比如for循环，forEach等，
JS中常见的类数组有：arguments对象，document.getElements获取的内容， 字符串等
如何转化为真正的数组：
    1.Array.from
    2.Array.prototype.slice.call
    3.可迭代对象可以使用扩展运算符...

```

## 14.如何遍历对象的属性
```js
1.for in循环 （遍历对象可枚举属性，包括自身定义的属性和从原型链继承而来的属性）
2.Object.keys（返回一个包含自身属性名的数组）
3.Object.entries （返回一个包含键值对的数组）
4.Object.getOwnPropertyNames
5.Object.getOwnPropertySymbols
6.Reflect.ownKeys
```