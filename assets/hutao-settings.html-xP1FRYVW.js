import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as u,c,a as e,b as t,d as a,w as r,e as l}from"./app-VtUuLwOQ.js";const d={},p=l('<h1 id="software-settings" tabindex="-1"><a class="header-anchor" href="#software-settings" aria-hidden="true">#</a> Software Settings</h1><p><img src="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01m1CSiq1g6e0utDIKD_!!1797064093.png" alt="settings" loading="lazy"> The following feature tutorials are introduced in-program order.</p><h2 id="about-snap-hutao" tabindex="-1"><a class="header-anchor" href="#about-snap-hutao" aria-hidden="true">#</a> About Snap Hutao</h2><p>This part has the following information:</p>',4),m={href:"https://space.bilibili.com/274422134",target:"_blank",rel:"noopener noreferrer"},f={class:"hint-container details"},g=e("summary",null,"Drawing Process",-1),y={href:"https://github.com/DGP-Studio",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"snap-hutao-account",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#snap-hutao-account","aria-hidden":"true"},"#"),t(" Snap Hutao Account")],-1),_=e("p",null,"You can sign up and sign in your Snap Hutao Account in settings page.",-1),w=l('<h2 id="administrator-mode-tools" tabindex="-1"><a class="header-anchor" href="#administrator-mode-tools" aria-hidden="true">#</a> Administrator Mode Tools</h2><p>On the right side of the settings page, the development team has set up an administrator mode tool for users who need it. Under this module, we provide two functions:</p><ol><li>Restart the program immediately as an administrator</li><li>Create a PowerShell shortcut on the desktop to start Hutao as administrator</li></ol><h2 id="captcha" tabindex="-1"><a class="header-anchor" href="#captcha" aria-hidden="true">#</a> CAPTCHA</h2><blockquote><p>This feature is most likely to be useful for CN server (MiYouShe) users</p></blockquote><p>If daily check-in and realtime notes functions are essential for you, then the <code>-1034</code> error from miHoYo&#39;s anti-bot verification will definitely be a major interference. This is because miHoYo uses Geetest to intercept requests directly executed by non-humans, and some requests from Snap Hutao will be judged by Geetest as robot behavior and cause request failure. If you use a third-party service to verify the Geetest captcha, you can pass the random data generated by Geetest to the verification service provider through this setting.</p><p>After successfully configuring this setting, Snap Hutao will directly call this verification service to pass the Geetest verification when performing real-time note automatic refresh and miHoYo community check-in, avoiding the generation of -1034 error by miHoYo.</p><h2 id="appearance" tabindex="-1"><a class="header-anchor" href="#appearance" aria-hidden="true">#</a> Appearance</h2><ul><li><p>Language</p><ul><li>Snap Hutao will following system language setting by default</li><li>You can force to change to another language in the settings page</li></ul></li><li><p>Backdrop Material</p><ul><li>In this option, you can change the backdrop material of the software to <ul><li>Acrylic</li><li>Mica (Windows 11 only)</li><li>MicaAlt (Windows 11 only)</li></ul></li><li>The setting will take effect immediately</li></ul></li></ul><h2 id="shortcut-keys" tabindex="-1"><a class="header-anchor" href="#shortcut-keys" aria-hidden="true">#</a> Shortcut Keys</h2><p>In this module, you can enable and change the setting of auto-click shortcut key</p><h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h2><ul><li>Dashboard Card <ul><li>You can click on this option to switch display of card on Home Dashboard <ul><li>Game Launcher</li><li>Wish History</li><li>Achievement</li><li>Realtime Notes</li></ul></li></ul></li><li>Announcement Server <ul><li>You can change source of in-game announcement in this field</li></ul></li></ul><h2 id="game" tabindex="-1"><a class="header-anchor" href="#game" aria-hidden="true">#</a> Game</h2><ul><li>Delete Game Embedded Browser Web Cache <ul><li>When you are using web cache refresh method in the wish history feature and receiving authkey expiration error, you can try this operation to fix the error</li><li>Click on this field to execute the operation</li></ul></li></ul><h2 id="wish-history" tabindex="-1"><a class="header-anchor" href="#wish-history" aria-hidden="true">#</a> Wish History</h2><ul><li>In this field, you can choose to hide wish event that you do not have any record in the period in the wish export feature</li></ul><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h2><ul><li>Data Folder <ul><li><code>Open Folder</code>: Click this field to open data folder that contains user data, log, and metadata</li><li><code>Change Data Directory</code>: This field allows you to change the data directory to path you want</li><li><code>Delete Server Conversion Cache</code>: This option allows user to delete server conversion cache file inside of data folder</li></ul></li><li>Cache Folder <ul><li><code>Open Folder</code>: Click this field will open cache folder that saves image assets used by Snap Hutao</li><li><code>Reset Image Resource</code>: This option allows user to reset image cache when there are too many image failed to load. The program will re-download images resource at next start-up</li></ul></li></ul><h2 id="dangerous-features" tabindex="-1"><a class="header-anchor" href="#dangerous-features" aria-hidden="true">#</a> Dangerous Features</h2><div class="hint-container important"><p class="hint-container-title">Important</p><p>Using any feature within the &quot;Dangerous Features&quot; will trigger a secondary confirmation prompt. You may be asked to enter the <strong>title name</strong> of the feature that is currently being requested to be enabled.</p></div>',21),v=e("li",null,[t("Debug Console "),e("ul",null,[e("li",null,"After enabling this feature, a command line window containing real-time logs will be enabled the next time you start the Hutao Toolbox. You can obtain error information that may be helpful to you through this window.")])],-1),k=e("p",null,"For reference：",-1),x={href:"https://ys.mihoyo.com/main/company/agreement",target:"_blank",rel:"noopener noreferrer"},S={href:"https://genshin.hoyoverse.com/en/company/terms",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,[t("Delete All Users "),e("ul",null,[e("li",null,"Execute this operation will delete all user data in Snap Hutao"),e("li",null,"Click on the field to operate, you will be asked to confirm"),e("li",null,"In most scenario, you don't need to use this field")])],-1);function C(T,A){const i=n("RouterLink"),o=n("ExternalLinkIcon"),s=n("BiliBili");return u(),c("div",null,[p,e("ul",null,[e("li",null,[t("The icon of Snap Hutao：You can find the original image of the icon at the "),a(i,{to:"/"},{default:r(()=>[t("home page")]),_:1}),e("ul",null,[e("li",null,[t("The artist is "),e("a",m,[t("画画的芦苇 (BiliBili)"),a(o)]),e("details",f,[g,a(s,{bvid:"BV1UL411d7Py"})])]),e("li",null,[e("a",y,[t("DGP-Studio"),a(o)]),t(" is authorized by owner to use it for Snap Hutao Project")])])])]),b,_,e("p",null,[t("For more detail about this feature, please refer to "),a(i,{to:"/en/features/hutao-passport.html"},{default:r(()=>[t("Snap Hutao Account")]),_:1}),t(" document.")]),w,e("ul",null,[v,e("li",null,[t("Advanced Features "),e("ul",null,[e("li",null,[t("With Snap Hutao running as administrator, you can enable this field to enable advanced features in the game launcher "),e("blockquote",null,[k,e("p",null,[a(i,{to:"/en/statements/tos.html"},{default:r(()=>[t("Snap Hutao Terms of Service")]),_:1})]),e("p",null,[e("a",x,[t("Genshin Impact Terms of Service (CN server/Chinese)"),a(o)])]),e("p",null,[e("a",S,[t("Genshin Impact Terms of Service (Oversea servers/English)"),a(o)])])])])])]),H])])}const B=h(d,[["render",C],["__file","hutao-settings.html.vue"]]);export{B as default};
