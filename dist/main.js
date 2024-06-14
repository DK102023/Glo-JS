(()=>{"use strict";var e=function(e){e.style.opacity=0,e.style.display="block";var t=0,n=setInterval((function(){t+=.02,e.style.opacity=t,t>=1&&clearInterval(n)}),10)},t=function(e){var t=1,n=setInterval((function(){t-=.02,e.style.opacity=t,t<=0&&(clearInterval(n),e.style.display="none")}),10)},n=/^[\d+]+$/,o=/^[а-яёА-ЯЁ]+$/;var l,r,c,i,s;r=document.querySelector(".mobile-menu"),c=r.querySelector(".mobile-menu-close"),i=r.querySelector(".callback-btn"),s=!1,i.addEventListener("click",(function(e){console.log(e.target),e.preventDefault(),r.style.right="-400px",s=!s})),c.onclick=function(){r.style.right="-400px",s=!s},document.querySelector(".mob-menu-btn").addEventListener("click",(function(){s?(r.style.right="-400px",s=!s):(r.style.right="0",s=!s)})),function(){var e=document.querySelector(".mobile-menu").querySelector(".mobile-menu-close");document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('a[href^="#"]').forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.click();var n=this.getAttribute("href").substring(1),o=document.getElementById(n).offsetTop;window.scrollTo({top:o,behavior:"smooth"})}))}))}))}(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".top-slider .item"),t=0;function n(t){e.forEach((function(e,n){n===t?(e.style.opacity=0,e.style.display="block",setTimeout((function(){e.style.transition="opacity 1s",e.style.opacity=1}),10)):(e.style.opacity=0,setTimeout((function(){e.style.display="none"}),1e3))}))}e.forEach((function(e,t){e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.transition="transform 0.5s ease";var n=e.querySelector(".table");n.style.visibility="visible",n.style.opacity="1",n.style.transition="visibility 0s, opacity 0.5s linear"})),n(t),setInterval((function(){n(t=(t+1)%e.length)}),3e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".services-carousel"),t=document.querySelector(".arrow-left"),n=document.querySelector(".arrow-right"),o=e.querySelector(".col-sm-6").offsetWidth,l=0;t.addEventListener("click",(function(){(l-=o)<0&&(l=0),e.scrollTo({left:l,behavior:"smooth"})})),n.addEventListener("click",(function(){var t=e.scrollWidth-e.clientWidth;(l+=o)>t&&(l=t),e.scrollTo({left:l,behavior:"smooth"})}))})),function(){var e=document.querySelector(".up");if(e){var t=function(){window.scrollY>300?e.style.display="block":e.style.display="none"};window.addEventListener("scroll",t),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),t()}else console.error('Element with class "up" not found')}(),function(e){var t=document.querySelector(e);t.addEventListener("click",(function(e){var n=e.target.closest(".element");if(n.classList.contains("element")){console.dir("click on element:  "+n.classList);var o=n.querySelector(".element-content"),l=t.querySelectorAll(".element-content");t.querySelectorAll(".element").forEach((function(e){e.classList.remove("active")})),l.forEach((function(e){e.style.transition="none",e.style.display="none"})),n.classList.add("active"),o.style.transition="max-height 0.3s ease",o.style.display="block",o.style.maxHeight=o.scrollHeight+"px"}}))}(".accordeon"),l=[10,20,"10 лет","<30"],document.querySelector(".num-section").querySelectorAll(".num").forEach((function(e,t){e.style.opacity="1","number"==typeof l[t]?function(e,t,n){var o=0,l=setInterval((function(){o<=e?(n.innerHTML='<span id="num+'.concat(t+1,'">').concat(o,"</span>"),o++):clearInterval(l)}),100)}(l[t],t,e):"string"==typeof l[t]&&(e.innerHTML='<span id="num+'.concat(t+1,'">').concat(l[t],"</span>"))})),function(){var l=document.querySelector(".modal-overlay"),r=document.getElementById("callback"),c=r.querySelector(".modal-close"),i=r.querySelector('input[name="fio"]'),s=r.querySelector('input[name="tel"]'),a=document.getElementById("feedback"),u=a.querySelector('input[name="fio"]'),d=a.querySelector('input[name="tel"]'),y=a.querySelector('textarea[name="message"]'),m=document.getElementById("application"),f=m.querySelector("#applicationInput"),p=m.querySelector('input[name="fio"]'),v=m.querySelector('input[name="tel"]'),h=(document.getElementById("responseMessage"),document.querySelectorAll(".callback-btn")),g=document.querySelectorAll(".button-services"),q=document.querySelector(".services-carousel").querySelectorAll(".absolute");function S(t,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((function(t){t.addEventListener("click",(function(l){l.preventDefault(),o&&e(o),e(n),n===a?m.style.display="none":n===m&&(a.style.display="none",f.value=t.dataset.application)}))}))}function b(){t(l),t(r)}function E(e,t,n){e.preventDefault();var o,l=!0,r={};n.forEach((function(e){var t=e.element,n=function(e,t,n,o){var l=e.value.trim();return!o&&""===l||(!n||l.length===n)&&t.test(l)?(e.classList.remove("error"),!0):(e.classList.add("error"),!1)}(t,e.regexp,e.length,e.required);n||(l=!1),r[t.name]=t.value})),l&&(o=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(o)}).then((function(e){if(!e.ok)throw new Error("Ошибка HTTP: "+e.status);return e.json()}))).then((function(e){L(t,"Отправлено!","success"),t===m?k(m):t===a&&k(a)})).catch((function(e){L(t,"Ошибка отправки!","error")}))}function L(e,t,n){var o=document.createElement("div");o.textContent=t,o.classList.add(n);var l=e.lastElementChild;e.insertBefore(o,l.nextSibling),setTimeout((function(){o.remove()}),3e3)}function k(e){setTimeout((function(){e.style.display=""}),3300)}q.length>0&&S(q,r,l),g.length>0&&S(g,r,l),h.length>0&&S(h,r,l),c.addEventListener("click",(function(){b()})),l.addEventListener("click",(function(){b()})),r.addEventListener("submit",(function(e){E(e,r,[{element:i,regexp:o,required:!0},{element:s,regexp:n,length:12,required:!0}])})),a.addEventListener("submit",(function(e){E(e,a,[{element:u,regexp:o},{element:d,regexp:n,length:12,required:!0},{element:y,regexp:/.+/,required:!0}])})),m.addEventListener("submit",(function(e){E(e,m,[{element:p,regexp:o,required:!0},{element:v,regexp:n,length:12,required:!0},{element:f,regexp:/.+/}])}))}()})();
//# sourceMappingURL=main.js.map