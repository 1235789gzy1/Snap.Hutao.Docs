import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as n,c as l,a as e,b as t,d as r,w as c,e as s}from"./app-VtUuLwOQ.js";const d={},u=e("h1",{id:"real-time-notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#real-time-notes","aria-hidden":"true"},"#"),t(" Real-time Notes")],-1),h={class:"hint-container info"},f=e("p",{class:"hint-container-title"},"Info",-1),m=s('<p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01nh4t1T1g6dyI3Ikcn_!!1797064093.png_.webp" alt="live-data-tracking" loading="lazy"></p><h2 id="add-role" tabindex="-1"><a class="header-anchor" href="#add-role" aria-hidden="true">#</a> Add Role</h2><ul><li>Click on <code>Add Role</code> button</li><li>In the pop-up menu, find the UID you want to add, and click on the add button to its right</li><li>Now, the game UID character&#39;s Real-time Notes should be displayed in the page <ul><li>The Real-time Notes is set to refresh timely. You can click on the <code>Notification Settings</code> on the top right to manage it</li></ul></li><li>If you want to see the data at this moment, you can click <code>Refresh</code> button to refresh data immediately</li><li>If a <code>-1034</code> error occurs during data refresh, it means that miHoYo&#39;s anti-bot risk control has been triggered. You can solve this problem by configuring the invisible verification in the Hutao settings.</li></ul><h2 id="verify-current-user-and-role" tabindex="-1"><a class="header-anchor" href="#verify-current-user-and-role" aria-hidden="true">#</a> Verify Current User and Role</h2><p>If you are using a MiYouShe account, then you account is very likely to be marked as robot-usage and leads to an anti-bot verification. In this status, Real-time Notes data cannot be updated.</p><p>You can click on <code>Verify Current User and Role</code> button, Snap Hutao will pop up verification window. After finishing the verification, then your account can be used to refresh data.</p><h2 id="global-notification-settings" tabindex="-1"><a class="header-anchor" href="#global-notification-settings" aria-hidden="true">#</a> Global Notification Settings</h2><ul><li>In the <code>Notification Settings</code> on the top right, you can change the global settings of Real-time Notes, including: <ul><li>Enable/Disable auto refresh</li><li>Refresh rate</li><li>Do not disturb setting</li><li>Prioritized notification <ul><li>This prevent Snap Hutao&#39;s notification being closed automatically</li></ul></li><li>Customized data forwarding Webhook <ul><li>Snap Hutao allows user to forward Realtime Notes data to other applications to reduce account&#39;s request to MiHoYo API</li><li>Input your third party HTTP API endpoint in <code>Realtime Notes Webhook Url</code> setting field, and Snap Hutao will forward the raw data through <code>POST</code> requests</li></ul></li></ul></li></ul><h2 id="independent-settings-for-each-accounts" tabindex="-1"><a class="header-anchor" href="#independent-settings-for-each-accounts" aria-hidden="true">#</a> Independent Settings for Each Accounts</h2><ul><li>Snap Hutao allows different settings on each Real-time Notes account</li><li>Hover the cursor over the form of Real-time Notes account that needs to set</li><li>Click on the setting button on it, and you can modify these settings: <ul><li>Original Resin threshold value</li><li>Realm Currency threshold value</li><li>Parametric Transformer notification</li><li>Daily Commission notification</li><li>Expeditions notification</li><li>Display in the main page (feature coming soon)</li></ul></li><li>Click on <code>Save</code> and you can save the settings</li></ul><h2 id="delete-daily-notes-account" tabindex="-1"><a class="header-anchor" href="#delete-daily-notes-account" aria-hidden="true">#</a> Delete Daily-Notes Account</h2><ul><li>Hover the cursor over the form of Real-time Notes account that needs to delete</li><li>Clock on the remove button on it, and you can remove the corresponding account</li></ul>',12);function g(p,b){const i=a("RouterLink");return n(),l("div",null,[u,e("div",h,[f,e("p",null,[t("This features requires you to login in to your MiYouShe or HoYoLab account in Snap Hutao, you can check "),r(i,{to:"/en/features/mhy-account-switch.html"},{default:c(()=>[t("MiHoYo BBS Account Switch")]),_:1}),t(" for more information.")])]),m])}const _=o(d,[["render",g],["__file","real-time-notes.html.vue"]]);export{_ as default};
