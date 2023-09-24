// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var u=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function S(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var _=String.fromCharCode,j=isNaN,E=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,o,a,u,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,p=0;p<r.length;p++)if(l(n=r[p]))u+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,i;for(e=[],i=0,n=N.exec(r);n;)(t=r.slice(i,N.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),i=N.lastIndex,n=N.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function O(r){return"string"==typeof r}function k(r){var t,e,n;if(!O(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return U.apply(null,e)}var I,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,R=V.__lookupGetter__,G=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(R.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var Z=I;function W(r){return r!=r}var L=Math.sqrt,M=.7853981633974483;function X(r){var t,e,n,i,o;if(W(r))return NaN;if(r>0?n=r:(t=!0,n=-r),n>1)return NaN;if(n>.625)i=(e=1-n)*function(r){var t,e;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(t=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),e=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),e=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),t/e)}(e),e=L(e+e),o=M-e,o-=e=e*i-6123233995736766e-32,o+=M;else{if(n<1e-8)return r;o=(e=n*n)*function(r){var t,e;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(t=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,e=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),e=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),t/e)}(e),o=n*o+n}return t?-o:o}function q(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z,Y=q(),B=Object.prototype.toString,D=Object.prototype.hasOwnProperty,H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";z=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return B.call(r);e=r[J],o=J,t=null!=(i=r)&&D.call(i,o);try{r[J]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[J]=e:delete r[J],n}:function(r){return B.call(r)};var K,Q=z,rr="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,t,e;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(rr&&e instanceof Uint32Array||"[object Uint32Array]"===Q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr,ir=K,or=q(),ar=Object.prototype.toString,cr=Object.prototype.hasOwnProperty,lr="function"==typeof H?H.toStringTag:"";nr=or&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return ar.call(r);e=r[lr],o=lr,t=null!=(i=r)&&cr.call(i,o);try{r[lr]=void 0}catch(t){return ar.call(r)}return n=ar.call(r),t?r[lr]=e:delete r[lr],n}:function(r){return ar.call(r)};var ur,fr=nr,pr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,t,e;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,NaN]),e=t,r=(pr&&e instanceof Float64Array||"[object Float64Array]"===fr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=ur,hr=q(),vr=Object.prototype.toString,br=Object.prototype.hasOwnProperty,wr="function"==typeof H?H.toStringTag:"";gr=hr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return vr.call(r);e=r[wr],o=wr,t=null!=(i=r)&&br.call(i,o);try{r[wr]=void 0}catch(t){return vr.call(r)}return n=vr.call(r),t?r[wr]=e:delete r[wr],n}:function(r){return vr.call(r)};var mr,Ar=gr,Sr="function"==typeof Uint8Array,_r="function"==typeof Uint8Array?Uint8Array:null,jr="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var r,t,e;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,256,257]),e=t,r=(Sr&&e instanceof Uint8Array||"[object Uint8Array]"===Ar(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Er,Fr=mr,Ur=q(),Nr=Object.prototype.toString,Tr=Object.prototype.hasOwnProperty,xr="function"==typeof H?H.toStringTag:"";Er=Ur&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Nr.call(r);e=r[xr],o=xr,t=null!=(i=r)&&Tr.call(i,o);try{r[xr]=void 0}catch(t){return Nr.call(r)}return n=Nr.call(r),t?r[xr]=e:delete r[xr],n}:function(r){return Nr.call(r)};var Or,kr=Er,Ir="function"==typeof Uint16Array,Vr="function"==typeof Uint16Array?Uint16Array:null,Pr="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,t,e;if("function"!=typeof Vr)return!1;try{t=new Vr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Ir&&e instanceof Uint16Array||"[object Uint16Array]"===kr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var $r,Cr={uint16:Or,uint8:Fr};($r=new Cr.uint16(1))[0]=4660;var Rr=52===new Cr.uint8($r.buffer)[0],Gr=!0===Rr?1:0,Zr=new dr(1),Wr=new ir(Zr.buffer);function Lr(r){return Zr[0]=r,Wr[Gr]}var Mr,Xr=q(),qr=Object.prototype.toString,zr=Object.prototype.hasOwnProperty,Yr="function"==typeof H?H.toStringTag:"";Mr=Xr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return qr.call(r);e=r[Yr],o=Yr,t=null!=(i=r)&&zr.call(i,o);try{r[Yr]=void 0}catch(t){return qr.call(r)}return n=qr.call(r),t?r[Yr]=e:delete r[Yr],n}:function(r){return qr.call(r)};var Br,Dr=Mr,Hr="function"==typeof Float64Array,Jr="function"==typeof Float64Array?Float64Array:null,Kr="function"==typeof Float64Array?Float64Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr([1,3.14,-3.14,NaN]),e=t,r=(Hr&&e instanceof Float64Array||"[object Float64Array]"===Dr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr=!0===Rr?1:0,rt=new Br(1),tt=new ir(rt.buffer),et=Number.NEGATIVE_INFINITY,nt=.6931471803691238,it=1.9082149292705877e-10,ot=1048575;function at(r){var t,e,n,i,o,a,c,l,u,f,p,s;return 0===r?et:W(r)||r<0?NaN:(o=0,(e=Lr(r))<1048576&&(o-=54,e=Lr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-1023|0,o+=(l=614244+(e&=ot)&1048576|0)>>20|0,c=(r=function(r,t){return rt[0]=r,tt[Qr]=t>>>0,rt[0]}(r,e|1072693248^l))-1,(ot&2+e)<3?0===c?0===o?0:o*nt+o*it:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*nt-(a-o*it-c)):(l=e-398458|0,u=440401-e|0,i=(p=(s=(f=c/(2+c))*f)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=n+i,(l|=u)>0?(t=.5*c*c,0===o?c-(t-f*(t+a)):o*nt-(t-(f*(t+a)+o*it)-c)):0===o?c-f*(c-a):o*nt-(f*(c-a)-o*it-c))))}var ct=1.1447298858494002,lt=.6931471805599453;function ut(r,t,e){return W(r)||W(t)||W(e)||t>=e?NaN:r<t?et:r>=e?0:lt-ct+at(X(L((r-t)/(e-t))))}return Z(ut,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r,t){return W(r)||W(t)||r>=t?(e=NaN,function(){return e}):function(e){return W(e)?NaN:e<r?et:e>=t?0:lt-ct+at(X(L((e-r)/(t-r))))};var e}}),ut},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=t();
//# sourceMappingURL=browser.js.map