// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,v,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,x=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,U(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(j(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){return"string"==typeof r}function I(r){var e,t,n;if(!T(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var V,$=Object.prototype,O=$.toString,C=$.__defineGetter__,P=$.__defineSetter__,R=$.__lookupGetter__,G=$.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var Z=V;function W(r){return r!=r}var L=Math.sqrt,M=.7853981633974483;function X(r){var e,t,n,i,a;if(W(r))return NaN;if(r>0?n=r:(e=!0,n=-r),n>1)return NaN;if(n>.625)i=(t=1-n)*function(r){var e,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/t)}(t),t=L(t+t),a=M-t,a-=t=t*i-6123233995736766e-32,a+=M;else{if(n<1e-8)return r;a=(t=n*n)*function(r){var e,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/t)}(t),a=n*a+n}return e?-a:a}var q,z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Y=Object.prototype.toString,B=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Y.call(r);t=r[H],a=H,e=null!=(i=r)&&B.call(i,a);try{r[H]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[H]=t:delete r[H],n}:function(r){return Y.call(r)};var J,K=q,Q="function"==typeof Uint32Array,rr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Q&&t instanceof Uint32Array||"[object Uint32Array]"===K(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr,nr=J,ir="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),t=e,r=(ir&&t instanceof Float64Array||"[object Float64Array]"===K(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,ur=tr,fr="function"==typeof Uint8Array,lr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),t=e,r=(fr&&t instanceof Uint8Array||"[object Uint8Array]"===K(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,yr=cr,dr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,hr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===K(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,vr={uint16:pr,uint8:yr};(wr=new vr.uint16(1))[0]=4660;var br=52===new vr.uint8(wr.buffer)[0],mr=!0===br?1:0,Ar=new ur(1),_r=new nr(Ar.buffer);function Er(r){return Ar[0]=r,_r[mr]}var Ur=!0===br?1:0,xr=new ur(1),Nr=new nr(xr.buffer),Sr=Number.NEGATIVE_INFINITY,kr=.6931471803691238,jr=1.9082149292705877e-10,Fr=1048575;function Tr(r){var e,t,n,i,a,o,c,u,f,l,s,p;return 0===r?Sr:W(r)||r<0?NaN:(a=0,(t=Er(r))<1048576&&(a-=54,t=Er(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(u=614244+(t&=Fr)&1048576|0)>>20|0,c=(r=function(r,e){return xr[0]=r,Nr[Ur]=e>>>0,xr[0]}(r,t|1072693248^u))-1,(Fr&2+t)<3?0===c?0===a?0:a*kr+a*jr:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*kr-(o-a*jr-c)):(u=t-398458|0,f=440401-t|0,i=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*kr-(e-(l*(e+o)+a*jr)-c)):0===a?c-l*(c-o):a*kr-(l*(c-o)-a*jr-c))))}var Ir=1.1447298858494002,Vr=.6931471805599453;function $r(r,e,t){return W(r)||W(e)||W(t)||e>=t?NaN:r<e?Sr:r>=t?0:Vr-Ir+Tr(X(L((r-e)/(t-e))))}return Z($r,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e){return W(r)||W(e)||r>=e?(t=NaN,function(){return t}):function(t){return W(t)?NaN:t<r?Sr:t>=e?0:Vr-Ir+Tr(X(L((t-r)/(e-r))))};var t}}),$r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=e();
//# sourceMappingURL=index.js.map
