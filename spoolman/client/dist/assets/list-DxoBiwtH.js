import{d as N,G as A,C as G,u as M,e as P,R as h,f as W,j as t,S as q,B as x,D as O,g,h as V}from"./index-DVifsFYV.js";import{u as H}from"./utc-BBX0ZL_c.js";import{u as J,a as Q,b as X,R as Y,S,D as Z,N as _,C as ee,d as te,A as se}from"./liveify-BzRQBQVe.js";import{r as oe}from"./filtering-CY1b-XQk.js";import{u as ae,E as ne}from"./queryFields-mgjQgxCo.js";import{F as ie,R as re}from"./Table-wd-zo2jX.js";import"./numberField-DPMhgxPK.js";import"./parsing-BWLjJB_7.js";import"./spoolIcon-C9qHYHAh.js";import"./Tree-y2nS5-dG.js";import"./index-fxb4jQRc.js";import"./index-CPB1sIE8.js";import"./Pagination-B34JRow0.js";import"./Pagination-Bkh_d_bF.js";import"./zh_CN-cwSELhhy.js";N.extend(H);const C="vendorList-v2",b=["id","name","registered","comment","empty_spool_weight"],je=()=>{var f,v;const o=A(),j=G(),w=M(),r=ae(ne.vendor),k=[...b,...((f=r.data)==null?void 0:f.map(e=>"extra."+e.key))??[]],n=J(C),{tableProps:i,sorters:R,setSorters:F,filters:D,setFilters:I,current:L,pageSize:E,setCurrent:z}=P({syncWithLocation:!1,pagination:{mode:"server",current:n.pagination.current,pageSize:n.pagination.pageSize},sorters:{mode:"server",initial:n.sorters},filters:{mode:"server",initial:n.filters},liveMode:"manual",onLiveEvent(e){(e.type==="created"||e.type==="deleted")&&j({resource:"vendor",invalidates:["list"]})}}),[c,d]=h.useState(n.showColumns??b),m={sorters:R,filters:D,pagination:{current:L,pageSize:E},showColumns:c};Q(C,m);const K=h.useMemo(()=>(i.dataSource||[]).map(e=>({...e})),[i.dataSource]),u=X("vendor",K,e=>e);i.pagination&&(i.pagination.showSizeChanger=!0);const{editUrl:T,showUrl:U,cloneUrl:$}=W(),p=e=>[{name:o("buttons.show"),icon:t.jsx(V,{}),link:U("vendor",e.id)},{name:o("buttons.edit"),icon:t.jsx(g,{}),link:T("vendor",e.id)},{name:o("buttons.clone"),icon:t.jsx(re,{}),link:$("vendor",e.id)}],a={t:o,navigate:w,actions:p,dataSource:u,tableState:m,sorter:!0};return t.jsx(q,{headerButtons:({defaultButtons:e})=>t.jsxs(t.Fragment,{children:[t.jsx(x,{type:"primary",icon:t.jsx(Y,{}),onClick:()=>{I([],"replace"),F([{field:"id",order:"asc"}]),z(1)},children:o("buttons.clearFilters")}),t.jsx(O,{trigger:["click"],menu:{items:k.map(s=>{var y;if(s.indexOf("extra.")===0){const l=(y=r.data)==null?void 0:y.find(B=>"extra."+B.key===s);return{key:s,label:(l==null?void 0:l.name)??s}}return{key:s,label:o(`vendor.fields.${s}`)}}),selectedKeys:c,selectable:!0,multiple:!0,onDeselect:s=>{d(s.selectedKeys)},onSelect:s=>{d(s.selectedKeys)}},children:t.jsx(x,{type:"primary",icon:t.jsx(g,{}),children:o("buttons.hideColumns")})}),e]}),children:t.jsx(ie,{...i,sticky:!0,tableLayout:"auto",scroll:{x:"max-content"},dataSource:u,rowKey:"id",columns:oe([S({...a,id:"id",i18ncat:"vendor",width:70}),S({...a,id:"name",i18ncat:"vendor"}),Z({...a,id:"registered",i18ncat:"vendor",width:200}),_({...a,id:"empty_spool_weight",i18ncat:"vendor",unit:"g",maxDecimals:0,width:200}),...((v=r.data)==null?void 0:v.map(e=>ee({...a,field:e})))??[],te({...a,id:"comment",i18ncat:"vendor"}),se(p)])})})};export{je as VendorList,je as default};
