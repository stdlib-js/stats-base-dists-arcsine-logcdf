// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&f&&f.call(t,n,r.set),t},p=r()?l:y,b=function(t,n,r){p(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(t){return t!=t},A=Math.sqrt,_=d,s=A,m=.7853981633974483,v=function(t){var n,r;return 0===t?.16666666666666713:((t<0?-t:t)<=1?(n=t*(19.562619833175948+t*(t*(5.444622390564711+t*(.004253011369004428*t-.6019598008014124))-16.262479672107002))-8.198089802484825,r=t*(139.51056146574857+t*(t*(70.49610280856842+t*(1*t-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(t=1/t)*(t*(5.444622390564711+t*(t*(19.562619833175948+-8.198089802484825*t)-16.262479672107002))-.6019598008014124),r=1+t*(t*(70.49610280856842+t*(t*(139.51056146574857+-49.18853881490881*t)-147.1791292232726))-14.740913729888538)),n/r)},w=function(t){var n,r;return 0===t?.08333333333333809:((t<0?-t:t)<=1?(n=28.536655482610616+t*(t*(6.968710824104713+t*(.002967721961301243*t-.5634242780008963))-25.56901049652825),r=342.43986579130785+t*(t*(147.0656354026815+t*(1*t-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(t=1/t)*(t*(6.968710824104713+t*(28.536655482610616*t-25.56901049652825))-.5634242780008963),r=1+t*(t*(147.0656354026815+t*(342.43986579130785*t-383.8770957603691))-21.947795316429207)),n/r)},U=function(t){var n,r,e,o,i;if(_(t))return NaN;if(t>0?e=t:(n=!0,e=-t),e>1)return NaN;if(e>.625)o=(r=1-e)*w(r),r=s(r+r),i=m-r,i-=r=r*o-6123233995736766e-32,i+=m;else{if(e<1e-8)return t;i=e*(i=(r=e*e)*v(r))+e}return n?-i:i},h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),N=Object.prototype.toString,j=N,g=function(t){return j.call(t)},S=Object.prototype.hasOwnProperty,E=function(t,n){return null!=t&&S.call(t,n)},F="function"==typeof Symbol?Symbol.toStringTag:"",T=E,O=F,P=N,x=g,I=function(t){var n,r,e;if(null==t)return P.call(t);r=t[O],n=T(t,O);try{t[O]=void 0}catch(n){return P.call(t)}return e=P.call(t),n?t[O]=r:delete t[O],e},G=h&&"symbol"==typeof Symbol.toStringTag?I:x,V=G,k="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,C=function(t){return k&&t instanceof Uint32Array||"[object Uint32Array]"===V(t)},M=q,Y=function(){var t,n;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,4294967296,4294967297]),t=C(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=Y()?z:B,H=G,J="function"==typeof Float64Array,K="function"==typeof Float64Array?Float64Array:null,L=function(t){return J&&t instanceof Float64Array||"[object Float64Array]"===H(t)},Q=K,R=function(){var t,n;if("function"!=typeof Q)return!1;try{n=new Q([1,3.14,-3.14,NaN]),t=L(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},W="function"==typeof Float64Array?Float64Array:void 0,X=function(){throw new Error("not implemented")},Z=R()?W:X,$=G,tt="function"==typeof Uint8Array,nt="function"==typeof Uint8Array?Uint8Array:null,rt=function(t){return tt&&t instanceof Uint8Array||"[object Uint8Array]"===$(t)},et=nt,ot=function(){var t,n;if("function"!=typeof et)return!1;try{n=new et(n=[1,3.14,-3.14,256,257]),t=rt(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},it="function"==typeof Uint8Array?Uint8Array:void 0,ut=function(){throw new Error("not implemented")},ft=ot()?it:ut,at=G,ct="function"==typeof Uint16Array,lt="function"==typeof Uint16Array?Uint16Array:null,yt=function(t){return ct&&t instanceof Uint16Array||"[object Uint16Array]"===at(t)},pt=lt,bt=function(){var t,n;if("function"!=typeof pt)return!1;try{n=new pt(n=[1,3.14,-3.14,65536,65537]),t=yt(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},dt="function"==typeof Uint16Array?Uint16Array:void 0,At=function(){throw new Error("not implemented")},_t={uint16:bt()?dt:At,uint8:ft};(t=new _t.uint16(1))[0]=4660;var st=52===new _t.uint8(t.buffer)[0],mt=D,vt=!0===st?1:0,wt=new Z(1),Ut=new mt(wt.buffer),ht=function(t){return wt[0]=t,Ut[vt]},Nt=D,jt=!0===st?1:0,gt=new Z(1),St=new Nt(gt.buffer),Et=function(t,n){return gt[0]=t,St[jt]=n>>>0,gt[0]},Ft=Et,Tt=Number.NEGATIVE_INFINITY,Ot=ht,Pt=Ft,xt=d,It=Tt,Gt=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},Vt=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},kt=.6931471803691238,qt=1.9082149292705877e-10,Ct=1048575,Mt=function(t){var n,r,e,o,i,u,f,a,c,l,y;return 0===t?It:xt(t)||t<0?NaN:(o=0,(r=Ot(t))<1048576&&(o-=54,r=Ot(t*=0x40000000000000)),r>=2146435072?t+t:(o+=(r>>20)-1023|0,o+=(f=614244+(r&=Ct)&1048576|0)>>20|0,u=(t=Pt(t,r|1072693248^f))-1,(Ct&2+r)<3?0===u?0===o?0:o*kt+o*qt:(i=u*u*(.5-.3333333333333333*u),0===o?u-i:o*kt-(i-o*qt-u)):(f=r-398458|0,a=440401-r|0,e=(l=(y=(c=u/(2+u))*c)*y)*Gt(l),i=y*Vt(l)+e,(f|=a)>0?(n=.5*u*u,0===o?u-(n-c*(n+i)):o*kt-(n-(c*(n+i)+o*qt)-u)):0===o?u-c*(u-i):o*kt-(c*(u-i)-o*qt-u))))},Yt=1.1447298858494002,zt=.6931471805599453;function Bt(t,n,r){return d(t)||d(n)||d(r)||n>=r?NaN:t<n?Tt:t>=r?0:zt-Yt+Mt(U(A((t-n)/(r-n))))}var Dt=function(t){return function(){return t}};return b(Bt,"factory",(function(t,n){return d(t)||d(n)||t>=n?Dt(NaN):function(r){return d(r)?NaN:r<t?Tt:r>=n?0:zt-Yt+Mt(U(A((r-t)/(n-t))))}})),Bt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).logcdf=n();
//# sourceMappingURL=browser.js.map
