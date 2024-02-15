import{_ as o}from"./1-8-5-installer-fDv-n1gy.js";import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as d,c as s,a,b as t,d as h,w as l,e}from"./app-VtUuLwOQ.js";const p={},c=e('<h1 id="_1-9-0-版本重大改变详解" tabindex="-1"><a class="header-anchor" href="#_1-9-0-版本重大改变详解" aria-hidden="true">#</a> 1.9.0 版本重大改变详解</h1><p>本文内容适用于Snap Hutao <strong>1.4.11~1.8.4 版本</strong>升级至 1.9.0 及更高版本</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Snap Hutao 是一个使用 MSIX 格式的 Windows 沙盒应用，它带来了安装的便利性和 AppX 应用的安全性。对安装包强制性的代码签名是保证安全性的重要因素之一：在安装包被篡改时，Windows App Installer 会因为签名被破坏而弹出错误，进而禁止用户安装，这在主流移动端操作系统中已经被普及。在 Windows 平台下，由于严格的身份审查制度，代码签名证书价格一直保持在很高的价格上。</p><p>Snap Hutao 在1.4.11版本前，使用了自签名证书的方法。在这种模式下，用户需要手动 安装 DGP-Studio 的证书，才能让操作系统允许 DGP-Studio 证书签名的应用安装于计算机上。自1.4.11版本起，Snap Hutao 上架微软商店，微软为胡桃的开发者账号提供了一个 GUID <code>35C8E923-85DF-49A7-9172-B39DC6312C52</code>并以此为用户名为胡桃工具箱提供了免费的签名。如果你习惯使用 msix 安装包更新胡桃工具箱，那么你应总是能在发布者一栏中看到这个 GUID。</p><p>在微软商店发布使得胡桃工具箱的用户不再需要手动安装签名证书，还为胡桃工具箱安装包的分发提供了支持，为开发团队降低了大量的成本。但是，繁琐冗长的审核流程经常打乱胡桃工具箱的开发计划，因此开发团队在过去的半年中一直在寻找解决方案。SignPath 是一家位于奥地利维也纳的提供代码签名集成软件的公司。在2023年12月初，Snap Hutao 的开发团队成功地获取到了 SignPath 基金会的支持，被允许免费使用其提供的代码签名证书为胡桃工具箱签名。这极大地帮助了 Snap Hutao 项目：不仅允许胡桃工具箱脱离微软商店的束缚，还避免了每年高昂的证书费用。</p><p><strong>由于迁移至新证书会带来包名冲突问题，Snap Hutao 提供以下详细解释帮助所有用户更新至 1.9.0 及未来的版本。</strong></p><h2 id="升级至-1-9-0-版本" tabindex="-1"><a class="header-anchor" href="#升级至-1-9-0-版本" aria-hidden="true">#</a> 升级至 1.9.0 版本</h2><h3 id="版本发布" tabindex="-1"><a class="header-anchor" href="#版本发布" aria-hidden="true">#</a> 版本发布</h3><p>Snap Hutao 1.9.0 版本将会于2023年圣诞节前的周末发布，我们会通过 GitHub，极狐GitLab，官方网站和社区发布安装包的下载地址。</p>',10),u=e('<h3 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h3><p>由于包名和签名冲突，直接安装该安装包会根据你的系统版本出现问题。</p><table><thead><tr><th style="text-align:center;">系统版本</th><th style="text-align:center;">预计的问题</th></tr></thead><tbody><tr><td style="text-align:center;">Windows 10</td><td style="text-align:center;">无法安装；签名和包名冲突</td></tr><tr><td style="text-align:center;">Windows 11</td><td style="text-align:center;">安装成功；<br>与旧版本的 Snap Hutao 同名共存并造成程序运行错误</td></tr></tbody></table><p>由于上述的问题，你需要首先卸载旧版本 Snap Hutao，随后再安装 1.9.0 版本安装包</p><blockquote><p><strong>卸载 Snap Hutao 的方法</strong>：在开始菜单找到 Snap Hutao，右键点击卸载即可；在 Windows 应用设置中找到后选择卸载亦是快捷的方法。</p></blockquote><p><strong>你的重要数据（包括已登录的米游社账号、祈愿记录、成就数据、深境螺旋挑战记录、我的角色缓存数据、养成计划）不会丢失，它们仍然储存于你的本地计算机胡桃数据目录中。</strong> 但以下数据将被重置：</p><ol><li>Snap Hutao 运行次数计数</li><li>数据文件夹路径 <strong>（如果你之前修改了数据目录，请记住你的数据目录路径）</strong></li><li>胡桃账号登录状态</li><li>已关闭的胡桃公告标记</li><li>养成计划预设等级信息</li><li>主页仪表盘卡片的状态</li><li>自动连点功能的状态</li></ol><h3 id="安装新版本" tabindex="-1"><a class="header-anchor" href="#安装新版本" aria-hidden="true">#</a> 安装新版本</h3><p><img src="'+o+'" alt="1.8.5版本安装文件" loading="lazy"></p><p>运行你已经下载好的 1.9.0 版本安装包，在安装界面你应能看到发布者为 <code>SignPath Foundation</code>，点击安装你就可以安装全新版本的 Snap Hutao 了！</p><p><strong>如果你在旧版本修改了数据目录位置，需要在启动后重新在设置中选择数据目录路径以恢复数据。若从未设置过数据目录，你的数据将会直接加载，不需要进行额外设置。</strong></p><h2 id="未来的计划" tabindex="-1"><a class="header-anchor" href="#未来的计划" aria-hidden="true">#</a> 未来的计划</h2><blockquote><p>微软商店、未来的发布、软件的安全性...</p></blockquote><p>微软商店中上架的应用发布者名称必须为微软赋予的 GUID，而不能是 <code>SignPath Foundation</code> 这样的“自定义”的名称。我们预计未来不会在微软商店中继续发布更新的版本，除非我们有更好的方法处理不同签名包之间的共存问题。虽然 Snap Hutao 不再经过微软的认证，但是在 SignPath 的限制下，Snap Hutao 将只能从 GitHub 代码库直接编译和构建发布包，这意味着用户的安装包中的代码是 100% 来源于我们的 GitHub 代码库，任何人都有权限审阅代码并参与开发。</p><p>自1.9.0版本起的客户端，我们将内置软件更新模块以适应新的发布方式，我们会尽可能减少用户更新时所需要的操作。由于该功能是全新的功能，我们仍在部署过程中，请继续关注我们的程序内公告和社区以获取信息！</p>',15);function g(S,_){const n=i("RouterLink");return d(),s("div",null,[c,a("blockquote",null,[a("p",null,[t("1.9.0 版本已发布，请在"),h(n,{to:"/zh/quick-start.html"},{default:l(()=>[t("快速开始")]),_:1}),t("页面获取")])]),u])}const f=r(p,[["render",g],["__file","version-1-9-0-breaking-changes.html.vue"]]);export{f as default};
