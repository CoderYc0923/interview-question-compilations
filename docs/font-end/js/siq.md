## 手写 call apply bind

```js
//call
Function.prototype.mycall = function (context, ...args) {
  //判断调用mycall的是否为函数
  if (typeof this !== "function")
    throw new TypeError("context is not  a function");
  //判断是否有context
  context = context || globalThis;
  //在context上创建一个唯一的fn，并将属性值绑定为调用mycall的函数，并调用
  let fn = Symbol("key");
  context[fn] = this;
  const res = context[fn](...args);
  //删除fn属性
  delete context[fn];
  return res;
};
//apply
Function.prototype.myapply = function (context, argsArr = []) {
  //判断调用mycall的是否为函数
  if (typeof this !== "function")
    throw new TypeError("context is not  a function");
  //判断是否有context
  context = context || globalThis;
  //在context上创建一个唯一的fn，并将属性值绑定为调用mycall的函数，并调用
  let fn = Symbol("key");
  context[fn] = this;
  const res = context[fn](...argsArr);
  //删除fn属性
  delete context[fn];
  return res;
};
//bind
Function.prototype.mybind = function (context, ...args) {
  //判断调用mycall的是否为函数
  if (typeof this !== "function")
    throw new TypeError("context is not  a function");
  //判断是否有context
  context = context || globalThis;
  //保存原始函数的引用
  const _this = this;
  return function fn(...innerArgs) {
    //判断返回出去的函数是否被new
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs);
    }
    return _this.apply(context, args.concat(innerArgs));
  };
};
```

## 动态执行，如何将字符串当作代码执行

```
1. eval() 同步 当前作用域
2. setTimeout 异步 全局作用域
3. 通过Function 创建一个函数 同步 全局作用域
4. script 创建一个script标签，然后在innerHTML中加入 同步 全局作用域
```

## 深拷贝

```js
//实现方式1
function deepClone(obj) {
  if (typeof obj === "object") {
    var res = obj.constructor === Array ? [] : {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        res[i] = deepClone(obj);
      }
    }
  } else {
    res = obj;
  }
  return res;
}

//实现方式2
function deepClone(obj) {
  return new Promise((reslove) => {
    const { port1, port2 } = new MessageChannel();
    prot1.postMessage(obj);
    port2.onMessage = (msg) => reslove(msg.data);
  });
}
```

## JS 全排列

```js
//思路： 递归 + 字符串中除了该元素的其他元素进行全排列
function fullpermutate(str) {
  var res = [];
  if (str.length === 0) return "";
  if (str.length === 1) return [str];
  if (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      const left = str[i];
      let newStr = str.slice(0, i) + str.slice(i + 1, str.length);
      const next = fullpermutate(newStr);
      for (const k of next) {
        res.push(left + k);
      }
    }
  }
  return [...new Set(res)];
}
```

## 不使用 async/await，顺序执行一组异步代码函数，并输出最后的结果

```js
//使用Promise.reslove和reduce结合实现
const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...fn) => {
  return (x) => fn.reduce(applyAsync, Promise.resolve(x));
};
const transformData = composeAsync(func1, func2, func3, func4);
transformData(1)
  .then((res) => console.log(res, "last res"))
  .catch((e) => console.log(e));
```

## 事件循环输出排序面试题

```
要点：
    1.async await 结束后会将后续代码放入微队列
    2.promise.then 中的入参方法是在微队列中,想要触发then中的方法，必须将promise状态变成最终态(reslove()或者reject())
    3.promise对象的构造函数只会调用一次，then方法和catch方法都能多次调用，但一旦有了确定的结果，再次调用就会直接返回结果。
    4.new promise 会立即调用
    5.then期望接收的是函数，非函数会发生值穿透,所以输出1
```

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
  reject("error");
});
promise
  .then(() => {
    console.log(3);
  })
  .catch((e) => console.log(e));
console.log(4);
```

:::tip
输出：1 2 4 3
:::

```js
//promise对象的构造函数只会调用一次，then方法和catch方法都能多次调用，但一旦有了确定的结果，再次调用就会直接返回结果。
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("once");
    resolve("success");
  }, 1000);
});
promise.then((res) => {
  console.log(res);
});
promise.then((res) => {
  console.log(res);
});
```

:::tip
输出：'once' 'success' 'success'
:::

```js
const p1 = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    let p2 = new Promise((resolve, reject) => {
      console.log(2);
      const timeOut1 = setTimeout(() => {
        console.log(3);
        resolve(4);
      }, 0);
      resolve(5);
    });
    resolve(6);
    p2.then((arg) => {
      console.log(arg);
    });
  });
const timeOut2 = setTimeout(() => {
  console.log(8);
  const p3 = new Promise((reject) => {
    reject(9);
  }).then((res) => {
    console.log(res);
  });
}, 0);

p1().then((arg) => {
  console.log(arg);
});
console.log(10);
```

:::tip
输出：1,2,10,5,6,8,9,3
:::

```js
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
```

:::tip
输出: 1 <br>
因为 then 期望接收的是函数，非函数会发生值穿透,所以输出 1
:::

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("asnyc1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(() => {
  console.log("setTimeOut");
}, 0);
async1();
new Promise(function (reslove) {
  console.log("promise1");
  reslove();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```

:::tip
输出：<br>
'script start'<br>
'async1 start'<br>
'async2'<br>
'promise1'<br>
'script end'<br>
'asnyc1 end'<br>
'promise2'<br>
'setTimeOut'
:::

## Promise 并发控制

```js
//例如： 给一个200url的数组，通过这些url来发送请求，要求并发请求数量不能超过5个， 通过promise.race
class PromisePool {
  //取消阀门
  private isStop = false
  run = async (taskList, max) => {
    return new Pormise(async (resolve, reject) => {
      try {
        this.isStop = false
        const len = taskList.length
        const pool = []
        const res = new Array(len)
        let finishCount = 0
        for (let i = 0; i < len; i++) {
          if (this.isStop) return reject('并发终止')
          let task = taskList[i]
          //若此时并发池已满，等待并发池内的任务结束
          if (pool.length >= max) await Promise.race(pool)
          pool.push(task)
          const handler = (info) => {
            pool.slice(pool.indexOf(task), 1)
            res[i] = info
            finishCount++
            if (finishCount === len) reslove(res)
          }
          task.then(data => {
            handler(data)
          }).catch(err => {
            handler(err)
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  },
  stop = () => {
    this.isStop = true
  }
}
```
