import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as d}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),v=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let c=null,o=null,s=!1;const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c<new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=s}};y("#datetime-picker",E);a.addEventListener("click",()=>{s||(o&&clearInterval(o),s=!0,a.disabled=!0,o=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(o),d.success({title:"Success",message:"Countdown finished!"}),i(0),s=!1;return}const n=I(t);i(n)},1e3))});function I(e){const l=Math.floor(e/83544e3),m=Math.floor(e%83544e3/3481e3),f=Math.floor(e%83544e3%3481e3/59e3),h=Math.floor(e%83544e3%3481e3%59e3/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function i({days:e,hours:t,minutes:n,seconds:u}){S.textContent=r(e),p.textContent=r(t),v.textContent=r(n),C.textContent=r(u)}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=01-timer.js.map
