# 浏览器缓存
## HTTP缓存
### HTTP缓存机制
```
浏览器通过过期机制和验证机制来规定浏览器是否可以直接使用缓存中的副本
过期机制：指缓存副本的有效期
验证机制：服务器返回资源时可以在控制头信息带上验证标识(Etag),通过判断验证标识是否匹配来判断是否使用缓存
```
### HTTP缓存策略
```
HTTP缓存策略分为强缓存和协商缓存
强缓存: 在缓存期间不需要请求，可以通过设置expires和cache-control来决定缓存的使用
协商缓存：需要客户端向服务器发送请求来询问是否使用缓存,通过"last-modified、if-modified-since"和"Etag、if-none-match"
```
:::tip
expires: http1.0出现， 它的值是GMT时间，表示该资源会在该时间之后过期，但是会受到本地时间的影响<br>
cache-control: http1.1出现，它的表达式为cache-control:max-age=1000，同样表示多少时间后缓存过期， 优先级高于expires<br>
    cache-control的值:<br>
        1.max-age: 缓存的最大有效时间<br>
        2.no-cache：向服务器验证是否能使用缓存<br>
        3.no-stroe：禁止浏览器使用缓存<br>
        4.public：资源可以被所有用户缓存，包括终端和CDN等代理服务器<br>
        5.private：只能被终端缓存，代理服务器不行<br>
:::

:::tip
last-modified和if-modified-since：<br>
    last-modified表示本地文件最后修改时间<br>
    在客户端发起请求时，if-modified-since字段会将last-modified发送至服务器，询问服务器在该日期后资源是否有修改<br>
    （但是本地打开缓存文件也会修改last-modified的值）<br>
Etag和if-none-match:<br>
    etag是资源的唯一标识。<br>
    在客户端发起请求时，if-none-match会将etag发送给服务器，询问服务器该资源的etag是否变动,优先级高于last-modified<br>
    etag在http1.1引入，为了解决以下问题：<br>
        1.某些服务器不能准确获取文件的最后修改时间<br>
        2.文件仅仅修改了时间，就会重新获取资源<br>
        3.文件修改频繁，可能会有秒以下的修改，但是last-modified只精确到秒。<br>
:::

### HTTP缓存的位置
```
1.service worker: 运行在浏览器的独立线程，不会阻碍当前JS线程的运行，需使用HTTPS协议
2.memory cache: 内存缓存，主要包含当前页面中已经抓取到的资源，预请求的资源存放在这里
3.disk cache: 磁盘缓存
4.push cache：推送缓存，客户端和服务器的连接关闭，它的缓存就释放
```

### HTTP缓存的全过程
```
1.浏览器第一次加载资源，从服务器上下载资源，并缓存资源和响应头
2.下一次加载时，先比较当前时间和上一次时间的时间差是否超过cache-chontrol设置的max-age， 未超过就使用缓存(如果不支持http1.1则使用expires)
3.若超过max-age，就向服务器发送请求，浏览器会优先根据请求头中的etag判断文件是否修改,返回304或者200（如果没有etag，就通过last-modified）
```

### HTTP缓存的优点(为什么要使用http缓存)
```
因为使用http缓存可以：
1.减少服务器的负担，提高网站的性能
2.加快客户端网页的加载速度
3.减少多余的网络数据传输
```

## 浏览器本地缓存
```
1.localStroage
2.sessionStroage
3.cookie
4.web sql: 关系数据库，通过sql语句访问
5.indexDB： 索引数据库 250m以上 支持异步操作 具有事务特点 不支持DO操作 不能跨域 数据形式是JSON， 支持二进制存储
6.Application Cache 离线存储
```

### localStroage sessionStroage cookie 的区别
```
1.localStroage和sessionStroage仅保存在本地，而cookie会在同源的请求中携带
2.localStroage和sessionStroage的存储大小一般为5mb,cookie一般不超过4kb
3.localStroage始终有效，需要手动清除；sessionStroage当前浏览器窗口关闭前有效；cookie 设置的有效期之前有效
4.localStroage和cookie可以在所有的同源浏览器窗口中共享，sessionStroage不能在不同的浏览器窗口共享
```
:::tip
cookie 设置过期时间：<br>
    1.expires 2.cache-control:max-age (可以通过expires设置过去时间或者max-age设置为0来删除cookie)<br>
如何让cookie在跨站请求时不发送:设置sameSite<br>
    samesite的三个值<br>
        1.strict: 仅允许相同站点携带cookie(url完全一致)<br>
        2.lax: 允许部分第三方站点 （默认）<br>
        3.none： 都会发送<br>
:::

:::tip
token一般存放在哪？localstroage sesstionstroage cookie 都可以<br>
区别：<br>
    1.放在localstroage sesstionstroage容易受到xss攻击(xss：注入代码攻击)<br>
    2.放在cookie,可以指定httponly来防止js被读取，也可以指定secure只在https下传输，但容易受到csrf攻击(csrf: 跨站请求伪造)<br>
:::

### 浏览器多标签通信
```
1.监听localStroage
2.cookie + setInterval 定时读取cookie的值
3.websocket
4.sharedWorker (html5)
```

## 浏览器的组成
```
浏览器的主要组成部分：
1.用户界面
2.浏览器引擎
3.渲染引擎
4.网络
5.UI后端
6.JS解释器
7.数据存储
```

## 浏览器渲染原理
```
浏览器渲染主要是通过浏览器的渲染进程。
渲染进程中常用的有GUI渲染线程，JS引擎线程，定时器线程，事件触发线程，网络请求线程等
浏览器渲染的过程：
1.解析HTML，生成DOM树、CSSOM树、AST抽象语法树
2.结合DOM树、CSSOM树生成渲染树
3.根据生成的渲染树，进行回流得到节点的几何信息
4.根据渲染树和回流得到的几何信息，进行重绘，得到节点的绝对像素
5.GUI渲染线程进行页面渲染，期间若JS引擎线程执行JS，GUI渲染线程会挂起等待
```

## JS为什么是单线程的
```
因为如果JS是多线程的，就会产生用户交互冲突的问题，导致浏览器不知道该执行哪一条线程的结果
```

## GUI线程和JS引擎线程互斥
```
因为JS可操作DOM，如果JS修改DOM和GUI渲染界面同时进行，可能会出现渲染不可预期的结果
```
:::tip
渲染阻塞:因为JS执行时间过长，使得GUI线程被挂起时间过长，导致页面渲染不连贯
因素：
    1.等待CSS资源下载完成
    2.中途JS脚本
解决：
    1.CSS放在heade中使用link
    2.JS使用defer(推荐) async(还是会造成阻塞)
:::

## 进程和线程
```
进程是操作系统分配资源的最小单位，线程是执行程序的最小单位
一个进程由一个或多个线程组成，线程是进程中代码的不同执行路线
进程间相互独立，线程间共享内存和资源
线程上下文切换比进程上下文切换快
```

## 进程的通讯方式
```
1.无名管道： 半双工通信，单向数据流，有亲缘关系的进程间使用
2.有名管道： 半双工通信，允许非亲缘关系进程使用
3.信号： 通知接收进程的事件
4.信号量： 计数器，用来控制多个进程对共享资源的访问
5.消息队列：传递消息的链表
6.共享内存：映射一份能被其他进程访问的内存，一个进程创建，多个进程共享
7.套接字： 不同机器之间的进程通信
```

## 进程的三种状态
```
就绪：进程已分配到除CPU外的所有资源
执行：进程已获取到处理机，其程序正在处理机上执行
阻塞：正在执行的进程由于等待某个事件而无法执行，便放弃处理机处于阻塞
```
:::tip
僵尸进程：已完成且处于终止状态，但在进程表中依旧存在的进程<br>
原因： 通常发生在父子关系的进程中，由于父进程仍需读取其子进程的退出状态所造成
:::
