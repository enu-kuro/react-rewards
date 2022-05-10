import{useState as k,useCallback as j}from"react";const w=({root:e,particles:t,decay:s,lifetime:c,updateParticle:l,onFinish:a})=>{const i=c;let o=0;const n=()=>{t.forEach(r=>l(r,o/i,s)),o+=1,o<i?window.requestAnimationFrame(n):(t.forEach(r=>{if(r.element.parentNode===e)return e.removeChild(r.element)}),a())};window.requestAnimationFrame(n)},{PI:$}=Math,I=e=>e*($/180),x=(e,t)=>{const s=Math.ceil(e),c=Math.floor(t);return Math.floor(Math.random()*(c-s))+s},A=(e,t,s,c)=>{const l=I(e),a=I(t),{random:i}=Math;return{x:0,y:0,z:0,height:0,wobble:i()*10,velocity:s*.5+i()*s,angle2D:-l+(.5*a-i()*a),angle3D:-($/4)+i()*($/2),tiltAngle:i()*$,differentiator:c}},g=e=>{const t=document.getElementById(e);return t||console.error(`Element with an ID of ${e} could not be found. Please provide a valid ID.`),t},B=["#A45BF1","#25C6F6","#72F753","#F76C88","#F5F770"],z=[-.6,-.3,0,.3,.6],S=(e,t,s,c,l,a)=>Array.from({length:t}).map((i,o)=>{const n=document.createElement("span");return n.style["background-color"]=a[o%a.length],n.style.width=`${s}px`,n.style.height=`${s}px`,n.style.position=l,n.style.zIndex=`${c}`,e.appendChild(n),{element:n,differentiator:x(0,z.length)}}),R=(e,t,s)=>{const{x:c,y:l,tiltAngle:a,wobble:i,angle2D:o,angle3D:n,velocity:r,differentiator:d}=e.physics;e.physics.x+=Math.cos(o)*r,e.physics.y+=Math.sin(o)*r,e.physics.z+=Math.sin(n)*r,e.physics.wobble+=.05,e.physics.velocity*=s,e.physics.y+=3.5,e.physics.tiltAngle+=.15;const h=c+(z[d]*t*i*i+20*(d%2?Math.sin(i/4):Math.cos(i/4))),y=l+5*Math.sin(i);e.element.style.transform=`translate3d(${h}px, ${y}px, 0) rotate3d(1, 1, 1, ${d%2?a:-1*a}rad)`,e.element.style.scale=`${1-.2*t}`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},C=(e,t,s)=>{const c=s||{},{elementCount:l=50,elementSize:a=8,colors:i=B,angle:o=90,spread:n=45,decay:r=.94,lifetime:d=200,startVelocity:h=35,zIndex:y=0,position:f="fixed",onAnimationComplete:m}=c,p=S(e,l,a,y,f,i).map(({element:u,differentiator:b})=>({element:u,physics:A(o,n,h,b)}));w({root:e,particles:p,decay:r,lifetime:d,updateParticle:R,onFinish:()=>{typeof m=="function"&&m(),t()}})},V=["\u{1F913}","\u{1F60A}","\u{1F973}"],P=[-.6,-.3,0,.3,.6],N=(e,t,s,c,l,a)=>Array.from({length:t}).map((i,o)=>{const n=document.createElement("span");return n.innerHTML=a[o%a.length],n.style.fontSize=`${s+x(0,4)}px`,n.style.position=l,n.style.zIndex=`${c}`,e.appendChild(n),{element:n,differentiator:x(0,P.length)}}),T=(e,t,s)=>{const{x:c,y:l,tiltAngle:a,angle2D:i,velocity:o,differentiator:n,wobble:r}=e.physics;e.physics.x+=Math.cos(i)*o,e.physics.y+=Math.sin(i)*o,e.physics.wobble+=0,e.physics.velocity*=s,e.physics.y+=5,e.physics.tiltAngle+=.05;const d=c+(P[n]*t*r*r+20*Math.sin(r/4));e.element.style.transform=`translate3d(${d}px, ${l}px, 0) rotate3d(0, 0, 1, ${n%2?a:-1*a}rad)`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},F=(e,t,s)=>{const c=s||{},{elementCount:l=20,elementSize:a=25,emoji:i=V,angle:o=90,spread:n=45,decay:r=.94,lifetime:d=200,startVelocity:h=35,zIndex:y=0,position:f="fixed",onAnimationComplete:m}=c,p=N(e,l,a,y,f,i).map(({element:u,differentiator:b})=>({element:u,physics:A(o,n,h,b)}));w({root:e,particles:p,decay:r,lifetime:d,updateParticle:T,onFinish:()=>{typeof m=="function"&&m(),t()}})},X=["#A45BF1","#25C6F6","#72F753","#F76C88","#F5F770"],D=[-.6,-.3,0,.3,.6],_=(e,t,s)=>{t.parentNode===s&&s.removeChild(t)},q=(e,t,s,c,l,a)=>Array.from({length:t}).map((i,o)=>{const n=document.createElement("span");return n.style.width=`${s}px`,n.style.position=l,n.style.color=a[o%a.length],n.style.zIndex=`${c}`,n.addEventListener("click",r=>{_(r,n,e)},{once:!0}),e.appendChild(n),{element:n,differentiator:x(0,D.length)}}),L=(e,t,s)=>{const{x:c,y:l,tiltAngle:a,angle2D:i,velocity:o,differentiator:n,wobble:r}=e.physics;e.physics.x+=Math.cos(i)*.5*o,e.physics.y+=Math.sin(i)*.5*o,e.physics.wobble+=0,e.physics.velocity*=s,e.physics.tiltAngle+=.1;const d=c+(D[n]*t*r*r+20*Math.sin(r));e.element.style.transform=`translate3d(${d}px, ${l}px, 0) rotate3d(0, 0, 1, ${n%2?Math.sin(a/4)/3:Math.cos(a/4)/3}rad)`,e.element.style.scale=`${1-.2*t}`,t>.5&&(e.element.style.opacity=`${2-2*t}`)},M=(e,t,s)=>{const c=s||{},{angle:l=90,decay:a=.999,spread:i=50,startVelocity:o=3,elementCount:n=10,elementSize:r=20,lifetime:d=600,zIndex:h=0,position:y="fixed",colors:f=X,onAnimationComplete:m}=c,p=q(e,n,r,h,y,f).map(({element:u,differentiator:b})=>({element:u,physics:A(l,i,o,b)}));w({root:e,particles:p,decay:a,lifetime:d,updateParticle:L,onFinish:()=>{typeof m=="function"&&m(),t()}})},H=(e,t,s)=>{const[c,l]=k(!1),a=()=>{l(!1)};return{reward:j(()=>{const o=g(e);if(!!o)switch(l(!0),t){case"confetti":C(o,a,s);break;case"emoji":F(o,a,s);break;case"balloons":M(o,a,s);break;default:console.error(`${t} is not a valid react-rewards type.`)}},[s,e,t]),isAnimating:c}},U=(e,t,s)=>{const[c,l]=k(!1),a=()=>{l(!1)};let i;switch(t){case"confetti":{i=()=>{const o=g(e);!o||(l(!0),C(o,a,s))};break}case"emoji":{i=()=>{const o=g(e);!o||(l(!0),F(o,a,s))};break}case"balloons":{i=()=>{const o=g(e);!o||(l(!0),M(o,a,s))};break}default:i=()=>console.error(`${t} is not a valid react-rewards type.`)}return{reward:i,isAnimating:c}};export{M as balloons,C as confetti,F as emoji,H as useReward,U as useRewardNoUseCallback};
//# sourceMappingURL=react-rewards.es.js.map