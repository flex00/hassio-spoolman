import{x as t,w as a,j as i,y as c}from"./index-DVifsFYV.js";function m(n=!1){return t({enabled:n,queryKey:["filaments"],queryFn:async()=>{const e=await fetch(a()+"/filament");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>e.filter(r=>r.name!==null&&r.name!==void 0&&r.name!=="").map(r=>{var l;let o="";(l=r.vendor)!=null&&l.name?o=`${r.vendor.name} - ${r.name??"<unknown>"}`:o=`${r.name??"<unknown>"}`;const u=[];return r.color_hex&&u.push(i.jsx("div",{style:{borderRadius:".4em",width:"1.4em",height:"1.4em",backgroundColor:"#"+r.color_hex}},"color")),r.material&&u.push(i.jsx("div",{children:r.material},"material")),r.weight&&u.push(i.jsxs("div",{children:[r.weight,"g"]},"weight")),{text:i.jsx(c,{title:i.jsx("div",{style:{display:"flex",flexDirection:"row",gap:".5em",alignContent:"center"},children:u}),children:o}),value:r.id,sortId:o}}).filter((r,o,u)=>u.findIndex(l=>l.value===r.value)===o).sort((r,o)=>r.sortId.localeCompare(o.sortId))})}function p(n=!1){return t({enabled:n,queryKey:["filaments"],queryFn:async()=>{const e=await fetch(a()+"/filament");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>{let s=e.filter(r=>r.name!==null&&r.name!==void 0&&r.name!=="").map(r=>r.name??"<unknown>").sort();return s=[...new Set(s)],s}})}function y(n=!1){return t({enabled:n,queryKey:["vendors"],queryFn:async()=>{const e=await fetch(a()+"/vendor");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>e.map(s=>s.name??`ID ${s.id}`).sort()})}function f(n=!1){return t({enabled:n,queryKey:["materials"],queryFn:async()=>{const e=await fetch(a()+"/material");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>e.sort()})}function h(n=!1){return t({enabled:n,queryKey:["articleNumbers"],queryFn:async()=>{const e=await fetch(a()+"/article-number");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>e.sort()})}function d(n=!1){return t({enabled:n,queryKey:["lotNumbers"],queryFn:async()=>{const e=await fetch(a()+"/lot-number");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>e.sort()})}function k(n=!1){return t({enabled:n,queryKey:["locations"],queryFn:async()=>{const e=await fetch(a()+"/location");if(!e.ok)throw new Error("Network response was not ok");return e.json()},select:e=>e.sort()})}export{p as a,f as b,h as c,k as d,m as e,d as f,y as u};
