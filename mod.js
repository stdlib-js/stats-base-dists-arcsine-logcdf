// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,y,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,p="set"in n,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function y(r){return r!=r}var l=Math.sqrt;function p(r){var t,n,e,o,a;if(y(r))return NaN;if(r>0?e=r:(t=!0,e=-r),e>1)return NaN;if(e>.625)o=(n=1-e)*function(r){var t,n;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(t=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),n=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),n=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),t/n)}(n),a=.7853981633974483-(n=l(n+n)),a-=n=n*o-6123233995736766e-32,a+=.7853981633974483;else{if(e<1e-8)return r;a=(n=e*e)*function(r){var t,n;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(t=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,n=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),n=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),t/n)}(n),a=e*a+e}return t?-a:a}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var b=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _,w="function"==typeof Symbol?Symbol.toStringTag:"";_=v&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return b.call(r);n=r[w],a=w,t=null!=(o=r)&&A.call(o,a);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)};var m=_,d="function"==typeof Uint32Array;var s="function"==typeof Uint32Array?Uint32Array:null;var U,N="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,t,n;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(d&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var h=U,j="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null;var S,E="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,NaN]),n=t,r=(j&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,O="function"==typeof Uint8Array;var T="function"==typeof Uint8Array?Uint8Array:null;var P,I="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,256,257]),n=t,r=(O&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var x=P,G="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var k,q="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,65536,65537]),n=t,r=(G&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,M={uint16:k,uint8:x};(C=new M.uint16(1))[0]=4660;var Y=52===new M.uint8(C.buffer)[0],z=!0===Y?1:0,B=new F(1),D=new h(B.buffer);function H(r){return B[0]=r,D[z]}var J=!0===Y?1:0,K=new F(1),L=new h(K.buffer);var Q=Number.NEGATIVE_INFINITY;var R=.6931471803691238,W=1.9082149292705877e-10;function X(r){var t,n,e,o,a,i,u,f,c,l,p,v;return 0===r?Q:y(r)||r<0?NaN:(a=0,(n=H(r))<1048576&&(a-=54,n=H(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,t){return K[0]=r,L[J]=t>>>0,K[0]}(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*R+a*W:(i=u*u*(.5-.3333333333333333*u),0===a?u-i:a*R-(i-a*W-u)):(f=n-398458|0,c=440401-n|0,o=(p=(v=(l=u/(2+u))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(f|=c)>0?(t=.5*u*u,0===a?u-(t-l*(t+i)):a*R-(t-(l*(t+i)+a*W)-u)):0===a?u-l*(u-i):a*R-(l*(u-i)-a*W-u))))}var Z=1.1447298858494002,$=.6931471805599453;function rr(r,t,n){return y(r)||y(t)||y(n)||t>=n?NaN:r<t?Q:r>=n?0:$-Z+X(p(l((r-t)/(n-t))))}function tr(r,t){return y(r)||y(t)||r>=t?(n=NaN,function(){return n}):function(n){if(y(n))return NaN;if(n<r)return Q;if(n>=t)return 0;return $-Z+X(p(l((n-r)/(t-r))))};var n}c(rr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:tr});export{rr as default,tr as factory};
//# sourceMappingURL=mod.js.map
