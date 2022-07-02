// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,y=function(r,t,n){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,v="set"in n,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r},l=t()?c:y;var v=function(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var p=function(r){return r!=r},b=Math.sqrt;var A=p,_=b,w=.7853981633974483,m=function(r){var t,n;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(t=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,n=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),n=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),t/n)},d=function(r){var t,n;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(t=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),n=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),n=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),t/n)};var s=function(r){var t,n,e,o,a;if(A(r))return NaN;if(r>0?e=r:(t=!0,e=-r),e>1)return NaN;if(e>.625)o=(n=1-e)*d(n),n=_(n+n),a=w-n,a-=n=n*o-6123233995736766e-32,a+=w;else{if(e<1e-8)return r;a=e*(a=(n=e*e)*m(n))+e}return t?-a:a};var U=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var N=function(){return U&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,j=h;var g=function(r){return j.call(r)},S=Object.prototype.hasOwnProperty;var E=function(r,t){return null!=r&&S.call(r,t)},F="function"==typeof Symbol?Symbol.toStringTag:"",O=E,T=F,P=h;var I=g,x=function(r){var t,n,e;if(null==r)return P.call(r);n=r[T],t=O(r,T);try{r[T]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[T]=n:delete r[T],e},G=N()?x:I,V=G,k="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null,C=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===V(r)},M=q;var Y=function(){var r,t;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,4294967296,4294967297]),r=C(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=Y()?z:B,H=G,J="function"==typeof Float64Array;var K="function"==typeof Float64Array?Float64Array:null,L=function(r){return J&&r instanceof Float64Array||"[object Float64Array]"===H(r)},Q=K;var R=function(){var r,t;if("function"!=typeof Q)return!1;try{t=new Q([1,3.14,-3.14,NaN]),r=L(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var W="function"==typeof Float64Array?Float64Array:void 0,X=function(){throw new Error("not implemented")},Z=R()?W:X,$=G,rr="function"==typeof Uint8Array;var tr="function"==typeof Uint8Array?Uint8Array:null,nr=function(r){return rr&&r instanceof Uint8Array||"[object Uint8Array]"===$(r)},er=tr;var or=function(){var r,t;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,256,257]),r=nr(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ar="function"==typeof Uint8Array?Uint8Array:void 0,ir=function(){throw new Error("not implemented")},ur=or()?ar:ir,fr=G,cr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null,lr=function(r){return cr&&r instanceof Uint16Array||"[object Uint16Array]"===fr(r)},vr=yr;var pr=function(){var r,t;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,65536,65537]),r=lr(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var br,Ar="function"==typeof Uint16Array?Uint16Array:void 0,_r=function(){throw new Error("not implemented")},wr={uint16:pr()?Ar:_r,uint8:ur};(br=new wr.uint16(1))[0]=4660;var mr=52===new wr.uint8(br.buffer)[0],dr=D,sr=!0===mr?1:0,Ur=new Z(1),Nr=new dr(Ur.buffer);var hr=function(r){return Ur[0]=r,Nr[sr]},jr=D,gr=!0===mr?1:0,Sr=new Z(1),Er=new jr(Sr.buffer);var Fr=function(r,t){return Sr[0]=r,Er[gr]=t>>>0,Sr[0]},Or=Fr,Tr=Number.NEGATIVE_INFINITY;var Pr=hr,Ir=Or,xr=p,Gr=Tr,Vr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},kr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},qr=.6931471803691238,Cr=1.9082149292705877e-10;var Mr=function(r){var t,n,e,o,a,i,u,f,c,y,l;return 0===r?Gr:xr(r)||r<0?NaN:(o=0,(n=Pr(r))<1048576&&(o-=54,n=Pr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(u=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=Ir(r,n|1072693248^u))-1,(1048575&2+n)<3?0===i?0===o?0:o*qr+o*Cr:(a=i*i*(.5-.3333333333333333*i),0===o?i-a:o*qr-(a-o*Cr-i)):(u=n-398458|0,f=440401-n|0,e=(y=(l=(c=i/(2+i))*c)*l)*Vr(y),a=l*kr(y)+e,(u|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+a)):o*qr-(t-(c*(t+a)+o*Cr)-i)):0===o?i-c*(i-a):o*qr-(c*(i-a)-o*Cr-i))))},Yr=1.1447298858494002,zr=.6931471805599453;function Br(r,t,n){return p(r)||p(t)||p(n)||t>=n?NaN:r<t?Tr:r>=n?0:zr-Yr+Mr(s(b((r-t)/(n-t))))}var Dr=function(r){return function(){return r}};function Hr(r,t){return p(r)||p(t)||r>=t?Dr(NaN):function(n){if(p(n))return NaN;if(n<r)return Tr;if(n>=t)return 0;return zr-Yr+Mr(s(b((n-r)/(t-r))))}}v(Br,"factory",Hr);export{Br as default,Hr as factory};
//# sourceMappingURL=mod.js.map
