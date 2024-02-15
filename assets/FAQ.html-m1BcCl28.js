import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as u,c as p,a as e,b as t,d as o,w as n,e as i}from"./app-VtUuLwOQ.js";const m={},f=e("h1",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),t(" FAQ")],-1),g=e("blockquote",null,[e("p",null,[t("Please use "),e("strong",null,"search bar on the top right"),t(" or "),e("strong",null,[t("browser built-in search "),e("code",null,"(ctrl+F)")]),t(" to search keyword such as error code to improve your searching efficiency")])],-1),w=e("h2",{id:"installation-faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation-faq","aria-hidden":"true"},"#"),t(" Installation FAQ")],-1),b={class:"hint-container info"},y=e("p",{class:"hint-container-title"},"Tips for Failed Installation",-1),k={href:"https://api.snapgenshin.com/patch/hutao-deployment/download",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"stuck-at-installing-required-framework-when-using-msix-package-to-install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stuck-at-installing-required-framework-when-using-msix-package-to-install","aria-hidden":"true"},"#"),t(" Stuck at "),e("code",null,"Installing Required Framework"),t(" when Using MSIX Package to Install")],-1),v=e("li",null,"Make sure Windows Update is enabled",-1),S=e("h3",{id:"mojibake-in-snap-hutao-icons",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mojibake-in-snap-hutao-icons","aria-hidden":"true"},"#"),t(" Mojibake in Snap Hutao Icons")],-1),x=e("li",null,[t("If you are using Windows 10 and see some button are not display properly "),e("ul",null,[e("li",null,[t("You can download "),e("code",null,"Segoe Fluent Icons"),t(" font")]),e("li",null,"You need to install it for all users")])],-1),I={href:"https://aka.ms/SegoeFluentIcons",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"my-computer-cannot-open-msix-format-installer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#my-computer-cannot-open-msix-format-installer","aria-hidden":"true"},"#"),t(" My Computer Cannot Open MSIX Format Installer")],-1),H=e("p",null,"Your computer is missing the App Installer, an important component of the Windows system.",-1),P={href:"https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.microsoft.com/zh-cn/software-download/windows10",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.microsoft.com/zh-cn/software-download/windows11",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"got-this-app-package-s-publisher-certificate-could-not-be-verified-error-when-install-with-msix-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#got-this-app-package-s-publisher-certificate-could-not-be-verified-error-when-install-with-msix-package","aria-hidden":"true"},"#"),t(" Got "),e("code",null,"This app package’s publisher certificate could not be verified"),t(" Error when Install with MSIX Package")],-1),F=e("p",null,"This issue is commonly seen in Home Edition of Windows. If you are not using a Home Edition, your Windows Update module may be disabled or cracked, this cause worldwide CA certificates cannot be updated from Microsoft servers.",-1),M={href:"https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates",target:"_blank",rel:"noopener noreferrer"},E={href:"https://secure.globalsign.com/cacert/codesigningrootr45.crt",target:"_blank",rel:"noopener noreferrer"},R=i('<h3 id="got-policy-check-failed-error-when-install-with-msix-package" tabindex="-1"><a class="header-anchor" href="#got-policy-check-failed-error-when-install-with-msix-package" aria-hidden="true">#</a> Got <code>Policy check failed</code> Error when Install with MSIX Package</h3><p>If you are using Windows Home Edition, please try to enable developer mode in your system settings and try the installation again.</p><h3 id="got-error-prompt-or-error-code-when-install-with-msix-package" tabindex="-1"><a class="header-anchor" href="#got-error-prompt-or-error-code-when-install-with-msix-package" aria-hidden="true">#</a> Got Error Prompt or Error Code when Install with MSIX Package</h3><table><thead><tr><th>Error</th><th>Reason</th></tr></thead><tbody><tr><td><code>0x80040154</code> Error Code</td><td>Broken Windows account permission</td></tr><tr><td><code>The app did not start</code> Error Prompt</td><td>Cracked App Installer or broken App Installer permission</td></tr><tr><td><code>0x80073CF0</code> Error Code</td><td>Broken folder permission</td></tr><tr><td><code>0x80070005</code> Error Code</td><td>Broken Windows account permission</td></tr><tr><td><code>0x80070570</code> Error Code</td><td>Broken Windows account permission</td></tr><tr><td><code>0x8007065E</code> Error Code</td><td>Broken Windows account permission</td></tr></tbody></table><p>If you got any of error showing above, please use the following steps to solve the issue:</p>',5),T=e("li",null,[t("Right click on Windows Start button, and select "),e("code",null,"PowerShell (Admin)")],-1),U=e("li",null,[t("In the PowerShell windows, copy and paste the following command and run it (Right-click is paste feature in PowerShell)"),e("div",{class:"language-PowerShell","data-ext":"PowerShell"},[e("pre",{class:"language-PowerShell"},[e("code",null,`cd $env:USERPROFILE\\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
`)])])],-1),N=e("li",null,[t("If PowerShell does not outcome any error message, then it means installation is successful. Please find "),e("code",null,"Snap Hutao"),t(" in your Start Menu and enjoy it.")],-1),O=i(`<h3 id="can-i-add-missing-system-components-to-install-snap-hutao" tabindex="-1"><a class="header-anchor" href="#can-i-add-missing-system-components-to-install-snap-hutao" aria-hidden="true">#</a> Can I Add Missing System Components to Install Snap Hutao</h3><p>Probably not if you are asking this, because you are not familiar with your system.</p><p>You don&#39;t know how many components are missing. When you install the one that tell you in the error message, you will see next missing component in the next error message, endless.</p><h3 id="got-cannot-open-this-application-error-when-open-snap-hutao" tabindex="-1"><a class="header-anchor" href="#got-cannot-open-this-application-error-when-open-snap-hutao" aria-hidden="true">#</a> Got &quot;Cannot open this application&quot; Error when Open Snap Hutao</h3><p><img src="https://img.alicdn.com/imgextra/i3/388777087/O1CN01WqkqOl22DtpuPYZB6_!!388777087.png" alt="unable to run" loading="lazy"></p><p>If you got this error when you open Snap Hutao, please use PowerShell (Admin) to execute the following command.</p><div class="language-PowerShell" data-ext="PowerShell"><pre class="language-PowerShell"><code>net stop appxsvc; Invoke-WebRequest -Uri https://aka.ms/windowsappsdk/1.4/latest/windowsappruntimeinstall-x64.exe -OutFile $env:temp/windowsappruntimeinstall-x64.exe; Invoke-Expression &quot;$env:temp/windowsappruntimeinstall-x64.exe --repair&quot;
</code></pre></div><h3 id="starting-faq" tabindex="-1"><a class="header-anchor" href="#starting-faq" aria-hidden="true">#</a> Starting FAQ</h3><h3 id="how-to-create-desktop-shortcut-with-no-admin-privilege" tabindex="-1"><a class="header-anchor" href="#how-to-create-desktop-shortcut-with-no-admin-privilege" aria-hidden="true">#</a> How to Create Desktop Shortcut (with No Admin Privilege)</h3>`,9),B={class:"hint-container tip"},D=e("p",{class:"hint-container-title"},"Community Power",-1),G={href:"https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12",target:"_blank",rel:"noopener noreferrer"},L=i('<ul><li>Use <code>Win+R</code> to start run, in the window input <code>shell:AppsFolder</code> <img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png" alt="Run" loading="lazy"></li><li>In the new pop-up window, find Snap Hutao</li><li>Right lick on it, and click <code>Create shortcut</code></li><li>Confirm the operation and you will get the desktop shortcut</li></ul><h3 id="how-to-create-desktop-shortcut-with-admin-privilege" tabindex="-1"><a class="header-anchor" href="#how-to-create-desktop-shortcut-with-admin-privilege" aria-hidden="true">#</a> How to Create Desktop Shortcut (With Admin Privilege)</h3><p>Click <code>Create Desktop Shortcut</code> in the settings page.</p><h3 id="how-to-run-snap-hutao-when-windows-starts" tabindex="-1"><a class="header-anchor" href="#how-to-run-snap-hutao-when-windows-starts" aria-hidden="true">#</a> How to run Snap Hutao when Windows starts</h3><p><strong>This is a workaround solution</strong></p>',5),Y={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/184",target:"_blank",rel:"noopener noreferrer"},$=e("li",null,"Create a Scheduled Task, run the bat when Windows startup, or drag it to Windows start folder",-1),Q=i('<h3 id="unable-to-run-snap-hutao-as-administrator" tabindex="-1"><a class="header-anchor" href="#unable-to-run-snap-hutao-as-administrator" aria-hidden="true">#</a> Unable to Run Snap Hutao as Administrator</h3><blockquote><p>This issue only occurs in Windows 10 older than 22H2 version</p></blockquote><ul><li>When user&#39;s OS version older than <code>Windows Build 19045</code> (aka Windows 10 22H2), Snap Hutao is unable to start when running as Administrator <ul><li>This issue comes from Windows kernel, and it&#39;s hard to locate, so we suggest you to update your OS to the latest version</li></ul></li></ul><h2 id="feature-faq" tabindex="-1"><a class="header-anchor" href="#feature-faq" aria-hidden="true">#</a> Feature FAQ</h2><h3 id="use-snap-hutao-to-quick-start-the-game" tabindex="-1"><a class="header-anchor" href="#use-snap-hutao-to-quick-start-the-game" aria-hidden="true">#</a> Use Snap Hutao to quick start the game</h3><ul><li><p>Config the game launcher in the settings</p></li><li><p>Pin Snap Hutao on taskbar</p></li><li><p>Right click on Snap Hutao and you will see the quick launcher</p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png" alt="quick-start" loading="lazy"></p></li><li><p>Select <code>Lauch Game</code>, you will be asked which account to start the game</p></li></ul><h3 id="mihoyo-bbs-account-often-lose-login-status" tabindex="-1"><a class="header-anchor" href="#mihoyo-bbs-account-often-lose-login-status" aria-hidden="true">#</a> MiHoYo BBS Account often Lose Login Status</h3><p>Snap Hutao use saved MiHoYo BBS cookies to maintain login status. If you <strong>log out</strong> your account in your browser or other device, cookie will become invalid, and Snap Hutao will also be forced to log out, account will be automatically removed.</p><p>This problem may also be caused by network error, you should check this first; If it&#39;s not caused by network issue, you can use <code>Refresh Cookie</code> in the account panel; You can also remove your account manually and add it back again.</p><p>Since October 2022, MiYouShe (Chinese BBS) rapidly increased bot detection and may set users&#39; account as under-risk status, this may cause Snap Hutao failed to check validation of the cookie</p><h3 id="game-account-lose-login-status-in-the-launcher" tabindex="-1"><a class="header-anchor" href="#game-account-lose-login-status-in-the-launcher" aria-hidden="true">#</a> Game Account Lose Login Status in the Launcher</h3><ul><li>There are two factors associated with game account login status: network and device ID</li><li>This issue usually caused by: <ul><li>Change of public IP address</li><li>Change of network adapter or network adapter MAC address</li><li>Failed saving operation, no real login status been saved (Snap Hutao cannot detect if the status is real valid) <ul><li>Make sure to enter the game after sign in</li><li>Make sure the game process is gone after closing the game</li><li>Detect the account again to save your login status</li></ul></li></ul></li></ul><h3 id="how-to-recover-config-ini-configuration-file" tabindex="-1"><a class="header-anchor" href="#how-to-recover-config-ini-configuration-file" aria-hidden="true">#</a> How to Recover <code>config.ini</code> Configuration File</h3><p>In some particular conditions (such as wrong game folder permission), <code>config.ini</code> may lose after server conversion. This will cause user not able to get into advanced launcher page and launch the game.</p><p>After identify the server version on your device, you can manually create and fill the configuration file with the right content. The following are common configurations.</p>',15),z=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`[General]
channel=1
cps=mihoyo
game_version=4.1.0
sub_channel=1
plugin_7_version=1.0.0
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`[General]
channel=1
cps=mihoyo
game_version=4.1.0
sub_channel=0
plugin_7_version=1.0.0
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),X=i('<h3 id="why-does-setting-up-automatic-refresh-of-real-time-notes-prompt-failed-to-modify-scheduled-task" tabindex="-1"><a class="header-anchor" href="#why-does-setting-up-automatic-refresh-of-real-time-notes-prompt-failed-to-modify-scheduled-task" aria-hidden="true">#</a> Why does setting up automatic refresh of real-time notes prompt &quot;Failed to modify Scheduled Task&quot;</h3><p>The automatic refresh of real-time notes relies on task scheduling. In order to avoid possible permission issues, Snap Hutao will force scheduled tasks to be set in non-administrator mode.</p><p>If you turned on automatic refresh in the old version, you can solve the problem by manually deleting the old task schedule in Task Scheduler. The name of the scheduled task is <code>SnapHutaoDailyNoteRefreshTask</code>.</p><p>If you did not turn on automatic refresh in the old version, then this problem is caused by the Windows user account you are currently using having insufficient permissions. If your current user account is an administrator account, you can only solve this problem by reinstalling the system.</p><h2 id="network-faq" tabindex="-1"><a class="header-anchor" href="#network-faq" aria-hidden="true">#</a> Network FAQ</h2><h3 id="use-snap-hutao-with-network-proxy" tabindex="-1"><a class="header-anchor" href="#use-snap-hutao-with-network-proxy" aria-hidden="true">#</a> Use Snap Hutao with Network Proxy</h3><blockquote><p>Snap Hutao has a well-designed cloud network structure, you should be able to get good network service wherever you are located</p></blockquote><p>Loopback network are disabled for all Windows Appx container application (including Snap Hutao), so some modern network proxy software will cause container applications to lose Internet access, and lead to application errors.</p><p>If you need network proxy to use Snap Hutao, you have two ways to fix it:</p>',9),j=e("li",null,[t("Enable "),e("code",null,"TUN Mode"),t(" in your network proxy software")],-1),J={href:"https://www.telerik.com/fiddler/add-ons",target:"_blank",rel:"noopener noreferrer"},K=e("ul",null,[e("li",null,"If network security is not a concern for you, you can use the following PowerShell command to unlock all container loopback limit in your computer")],-1),Z=e("div",{class:"language-PowerShell","data-ext":"PowerShell"},[e("pre",{class:"language-PowerShell"},[e("code",null,`FOR /F "tokens=11 delims=\\" %p IN ('REG QUERY "HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p
`)])],-1),ee=i('<h2 id="uninstallation-faq" tabindex="-1"><a class="header-anchor" href="#uninstallation-faq" aria-hidden="true">#</a> Uninstallation FAQ</h2><h3 id="how-to-fully-backup-recover-client-data" tabindex="-1"><a class="header-anchor" href="#how-to-fully-backup-recover-client-data" aria-hidden="true">#</a> How to Fully Backup/Recover Client Data</h3><div class="hint-container warning"><p class="hint-container-title">Data Security Warning</p><p><code>Userdata.db</code> contains all client data, including MiHoYO BBS Cookie, please save the data file properly and do NOT share it with anyone.</p></div><p>Copy <code>Userdata.db</code> from Snap Hutao data folder (<code>%userprofile%/Documents/Hutao</code> by default) to your backup location, this file contains entire data of the client.</p>',4);function te(oe,ae){const s=d("RouterLink"),a=d("ExternalLinkIcon"),c=d("Tabs");return u(),p("div",null,[f,g,e("p",null,[t("If the following answers can not solve your issue, feel free to "),o(s,{to:"/en/statements/bug-report.html"},{default:n(()=>[t("report bug to us")]),_:1}),t("!")]),w,e("div",b,[y,e("p",null,[t("If you failed installation with MSIX package, please try "),e("a",k,[t("Snap.Hutao.Deployment"),o(a)]),t(" first, it can solve most of the installation issue.")])]),_,e("ul",null,[e("li",null,[t("When user's OS missing required dependency framework, Windows will download and install it automatically. However, if the user disabled Windows Update or have a bad network, the system is unable to process this installation. "),e("ul",null,[v,e("li",null,[t("You can also download and install the "),o(s,{to:"/en/advanced/dependency.html"},{default:n(()=>[t("dependency")]),_:1}),t(" manually")])])])]),S,e("ul",null,[x,e("li",null,[t("You can find this font from "),e("a",I,[t("Microsoft"),o(a)])])]),C,H,e("p",null,[t("If Microsoft Store is installed on your system, you can restore this component by reinstalling it from the "),e("a",P,[t("App Installer Store Page"),o(a)]),t(".")]),e("p",null,[t("If you don’t have Windows Store, please use the latest full version of Microsoft’s official consumer version "),e("a",W,[t("Windows 10"),o(a)]),t(" or "),e("a",A,[t("Windows 11"),o(a)]),t(" mirror. Using the Windows 10 Upgrade Assistant and Windows 11 Installation Assistant provided by Microsoft can help you simply upgrade to the latest full version of Windows while retaining your data.")]),q,F,e("p",null,[t("Snap Hutao's code signing certificate comes from "),e("a",M,[t("GlobalSign Code Signing Root R45"),o(a)]),t(", you can manually download "),e("a",E,[t("this CA certificate"),o(a)]),t(" from GlobalSign official website.")]),R,e("ol",null,[e("li",null,[t("Manually download and install "),o(s,{to:"/en/advanced/dependency.html"},{default:n(()=>[t("Snap Hutao Dependency")]),_:1})]),T,U,N]),O,e("div",B,[D,e("p",null,[t("Thanks to "),e("a",G,[t("CzHUV"),o(a)]),t(" for the solution.")])]),L,e("ul",null,[e("li",null,[t("Create a bat file, content refers to "),e("a",Y,[t("this Issue"),o(a)]),t(", it allows bat to run Snap Hutao with Administrator privilege")]),$]),Q,o(c,{id:"385",data:[{id:"CN Server Official"},{id:"Global Server Official"}],"tab-id":"game_config_samples"},{title0:n(({value:r,isActive:l})=>[t("CN Server Official")]),title1:n(({value:r,isActive:l})=>[t("Global Server Official")]),tab0:n(({value:r,isActive:l})=>[z]),tab1:n(({value:r,isActive:l})=>[V]),_:1}),X,e("ol",null,[j,e("li",null,[t("Use "),e("a",J,[t("Windows 8 AppContainer Loopback Utility"),o(a)]),t(" to unlock Windows App Container Loopback limit "),K,Z])]),ee])}const se=h(m,[["render",te],["__file","FAQ.html.vue"]]);export{se as default};