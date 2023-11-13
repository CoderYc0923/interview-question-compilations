## 1.BFC

```
BFC是块级格式上下文，指一个独立的渲染区域
BFC的特点:
    1.内部元素不会影响外部元素，内部元素会垂直排列，并且元素之间的间隙由margin控制
    2.BFC的区域不会与浮动元素的区域重叠，并且计算BFC区域的高度时，浮动元素页参与计算
BFC的形成条件：
    1.浮动元素（除了none以外的值）
    2.定位元素（只有绝对定位和固定位）
    3.display为（flex, inline-flex,inline-block,table-cell,table-caption）
    4.overflow（除了visible）的值
```

::: tip
引出的知识点：<br>
1.margin 合并问题: BFC 中相邻两个元素的 magin 合并值判：正正取大值，正负值相加，负负最负值<br>
2.margin 高度塌陷： 开启 BFC、设置高度、浮动元素添加块级伪元素并设置 clear:both
:::

## 2.三栏布局的实现方式

```
1.浮动布局
2.定位布局
3.圣杯布局
4.双飞翼布局
5.弹性布局
6.网格布局
```

## 3.CSS 计算属性 calc

```
calc是用来执行动态计算的
它主要解决了在进行数学运算时的问题，让CSS样式更具灵活性和适应性
```

## 4.水平垂直居中方式

```
1.父相子绝 + 负margin
2.父相子绝 + calc
3.父相子绝 + transform
4.flex布局
5.网格布局
```

## 5.渐进增强和优雅降级

```
渐进增强和优雅降级指的是两种WEB开发模式，目的是为了在不同环境下给用户提供最佳体验
1.渐进增强：先构建项目的核心功能，再逐步增强用户体验（保证基础功能，然后分环境提供更好的用户体验）
2.优雅降级：先强调再最佳环境下的最佳用户体验，然后在较差环境下降低用户体验
```

## 6.iframe

### 6.1 介绍

```js
iframe是HTML中的一种用于将一个网页嵌入到另一个网页中的标签，它可以在一个页面中展示来自其他页面的内容，实现网页间的互联互通。
iframe通信可以通过:
    1.URL传参
    2.postMessage通信

//子传父
//子
window.parent.postMessage('xxx', 'http://parent.com')
//父
window.addEventListener('message', receiveMessage, false)
function receiveMessage(event) {
    if (event.origin === 'http://child.com') {
        //处理
    }
}

//父传子
//父
const iframeWindow = document.getElementById('my-iframe').contentWindow;
const message = { type: 'GREETINGS', data: 'Hello, child!' };
const targetOrigin = 'http://child.com'; // 指定接收方的源
iframeWindow.postMessage(message, targetOrigin);
//子
window.addEventListener('message', receiveMessage, false);
function receiveMessage(event) {
  if (event.origin === 'http://parent.com') { // 验证消息来源
    console.log(event.data); // 处理接收到的消息
  }
}
```

### 6.2 优缺点

```
优点：
    1.分割内容，可以展示来自不同的源内容
    2.安全隔离，iframe中加载的内容通常受到浏览器的安全策略保护，不会直接影响到主页面，不容易遭受到恶意攻击
缺点：
    1.性能问题：每个iframe都需要加载渲染，会增加页面加载时间和资源消耗
    2.跨域限制：iframe受浏览器同源政策影响
```

### 6.3 应用场景

```
1.网页编辑器
2.多页面通信
3.历史记录管理，解决单页面应用浏览器前进后退按钮的方案
4.实现无刷新文件上传
5.创建前端沙箱环境，因为iframe相当于一个新的标签页，是一个独立的环境
6.加载广告等
```

## chrome 浏览器如何支持小于 12px 的文字
```
1.transform:scale()（兼容性好，页面不会发生变化）
2.zoom:（有兼容性问题，触发回流）
```

## CSS盒子模型
```
1.标准盒子模型(content-box)：盒子的宽高只包含内容区域，不包含内边距和边框、外边距
2.IE盒子模型（怪异盒子模型 border-box）：盒子的宽高包含内容区域，内边距和边框，不包含外边距
```

## HTML5新特性
```
1.canvas
2.语义化标签
3.表单
4.媒体元素,比如video\audio
5.拖放api
6.地理位置
7.web worker
8.web stotage
9.web socket
10.SVG
```

## CSS3新特性
```
1.各种css选择器
2.圆角
3.阴影
4.渐变
5.变换
6.过渡
7.动画
8.裁剪
9.filter
```

## CSS选择器优先级以及权重
```
1.优先级 看对应权重
2.权重：
    !important: 1000
    ID选择器: 100
    类、伪类、伪元素、属性选择器： 10
    标签选择器：1
    通配符*:0
```

## HTML5的Input元素Type 类型
```
text: 文本, password: 密码, submit: 提交, button: 按钮, email: 邮件,
 radio:单选,checkbox:多选, file:文件,image:图像, tel:电话, search:搜索,
  number:数字, color:颜色, month:月,week:周,datetime: 日期时间,range: 范围

```

## CSS中哪些属性可继承，哪些属性不可继承
```
1.字体、文本相关的属性通常可继承
2.布局、盒子模型相关属性通常不可继承
```

## CSS单位中px、em、rem的区别？配合font-size计算
```
px: px = 设备(物理)像素 * 设备像素比(dpr)，不会继承或受到外部字体大小影响
em: 相对单位，1em等于当前字体大小，会继承父元素的字体大小
rem: 相对单位，1rem等于HTML根元素字体大小，大小不会继承

根据font-size计算：
    px: 固定大小，不受外部影响
    em: 1em = 1 * 当前字体大小; 2em = 2 * 当前字体大小
    rem 1rem = 1 * html根元素字体大小; 2em = 2 *  html根元素字体大小 （可以通过在不同宽度下设置不同的html字体大小来达到响应式）
```
::: tip
H5适配方案中rem适配（等比适配）原理,比如(amfe-flexible、postcss-pxtorem)<br>
    1.获取设备rem代表多少px： <br>
        将设备视口划分为n 份 比如（n = 10），设置设备根元素html的font-size = 1rem = 设备视口宽 / n<br>
    2.获取设计稿中某个元素在设备中对应的rem：<br>
        元素在设备中的rem = 元素在设计稿中的px / (设计稿宽 / n)
    
    元素在设备中的px = 元素在设备中的rem * 设备根元素font-size

    ```js
    //根据设备视口宽度设置html根元素大小
    (function(n = 10){
        const dEl = document.documentElement;
        function setRem(){
            const rem = dEl.clientWidth / n;
            dEl.style.fontSize = rem + 'px';
        }
        setRem()
        window.onresize = setRem
    })()
    ```
:::

## 如何绘制一条0.5px的线
```
1.scale缩放
2.box-shadow
3.svg使用background-image
```

## 元素隐藏
```
1.display:none （元素不被渲染，不占空间，触发回流重绘，绑定事件不触发， 不被继承，子元素不会被渲染， 无过渡动画）
2.visibility:hidden （元素隐藏，占空间，触发重绘， 绑定事件不触发， 被继承，子元素可通过visibiliity:visible显示， 无过渡动画）
3.opacity:0 （元素透明度为0，占空间，触发重绘， 绑定事件触发， 被继承，子元素不能取消隐藏， 有过渡动画）
```

## 背景色会填充哪些区域
```
content + padding
```

## 为什么img是行内元素，但可以设置宽高呢
```
因为img属于可置换元素，内置宽高属性

```
::: tip
可置换属性：img input select textarea button label，video, audio等
:::

## 伪元素和伪类
```
1.伪元素：用于创建一些不存在dom树的元素
2.伪类：用于当某个元素处于某个状态时为其添加样式
区别：
    伪元素是创建一个文档树之外的元素
    伪类是操作处于文档树中的元素
```

## CSS link 和 @import 标签的区别
```
1.加载顺序和性能：
    当浏览器解析HTML文件的时候，link标签会立即加载并同时请求外部css资源，而@import会在html文档加载完后加载外部css样式表
    所以使用link可以更快加载完成资源，而@import可能会导致页面加载完成的时间变长
2.兼容性：
    link是HTML标签，所有浏览器都支持；@import是CSS2.1才有的语法，一些老旧浏览器可能不支持，IE5+支持
3.功能性：
    link可以加载css,脚本，图像等，@import只能加载css
4.可控性：
    link可以通过脚本创建
5.权重：
    link引入的样式表权重与页面中其他样式表相同，@import引入的样式表权重较低，会被其他样式表覆盖
```

## DOCTYPE的作用
```
DOCTYPE是一种文档类型说明，用来告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档
有两种模式：严格模式和混杂模式
区别:
    严格模式：当HTML文档包含了标准的DOCTYPE声明或者使用了<!DOCTYPE html>这样的HTML5声明时，浏览器会进入严格模式。
            在严格模式下，浏览器会按照标准规范严格解析和渲染页面
    混杂模式：当HTML文档没有明确的DOCTYPE声明或含有一些特定错误时，浏览器会进入混杂模式。
            在混杂模式下，浏览器会按照一些相对宽松的规则解析页面，以保持与旧版浏览器的兼容性
```