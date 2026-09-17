
const toggle=document.querySelector('.menuBtn');
const links=document.querySelector('.navlinks');
if(toggle&&links){toggle.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='74px';links.style.left='0';links.style.right='0';links.style.padding='22px';links.style.background='white';links.style.flexDirection='column';links.style.borderBottom='1px solid #d9ebf6'})}
document.querySelectorAll('.quick').forEach(b=>b.addEventListener('click',()=>{b.textContent='Added ✓';setTimeout(()=>b.textContent='Quick add',1400)}));
document.querySelectorAll('[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Demo form — connect your official email or backend before publishing live submissions.')}));
