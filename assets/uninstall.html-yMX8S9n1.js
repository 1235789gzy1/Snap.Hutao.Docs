import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as u,c,a as e,b as l,d as t,w as d,e as i}from"./app-VtUuLwOQ.js";const r={},_=e("h1",{id:"удаление-snap-hutao",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#удаление-snap-hutao","aria-hidden":"true"},"#"),l(" Удаление Snap Hutao")],-1),h=e("strong",null,"Метод 1",-1),p=e("li",null,"Запустите Snap Hutao и перейдите на страницу настроек",-1),B=e("strong",null,"Delete All Scheduled Task",-1),E=e("strong",null,"Execute",-1),m=i(`<li><strong>Метод 2</strong>： <ul><li>Выполните следующий сценарий PowerShell<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><strong>Метод 3</strong>： <ul><li>Откройте Планировщик задач Windows</li><li>Найдите задачу <code>SnapHutaoDailyNoteRefreshTask</code> и удалите ее</li></ul></li><li><strong>Метод 4</strong>： <ul><li>Обновите до версии <code>1.5.1</code> и откройте Real-time Notes</li><li>Закройте программу и удалите ее</li></ul></li>`,3),g=i("<li>Удаление программы <ul><li>Откройте <code>Меню Пуск</code></li><li>Найдите или выполните поиск <code>Snap Hutao</code></li><li>Щелкните правой кнопкой мыши и выберите <code>Удалить</code></li></ul></li><li>Удаление папки с данными (если вы хотите удалить ее полностью) <ul><li>Откройте и удалите <code>%userprofile%/Documents/Hutao</code></li></ul></li>",2);function A(f,S){const s=n("RouterLink"),o=n("Badge");return u(),c("div",null,[_,e("ul",null,[e("li",null,[l("Очистка запланированной задачи Real-time Notes "),e("ul",null,[e("li",null,[l("До версии 1.4.15, если не выполнить этот шаг, запланированная задача для обновления заметок в реальном времени может не быть удалена, и вы можете столкнуться с "),t(s,{to:"/ru/advanced/FAQ.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%BC%B9%E5%87%BA%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E6%96%B0%E5%BA%94%E7%94%A8%E4%BB%A5%E6%89%93%E5%BC%80%E7%9A%84%E5%AF%B9%E8%AF%9D%E6%A1%86"},{default:d(()=>[l("этой проблемой")]),_:1}),e("ul",null,[e("li",null,[h,l(),t(o,{text:"Для версии <= 1.4.15",type:"tip"}),l("： "),e("ul",null,[p,e("li",null,[l("Найдите раздел "),B,l(" и нажмите на кнопку "),E,l(),t(o,{text:"Требуется права администратора",type:"tip"})])])])])]),m])]),g])])}const k=a(r,[["render",A],["__file","uninstall.html.vue"]]);export{k as default};
