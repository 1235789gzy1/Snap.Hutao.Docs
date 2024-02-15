import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as s,a as o,b as l,d as a,w as r,e}from"./app-VtUuLwOQ.js";const d={},u=e('<h1 id="米游社多账号切换" tabindex="-1"><a class="header-anchor" href="#米游社多账号切换" aria-hidden="true">#</a> 米游社多账号切换</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>胡桃工具箱支持中国大陆版米哈游论坛<strong>米游社</strong>和国际版论坛 <strong>HoYoLAB</strong>的账号。HoYoLAB 默认阻拦来自中国大陆的网络连接，Snap Hutao 软件无法自行绕开该限制。</p><ul><li>本文档所描述的账号切换指的是用于获取游戏数据的<strong>米游社/ HoYoLAB 账号</strong>，不是原神<strong>游戏内的账号</strong></li><li>在使用本功能前，你需要使用官方的米游社 App 登录你的账号以初始化你的米游社功能 <ul><li>如果在胡桃中登录的账号名称格式为 <code>user_123456789</code> 则其有可能没有被初始化</li></ul></li></ul></div><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ZhnkRl1g6e0tz18y9_!!1797064093.png.png_.webp" alt="多帐号管理样图" loading="lazy"></p><p>你可以在程序主界面的左下角，设置按钮的上方找到帐号菜单，以管理你在胡桃工具箱中登录的米游社帐号。在弹出的面板中你可以添加米游社或 HoYoLAB 帐号 ，登录它们的方法是一样的：</p>',4),_=o("code",null,"网页登录",-1),h=o("li",null,[l("您也可以通过点击"),o("code",null,"手动输入"),l("按钮，直接输入米游社通行证 cookie 来添加您的账号")],-1),k=o("code",null,"手动输入",-1),p=o("strong",null,[l("必须包含 "),o("code",null,"SToken"),l(" 字段")],-1),g=o("code",null,"SToken",-1),m=o("li",null,'在弹出的内置浏览器登陆成功后，点击右上角的"我已登陆"按钮',-1),f=o("li",null,[l("完成后，您就可以在账号管理面板切换已登录的米游社帐号了 "),o("ul",null,[o("li",null,"新添加米游社账号后，需在主界面左下角切换账号的功能中，手动点击一次新登录的账号，以将其设置为使用状态"),o("li",null,"你可以在账号管理菜单中复制对应账号的 cookie 或从胡桃工具箱中删除该帐号"),o("li",null,[l("在选中登录账号后，你可以 "),o("ul",null,[o("li",null,"点击刷新 Cookie 按钮来更新当前储存的 Cookie"),o("li",null,"点击签到按钮来执行米哈游论坛签到。对于米游社账号，需要先接触风控状态才可成功执行签到。")])])])],-1),S=e('<div class="hint-container info"><p class="hint-container-title">安全提示</p><ul><li><code>SToken</code> 是一个安全敏感的 cookie 字段，你<strong>不应该</strong>在任何云端或其它无法保证数据安全的设备上储存含有 <code>SToken</code> 字段的 cookie。</li><li>从胡桃工具箱中复制获得的 cookie 中包含该字段，请慎重考虑是否为接受 cookie 的一方提供 <code>SToken</code> 字段。</li><li><strong>在胡桃工具箱中通过密码或 cookie 登录米游社的过程中，你的数据只经米游社服务器和本地胡桃工具箱处理，不经过包括胡桃服务器在内的任何第三方服务。</strong></li></ul></div>',1);function v(T,x){const n=i("RouterLink");return c(),s("div",null,[u,o("ul",null,[o("li",null,[l("在对应的账号种类中点击"),_,l("按钮 "),o("ul",null,[h,o("li",null,[l("若您选择"),k,l("米游社 cookie，则该 cookie "),p,o("ul",null,[o("li",null,[l("手动获取含 "),g,l(" 字段的 cookie 的方式可参考"),a(n,{to:"/zh/advanced/get-SToken-cookie-from-the-third-party.html"},{default:r(()=>[l("使用第三方工具获取有 SToken 的 cookie")]),_:1}),l(" 文档")])])])])]),m,f]),S])}const L=t(d,[["render",v],["__file","mhy-account-switch.html.vue"]]);export{L as default};
