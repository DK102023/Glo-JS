(()=>{"use strict";const e=e=>{e.style.opacity=0,e.style.display="block";let t=0;const n=setInterval((()=>{t+=.02,e.style.opacity=t,t>=1&&clearInterval(n)}),10)},t=e=>{console.log("fadeOut for ",e);let t=1;const n=setInterval((()=>{t-=.02,e.style.opacity=t,t<=0&&(clearInterval(n),e.style.display="none")}),10)},n=/^[\d+]+$/,l=/^[а-яёА-ЯЁ]+$/;var o;(()=>{const e=document.querySelector(".mobile-menu"),t=e.querySelector(".mobile-menu-close"),n=e.querySelector(".callback-btn");let l=!1;n.addEventListener("click",(t=>{console.log(t.target),t.preventDefault(),e.style.right="-400px",l=!l})),t.onclick=()=>{e.style.right="-400px",l=!l},document.querySelector(".mob-menu-btn").addEventListener("click",(function(){l?(e.style.right="-400px",l=!l):(e.style.right="0",l=!l)}))})(),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),n=document.getElementById(t).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".top-slider .item");let t=0;function n(t){e.forEach(((e,n)=>{n===t?(e.style.opacity=0,e.style.display="block",setTimeout((()=>{e.style.transition="opacity 1s",e.style.opacity=1}),10)):(e.style.opacity=0,setTimeout((()=>{e.style.display="none"}),1e3))}))}e.forEach(((e,t)=>{e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.transition="transform 0.5s ease";const n=e.querySelector(".table");n.style.visibility="visible",n.style.opacity="1",n.style.transition="visibility 0s, opacity 0.5s linear"})),n(t),setInterval((function(){t=(t+1)%e.length,n(t)}),3e3)})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".services-carousel"),t=document.querySelector(".arrow-left"),n=document.querySelector(".arrow-right"),l=e.querySelector(".col-sm-6").offsetWidth;let o=0;t.addEventListener("click",(()=>{o-=l,o<0&&(o=0),e.scrollTo({left:o,behavior:"smooth"})})),n.addEventListener("click",(()=>{const t=e.scrollWidth-e.clientWidth;o+=l,o>t&&(o=t),e.scrollTo({left:o,behavior:"smooth"})}))})),(()=>{const e=document.querySelector(".up");if(!e)return void console.error('Element with class "up" not found');const t=()=>{window.scrollY>300?e.style.display="block":e.style.display="none"};window.addEventListener("scroll",t),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),t()})(),(e=>{const t=document.querySelector(e);t.addEventListener("click",(e=>{const n=e.target.closest(".element");if(n.classList.contains("element")){console.dir("click on element:  "+n.classList);const e=n.querySelector(".element-content"),l=t.querySelectorAll(".element-content");t.querySelectorAll(".element").forEach((e=>{e.classList.remove("active")})),l.forEach((e=>{e.style.transition="none",e.style.display="none"})),n.classList.add("active"),e.style.transition="max-height 0.3s ease",e.style.display="block",e.style.maxHeight=e.scrollHeight+"px"}}))})(".accordeon"),o=[10,20,"10 лет","<30"],document.querySelector(".num-section").querySelectorAll(".num").forEach(((e,t)=>{e.style.opacity="1","number"==typeof o[t]?function(e,t,n){let l=0;const o=setInterval((()=>{l<=e?(n.innerHTML=`<span id="num+${t+1}">${l}</span>`,l++):clearInterval(o)}),100)}(o[t],t,e):"string"==typeof o[t]&&(e.innerHTML=`<span id="num+${t+1}">${o[t]}</span>`)})),(()=>{const o=document.querySelector(".modal-overlay"),r=document.getElementById("callback"),s=r.querySelector(".modal-close"),c=r.querySelector('input[name="fio"]'),i=r.querySelector('input[name="tel"]'),a=document.getElementById("feedback"),u=a.querySelector('input[name="fio"]'),d=a.querySelector('input[name="tel"]'),y=a.querySelector('textarea[name="message"]'),m=document.getElementById("application"),p=m.querySelector("#applicationInput"),h=m.querySelector('input[name="fio"]'),v=m.querySelector('input[name="tel"]'),f=(document.getElementById("responseMessage"),document.querySelectorAll(".callback-btn")),g=document.querySelectorAll(".button-services"),q=document.querySelector(".services-carousel").querySelectorAll(".absolute");function S(t,n,l=!1){t.forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault(),l&&e(l),e(n),n===a?m.style.display="none":n===m&&(a.style.display="none",p.value=t.dataset.application)}))}))}function E(){t(o),t(r)}function b(e,t,n){e.preventDefault();let l=!0,o={};var r;n.forEach((e=>{const{element:t,regexp:n,length:r,required:s}=e,c=function(e,t,n,l){const o=e.value.trim();return!l&&""===o||(!n||o.length===n)&&t.test(o)?(e.classList.remove("error"),!0):(e.classList.add("error"),!1)}(t,n,r,s);c||(l=!1),o[t.name]=t.value})),l&&(r=o,fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((e=>{if(!e.ok)throw new Error("Ошибка HTTP: "+e.status);return e.json()}))).then((e=>{var n;L(t,"Отправлено!","success"),t===m&&(n=m,setTimeout((()=>{n.style.display=""}),3300))})).catch((e=>{L(t,"Ошибка отправки!","error")}))}function L(e,t,n){const l=document.createElement("div");l.textContent=t,l.classList.add(n);const o=e.lastElementChild;e.insertBefore(l,o.nextSibling),setTimeout((()=>{l.remove()}),3e3)}q.length>0&&S(q,m),g.length>0&&S(g,a),f.length>0&&S(f,r,o),s.addEventListener("click",(()=>{E()})),o.addEventListener("click",(()=>{E()})),r.addEventListener("submit",(e=>{b(e,r,[{element:c,regexp:l,required:!0},{element:i,regexp:n,length:12,required:!0}])})),a.addEventListener("submit",(e=>{b(e,a,[{element:u,regexp:l,required:!0},{element:d,regexp:n,length:12,required:!0},{element:y,regexp:/.+/,required:!0}])})),m.addEventListener("submit",(e=>{b(e,m,[{element:h,regexp:l,required:!0},{element:v,regexp:n,length:12,required:!0}])}))})()})();