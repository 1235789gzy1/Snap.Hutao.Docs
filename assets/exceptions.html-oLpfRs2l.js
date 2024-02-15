import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as s,a as e,b as n,d as o,w as t,e as l}from"./app-VtUuLwOQ.js";const h={},u=e("h1",{id:"常见的程序异常",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见的程序异常","aria-hidden":"true"},"#"),n(" 常见的程序异常")],-1),_=e("p",null,[n("该文档包含由"),e("strong",null,"用户端错误"),n("造成的问题")],-1),p=e("h2",{id:"runtimeenvironmentexception",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#runtimeenvironmentexception","aria-hidden":"true"},"#"),n(" RuntimeEnvironmentException")],-1),x=e("li",null,[n("异常："),e("code",null,"RuntimeEnvironmentException"),e("ul",null,[e("li",null,[n("提示："),e("code",null,"未开启长路径功能，无法设置注册表键值")])])],-1),f=e("li",null,"问题来源：没有解除 Windows 目录长度限制",-1),b={href:"https://d.hut.ao/d/tools/EnableLongPaths.zip",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,".reg",-1),m=l('<h2 id="return-code-10001" tabindex="-1"><a class="header-anchor" href="#return-code-10001" aria-hidden="true">#</a> Return Code: -10001</h2><ul><li>该异常实际上来源于米游社的返回信息，包括： <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>问题来源： <ol><li>Cookie 过期或网络异常</li><li>系统时间错误</li></ol></li><li>解决方案： <ol><li>在帐号面板中，点击<code>刷新 Cookie</code></li><li>删除帐号后重新添加米游社帐号</li><li>在系统设置中启用自动同步时间并立刻同步时间</li></ol></li></ul><h2 id="状态-1034-验证失败" tabindex="-1"><a class="header-anchor" href="#状态-1034-验证失败" aria-hidden="true">#</a> 状态：1034 验证失败</h2><ul><li>当胡桃工具箱返回 <code>1034</code> 状态码并提示验证失败时（通常是实时便笺功能），代表当前的操作被米游社的验证系统所阻挡</li><li>解决方式： <ul><li>进入 <code>实时便笺</code> 功能</li><li>点击右上角的 <code>验证当前用户与角色</code>按钮</li><li>根据米游社提示进行验证</li><li>完成验证后点击<code>完成</code></li><li>此时，风控应当已被解除；若没有，可继续执行上述操作</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>若风险提示过于频繁，或始终无法触发验证，代表您的账号风险已过高，请修改密码，使多个设备同时登录的状态被重置</li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>若您<strong>已绑定并使用可提供原神查询的 Bot</strong>或<strong>同时有多个设备使用同一个米哈游通行证</strong>，则本条目所示的情况，尤其<strong>无感验证</strong>将基本无法成功，这是米游社后端的<strong>安全性</strong>设计，不可避免，无法绕过</li><li>若您本地有多个<strong>米哈游通行证</strong>同时频繁与<strong>米游社</strong>进行数据交互，则可能会被米游社在一定时间内封禁 IP 地址，这是米游社后端的<strong>安全性</strong>设计，不可避免，无法绕过</li></ul></div><h2 id="httprequestexception-元数据校验文件下载失败" tabindex="-1"><a class="header-anchor" href="#httprequestexception-元数据校验文件下载失败" aria-hidden="true">#</a> HttpRequestException 元数据校验文件下载失败</h2><h3 id="connectionerror" tabindex="-1"><a class="header-anchor" href="#connectionerror" aria-hidden="true">#</a> ConnectionError</h3><p>连接到胡桃服务器时失败，请检查胡桃客户端的网络连接</p>',9),k=e("h3",{id:"_403-forbidden-404-not-found",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_403-forbidden-404-not-found","aria-hidden":"true"},"#"),n(" 403 (Forbidden)/ 404 (NOT FOUND)")],-1),v=l('<h3 id="_502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway" aria-hidden="true">#</a> 502 (Bad Gateway)</h3><p>连接到胡桃服务器时失败，请检查胡桃客户端的网络连接</p><h2 id="_653366069-请求异常" tabindex="-1"><a class="header-anchor" href="#_653366069-请求异常" aria-hidden="true">#</a> <code>653366069</code> 请求异常</h2><ul><li>连接到米游社/HoYoLAB服务器时失败 <ul><li>如果仅是偶尔出现的问题，你可以考虑忽略该错误</li><li>如果持续该错误，请检查本地网络到目标服务器的连接是否正常</li></ul></li></ul>',4),E=l('<h2 id="在查找必要的模块时出现问题" tabindex="-1"><a class="header-anchor" href="#在查找必要的模块时出现问题" aria-hidden="true">#</a> 在查找必要的模块时出现问题</h2><p>当用户在解锁游戏帧数限制的情况下启动游戏时，可能会遇上以下错误提示并启动游戏失败</p><ol><li>在查找必要的模块时遇到问题：无法读取任何模块，可能是保护驱动已经加载完成</li><li>在查找必要的模块时遇到问题：查找模块超时 该问题仅当原神反作弊模块早于解锁帧率模块启动时出现。在出现该错误后，胡桃会主动关闭游戏进程，用户再次尝试启动游戏即可。</li></ol><h2 id="应用安装失败-错误消息-出现内部错误-0x80073d05" tabindex="-1"><a class="header-anchor" href="#应用安装失败-错误消息-出现内部错误-0x80073d05" aria-hidden="true">#</a> 应用安装失败，错误消息：出现内部错误 0x80073D05</h2><p>安装时出现 <code>0x80073D05</code> 错误码的主要原因是先前卸载时没有删除部分本地文件导致的。</p><ul><li>需要打开 <code>%appdata%/../Local/Packages</code></li><li>并在文件夹中找到 <code>60568DGPStudio.SnapHutao_ebfp3nyc27j86</code> 文件夹并删除</li></ul>',6);function L(w,C){const d=a("ExternalLinkIcon"),i=a("RouterLink");return c(),s("div",null,[u,_,p,e("ul",null,[x,f,e("li",null,[n("解决方案：下载 "),e("a",b,[n("EnableLongPaths.zip"),o(d)]),n(" 后解压，运行解压后的 "),g,n(" 文件")])]),m,e("p",null,[n("如果你使用了网络代理，请务必检查是否"),o(i,{to:"/zh/advanced/FAQ.html"},{default:t(()=>[n("解除了 Windows 容器 Loopback 限制")]),_:1})]),k,e("p",null,[n("解决方案：更新胡桃工具箱至"),o(i,{to:"/zh/quick-start.html"},{default:t(()=>[n("最新版本")]),_:1})]),v,e("p",null,[n("如果你使用了网络代理，请务必检查是否"),o(i,{to:"/zh/advanced/FAQ.html"},{default:t(()=>[n("解除了 Windows 容器 Loopback 限制")]),_:1})]),E])}const N=r(h,[["render",L],["__file","exceptions.html.vue"]]);export{N as default};
