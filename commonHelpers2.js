import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";function n(e,i){return new Promise((s,t)=>{setTimeout(i==="fulfilled"?()=>s(e):()=>t(e),e)})}const r=document.querySelector(".form");r.addEventListener("submit",function(e){e.preventDefault();const i=parseInt(this.elements.delay.value),s=this.elements.state.value;n(i,s).then(t=>{o.success({title:"Fulfilled",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{o.error({title:"Rejected",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
