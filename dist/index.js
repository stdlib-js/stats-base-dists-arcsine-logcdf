"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=a(function(w,q){
var t=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-asin/dist'),o=require('@stdlib/math-base-special-sqrt/dist'),l=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-ln-pi/dist'),I=require('@stdlib/constants-float64-ninf/dist'),L=require('@stdlib/constants-float64-ln-two/dist');function d(e,r,i){return t(e)||t(r)||t(i)||r>=i?NaN:e<r?I:e>=i?0:L-y+l(c(o((e-r)/(i-r))))}q.exports=d
});var f=a(function(z,s){
var p=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-asin/dist'),g=require('@stdlib/math-base-special-sqrt/dist'),P=require('@stdlib/math-base-special-ln/dist'),_=require('@stdlib/constants-float64-ln-pi/dist'),m=require('@stdlib/constants-float64-ninf/dist'),O=require('@stdlib/constants-float64-ln-two/dist');function R(e,r){if(n(e)||n(r)||e>=r)return p(NaN);return i;function i(u){return n(u)?NaN:u<e?m:u>=r?0:O-_+P(F(g((u-e)/(r-e))))}}s.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=v(),j=f();h(N,"factory",j);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
