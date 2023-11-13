import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.ac5a18bd.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/html_css/iq.md","filePath":"font-end/html_css/iq.md","lastUpdated":1699863567000}'),l={name:"font-end/html_css/iq.md"},p=e(`<h2 id="_1-bfc" tabindex="-1">1.BFC <a class="header-anchor" href="#_1-bfc" aria-label="Permalink to &quot;1.BFC&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">BFC是块级格式上下文，指一个独立的渲染区域</span></span>
<span class="line"><span style="color:#e1e4e8;">BFC的特点:</span></span>
<span class="line"><span style="color:#e1e4e8;">    1.内部元素不会影响外部元素，内部元素会垂直排列，并且元素之间的间隙由margin控制</span></span>
<span class="line"><span style="color:#e1e4e8;">    2.BFC的区域不会与浮动元素的区域重叠，并且计算BFC区域的高度时，浮动元素页参与计算</span></span>
<span class="line"><span style="color:#e1e4e8;">BFC的形成条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">    1.浮动元素（除了none以外的值）</span></span>
<span class="line"><span style="color:#e1e4e8;">    2.定位元素（只有绝对定位和固定位）</span></span>
<span class="line"><span style="color:#e1e4e8;">    3.display为（flex, inline-flex,inline-block,table-cell,table-caption）</span></span>
<span class="line"><span style="color:#e1e4e8;">    4.overflow（除了visible）的值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">BFC是块级格式上下文，指一个独立的渲染区域</span></span>
<span class="line"><span style="color:#24292e;">BFC的特点:</span></span>
<span class="line"><span style="color:#24292e;">    1.内部元素不会影响外部元素，内部元素会垂直排列，并且元素之间的间隙由margin控制</span></span>
<span class="line"><span style="color:#24292e;">    2.BFC的区域不会与浮动元素的区域重叠，并且计算BFC区域的高度时，浮动元素页参与计算</span></span>
<span class="line"><span style="color:#24292e;">BFC的形成条件：</span></span>
<span class="line"><span style="color:#24292e;">    1.浮动元素（除了none以外的值）</span></span>
<span class="line"><span style="color:#24292e;">    2.定位元素（只有绝对定位和固定位）</span></span>
<span class="line"><span style="color:#24292e;">    3.display为（flex, inline-flex,inline-block,table-cell,table-caption）</span></span>
<span class="line"><span style="color:#24292e;">    4.overflow（除了visible）的值</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>引出的知识点：<br> 1.margin 合并问题: BFC 中相邻两个元素的 magin 合并值判：正正取大值，正负值相加，负负最负值<br> 2.margin 高度塌陷： 开启 BFC、设置高度、浮动元素添加块级伪元素并设置 clear:both</p></div><h2 id="_2-三栏布局的实现方式" tabindex="-1">2.三栏布局的实现方式 <a class="header-anchor" href="#_2-三栏布局的实现方式" aria-label="Permalink to &quot;2.三栏布局的实现方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.浮动布局</span></span>
<span class="line"><span style="color:#e1e4e8;">2.定位布局</span></span>
<span class="line"><span style="color:#e1e4e8;">3.圣杯布局</span></span>
<span class="line"><span style="color:#e1e4e8;">4.双飞翼布局</span></span>
<span class="line"><span style="color:#e1e4e8;">5.弹性布局</span></span>
<span class="line"><span style="color:#e1e4e8;">6.网格布局</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.浮动布局</span></span>
<span class="line"><span style="color:#24292e;">2.定位布局</span></span>
<span class="line"><span style="color:#24292e;">3.圣杯布局</span></span>
<span class="line"><span style="color:#24292e;">4.双飞翼布局</span></span>
<span class="line"><span style="color:#24292e;">5.弹性布局</span></span>
<span class="line"><span style="color:#24292e;">6.网格布局</span></span></code></pre></div><h2 id="_3-css-计算属性-calc" tabindex="-1">3.CSS 计算属性 calc <a class="header-anchor" href="#_3-css-计算属性-calc" aria-label="Permalink to &quot;3.CSS 计算属性 calc&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">calc是用来执行动态计算的</span></span>
<span class="line"><span style="color:#e1e4e8;">它主要解决了在进行数学运算时的问题，让CSS样式更具灵活性和适应性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">calc是用来执行动态计算的</span></span>
<span class="line"><span style="color:#24292e;">它主要解决了在进行数学运算时的问题，让CSS样式更具灵活性和适应性</span></span></code></pre></div><h2 id="_4-水平垂直居中方式" tabindex="-1">4.水平垂直居中方式 <a class="header-anchor" href="#_4-水平垂直居中方式" aria-label="Permalink to &quot;4.水平垂直居中方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.父相子绝 + 负margin</span></span>
<span class="line"><span style="color:#e1e4e8;">2.父相子绝 + calc</span></span>
<span class="line"><span style="color:#e1e4e8;">3.父相子绝 + transform</span></span>
<span class="line"><span style="color:#e1e4e8;">4.flex布局</span></span>
<span class="line"><span style="color:#e1e4e8;">5.网格布局</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.父相子绝 + 负margin</span></span>
<span class="line"><span style="color:#24292e;">2.父相子绝 + calc</span></span>
<span class="line"><span style="color:#24292e;">3.父相子绝 + transform</span></span>
<span class="line"><span style="color:#24292e;">4.flex布局</span></span>
<span class="line"><span style="color:#24292e;">5.网格布局</span></span></code></pre></div><h2 id="_5-渐进增强和优雅降级" tabindex="-1">5.渐进增强和优雅降级 <a class="header-anchor" href="#_5-渐进增强和优雅降级" aria-label="Permalink to &quot;5.渐进增强和优雅降级&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">渐进增强和优雅降级指的是两种WEB开发模式，目的是为了在不同环境下给用户提供最佳体验</span></span>
<span class="line"><span style="color:#e1e4e8;">1.渐进增强：先构建项目的核心功能，再逐步增强用户体验（保证基础功能，然后分环境提供更好的用户体验）</span></span>
<span class="line"><span style="color:#e1e4e8;">2.优雅降级：先强调再最佳环境下的最佳用户体验，然后在较差环境下降低用户体验</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">渐进增强和优雅降级指的是两种WEB开发模式，目的是为了在不同环境下给用户提供最佳体验</span></span>
<span class="line"><span style="color:#24292e;">1.渐进增强：先构建项目的核心功能，再逐步增强用户体验（保证基础功能，然后分环境提供更好的用户体验）</span></span>
<span class="line"><span style="color:#24292e;">2.优雅降级：先强调再最佳环境下的最佳用户体验，然后在较差环境下降低用户体验</span></span></code></pre></div><h2 id="_6-iframe" tabindex="-1">6.iframe <a class="header-anchor" href="#_6-iframe" aria-label="Permalink to &quot;6.iframe&quot;">​</a></h2><h3 id="_6-1-介绍" tabindex="-1">6.1 介绍 <a class="header-anchor" href="#_6-1-介绍" aria-label="Permalink to &quot;6.1 介绍&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">iframe是HTML中的一种用于将一个网页嵌入到另一个网页中的标签，它可以在一个页面中展示来自其他页面的内容，实现网页间的互联互通。</span></span>
<span class="line"><span style="color:#B392F0;">iframe通信可以通过</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    1.URL传参</span></span>
<span class="line"><span style="color:#E1E4E8;">    2.postMessage通信</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//子传父</span></span>
<span class="line"><span style="color:#6A737D;">//子</span></span>
<span class="line"><span style="color:#E1E4E8;">window.parent.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;http://parent.com&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//父</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, receiveMessage, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">receiveMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (event.origin </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://child.com&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//父传子</span></span>
<span class="line"><span style="color:#6A737D;">//父</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iframeWindow</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-iframe&#39;</span><span style="color:#E1E4E8;">).contentWindow;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { type: </span><span style="color:#9ECBFF;">&#39;GREETINGS&#39;</span><span style="color:#E1E4E8;">, data: </span><span style="color:#9ECBFF;">&#39;Hello, child!&#39;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">targetOrigin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://child.com&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 指定接收方的源</span></span>
<span class="line"><span style="color:#E1E4E8;">iframeWindow.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(message, targetOrigin);</span></span>
<span class="line"><span style="color:#6A737D;">//子</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">, receiveMessage, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">receiveMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (event.origin </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://parent.com&#39;</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 验证消息来源</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event.data); </span><span style="color:#6A737D;">// 处理接收到的消息</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">iframe是HTML中的一种用于将一个网页嵌入到另一个网页中的标签，它可以在一个页面中展示来自其他页面的内容，实现网页间的互联互通。</span></span>
<span class="line"><span style="color:#6F42C1;">iframe通信可以通过</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    1.URL传参</span></span>
<span class="line"><span style="color:#24292E;">    2.postMessage通信</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//子传父</span></span>
<span class="line"><span style="color:#6A737D;">//子</span></span>
<span class="line"><span style="color:#24292E;">window.parent.</span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;http://parent.com&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//父</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;message&#39;</span><span style="color:#24292E;">, receiveMessage, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">receiveMessage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (event.origin </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://child.com&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//父传子</span></span>
<span class="line"><span style="color:#6A737D;">//父</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iframeWindow</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-iframe&#39;</span><span style="color:#24292E;">).contentWindow;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { type: </span><span style="color:#032F62;">&#39;GREETINGS&#39;</span><span style="color:#24292E;">, data: </span><span style="color:#032F62;">&#39;Hello, child!&#39;</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">targetOrigin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://child.com&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 指定接收方的源</span></span>
<span class="line"><span style="color:#24292E;">iframeWindow.</span><span style="color:#6F42C1;">postMessage</span><span style="color:#24292E;">(message, targetOrigin);</span></span>
<span class="line"><span style="color:#6A737D;">//子</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;message&#39;</span><span style="color:#24292E;">, receiveMessage, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">receiveMessage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (event.origin </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://parent.com&#39;</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// 验证消息来源</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event.data); </span><span style="color:#6A737D;">// 处理接收到的消息</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_6-2-优缺点" tabindex="-1">6.2 优缺点 <a class="header-anchor" href="#_6-2-优缺点" aria-label="Permalink to &quot;6.2 优缺点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">优点：</span></span>
<span class="line"><span style="color:#e1e4e8;">    1.分割内容，可以展示来自不同的源内容</span></span>
<span class="line"><span style="color:#e1e4e8;">    2.安全隔离，iframe中加载的内容通常受到浏览器的安全策略保护，不会直接影响到主页面，不容易遭受到恶意攻击</span></span>
<span class="line"><span style="color:#e1e4e8;">缺点：</span></span>
<span class="line"><span style="color:#e1e4e8;">    1.性能问题：每个iframe都需要加载渲染，会增加页面加载时间和资源消耗</span></span>
<span class="line"><span style="color:#e1e4e8;">    2.跨域限制：iframe受浏览器同源政策影响</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">优点：</span></span>
<span class="line"><span style="color:#24292e;">    1.分割内容，可以展示来自不同的源内容</span></span>
<span class="line"><span style="color:#24292e;">    2.安全隔离，iframe中加载的内容通常受到浏览器的安全策略保护，不会直接影响到主页面，不容易遭受到恶意攻击</span></span>
<span class="line"><span style="color:#24292e;">缺点：</span></span>
<span class="line"><span style="color:#24292e;">    1.性能问题：每个iframe都需要加载渲染，会增加页面加载时间和资源消耗</span></span>
<span class="line"><span style="color:#24292e;">    2.跨域限制：iframe受浏览器同源政策影响</span></span></code></pre></div><h3 id="_6-3-应用场景" tabindex="-1">6.3 应用场景 <a class="header-anchor" href="#_6-3-应用场景" aria-label="Permalink to &quot;6.3 应用场景&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.网页编辑器</span></span>
<span class="line"><span style="color:#e1e4e8;">2.多页面通信</span></span>
<span class="line"><span style="color:#e1e4e8;">3.历史记录管理，解决单页面应用浏览器前进后退按钮的方案</span></span>
<span class="line"><span style="color:#e1e4e8;">4.实现无刷新文件上传</span></span>
<span class="line"><span style="color:#e1e4e8;">5.创建前端沙箱环境，因为iframe相当于一个新的标签页，是一个独立的环境</span></span>
<span class="line"><span style="color:#e1e4e8;">6.加载广告等</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.网页编辑器</span></span>
<span class="line"><span style="color:#24292e;">2.多页面通信</span></span>
<span class="line"><span style="color:#24292e;">3.历史记录管理，解决单页面应用浏览器前进后退按钮的方案</span></span>
<span class="line"><span style="color:#24292e;">4.实现无刷新文件上传</span></span>
<span class="line"><span style="color:#24292e;">5.创建前端沙箱环境，因为iframe相当于一个新的标签页，是一个独立的环境</span></span>
<span class="line"><span style="color:#24292e;">6.加载广告等</span></span></code></pre></div><h2 id="chrome-浏览器如何支持小于-12px-的文字" tabindex="-1">chrome 浏览器如何支持小于 12px 的文字 <a class="header-anchor" href="#chrome-浏览器如何支持小于-12px-的文字" aria-label="Permalink to &quot;chrome 浏览器如何支持小于 12px 的文字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.transform:scale()（兼容性好，页面不会发生变化）</span></span>
<span class="line"><span style="color:#e1e4e8;">2.zoom:（有兼容性问题，触发回流）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.transform:scale()（兼容性好，页面不会发生变化）</span></span>
<span class="line"><span style="color:#24292e;">2.zoom:（有兼容性问题，触发回流）</span></span></code></pre></div><h2 id="css盒子模型" tabindex="-1">CSS盒子模型 <a class="header-anchor" href="#css盒子模型" aria-label="Permalink to &quot;CSS盒子模型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.标准盒子模型(content-box)：盒子的宽高只包含内容区域，不包含内边距和边框、外边距</span></span>
<span class="line"><span style="color:#e1e4e8;">2.IE盒子模型（怪异盒子模型 border-box）：盒子的宽高包含内容区域，内边距和边框，不包含外边距</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.标准盒子模型(content-box)：盒子的宽高只包含内容区域，不包含内边距和边框、外边距</span></span>
<span class="line"><span style="color:#24292e;">2.IE盒子模型（怪异盒子模型 border-box）：盒子的宽高包含内容区域，内边距和边框，不包含外边距</span></span></code></pre></div><h2 id="html5新特性" tabindex="-1">HTML5新特性 <a class="header-anchor" href="#html5新特性" aria-label="Permalink to &quot;HTML5新特性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.canvas</span></span>
<span class="line"><span style="color:#e1e4e8;">2.语义化标签</span></span>
<span class="line"><span style="color:#e1e4e8;">3.表单</span></span>
<span class="line"><span style="color:#e1e4e8;">4.媒体元素,比如video\\audio</span></span>
<span class="line"><span style="color:#e1e4e8;">5.拖放api</span></span>
<span class="line"><span style="color:#e1e4e8;">6.地理位置</span></span>
<span class="line"><span style="color:#e1e4e8;">7.web worker</span></span>
<span class="line"><span style="color:#e1e4e8;">8.web stotage</span></span>
<span class="line"><span style="color:#e1e4e8;">9.web socket</span></span>
<span class="line"><span style="color:#e1e4e8;">10.SVG</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.canvas</span></span>
<span class="line"><span style="color:#24292e;">2.语义化标签</span></span>
<span class="line"><span style="color:#24292e;">3.表单</span></span>
<span class="line"><span style="color:#24292e;">4.媒体元素,比如video\\audio</span></span>
<span class="line"><span style="color:#24292e;">5.拖放api</span></span>
<span class="line"><span style="color:#24292e;">6.地理位置</span></span>
<span class="line"><span style="color:#24292e;">7.web worker</span></span>
<span class="line"><span style="color:#24292e;">8.web stotage</span></span>
<span class="line"><span style="color:#24292e;">9.web socket</span></span>
<span class="line"><span style="color:#24292e;">10.SVG</span></span></code></pre></div><h2 id="css3新特性" tabindex="-1">CSS3新特性 <a class="header-anchor" href="#css3新特性" aria-label="Permalink to &quot;CSS3新特性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.各种css选择器</span></span>
<span class="line"><span style="color:#e1e4e8;">2.圆角</span></span>
<span class="line"><span style="color:#e1e4e8;">3.阴影</span></span>
<span class="line"><span style="color:#e1e4e8;">4.渐变</span></span>
<span class="line"><span style="color:#e1e4e8;">5.变换</span></span>
<span class="line"><span style="color:#e1e4e8;">6.过渡</span></span>
<span class="line"><span style="color:#e1e4e8;">7.动画</span></span>
<span class="line"><span style="color:#e1e4e8;">8.裁剪</span></span>
<span class="line"><span style="color:#e1e4e8;">9.filter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.各种css选择器</span></span>
<span class="line"><span style="color:#24292e;">2.圆角</span></span>
<span class="line"><span style="color:#24292e;">3.阴影</span></span>
<span class="line"><span style="color:#24292e;">4.渐变</span></span>
<span class="line"><span style="color:#24292e;">5.变换</span></span>
<span class="line"><span style="color:#24292e;">6.过渡</span></span>
<span class="line"><span style="color:#24292e;">7.动画</span></span>
<span class="line"><span style="color:#24292e;">8.裁剪</span></span>
<span class="line"><span style="color:#24292e;">9.filter</span></span></code></pre></div><h2 id="css选择器优先级以及权重" tabindex="-1">CSS选择器优先级以及权重 <a class="header-anchor" href="#css选择器优先级以及权重" aria-label="Permalink to &quot;CSS选择器优先级以及权重&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.优先级 看对应权重</span></span>
<span class="line"><span style="color:#e1e4e8;">2.权重：</span></span>
<span class="line"><span style="color:#e1e4e8;">    !important: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">    ID选择器: 100</span></span>
<span class="line"><span style="color:#e1e4e8;">    类、伪类、伪元素、属性选择器： 10</span></span>
<span class="line"><span style="color:#e1e4e8;">    标签选择器：1</span></span>
<span class="line"><span style="color:#e1e4e8;">    通配符*:0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.优先级 看对应权重</span></span>
<span class="line"><span style="color:#24292e;">2.权重：</span></span>
<span class="line"><span style="color:#24292e;">    !important: 1000</span></span>
<span class="line"><span style="color:#24292e;">    ID选择器: 100</span></span>
<span class="line"><span style="color:#24292e;">    类、伪类、伪元素、属性选择器： 10</span></span>
<span class="line"><span style="color:#24292e;">    标签选择器：1</span></span>
<span class="line"><span style="color:#24292e;">    通配符*:0</span></span></code></pre></div><h2 id="html5的input元素type-类型" tabindex="-1">HTML5的Input元素Type 类型 <a class="header-anchor" href="#html5的input元素type-类型" aria-label="Permalink to &quot;HTML5的Input元素Type 类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">text: 文本, password: 密码, submit: 提交, button: 按钮, email: 邮件,</span></span>
<span class="line"><span style="color:#e1e4e8;"> radio:单选,checkbox:多选, file:文件,image:图像, tel:电话, search:搜索,</span></span>
<span class="line"><span style="color:#e1e4e8;">  number:数字, color:颜色, month:月,week:周,datetime: 日期时间,range: 范围</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">text: 文本, password: 密码, submit: 提交, button: 按钮, email: 邮件,</span></span>
<span class="line"><span style="color:#24292e;"> radio:单选,checkbox:多选, file:文件,image:图像, tel:电话, search:搜索,</span></span>
<span class="line"><span style="color:#24292e;">  number:数字, color:颜色, month:月,week:周,datetime: 日期时间,range: 范围</span></span></code></pre></div><h2 id="css中哪些属性可继承-哪些属性不可继承" tabindex="-1">CSS中哪些属性可继承，哪些属性不可继承 <a class="header-anchor" href="#css中哪些属性可继承-哪些属性不可继承" aria-label="Permalink to &quot;CSS中哪些属性可继承，哪些属性不可继承&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.字体、文本相关的属性通常可继承</span></span>
<span class="line"><span style="color:#e1e4e8;">2.布局、盒子模型相关属性通常不可继承</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.字体、文本相关的属性通常可继承</span></span>
<span class="line"><span style="color:#24292e;">2.布局、盒子模型相关属性通常不可继承</span></span></code></pre></div><h2 id="css单位中px、em、rem的区别-配合font-size计算" tabindex="-1">CSS单位中px、em、rem的区别？配合font-size计算 <a class="header-anchor" href="#css单位中px、em、rem的区别-配合font-size计算" aria-label="Permalink to &quot;CSS单位中px、em、rem的区别？配合font-size计算&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">px: px = 设备(物理)像素 * 设备像素比(dpr)，不会继承或受到外部字体大小影响</span></span>
<span class="line"><span style="color:#e1e4e8;">em: 相对单位，1em等于当前字体大小，会继承父元素的字体大小</span></span>
<span class="line"><span style="color:#e1e4e8;">rem: 相对单位，1rem等于HTML根元素字体大小，大小不会继承</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">根据font-size计算：</span></span>
<span class="line"><span style="color:#e1e4e8;">    px: 固定大小，不受外部影响</span></span>
<span class="line"><span style="color:#e1e4e8;">    em: 1em = 1 * 当前字体大小; 2em = 2 * 当前字体大小</span></span>
<span class="line"><span style="color:#e1e4e8;">    rem 1rem = 1 * html根元素字体大小; 2em = 2 *  html根元素字体大小 （可以通过在不同宽度下设置不同的html字体大小来达到响应式）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">px: px = 设备(物理)像素 * 设备像素比(dpr)，不会继承或受到外部字体大小影响</span></span>
<span class="line"><span style="color:#24292e;">em: 相对单位，1em等于当前字体大小，会继承父元素的字体大小</span></span>
<span class="line"><span style="color:#24292e;">rem: 相对单位，1rem等于HTML根元素字体大小，大小不会继承</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">根据font-size计算：</span></span>
<span class="line"><span style="color:#24292e;">    px: 固定大小，不受外部影响</span></span>
<span class="line"><span style="color:#24292e;">    em: 1em = 1 * 当前字体大小; 2em = 2 * 当前字体大小</span></span>
<span class="line"><span style="color:#24292e;">    rem 1rem = 1 * html根元素字体大小; 2em = 2 *  html根元素字体大小 （可以通过在不同宽度下设置不同的html字体大小来达到响应式）</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>H5适配方案中rem适配（等比适配）原理,比如(amfe-flexible、postcss-pxtorem)<br> 1.获取设备rem代表多少px： <br> 将设备视口划分为n 份 比如（n = 10），设置设备根元素html的font-size = 1rem = 设备视口宽 / n<br> 2.获取设计稿中某个元素在设备中对应的rem：<br> 元素在设备中的rem = 元素在设计稿中的px / (设计稿宽 / n)</p><pre><code>元素在设备中的px = 元素在设备中的rem * 设备根元素font-size

\`\`\`js
//根据设备视口宽度设置html根元素大小
(function(n = 10){
    const dEl = document.documentElement;
    function setRem(){
        const rem = dEl.clientWidth / n;
        dEl.style.fontSize = rem + &#39;px&#39;;
    }
    setRem()
    window.onresize = setRem
})()
\`\`\`
</code></pre></div><h2 id="如何绘制一条0-5px的线" tabindex="-1">如何绘制一条0.5px的线 <a class="header-anchor" href="#如何绘制一条0-5px的线" aria-label="Permalink to &quot;如何绘制一条0.5px的线&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.scale缩放</span></span>
<span class="line"><span style="color:#e1e4e8;">2.box-shadow</span></span>
<span class="line"><span style="color:#e1e4e8;">3.svg使用background-image</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.scale缩放</span></span>
<span class="line"><span style="color:#24292e;">2.box-shadow</span></span>
<span class="line"><span style="color:#24292e;">3.svg使用background-image</span></span></code></pre></div><h2 id="元素隐藏" tabindex="-1">元素隐藏 <a class="header-anchor" href="#元素隐藏" aria-label="Permalink to &quot;元素隐藏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.display:none （元素不被渲染，不占空间，触发回流重绘，绑定事件不触发， 不被继承，子元素不会被渲染， 无过渡动画）</span></span>
<span class="line"><span style="color:#e1e4e8;">2.visibility:hidden （元素隐藏，占空间，触发重绘， 绑定事件不触发， 被继承，子元素可通过visibiliity:visible显示， 无过渡动画）</span></span>
<span class="line"><span style="color:#e1e4e8;">3.opacity:0 （元素透明度为0，占空间，触发重绘， 绑定事件触发， 被继承，子元素不能取消隐藏， 有过渡动画）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.display:none （元素不被渲染，不占空间，触发回流重绘，绑定事件不触发， 不被继承，子元素不会被渲染， 无过渡动画）</span></span>
<span class="line"><span style="color:#24292e;">2.visibility:hidden （元素隐藏，占空间，触发重绘， 绑定事件不触发， 被继承，子元素可通过visibiliity:visible显示， 无过渡动画）</span></span>
<span class="line"><span style="color:#24292e;">3.opacity:0 （元素透明度为0，占空间，触发重绘， 绑定事件触发， 被继承，子元素不能取消隐藏， 有过渡动画）</span></span></code></pre></div><h2 id="背景色会填充哪些区域" tabindex="-1">背景色会填充哪些区域 <a class="header-anchor" href="#背景色会填充哪些区域" aria-label="Permalink to &quot;背景色会填充哪些区域&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">content + padding</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">content + padding</span></span></code></pre></div><h2 id="为什么img是行内元素-但可以设置宽高呢" tabindex="-1">为什么img是行内元素，但可以设置宽高呢 <a class="header-anchor" href="#为什么img是行内元素-但可以设置宽高呢" aria-label="Permalink to &quot;为什么img是行内元素，但可以设置宽高呢&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">因为img属于可置换元素，内置宽高属性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">因为img属于可置换元素，内置宽高属性</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可置换属性：img input select textarea button label，video, audio等</p></div><h2 id="伪元素和伪类" tabindex="-1">伪元素和伪类 <a class="header-anchor" href="#伪元素和伪类" aria-label="Permalink to &quot;伪元素和伪类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.伪元素：用于创建一些不存在dom树的元素</span></span>
<span class="line"><span style="color:#e1e4e8;">2.伪类：用于当某个元素处于某个状态时为其添加样式</span></span>
<span class="line"><span style="color:#e1e4e8;">区别：</span></span>
<span class="line"><span style="color:#e1e4e8;">    伪元素是创建一个文档树之外的元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    伪类是操作处于文档树中的元素</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.伪元素：用于创建一些不存在dom树的元素</span></span>
<span class="line"><span style="color:#24292e;">2.伪类：用于当某个元素处于某个状态时为其添加样式</span></span>
<span class="line"><span style="color:#24292e;">区别：</span></span>
<span class="line"><span style="color:#24292e;">    伪元素是创建一个文档树之外的元素</span></span>
<span class="line"><span style="color:#24292e;">    伪类是操作处于文档树中的元素</span></span></code></pre></div><h2 id="css-link-和-import-标签的区别" tabindex="-1">CSS link 和 @import 标签的区别 <a class="header-anchor" href="#css-link-和-import-标签的区别" aria-label="Permalink to &quot;CSS link 和 @import 标签的区别&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.加载顺序和性能：</span></span>
<span class="line"><span style="color:#e1e4e8;">    当浏览器解析HTML文件的时候，link标签会立即加载并同时请求外部css资源，而@import会在html文档加载完后加载外部css样式表</span></span>
<span class="line"><span style="color:#e1e4e8;">    所以使用link可以更快加载完成资源，而@import可能会导致页面加载完成的时间变长</span></span>
<span class="line"><span style="color:#e1e4e8;">2.兼容性：</span></span>
<span class="line"><span style="color:#e1e4e8;">    link是HTML标签，所有浏览器都支持；@import是CSS2.1才有的语法，一些老旧浏览器可能不支持，IE5+支持</span></span>
<span class="line"><span style="color:#e1e4e8;">3.功能性：</span></span>
<span class="line"><span style="color:#e1e4e8;">    link可以加载css,脚本，图像等，@import只能加载css</span></span>
<span class="line"><span style="color:#e1e4e8;">4.可控性：</span></span>
<span class="line"><span style="color:#e1e4e8;">    link可以通过脚本创建</span></span>
<span class="line"><span style="color:#e1e4e8;">5.权重：</span></span>
<span class="line"><span style="color:#e1e4e8;">    link引入的样式表权重与页面中其他样式表相同，@import引入的样式表权重较低，会被其他样式表覆盖</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.加载顺序和性能：</span></span>
<span class="line"><span style="color:#24292e;">    当浏览器解析HTML文件的时候，link标签会立即加载并同时请求外部css资源，而@import会在html文档加载完后加载外部css样式表</span></span>
<span class="line"><span style="color:#24292e;">    所以使用link可以更快加载完成资源，而@import可能会导致页面加载完成的时间变长</span></span>
<span class="line"><span style="color:#24292e;">2.兼容性：</span></span>
<span class="line"><span style="color:#24292e;">    link是HTML标签，所有浏览器都支持；@import是CSS2.1才有的语法，一些老旧浏览器可能不支持，IE5+支持</span></span>
<span class="line"><span style="color:#24292e;">3.功能性：</span></span>
<span class="line"><span style="color:#24292e;">    link可以加载css,脚本，图像等，@import只能加载css</span></span>
<span class="line"><span style="color:#24292e;">4.可控性：</span></span>
<span class="line"><span style="color:#24292e;">    link可以通过脚本创建</span></span>
<span class="line"><span style="color:#24292e;">5.权重：</span></span>
<span class="line"><span style="color:#24292e;">    link引入的样式表权重与页面中其他样式表相同，@import引入的样式表权重较低，会被其他样式表覆盖</span></span></code></pre></div><h2 id="doctype的作用" tabindex="-1">DOCTYPE的作用 <a class="header-anchor" href="#doctype的作用" aria-label="Permalink to &quot;DOCTYPE的作用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">DOCTYPE是一种文档类型说明，用来告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档</span></span>
<span class="line"><span style="color:#e1e4e8;">有两种模式：严格模式和混杂模式</span></span>
<span class="line"><span style="color:#e1e4e8;">区别:</span></span>
<span class="line"><span style="color:#e1e4e8;">    严格模式：当HTML文档包含了标准的DOCTYPE声明或者使用了&lt;!DOCTYPE html&gt;这样的HTML5声明时，浏览器会进入严格模式。</span></span>
<span class="line"><span style="color:#e1e4e8;">            在严格模式下，浏览器会按照标准规范严格解析和渲染页面</span></span>
<span class="line"><span style="color:#e1e4e8;">    混杂模式：当HTML文档没有明确的DOCTYPE声明或含有一些特定错误时，浏览器会进入混杂模式。</span></span>
<span class="line"><span style="color:#e1e4e8;">            在混杂模式下，浏览器会按照一些相对宽松的规则解析页面，以保持与旧版浏览器的兼容性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">DOCTYPE是一种文档类型说明，用来告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档</span></span>
<span class="line"><span style="color:#24292e;">有两种模式：严格模式和混杂模式</span></span>
<span class="line"><span style="color:#24292e;">区别:</span></span>
<span class="line"><span style="color:#24292e;">    严格模式：当HTML文档包含了标准的DOCTYPE声明或者使用了&lt;!DOCTYPE html&gt;这样的HTML5声明时，浏览器会进入严格模式。</span></span>
<span class="line"><span style="color:#24292e;">            在严格模式下，浏览器会按照标准规范严格解析和渲染页面</span></span>
<span class="line"><span style="color:#24292e;">    混杂模式：当HTML文档没有明确的DOCTYPE声明或含有一些特定错误时，浏览器会进入混杂模式。</span></span>
<span class="line"><span style="color:#24292e;">            在混杂模式下，浏览器会按照一些相对宽松的规则解析页面，以保持与旧版浏览器的兼容性</span></span></code></pre></div>`,50),o=[p];function c(t,i,r,y,d,h){return a(),n("div",null,o)}const m=s(l,[["render",c]]);export{g as __pageData,m as default};
