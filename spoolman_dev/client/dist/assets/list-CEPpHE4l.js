import{d as N,G as O,C as q,u as G,e as P,R as w,f as W,j as a,S as H,B as C,D as J,g as b,h as X,i as Y}from"./index-DVifsFYV.js";import{u as Z}from"./utc-BBX0ZL_c.js";import{u as ee,a as te,b as ie,R as ae,S as v,F as u,c as ne,N as s,D as se,C as oe,d as re,A as le}from"./liveify-BzRQBQVe.js";import{u as me,a as ce,b as de,c as ue}from"./otherModels-CIUsjKAU.js";import{r as pe}from"./filtering-CY1b-XQk.js";import{u as fe,E as ye}from"./queryFields-mgjQgxCo.js";import{u as he}from"./settings-CgMC_ZgH.js";import{F as xe,R as ge}from"./Table-wd-zo2jX.js";import"./numberField-DPMhgxPK.js";import"./parsing-BWLjJB_7.js";import"./spoolIcon-C9qHYHAh.js";import"./querySettings-CUjj6H0m.js";import"./Tree-y2nS5-dG.js";import"./index-fxb4jQRc.js";import"./index-CPB1sIE8.js";import"./Pagination-B34JRow0.js";import"./Pagination-Bkh_d_bF.js";import"./zh_CN-cwSELhhy.js";N.extend(Z);function _(t){let o;return t.vendor?o=t.vendor.name:o=null,{...t,"vendor.name":o}}function Se(t){return t=t.replace(".","_"),`filament.fields.${t}`}const j="filamentList-v2",D=["id","vendor.name","name","material","price","density","diameter","weight","spool_weight","article_number","settings_extruder_temp","settings_bed_temp","registered","comment"],we=D.filter(t=>["registered","density","diameter","spool_weight"].indexOf(t)===-1),Ae=()=>{var g,S;const t=O(),o=q(),F=G(),c=fe(ye.filament),k=he(),R=[...D,...((g=c.data)==null?void 0:g.map(e=>"extra."+e.key))??[]],r=ee(j),{tableProps:l,sorters:I,setSorters:L,filters:$,setFilters:E,current:K,pageSize:Q,setCurrent:U}=P({syncWithLocation:!1,pagination:{mode:"server",current:r.pagination.current,pageSize:r.pagination.pageSize},sorters:{mode:"server",initial:r.sorters},filters:{mode:"server",initial:r.filters},liveMode:"manual",onLiveEvent(e){(e.type==="created"||e.type==="deleted")&&o({resource:"filament",invalidates:["list"]})},queryOptions:{select(e){return{total:e.total,data:e.data.map(_)}}}}),[p,f]=w.useState(r.showColumns??we),y={sorters:I,filters:$,pagination:{current:K,pageSize:Q},showColumns:p};te(j,y);const V=w.useMemo(()=>(l.dataSource||[]).map(e=>({...e})),[l.dataSource]),h=ie("filament",V,_);l.pagination&&(l.pagination.showSizeChanger=!0);const{editUrl:z,showUrl:A,cloneUrl:T}=W(),B=e=>`/spool/create?filament_id=${e}`,x=e=>[{name:t("buttons.show"),icon:a.jsx(X,{}),link:A("filament",e.id)},{name:t("buttons.edit"),icon:a.jsx(b,{}),link:z("filament",e.id)},{name:t("buttons.clone"),icon:a.jsx(ge,{}),link:T("filament",e.id)},{name:t("filament.buttons.add_spool"),icon:a.jsx(Y,{}),link:B(e.id)}],i={t,navigate:F,actions:x,dataSource:h,tableState:y,sorter:!0};return a.jsx(H,{headerButtons:({defaultButtons:e})=>a.jsxs(a.Fragment,{children:[a.jsx(C,{type:"primary",icon:a.jsx(ae,{}),onClick:()=>{E([],"replace"),L([{field:"id",order:"asc"}]),U(1)},children:t("buttons.clearFilters")}),a.jsx(J,{trigger:["click"],menu:{items:R.map(n=>{var m;if(n.indexOf("extra.")===0){const d=(m=c.data)==null?void 0:m.find(M=>"extra."+M.key===n);return{key:n,label:(d==null?void 0:d.name)??n}}return{key:n,label:t(Se(n))}}),selectedKeys:p,selectable:!0,multiple:!0,onDeselect:n=>{f(n.selectedKeys)},onSelect:n=>{f(n.selectedKeys)}},children:a.jsx(C,{type:"primary",icon:a.jsx(b,{}),children:t("buttons.hideColumns")})}),e]}),children:a.jsx(xe,{...l,sticky:!0,tableLayout:"auto",scroll:{x:"max-content"},dataSource:h,rowKey:"id",columns:pe([v({...i,id:"id",i18ncat:"filament",width:70}),u({...i,id:"vendor.name",i18nkey:"filament.fields.vendor_name",filterValueQuery:me()}),ne({...i,id:"name",i18ncat:"filament",color:e=>e.multi_color_hexes?{colors:e.multi_color_hexes.split(","),vertical:e.multi_color_direction==="longitudinal"}:e.color_hex,filterValueQuery:ce()}),u({...i,id:"material",i18ncat:"filament",filterValueQuery:de(),width:110}),v({...i,id:"price",i18ncat:"filament",width:80,render:(e,n)=>{var m;return(m=n.price)==null?void 0:m.toLocaleString(void 0,{style:"currency",currencyDisplay:"narrowSymbol",currency:k,notation:"compact"})}}),s({...i,id:"density",i18ncat:"filament",unit:"g/cm³",maxDecimals:2,width:100}),s({...i,id:"diameter",i18ncat:"filament",unit:"mm",maxDecimals:2,width:100}),s({...i,id:"weight",i18ncat:"filament",unit:"g",maxDecimals:1,width:100}),s({...i,id:"spool_weight",i18ncat:"filament",unit:"g",maxDecimals:1,width:100}),u({...i,id:"article_number",i18ncat:"filament",filterValueQuery:ue(),width:130}),s({...i,id:"settings_extruder_temp",i18ncat:"filament",unit:"°C",maxDecimals:0,width:100}),s({...i,id:"settings_bed_temp",i18ncat:"filament",unit:"°C",maxDecimals:0,width:100}),se({...i,id:"registered",i18ncat:"filament"}),...((S=c.data)==null?void 0:S.map(e=>oe({...i,field:e})))??[],re({...i,id:"comment",i18ncat:"filament",width:150}),le(x)])})})};export{Ae as FilamentList,Ae as default};