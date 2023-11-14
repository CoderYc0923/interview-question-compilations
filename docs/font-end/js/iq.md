## 1.JS 数据类型

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
在读取基本数据类型的方法和属性时，JS 会自动将基本数据类型转化为包装类型，这种自动转换被称为装箱

```js
//例子
let str = "Hello"; // 基本数据类型
let strObj = str.toUpperCase(); // 自动装箱并调用String对象的toUpperCase方法
str.constructor; //自动装箱读取String对象的constructor属性
```

:::

## 3.如何判断 JS 数据类型

```
1.typeof 基本数据类型
2.instanceof 引用数据类型，通过原型链
3.Object.prototype.toString.call()
4.constructor
```

::: tip
Object.prototype.toString.call()可以检测数据类型，为什么对象 obj.toString 就不行<br>
因为 Object 的 toString 是 Object 原型上的方法，而 Array\Function 这些 Object 的实例对象，他们的 toString 都重写了相应的 toString，所以不同
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
Reflect.ownKeys(obj).length === 0;
```

## 6.为什么 0.1 + 0.2 !== 0.3

```
因为在相加计算时，发生了两次精度丢失。
JS中Number类型是双精度浮点型，由于0.1转化为二进制是一个无限循环二进制数。但是内存保存的二进制浮点数的小数位数只有52位，所以发生了第一次精度丢失
当0.1 + 0.2做加操作时要对阶，0.1的阶数比0.2小，所以0.1的尾数位要右移，发生第二次精度丢失
```

## 7.类型转换

### 7.1 显式类型转换 he 隐式类型转换

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

## 9.null 和 undefined 的区别

```
null 表示没有对象，此处不该有值，代表一个空对象指针
undefined 表示缺少值，此处应该有值，但未定义
```

## 10.什么情况下会返回 undefined

```
1.当访问一个声明但未赋值或者赋值为undefined的变量
2.当访问一个对象中不存在的属性
3.当访问一个没有return或者rentur没有内容的函数
```

## 11.如何区分对象和数组

```js
//instanceof
[] instanceof
  Array(
    //true
    //constructor
    []
  ).constructor; //Array
//Object.prototype.toString.call
Object.prototype.toString.call([]); //[object Array]
//Array.isArray
Array.isArray([]); //true
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

## 15.如何给一个按钮绑定两个 onclick 事件

```
通过addEventListener可以依次给按钮添加两个onclick事件
```

## 16.柯里化

```
指将多变量函数拆解为单变量的多个函数的依次调用，可以将高元函数动态生成批量低元函数
```

## 17.事件流

```
JS事件分为三种类型
1.原始事件类型(冒泡事件类型)：当事件源捕获到事件并响应时，会由内向外响应同类事件
2.捕获事件类型：当触发DOM事件时，浏览器会从根节点依次向事件源进行传播事件
3.DOM2事件类型(结合了原始事件类型和捕获事件类型):
    分为三个阶段：捕获阶段、目标阶段、冒泡阶段
```

:::tip
阻止冒泡： w3c e.stopPropagation(), ie e.cancelBubble = true<br>
取消默认事件: w3c e.preventDefault(), ie e.returnValue = false
:::

## 18.事件委托

```
将一个元素的响应事件委托到父元素，当事件响应到该元素时，通过事件冒泡触发父元素的绑定事件
优点：
    1.减少内存消耗，提高性能
    2.动态绑定事件
```

## 19.原型链

```
1.原型： 原型分为隐式原型(_proto_)和显式原型(prototype)， 每个对象都有它的隐式原型，指向它的构造函数的原型对象,构造函数通过显式原型指向原型对象，原型对象通过constructor属性指向构造函数。
2.原型链： 当访问一个引用类型时，如果它本身没有这个属性，就会通过它的隐式原型向上级的显示原型中找，直到最顶层的Object为止（Object的原型为null）
```

:::tip
new 一个对象的过程：<br> 1.创建一个空对象<br> 2.将这个空对象的隐式原型（_proto_）指向构造函数的原型对象<br> 3.将构造函数的 this 指向空对象<br>4.根据返回值类型选择返回结果
:::

## 20.作用域和作用域链

```
1.作用域： JS作用域分为静态作用域（词法作用域）和动态作用域，
    其中，静态作用域有全局作用域、函数作用域和块级作用域(es6)，
    动态作用域有this上下文
2.作用域链： 作用域链是JS中变量查找的一种机制，在函数中，如果无法在当前执行上下文的变量对象中找到某个变量，JS会自动向上一级执行上下文的变量对象中查找，直到最顶层的window对象，这种自动向上查找的过程就是作用域链。
```

:::tip
延长作用域链的方法：<br> 1.闭包 2.eval 函数 3.with 语句（用于临时拓展作用域链，js 严格模式下禁用）
:::

:::tip
作用域链和原型链的区别:<br> 1.作用域链相对于变量而言，原型链相对于对象的属性而言<br> 2.作用域链最顶层是 Window，原型链最顶层是 Object
:::

## 21.变量提升和函数提升

```
1.变量提升：当我们给一个作用域定义变量时，该变量的声明会被提升到作用域的顶端，所以我们可以在变量声明之前访问到该变量
2.函数提升：函数提升和变量提升类似，不过函数提升优先级高于变量提升，因为函数在JS中是一等公民，优先级很很高
```

## 22.闭包

```
1.闭包： 通过作用域链实现内部函数变量访问外部函数变量，实现了数据私有化，不会被全局变量污染
2.闭包的应用场景：
    保护变量
    延长变量生命周期
    实现数据封装
    实现模块化开发
```

:::tip
闭包会带来的问题: 内存泄漏
:::

:::tip
立即执行函数与闭包：<br>
1.立即执行函数：立即执行函数是一种函数的调用方式，可以让函数在创建后立即执行<br>
2.立即执行函数的作用： 创建一个独立的作用域，作用域内的变量外部访问不到，避免了全局污染<br>

与闭包的区别：<br>
1.立即执行函数调用完后会立即销毁，不会占用内存
2.闭包通过作用域链实现内部函数变量访问外部函数变量，导致被引用的变量不能被垃圾回收机制清除，使用不当会造成内存泄露
:::

## 23.内存泄漏

```
1.内存泄漏：内存泄漏是指在程序中已动态分配的堆内存由于某种原因未能被释放或无法释放，造成系统内存的浪费
2.造成内存泄漏的原因：
    a.隐式全局变量（未声明就使用的变量）—— 解决：使用关键词定义变量或者使用严格模式
    b.闭包 —— 解决:将闭包变量置为null
    c.未清除的DOM引用 —— 解决：手动将引用设置为null
    d.循环引用：当垃圾回收机制为引用计数时会出现
    e.定时器 —— 解决：在定时器不再使用的时候清除定时器
    f.未清理的console —— 解决： 清理console
```

:::tip
垃圾回收机制：<br> 1.引用计数 2.标记清除 3.分代式回收（V8的垃圾回收机制，根据对象存活时间进行分代，将内存分为新生代和老生代两块空间）
:::

## 24.setTimeout和setInterval
```
1.setTimeout:在指定时间后执行一次代码
2.setInterval: 每隔一段时间，重复执行一次代码（时间间隔取决于代码的执行时间，如果一次代码的执行时长超出了间隔时间，setInterval会在代码执行完成后立即进行下一次执行，不会等待间隔时间）
```
:::tip
如果期望某一段代码间隔100ms执行一次，应该使用嵌套的setTimeout<br>
```js
const mySetInterval = (fun, delay) => {
    let timer;
    function interval() {
        fun();
        timer = setTimeout(interval, delay)
    }
    timer = setTimeout(interval,delay)
    return {
        clear: () => {
            clearTimeout(timer)
        }
    }
}
```
:::

## 25.延迟加载
```
在JS中可以通过defer和async让脚本延迟加载
1.async：加载完成后立即执行，多个async脚本先下载完的先执行，若DOM未解析完，会阻塞HTML渲染，执行与DOMContentLoaded无关
    当执行到async脚本时，会先下载对应的脚本，然后JS继续执行下一个标签，等到async脚本下载完毕时，若DOM正在渲染则暂停渲染，执行async脚本。（多个async脚本先下载完的先执行）
2.defer:加载完成后不立即执行，会在DOM解析完成之后，DOMContentLoaded之前执行，多个defer脚本需要等待所有的defer脚本下载完毕后再依次执行，不会阻塞HTML渲染
    当执行到defer脚本时，会先下载对应的脚本，然后JS继续执行下一个标签，等到defer脚本下载完毕时，需要等待DOM渲染完毕后执行defer脚本，然后触发DOMContentLoaded的回调(多个defer脚本需要等待所有的defer脚本下载完毕后再依次执行)
```
:::tip
1.浏览器会优先下载同步脚本，后下载defer async 脚本<br>
2.动态插入JS与async脚本一致<br>
3.适用场景：<br>
    1.defer 次屏渲染 广告模块 推荐模块等<br>
    2.async PV埋点等<br>
:::

## 26.ES6 新增

```
1.语法：ES6引入了新语法，比如箭头函数、模板字符串、解构赋值、默认参数值、展开运算符等
2.作用域： 新增块级作用域，使用let const
3.类和模块：使用class关键词定义类，使用import导入export导出模块
4.迭代器和生成器：引入Iterator迭代器和generator生成器，迭代器提供了遍历数据结构的通用方式，生成器可以简化异步编程的写法
5.Promise：处理异步操作的编程模型
6.新的数据结构: Map Set Symbol
```

## 27.let const var 的区别

```
1.var具有变量提升，而let const没有(因为let const的声明和初始化两个阶段解耦，同时在这两个阶段中创建了暂时性死区，在初始化之前，变量处于暂时性死区无法访问)
2.var 是全局作用域或函数作用域，let const 是块级作用域
3.同一作用域下 let const 不能重复声明同名变量，var可以
4.const 声明的是常量，必须赋初值，一旦声明的变量不能再次修改，如果是对象，可以修改其中的属性(可以通过object.freeze冻结对象)
```

## 28.类的创建和继承
```
1.类的创建: 通过构造函数或者class关键字
2.继承：
    原型链继承 构造函数继承 组合继承 原型式继承 寄生式继承 寄生组合式继承 
```

## 29.this的指向
```
1.非严格模式下的全局环境,this指向window
2.在对象中，属性的this指向外层this， 方法中的this指向调用它的对象
3.回调函数中的this指向window（事件回调的this指向e.currentTarget）
4.箭头函数中的this指向当前函数外的this（回调函数使用箭头函数时，this指向当前函数外的this）
5.构造函数和类的this指向实例化对象,静态方法或属性的this指向该类
6.call,apply,bind的this指向第一个参数

总结：this永远指向最后调用它的对象：
    1.如果函数中有this,若没有被上一级的对象调用，那就被window调用了，指向window；若被上一级的对象调用了，那就指向上一级对象
    2.如果函数中有this，且函数中包含多个对象，尽管函数是被最外层的对象调用的 但是this还是指向它的上一级对象
    3.当this遇到return， 如果return一个对象，this指向这个对象，不然this就指向函数的实例(返回null也是指向函数的实例)
```

## 30.高阶函数和回调函数
```
1.高阶函数: 将函数作为入参或者返回值的函数
2.回调函数：被作为返回值的函数
```

## 31.Promise
```
promise是一种异步编程解决方案。只要符合promise/A+规范，就是一个promise。

promise/A+规范中规定：
1.promise应该有三种状态，分别是初始状态pending（可改变），最终态fulfilled、rejected。其中，fulfilled必须有一个value值，rejected必须有一个reason
    promise可以通过resolve或reject方法将pending改为fulfilled或rejected,一旦改变后就不能再变
2.promise应该提供一个then方法，用来访问最终的结果。
    then方法接收两个参数 onFulfilled 和 onRejected,这两个参数必须是函数类型且应该是微任务，若参数不是函数，应该被忽略
    在状态变为fulfilled时，应该调用onFulfilled，参数是value,且只能调用一次
    在状态变为rejected时，应该调用onRejected， 参数是reason，且只能调用一次
    then方法返回一个promise且可以被多次调用
```

## 32.Generator
```
一种特殊的函数，可以通过*关键字定义，yield关键字暂停执行并传递值，用于控制异步流程，一般与迭代器一起使用
```

## 33.async/await
```
一种异步编程解决方案，是生成器generator的语法糖，await返回一个Promise
async/await 让异步函数通过同步代码的展现形式展现，提高代码可读性

```

## 34.事件循环
```
浏览器中有多个进程，其中渲染进程是一个网页的重要一环
渲染进程中通过渲染主线程来执行脚本、布局样式的渲染等等工作，同时为了提高运行效率，就引入了事件循环。
事件循环的核心思想是开辟一个消息队列用于存放各个线程加入的任务，然后通过渲染主线程永久轮询消息队列中的任务并执行。
而消息队列中存在同步和异步任务，其中异步任务大致分为：
    1.前端计时器：setTimeout,setInterval
    2.前端异步:promise等
    3.网络通信： xhr fetch等
    4.用户交互回调： addEventListener
其次，渲染主线程在取任务时，会有一个优先级，从高到底分别是：
    微任务队列： promise mutationObserver等
    交互队列： 用户交互后的回调
    延时队列： 计时器回调
    等
```

## 35.V8隐藏类
```
隐藏类是一种优化JS对象属性访问的机制，在JS中每创建一个对象，V8都会为其创建一个隐藏类。
隐藏类通过形状和内联缓存来提高属性访问的性能，可以提高JS代码的执行效率
```

## 36.JS的运行机制
```
JS的运行机制是在浏览器执行的，主要分为三个阶段：解析，执行，渲染
解析阶段：浏览器会对HTML文档进行解析，生成DOM树和CSSOM树，同时如果HTML中包含JS代码，浏览器会将其解析生成抽象语法树
执行阶段：浏览器会逐行执行JS代码，执行过程中通过作用域链和执行上下文栈来管理变量和函数的访问权限：
    1.创建全局执行上下文
    2.浏览器预处理变量和函数声明，使得他们在执行阶段前可用
    3.逐行执行代码，遇到函数调用时，会创建一个新的执行上下文
    4.在每一个执行上下文中通过作用域链查找变量和函数的引用
    5.内存管理和垃圾回收
渲染阶段：JS执行和样式布局渲染共用同一个线程：渲染主线程，且JS执行会阻塞渲染，同时通过消息队列 + 异步来提高运行效率
```

## 37.CJS、AMD、CMD
```
CJS、AMD、CMD都是用于JS中组织和管理模块的模块系统或规范
CJS：同步加载模块，模块会在代码执行时立即加载，通过require引入module.exports导出（node.js就是用了cjs）
AMD：异步加载模块，在定义模块时就声明其依赖，通过define定义，require引入（require.js用了）
CMD：异步加载模块，在使用模块时才声明其依赖，更加懒加载，通过define定义，require引入（sea.js用了）
```