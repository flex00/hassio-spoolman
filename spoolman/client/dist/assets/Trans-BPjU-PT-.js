import{L as W,an as z,ao as M,r as b,ap as V,aq as S,ar as q}from"./index-DVifsFYV.js";var J={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const U=W(J);var X=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function H(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(U[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var o=e.indexOf("-->");return{type:"comment",comment:o!==-1?e.slice(4,o):""}}for(var f=new RegExp(X),s=null;(s=f.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),p=[l,""];l.indexOf("=")>-1&&(p=l.split("=")),t.attrs[p[0]]=p[1],f.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var Y=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Z=/^\s*$/,G=Object.create(null);function B(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var o=[];for(var f in n)o.push(f+'="'+n[f]+'"');return o.length?" "+o.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(B,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var Q={parse:function(e,t){t||(t={}),t.components||(t.components=G);var n,o=[],f=[],s=-1,l=!1;if(e.indexOf("<")!==0){var p=e.indexOf("<");o.push({type:"text",content:p===-1?e:e.substring(0,p)})}return e.replace(Y,function(m,u){if(l){if(m!=="</"+n.name+">")return;l=!1}var v,k=m.charAt(1)!=="/",T=m.startsWith("<!--"),E=u+m.length,x=e.charAt(E);if(T){var y=H(m);return s<0?(o.push(y),o):((v=f[s]).children.push(y),o)}if(k&&(s++,(n=H(m)).type==="tag"&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!x||x==="<"||n.children.push({type:"text",content:e.slice(E,e.indexOf("<",E))}),s===0&&o.push(n),(v=f[s-1])&&v.children.push(n),f[s]=n),(!k||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?o:f[s]),!l&&x!=="<"&&x)){v=s===-1?o:f[s].children;var c=e.indexOf("<",E),i=e.slice(E,c===-1?void 0:c);Z.test(i)&&(i=" "),(c>-1&&s+v.length>=0||i!==" ")&&v.push({type:"text",content:i})}}),o},stringify:function(e){return e.reduce(function(t,n){return t+B("",n)},"")}};function K(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function D(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?F(t):t}function _(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>b.isValidElement(t))}function F(e){return Array.isArray(e)?e:[e]}function R(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function L(e,t){if(!e)return"";let n="";const o=F(e),f=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return o.forEach((s,l)=>{if(typeof s=="string")n+=`${s}`;else if(b.isValidElement(s)){const p=Object.keys(s.props).length,m=f.indexOf(s.type)>-1,u=s.props.children;if(!u&&m&&p===0)n+=`<${s.type}/>`;else if(!u&&(!m||p!==0))n+=`<${l}></${l}>`;else if(s.props.i18nIsDynamicList)n+=`<${l}></${l}>`;else if(m&&p===1&&typeof u=="string")n+=`<${s.type}>${u}</${s.type}>`;else{const v=L(u,t);n+=`<${l}>${v}</${l}>`}}else if(s===null)V("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:p,...m}=s,u=Object.keys(m);if(u.length===1){const v=p?`${u[0]}, ${p}`:u[0];n+=`{{${v}}}`}else V("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else V("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function ee(e,t,n,o,f,s){if(t==="")return[];const l=o.transKeepBasicHtmlNodesFor||[],p=t&&new RegExp(l.map(c=>`<${c}`).join("|")).test(t);if(!e&&!p&&!s)return[t];const m={};function u(c){F(c).forEach(a=>{typeof a!="string"&&(K(a)?u(D(a)):typeof a=="object"&&!b.isValidElement(a)&&Object.assign(m,a))})}u(e);const v=Q.parse(`<0>${t}</0>`),k={...m,...f};function T(c,i,a){const g=D(c),O=x(g,i.children,a);return _(g)&&O.length===0||c.props&&c.props.i18nIsDynamicList?g:O}function E(c,i,a,g,O){c.dummy?(c.children=i,a.push(b.cloneElement(c,{key:g},O?void 0:i))):a.push(...b.Children.map([c],h=>{const r={...h.props};return delete r.i18nIsDynamicList,b.createElement(h.type,{...r,key:g,ref:h.ref},O?null:i)}))}function x(c,i,a){const g=F(c);return F(i).reduce((h,r,C)=>{const N=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,k,n.language);if(r.type==="tag"){let j=g[parseInt(r.name,10)];a.length===1&&!j&&(j=a[0][r.name]),j||(j={});const d=Object.keys(r.attrs).length!==0?R({props:r.attrs},j):j,A=b.isValidElement(d),w=A&&K(r,!0)&&!r.voidElement,P=p&&typeof d=="object"&&d.dummy&&!A,I=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,r.name);if(typeof d=="string"){const $=n.services.interpolator.interpolate(d,k,n.language);h.push($)}else if(K(d)||w){const $=T(d,r,a);E(d,$,h,C)}else if(P){const $=x(g,r.children,a);E(d,$,h,C)}else if(Number.isNaN(parseFloat(r.name)))if(I){const $=T(d,r,a);E(d,$,h,C,r.voidElement)}else if(o.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1)if(r.voidElement)h.push(b.createElement(r.name,{key:`${r.name}-${C}`}));else{const $=x(g,r.children,a);h.push(b.createElement(r.name,{key:`${r.name}-${C}`},$))}else if(r.voidElement)h.push(`<${r.name} />`);else{const $=x(g,r.children,a);h.push(`<${r.name}>${$}</${r.name}>`)}else if(typeof d=="object"&&!A){const $=r.children[0]?N:null;$&&h.push($)}else E(d,N,h,C,r.children.length!==1||!N)}else if(r.type==="text"){const j=o.transWrapTextNodes,d=s?o.unescape(n.services.interpolator.interpolate(r.content,k,n.language)):n.services.interpolator.interpolate(r.content,k,n.language);j?h.push(b.createElement(j,{key:`${r.name}-${C}`},d)):h.push(d)}return h},[])}const y=x([{dummy:!0,children:e||[]}],v,F(e||[]));return D(y[0])}function te(e){let{children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:v,i18n:k,t:T,shouldUnescape:E,...x}=e;const y=k||S();if(!y)return z("You will need to pass in an i18next instance by using i18nextReactModule"),t;const c=T||y.t.bind(y)||(A=>A),i={...M(),...y.options&&y.options.react};let a=v||c.ns||y.options&&y.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"];const g=L(t,i),O=m||g||i.transEmptyNodeValue||f,{hashTransKey:h}=i,r=f||(h?h(g||O):g||O);y.options&&y.options.interpolation&&y.options.interpolation.defaultVariables&&(p=p&&Object.keys(p).length>0?{...p,...y.options.interpolation.defaultVariables}:{...y.options.interpolation.defaultVariables});const C={...l,context:s||l.context,count:n,...p,defaultValue:O,ns:a},N=r?c(r,C):O;u&&Object.keys(u).forEach(A=>{const w=u[A];if(typeof w.type=="function"||!w.props||!w.props.children||N.indexOf(`${A}/>`)<0&&N.indexOf(`${A} />`)<0)return;function P(){return b.createElement(b.Fragment,null,w)}u[A]=b.createElement(P)});const j=ee(u||t,N,y,i,C,E),d=o!==void 0?o:i.defaultTransParent;return d?b.createElement(d,x,j):j}function se(e){let{children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:v,i18n:k,t:T,shouldUnescape:E,...x}=e;const{i18n:y,defaultNS:c}=b.useContext(q)||{},i=k||y||S(),a=T||i&&i.t.bind(i);return te({children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l,values:p,defaults:m,components:u,ns:v||a&&a.ns||c||i&&i.options&&i.options.defaultNS,i18n:i,t:T,shouldUnescape:E,...x})}export{se as T};
