import{x as h,w as d,G as m,X as b,r as p,j as f}from"./index-DVifsFYV.js";import{f as x,b as g}from"./parsing-BWLjJB_7.js";function w(){return h({queryKey:["external","filaments"],staleTime:60,queryFn:async()=>(await fetch(`${d()}/external/filament`)).json()})}async function y(s,l){const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({archived:l})},o=new Request(d()+"/spool/"+s.id);await fetch(o,n)}function c(s,l,n,o,u,r){const a=[];n&&a.push(n),a.push(s);const t=[];return o&&t.push(o),t.push(x(l)),u&&t.push(g(u)),r&&t.push(r.charAt(0).toUpperCase()+r.slice(1)+" spool"),`${a.join(" - ")} (${t.join(", ")})`}function _(){var r;const s=m(),{queryResult:l}=b({resource:"filament"}),n=w(),o=p.useMemo(()=>{var t;const a=((t=l.data)==null?void 0:t.data.map(e=>{var i;return{label:c(e.name??`ID ${e.id}`,e.diameter,(i=e.vendor)==null?void 0:i.name,e.material,e.weight),value:e.id,weight:e.weight,spool_weight:e.spool_weight,is_internal:!0}}))??[];return a.sort((e,i)=>e.label.localeCompare(i.label,void 0,{sensitivity:"base"})),a},[(r=l.data)==null?void 0:r.data]),u=p.useMemo(()=>{var t;const a=((t=n.data)==null?void 0:t.map(e=>({label:c(e.name,e.diameter,e.manufacturer,e.material,e.weight,e.spool_type),value:e.id,weight:e.weight,spool_weight:e.spool_weight||void 0,is_internal:!1})))??[];return a.sort((e,i)=>e.label.localeCompare(i.label,void 0,{sensitivity:"base"})),a},[n.data]);return{options:[{label:f.jsx("span",{children:s("spool.fields.filament_internal")}),options:o},{label:f.jsx("span",{children:s("spool.fields.filament_external")}),options:u}],internalSelectOptions:o,externalSelectOptions:u,allExternalFilaments:n.data}}const S=Object.freeze(Object.defineProperty({__proto__:null,formatFilamentLabel:c,setSpoolArchived:y,useGetFilamentSelectOptions:_},Symbol.toStringTag,{value:"Module"}));export{_ as a,S as b,c as f,y as s,w as u};