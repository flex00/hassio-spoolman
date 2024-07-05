import{a4 as L,a8 as W,a6 as N,r as a,a2 as G,a3 as v,al as X,at as V,au as F,av as q,aw as J,ax as K,ay as Q,az as U,aA as Y,aB as Z,aC as ee,aD as oe}from"./index-DVifsFYV.js";const b=(e,o,t,n,r)=>({background:e,border:`${N(n.lineWidth)} ${n.lineType} ${o}`,[`${r}-icon`]:{color:t}}),ne=e=>{const{componentCls:o,motionDurationSlow:t,marginXS:n,marginSM:r,fontSize:s,fontSizeLG:d,lineHeight:c,borderRadiusLG:m,motionEaseInOutCirc:l,withDescriptionIconSize:p,colorText:u,colorTextHeading:g,withDescriptionPadding:f,defaultPadding:y}=e;return{[o]:Object.assign(Object.assign({},W(e)),{position:"relative",display:"flex",alignItems:"center",padding:y,wordWrap:"break-word",borderRadius:m,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:n,lineHeight:0},"&-description":{display:"none",fontSize:s,lineHeight:c},"&-message":{color:g},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:f,[`${o}-icon`]:{marginInlineEnd:r,fontSize:p,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:n,color:g,fontSize:d},[`${o}-description`]:{display:"block",color:u}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},te=e=>{const{componentCls:o,colorSuccess:t,colorSuccessBorder:n,colorSuccessBg:r,colorWarning:s,colorWarningBorder:d,colorWarningBg:c,colorError:m,colorErrorBorder:l,colorErrorBg:p,colorInfo:u,colorInfoBorder:g,colorInfoBg:f}=e;return{[o]:{"&-success":b(r,n,t,e,o),"&-info":b(f,g,u,e,o),"&-warning":b(c,d,s,e,o),"&-error":Object.assign(Object.assign({},b(p,l,m,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},re=e=>{const{componentCls:o,iconCls:t,motionDurationMid:n,marginXS:r,fontSizeIcon:s,colorIcon:d,colorIconHover:c}=e;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:s,lineHeight:N(s),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:d,transition:`color ${n}`,"&:hover":{color:c}}},"&-close-text":{color:d,transition:`color ${n}`,"&:hover":{color:c}}}}},ae=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),se=L("Alert",e=>[ne(e),te(e),re(e)],ae);var ie=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ce={success:J,info:K,error:Q,warning:U},le=e=>{const{icon:o,prefixCls:t,type:n}=e,r=ce[n]||null;return o?F(o,a.createElement("span",{className:`${t}-icon`},o),()=>({className:v(`${t}-icon`,{[o.props.className]:o.props.className})})):a.createElement(r,{className:`${t}-icon`})},de=e=>{const{isClosable:o,prefixCls:t,closeIcon:n,handleClose:r}=e,s=n===!0||n===void 0?a.createElement(q,null):n;return o?a.createElement("button",{type:"button",onClick:r,className:`${t}-close-icon`,tabIndex:0},s):null},O=e=>{const{description:o,prefixCls:t,message:n,banner:r,className:s,rootClassName:d,style:c,onMouseEnter:m,onMouseLeave:l,onClick:p,afterClose:u,showIcon:g,closable:f,closeText:y,closeIcon:C,action:I}=e,B=ie(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[x,z]=a.useState(!1),H=a.useRef(null),{getPrefixCls:M,direction:j,alert:$}=a.useContext(G),i=M("alert",t),[D,P]=se(i),T=h=>{var S;z(!0),(S=e.onClose)===null||S===void 0||S.call(e,h)},E=a.useMemo(()=>e.type!==void 0?e.type:r?"warning":"info",[e.type,r]),A=a.useMemo(()=>y?!0:typeof f=="boolean"?f:C!==!1&&C!==null&&C!==void 0,[y,C,f]),w=r&&g===void 0?!0:g,R=v(i,`${i}-${E}`,{[`${i}-with-description`]:!!o,[`${i}-no-icon`]:!w,[`${i}-banner`]:!!r,[`${i}-rtl`]:j==="rtl"},$==null?void 0:$.className,s,d,P),_=X(B,{aria:!0,data:!0});return D(a.createElement(V,{visible:!x,motionName:`${i}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:h=>({maxHeight:h.offsetHeight}),onLeaveEnd:u},h=>{let{className:S,style:k}=h;return a.createElement("div",Object.assign({ref:H,"data-show":!x,className:v(R,S),style:Object.assign(Object.assign(Object.assign({},$==null?void 0:$.style),c),k),onMouseEnter:m,onMouseLeave:l,onClick:p,role:"alert"},_),w?a.createElement(le,{description:o,icon:e.icon,prefixCls:i,type:E}):null,a.createElement("div",{className:`${i}-content`},n?a.createElement("div",{className:`${i}-message`},n):null,o?a.createElement("div",{className:`${i}-description`},o):null),I?a.createElement("div",{className:`${i}-action`},I):null,a.createElement(de,{isClosable:A,prefixCls:i,closeIcon:y||C,handleClose:T}))}))};let me=function(e){Y(t,e);var o=Z(t);function t(){var n;return ee(this,t),n=o.apply(this,arguments),n.state={error:void 0,info:{componentStack:""}},n}return oe(t,[{key:"componentDidCatch",value:function(r,s){this.setState({error:r,info:s})}},{key:"render",value:function(){const{message:r,description:s,children:d}=this.props,{error:c,info:m}=this.state,l=m&&m.componentStack?m.componentStack:null,p=typeof r>"u"?(c||"").toString():r,u=typeof s>"u"?l:s;return c?a.createElement(O,{type:"error",message:p,description:a.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},u)}):d}}]),t}(a.Component);const pe=O;pe.ErrorBoundary=me;export{pe as A};
