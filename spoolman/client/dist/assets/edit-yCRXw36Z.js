import{G as w,s as A,r as E,R as j,T,a as V,j as e,q as F,F as i,I as o,d as P,b as L,c as S}from"./index-DVifsFYV.js";import{n as f,a as c}from"./parsing-BWLjJB_7.js";import{u as M,E as R}from"./queryFields-mgjQgxCo.js";import{P as B,S as H,E as D}from"./extraFields-qtPcbZeu.js";import{u as G,g as Y}from"./settings-CgMC_ZgH.js";import{C as k,M as z}from"./multiColorPicker-Bsf9hzQ8.js";import{D as N}from"./inputNumberRange-BgK2w3SK.js";import{S as O}from"./index-fxb4jQRc.js";import{R as n}from"./index-CPB1sIE8.js";import{T as a}from"./index-Bg14sNK-.js";import{A as J}from"./index-z7JQCk2q.js";import"./numberField-DPMhgxPK.js";import"./utc-BBX0ZL_c.js";import"./querySettings-CUjj6H0m.js";import"./ColorPicker-AWLASrGN.js";import"./Collapse-CsNDAcKW.js";import"./index-CWobl7yM.js";const de=()=>{var x,p,h;const l=w(),[g,_]=A.useMessage(),[b,y]=E.useState(!1),v=M(R.filament),I=G(),[m,d]=j.useState("single"),{formProps:s,saveButtonProps:q}=T({liveMode:"manual",onLiveEvent(){g.warning(l("filament.form.filament_updated")),y(!0)}}),{selectProps:C}=V({resource:"vendor",optionLabel:"name"});s.initialValues&&(s.initialValues.vendor_id=(x=s.initialValues.vendor)==null?void 0:x.id,s.initialValues=B(s.initialValues)),j.useEffect(()=>{var r,t;console.log((r=s.initialValues)==null?void 0:r.multi_color_hexes),(t=s.initialValues)!=null&&t.multi_color_hexes?d("multi"):d("single")},[(p=s.initialValues)==null?void 0:p.multi_color_hexes]);const u=s.onFinish;return s.onFinish=r=>{if(r!=null){const t=H(r);u==null||u({extra:{},...t})}},e.jsxs(F,{saveButtonProps:q,children:[_,e.jsxs(i,{...s,layout:"vertical",children:[e.jsx(i.Item,{label:l("filament.fields.id"),name:["id"],rules:[{required:!0}],children:e.jsx(o,{readOnly:!0,disabled:!0})}),e.jsx(i.Item,{label:l("filament.fields.registered"),name:["registered"],rules:[{required:!0}],getValueProps:r=>({value:r?P(r):void 0}),children:e.jsx(N,{disabled:!0,showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})}),e.jsx(i.Item,{label:l("filament.fields.name"),help:l("filament.fields_help.name"),name:["name"],rules:[{required:!1}],children:e.jsx(o,{maxLength:64})}),e.jsx(i.Item,{label:l("filament.fields.vendor"),name:["vendor_id"],rules:[{required:!1}],normalize:r=>r===void 0?null:r,children:e.jsx(O,{...C,allowClear:!0,filterSort:(r,t)=>r!=null&&r.label&&(t!=null&&t.label)?r.label.localeCompare(t.label,void 0,{sensitivity:"base"}):0,filterOption:(r,t)=>typeof(t==null?void 0:t.label)=="string"&&(t==null?void 0:t.label.toLowerCase().includes(r.toLowerCase()))})}),e.jsx(i.Item,{label:l("filament.fields.color_hex"),children:e.jsxs(n.Group,{onChange:r=>{d(r.target.value)},defaultValue:m,value:m,children:[e.jsx(n.Button,{value:"single",children:l("filament.fields.single_color")}),e.jsx(n.Button,{value:"multi",children:l("filament.fields.multi_color")})]})}),m=="single"&&e.jsx(i.Item,{name:"color_hex",rules:[{required:!1}],getValueFromEvent:r=>r==null?void 0:r.toHex(),children:e.jsx(k,{format:"hex"})}),m=="multi"&&e.jsx(i.Item,{name:"multi_color_direction",help:l("filament.fields_help.multi_color_direction"),rules:[{required:!0}],initialValue:"coaxial",children:e.jsxs(n.Group,{children:[e.jsx(n.Button,{value:"coaxial",children:l("filament.fields.coaxial")}),e.jsx(n.Button,{value:"longitudinal",children:l("filament.fields.longitudinal")})]})}),m=="multi"&&e.jsx(i.Item,{name:"multi_color_hexes",rules:[{required:!1}],children:e.jsx(z,{min:2,max:14})}),e.jsx(i.Item,{label:l("filament.fields.material"),help:l("filament.fields_help.material"),name:["material"],rules:[{required:!1}],children:e.jsx(o,{maxLength:64})}),e.jsx(i.Item,{label:l("filament.fields.price"),help:l("filament.fields_help.price"),name:["price"],rules:[{required:!1,type:"number",min:0}],children:e.jsx(a,{addonAfter:Y(void 0,I),precision:2,formatter:f,parser:c})}),e.jsx(i.Item,{label:l("filament.fields.density"),name:["density"],rules:[{required:!0,type:"number",min:0,max:100}],children:e.jsx(a,{addonAfter:"g/cm³",precision:2,formatter:f,parser:c})}),e.jsx(i.Item,{label:l("filament.fields.diameter"),name:["diameter"],rules:[{required:!0,type:"number",min:0,max:10}],children:e.jsx(a,{addonAfter:"mm",precision:2,formatter:f,parser:c})}),e.jsx(i.Item,{label:l("filament.fields.weight"),help:l("filament.fields_help.weight"),name:["weight"],rules:[{required:!1,type:"number",min:0}],children:e.jsx(a,{addonAfter:"g",precision:1})}),e.jsx(i.Item,{label:l("filament.fields.spool_weight"),help:l("filament.fields_help.spool_weight"),name:["spool_weight"],rules:[{required:!1,type:"number",min:0}],children:e.jsx(a,{addonAfter:"g",precision:1})}),e.jsx(i.Item,{label:l("filament.fields.settings_extruder_temp"),name:["settings_extruder_temp"],rules:[{required:!1,type:"number",min:0}],children:e.jsx(a,{addonAfter:"°C",precision:0})}),e.jsx(i.Item,{label:l("filament.fields.settings_bed_temp"),name:["settings_bed_temp"],rules:[{required:!1,type:"number",min:0}],children:e.jsx(a,{addonAfter:"°C",precision:0})}),e.jsx(i.Item,{label:l("filament.fields.article_number"),help:l("filament.fields_help.article_number"),name:["article_number"],rules:[{required:!1}],children:e.jsx(o,{maxLength:64})}),e.jsx(i.Item,{label:l("filament.fields.comment"),name:["comment"],rules:[{required:!1}],children:e.jsx(L,{maxLength:1024})}),e.jsx(S.Title,{level:5,children:l("settings.extra_fields.tab")}),(h=v.data)==null?void 0:h.map((r,t)=>e.jsx(D,{field:r},t))]}),b&&e.jsx(J,{description:l("filament.form.filament_updated"),type:"warning",showIcon:!0})]})};export{de as FilamentEdit,de as default};
