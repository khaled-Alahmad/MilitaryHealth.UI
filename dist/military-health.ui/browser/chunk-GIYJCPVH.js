import{q as Dt}from"./chunk-U5NWO4D2.js";import{ca as Lt,d,e as _e,f as Rt}from"./chunk-XPHP6HZU.js";var qt=d((Ln,Ut)=>{"use strict";Ut.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var A=d(S=>{"use strict";var st,ke=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];S.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};S.getSymbolTotalCodewords=function(t){return ke[t]};S.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};S.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');st=t};S.isKanjiModeEnabled=function(){return typeof st<"u"};S.toSJIS=function(t){return st(t)}});var Y=d(w=>{"use strict";w.L={bit:1};w.M={bit:0};w.Q={bit:3};w.H={bit:2};function ze(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return w.L;case"m":case"medium":return w.M;case"q":case"quartile":return w.Q;case"h":case"high":return w.H;default:throw new Error("Unknown EC Level: "+n)}}w.isValid=function(t){return t&&typeof t.bit<"u"&&t.bit>=0&&t.bit<4};w.from=function(t,e){if(w.isValid(t))return t;try{return ze(t)}catch{return e}}});var kt=d((qn,_t)=>{"use strict";function Ft(){this.buffer=[],this.length=0}Ft.prototype={get:function(n){let t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};_t.exports=Ft});var Ht=d((Fn,zt)=>{"use strict";function k(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}k.prototype.set=function(n,t,e,r){let o=n*this.size+t;this.data[o]=e,r&&(this.reservedBit[o]=!0)};k.prototype.get=function(n,t){return this.data[n*this.size+t]};k.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};k.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};zt.exports=k});var vt=d(j=>{"use strict";var He=A().getSymbolSize;j.getRowColCoords=function(t){if(t===1)return[];let e=Math.floor(t/7)+2,r=He(t),o=r===145?26:Math.ceil((r-13)/(2*e-2))*2,i=[r-7];for(let s=1;s<e-1;s++)i[s]=i[s-1]-o;return i.push(6),i.reverse()};j.getPositions=function(t){let e=[],r=j.getRowColCoords(t),o=r.length;for(let i=0;i<o;i++)for(let s=0;s<o;s++)i===0&&s===0||i===0&&s===o-1||i===o-1&&s===0||e.push([r[i],r[s]]);return e}});var Jt=d(Kt=>{"use strict";var ve=A().getSymbolSize,Vt=7;Kt.getPositions=function(t){let e=ve(t);return[[0,0],[e-Vt,0],[0,e-Vt]]}});var Ot=d(g=>{"use strict";g.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var P={N1:3,N2:3,N3:40,N4:10};g.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7};g.from=function(t){return g.isValid(t)?parseInt(t,10):void 0};g.getPenaltyN1=function(t){let e=t.size,r=0,o=0,i=0,s=null,u=null;for(let a=0;a<e;a++){o=i=0,s=u=null;for(let c=0;c<e;c++){let l=t.get(a,c);l===s?o++:(o>=5&&(r+=P.N1+(o-5)),s=l,o=1),l=t.get(c,a),l===u?i++:(i>=5&&(r+=P.N1+(i-5)),u=l,i=1)}o>=5&&(r+=P.N1+(o-5)),i>=5&&(r+=P.N1+(i-5))}return r};g.getPenaltyN2=function(t){let e=t.size,r=0;for(let o=0;o<e-1;o++)for(let i=0;i<e-1;i++){let s=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);(s===4||s===0)&&r++}return r*P.N2};g.getPenaltyN3=function(t){let e=t.size,r=0,o=0,i=0;for(let s=0;s<e;s++){o=i=0;for(let u=0;u<e;u++)o=o<<1&2047|t.get(s,u),u>=10&&(o===1488||o===93)&&r++,i=i<<1&2047|t.get(u,s),u>=10&&(i===1488||i===93)&&r++}return r*P.N3};g.getPenaltyN4=function(t){let e=0,r=t.data.length;for(let i=0;i<r;i++)e+=t.data[i];return Math.abs(Math.ceil(e*100/r/5)-10)*P.N4};function Ve(n,t,e){switch(n){case g.Patterns.PATTERN000:return(t+e)%2===0;case g.Patterns.PATTERN001:return t%2===0;case g.Patterns.PATTERN010:return e%3===0;case g.Patterns.PATTERN011:return(t+e)%3===0;case g.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case g.Patterns.PATTERN101:return t*e%2+t*e%3===0;case g.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case g.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}g.applyMask=function(t,e){let r=e.size;for(let o=0;o<r;o++)for(let i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,Ve(t,i,o))};g.getBestMask=function(t,e){let r=Object.keys(g.Patterns).length,o=0,i=1/0;for(let s=0;s<r;s++){e(s),g.applyMask(s,t);let u=g.getPenaltyN1(t)+g.getPenaltyN2(t)+g.getPenaltyN3(t)+g.getPenaltyN4(t);g.applyMask(s,t),u<i&&(i=u,o=s)}return o}});var at=d(ut=>{"use strict";var I=Y(),$=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ut.getBlocksCount=function(t,e){switch(e){case I.L:return $[(t-1)*4+0];case I.M:return $[(t-1)*4+1];case I.Q:return $[(t-1)*4+2];case I.H:return $[(t-1)*4+3];default:return}};ut.getTotalCodewordsCount=function(t,e){switch(e){case I.L:return Q[(t-1)*4+0];case I.M:return Q[(t-1)*4+1];case I.Q:return Q[(t-1)*4+2];case I.H:return Q[(t-1)*4+3];default:return}}});var Yt=d(W=>{"use strict";var z=new Uint8Array(512),G=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)z[e]=t,G[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)z[e]=z[e-255]})();W.log=function(t){if(t<1)throw new Error("log("+t+")");return G[t]};W.exp=function(t){return z[t]};W.mul=function(t,e){return t===0||e===0?0:z[G[t]+G[e]]}});var jt=d(H=>{"use strict";var ct=Yt();H.mul=function(t,e){let r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)r[o+i]^=ct.mul(t[o],e[i]);return r};H.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){let o=r[0];for(let s=0;s<e.length;s++)r[s]^=ct.mul(e[s],o);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r};H.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let r=0;r<t;r++)e=H.mul(e,new Uint8Array([1,ct.exp(r)]));return e}});var Gt=d((Kn,Qt)=>{"use strict";var $t=jt();function lt(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}lt.prototype.initialize=function(t){this.degree=t,this.genPoly=$t.generateECPolynomial(this.degree)};lt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=$t.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let i=new Uint8Array(this.degree);return i.set(r,o),i}return r};Qt.exports=lt});var ft=d(Wt=>{"use strict";Wt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}});var dt=d(b=>{"use strict";var Zt="[0-9]+",Ke="[A-Z $%*+\\-./:]+",v="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";v=v.replace(/u/g,"\\u");var Je="(?:(?![A-Z0-9 $%*+\\-./:]|"+v+`)(?:.|[\r
]))+`;b.KANJI=new RegExp(v,"g");b.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");b.BYTE=new RegExp(Je,"g");b.NUMERIC=new RegExp(Zt,"g");b.ALPHANUMERIC=new RegExp(Ke,"g");var Oe=new RegExp("^"+v+"$"),Ye=new RegExp("^"+Zt+"$"),je=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");b.testKanji=function(t){return Oe.test(t)};b.testNumeric=function(t){return Ye.test(t)};b.testAlphanumeric=function(t){return je.test(t)}});var N=d(p=>{"use strict";var $e=ft(),gt=dt();p.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};p.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};p.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};p.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};p.MIXED={bit:-1};p.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!$e.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]};p.getBestModeForData=function(t){return gt.testNumeric(t)?p.NUMERIC:gt.testAlphanumeric(t)?p.ALPHANUMERIC:gt.testKanji(t)?p.KANJI:p.BYTE};p.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")};p.isValid=function(t){return t&&t.bit&&t.ccBits};function Qe(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return p.NUMERIC;case"alphanumeric":return p.ALPHANUMERIC;case"kanji":return p.KANJI;case"byte":return p.BYTE;default:throw new Error("Unknown mode: "+n)}}p.from=function(t,e){if(p.isValid(t))return t;try{return Qe(t)}catch{return e}}});var re=d(x=>{"use strict";var Z=A(),Ge=at(),Xt=Y(),M=N(),ht=ft(),ee=7973,te=Z.getBCHDigit(ee);function We(n,t,e){for(let r=1;r<=40;r++)if(t<=x.getCapacity(r,e,n))return r}function ne(n,t){return M.getCharCountIndicator(n,t)+4}function Ze(n,t){let e=0;return n.forEach(function(r){let o=ne(r.mode,t);e+=o+r.getBitsLength()}),e}function Xe(n,t){for(let e=1;e<=40;e++)if(Ze(n,e)<=x.getCapacity(e,t,M.MIXED))return e}x.from=function(t,e){return ht.isValid(t)?parseInt(t,10):e};x.getCapacity=function(t,e,r){if(!ht.isValid(t))throw new Error("Invalid QR Code version");typeof r>"u"&&(r=M.BYTE);let o=Z.getSymbolTotalCodewords(t),i=Ge.getTotalCodewordsCount(t,e),s=(o-i)*8;if(r===M.MIXED)return s;let u=s-ne(r,t);switch(r){case M.NUMERIC:return Math.floor(u/10*3);case M.ALPHANUMERIC:return Math.floor(u/11*2);case M.KANJI:return Math.floor(u/13);case M.BYTE:default:return Math.floor(u/8)}};x.getBestVersionForData=function(t,e){let r,o=Xt.from(e,Xt.M);if(Array.isArray(t)){if(t.length>1)return Xe(t,o);if(t.length===0)return 1;r=t[0]}else r=t;return We(r.mode,r.getLength(),o)};x.getEncodedBits=function(t){if(!ht.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;Z.getBCHDigit(e)-te>=0;)e^=ee<<Z.getBCHDigit(e)-te;return t<<12|e}});var ue=d(se=>{"use strict";var pt=A(),ie=1335,tn=21522,oe=pt.getBCHDigit(ie);se.getEncodedBits=function(t,e){let r=t.bit<<3|e,o=r<<10;for(;pt.getBCHDigit(o)-oe>=0;)o^=ie<<pt.getBCHDigit(o)-oe;return(r<<10|o)^tn}});var ce=d((Qn,ae)=>{"use strict";var en=N();function D(n){this.mode=en.NUMERIC,this.data=n.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let e,r,o;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),o=parseInt(r,10),t.put(o,10);let i=this.data.length-e;i>0&&(r=this.data.substr(e),o=parseInt(r,10),t.put(o,i*3+1))};ae.exports=D});var fe=d((Gn,le)=>{"use strict";var nn=N(),mt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(n){this.mode=nn.ALPHANUMERIC,this.data=n}U.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=mt.indexOf(this.data[e])*45;r+=mt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(mt.indexOf(this.data[e]),6)};le.exports=U});var ge=d((Wn,de)=>{"use strict";var rn=N();function q(n){this.mode=rn.BYTE,typeof n=="string"?this.data=new TextEncoder().encode(n):this.data=new Uint8Array(n)}q.getBitsLength=function(t){return t*8};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};de.exports=q});var pe=d((Zn,he)=>{"use strict";var on=N(),sn=A();function F(n){this.mode=on.KANJI,this.data=n}F.getBitsLength=function(t){return t*13};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=sn.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};he.exports=F});var me=d((Xn,wt)=>{"use strict";var V={single_source_shortest_paths:function(n,t,e){var r={},o={};o[t]=0;var i=V.PriorityQueue.make();i.push(t,0);for(var s,u,a,c,l,m,h,y,B;!i.empty();){s=i.pop(),u=s.value,c=s.cost,l=n[u]||{};for(a in l)l.hasOwnProperty(a)&&(m=l[a],h=c+m,y=o[a],B=typeof o[a]>"u",(B||y>h)&&(o[a]=h,i.push(a,h),r[a]=u))}if(typeof e<"u"&&typeof o[e]>"u"){var T=["Could not find a path from ",t," to ",e,"."].join("");throw new Error(T)}return r},extract_shortest_path_from_predecessor_list:function(n,t){for(var e=[],r=t,o;r;)e.push(r),o=n[r],r=n[r];return e.reverse(),e},find_path:function(n,t,e){var r=V.single_source_shortest_paths(n,t,e);return V.extract_shortest_path_from_predecessor_list(r,e)},PriorityQueue:{make:function(n){var t=V.PriorityQueue,e={},r;n=n||{};for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e.queue=[],e.sorter=n.sorter||t.default_sorter,e},default_sorter:function(n,t){return n.cost-t.cost},push:function(n,t){var e={value:n,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof wt<"u"&&(wt.exports=V)});var Ae=d(_=>{"use strict";var f=N(),Ce=ce(),Ee=fe(),be=ge(),Be=pe(),K=dt(),X=A(),un=me();function we(n){return unescape(encodeURIComponent(n)).length}function J(n,t,e){let r=[],o;for(;(o=n.exec(e))!==null;)r.push({data:o[0],index:o.index,mode:t,length:o[0].length});return r}function Te(n){let t=J(K.NUMERIC,f.NUMERIC,n),e=J(K.ALPHANUMERIC,f.ALPHANUMERIC,n),r,o;return X.isKanjiModeEnabled()?(r=J(K.BYTE,f.BYTE,n),o=J(K.KANJI,f.KANJI,n)):(r=J(K.BYTE_KANJI,f.BYTE,n),o=[]),t.concat(e,r,o).sort(function(s,u){return s.index-u.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function yt(n,t){switch(t){case f.NUMERIC:return Ce.getBitsLength(n);case f.ALPHANUMERIC:return Ee.getBitsLength(n);case f.KANJI:return Be.getBitsLength(n);case f.BYTE:return be.getBitsLength(n)}}function an(n){return n.reduce(function(t,e){let r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function cn(n){let t=[];for(let e=0;e<n.length;e++){let r=n[e];switch(r.mode){case f.NUMERIC:t.push([r,{data:r.data,mode:f.ALPHANUMERIC,length:r.length},{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.ALPHANUMERIC:t.push([r,{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.KANJI:t.push([r,{data:r.data,mode:f.BYTE,length:we(r.data)}]);break;case f.BYTE:t.push([{data:r.data,mode:f.BYTE,length:we(r.data)}])}}return t}function ln(n,t){let e={},r={start:{}},o=["start"];for(let i=0;i<n.length;i++){let s=n[i],u=[];for(let a=0;a<s.length;a++){let c=s[a],l=""+i+a;u.push(l),e[l]={node:c,lastCount:0},r[l]={};for(let m=0;m<o.length;m++){let h=o[m];e[h]&&e[h].node.mode===c.mode?(r[h][l]=yt(e[h].lastCount+c.length,c.mode)-yt(e[h].lastCount,c.mode),e[h].lastCount+=c.length):(e[h]&&(e[h].lastCount=c.length),r[h][l]=yt(c.length,c.mode)+4+f.getCharCountIndicator(c.mode,t))}}o=u}for(let i=0;i<o.length;i++)r[o[i]].end=0;return{map:r,table:e}}function ye(n,t){let e,r=f.getBestModeForData(n);if(e=f.from(t,r),e!==f.BYTE&&e.bit<r.bit)throw new Error('"'+n+'" cannot be encoded with mode '+f.toString(e)+`.
 Suggested mode is: `+f.toString(r));switch(e===f.KANJI&&!X.isKanjiModeEnabled()&&(e=f.BYTE),e){case f.NUMERIC:return new Ce(n);case f.ALPHANUMERIC:return new Ee(n);case f.KANJI:return new Be(n);case f.BYTE:return new be(n)}}_.fromArray=function(t){return t.reduce(function(e,r){return typeof r=="string"?e.push(ye(r,null)):r.data&&e.push(ye(r.data,r.mode)),e},[])};_.fromString=function(t,e){let r=Te(t,X.isKanjiModeEnabled()),o=cn(r),i=ln(o,e),s=un.find_path(i.map,"start","end"),u=[];for(let a=1;a<s.length-1;a++)u.push(i.table[s[a]].node);return _.fromArray(an(u))};_.rawSplit=function(t){return _.fromArray(Te(t,X.isKanjiModeEnabled()))}});var Ne=d(Ie=>{"use strict";var et=A(),Ct=Y(),fn=kt(),dn=Ht(),gn=vt(),hn=Jt(),Bt=Ot(),Tt=at(),pn=Gt(),tt=re(),mn=ue(),wn=N(),Et=Ae();function yn(n,t){let e=n.size,r=hn.getPositions(t);for(let o=0;o<r.length;o++){let i=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(i+u<=-1||e<=i+u))for(let a=-1;a<=7;a++)s+a<=-1||e<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?n.set(i+u,s+a,!0,!0):n.set(i+u,s+a,!1,!0))}}function Cn(n){let t=n.size;for(let e=8;e<t-8;e++){let r=e%2===0;n.set(e,6,r,!0),n.set(6,e,r,!0)}}function En(n,t){let e=gn.getPositions(t);for(let r=0;r<e.length;r++){let o=e[r][0],i=e[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?n.set(o+s,i+u,!0,!0):n.set(o+s,i+u,!1,!0)}}function bn(n,t){let e=n.size,r=tt.getEncodedBits(t),o,i,s;for(let u=0;u<18;u++)o=Math.floor(u/3),i=u%3+e-8-3,s=(r>>u&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function bt(n,t,e){let r=n.size,o=mn.getEncodedBits(t,e),i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function Bn(n,t){let e=n.size,r=-1,o=e-1,i=7,s=0;for(let u=e-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!n.isReserved(o,u-a)){let c=!1;s<t.length&&(c=(t[s]>>>i&1)===1),n.set(o,u-a,c),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||e<=o){o-=r,r=-r;break}}}function Tn(n,t,e){let r=new fn;e.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),wn.getCharCountIndicator(a.mode,n)),a.write(r)});let o=et.getSymbolTotalCodewords(n),i=Tt.getTotalCodewordsCount(n,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);let u=(s-r.getLengthInBits())/8;for(let a=0;a<u;a++)r.put(a%2?17:236,8);return An(r,n,t)}function An(n,t,e){let r=et.getSymbolTotalCodewords(t),o=Tt.getTotalCodewordsCount(t,e),i=r-o,s=Tt.getBlocksCount(t,e),u=r%s,a=s-u,c=Math.floor(r/s),l=Math.floor(i/s),m=l+1,h=c-l,y=new pn(h),B=0,T=new Array(s),Pt=new Array(s),rt=0,Fe=new Uint8Array(n.buffer);for(let L=0;L<s;L++){let it=L<a?l:m;T[L]=Fe.slice(B,B+it),Pt[L]=y.encode(T[L]),B+=it,rt=Math.max(rt,it)}let ot=new Uint8Array(r),xt=0,C,E;for(C=0;C<rt;C++)for(E=0;E<s;E++)C<T[E].length&&(ot[xt++]=T[E][C]);for(C=0;C<h;C++)for(E=0;E<s;E++)ot[xt++]=Pt[E][C];return ot}function In(n,t,e,r){let o;if(Array.isArray(n))o=Et.fromArray(n);else if(typeof n=="string"){let c=t;if(!c){let l=Et.rawSplit(n);c=tt.getBestVersionForData(l,e)}o=Et.fromString(n,c||40)}else throw new Error("Invalid data");let i=tt.getBestVersionForData(o,e);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);let s=Tn(t,e,o),u=et.getSymbolSize(t),a=new dn(u);return yn(a,t),Cn(a),En(a,t),bt(a,e,0),t>=7&&bn(a,t),Bn(a,s),isNaN(r)&&(r=Bt.getBestMask(a,bt.bind(null,a,e))),Bt.applyMask(r,a),bt(a,e,r),{modules:a,version:t,errorCorrectionLevel:e,maskPattern:r,segments:o}}Ie.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=Ct.M,o,i;return typeof e<"u"&&(r=Ct.from(e.errorCorrectionLevel,Ct.M),o=tt.from(e.version),i=Bt.from(e.maskPattern),e.toSJISFunc&&et.setToSJISFunction(e.toSJISFunc)),In(t,o,r,i)}});var At=d(R=>{"use strict";function Me(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let t=n.slice().replace("#","").split("");if(t.length<3||t.length===5||t.length>8)throw new Error("Invalid hex color: "+n);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(r){return[r,r]}))),t.length===6&&t.push("F","F");let e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+t.slice(0,6).join("")}}R.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=typeof t.margin>"u"||t.margin===null||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:Me(t.color.dark||"#000000ff"),light:Me(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}};R.getScale=function(t,e){return e.width&&e.width>=t+e.margin*2?e.width/(t+e.margin*2):e.scale};R.getImageWidth=function(t,e){let r=R.getScale(t,e);return Math.floor((t+e.margin*2)*r)};R.qrToImageData=function(t,e,r){let o=e.modules.size,i=e.modules.data,s=R.getScale(o,r),u=Math.floor((o+r.margin*2)*s),a=r.margin*s,c=[r.color.light,r.color.dark];for(let l=0;l<u;l++)for(let m=0;m<u;m++){let h=(l*u+m)*4,y=r.color.light;if(l>=a&&m>=a&&l<u-a&&m<u-a){let B=Math.floor((l-a)/s),T=Math.floor((m-a)/s);y=c[i[B*o+T]?1:0]}t[h++]=y.r,t[h++]=y.g,t[h++]=y.b,t[h]=y.a}}});var Se=d(nt=>{"use strict";var It=At();function Nn(n,t,e){n.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=e,t.width=e,t.style.height=e+"px",t.style.width=e+"px"}function Mn(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}nt.render=function(t,e,r){let o=r,i=e;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),e||(i=Mn()),o=It.getOptions(o);let s=It.getImageWidth(t.modules.size,o),u=i.getContext("2d"),a=u.createImageData(s,s);return It.qrToImageData(a.data,t,o),Nn(u,i,s),u.putImageData(a,0,0),i};nt.renderToDataURL=function(t,e,r){let o=r;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),o||(o={});let i=nt.render(t,e,o),s=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(s,u.quality)}});var Re=d(xe=>{"use strict";var Sn=At();function Pe(n,t){let e=n.a/255,r=t+'="'+n.hex+'"';return e<1?r+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':r}function Nt(n,t,e){let r=n+t;return typeof e<"u"&&(r+=" "+e),r}function Pn(n,t,e){let r="",o=0,i=!1,s=0;for(let u=0;u<n.length;u++){let a=Math.floor(u%t),c=Math.floor(u/t);!a&&!i&&(i=!0),n[u]?(s++,u>0&&a>0&&n[u-1]||(r+=i?Nt("M",a+e,.5+c+e):Nt("m",o,0),o=0,i=!1),a+1<t&&n[u+1]||(r+=Nt("h",s),s=0)):o++}return r}xe.render=function(t,e,r){let o=Sn.getOptions(e),i=t.modules.size,s=t.modules.data,u=i+o.margin*2,a=o.color.light.a?"<path "+Pe(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",c="<path "+Pe(o.color.dark,"stroke")+' d="'+Pn(s,i,o.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,h),h}});var De=d(O=>{"use strict";var xn=qt(),Mt=Ne(),Le=Se(),Rn=Re();function St(n,t,e,r,o){let i=[].slice.call(arguments,1),s=i.length,u=typeof i[s-1]=="function";if(!u&&!xn())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=r=void 0):s===2&&!t.getContext&&(r=e,e=t,t=void 0),new Promise(function(a,c){try{let l=Mt.create(e,r);a(n(l,t,r))}catch(l){c(l)}})}try{let a=Mt.create(e,r);o(null,n(a,t,r))}catch(a){o(a)}}O.create=Mt.create;O.toCanvas=St.bind(null,Le.render);O.toDataURL=St.bind(null,Le.renderToDataURL);O.toString=St.bind(null,function(n,t,e){return Rn.render(n,e)})});var qe=_e(De());var Ue=class n{datePipe;constructor(){this.datePipe=new Dt("en-US")}printBarcodeReceipt(t){return Rt(this,null,function*(){try{if(!t)return;let e=t.fileNumber||"";if(!e&&t.applicantID&&(e=`APP-${t.applicantID}`),!e)return;let r=yield qe.toDataURL(e,{width:200,margin:1,errorCorrectionLevel:"M",color:{dark:"#000000",light:"#FFFFFF"}}),o=window.open("","_blank","width=400,height=600");if(!o){alert("\u064A\u0631\u062C\u0649 \u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u0646\u0648\u0627\u0641\u0630 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629 \u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");return}let i=this.generateReceiptHTML(t,r,e);o.document.open(),o.document.write(i),o.document.close();let s=()=>{let u=o.document.querySelector("img");u?u.complete&&u.naturalHeight!==0?setTimeout(()=>{o.focus(),o.print(),setTimeout(()=>{o.close()},1e3)},500):(u.onload=()=>{setTimeout(()=>{o.focus(),o.print(),setTimeout(()=>{o.close()},1e3)},500)},u.onerror=()=>{setTimeout(()=>{o.focus(),o.print(),setTimeout(()=>{o.close()},1e3)},1e3)}):setTimeout(()=>{o.focus(),o.print(),setTimeout(()=>{o.close()},1e3)},1e3)};setTimeout(()=>{o.document.readyState==="complete"?s():(o.onload=s,setTimeout(()=>{o.document.readyState==="complete"&&s()},2e3))},100)}catch(e){throw alert("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F"),e}})}generateReceiptHTML(t,e,r){return`
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F - ${t.fileNumber}</title>
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    
    body {
      font-family: 'Cairo', 'Segoe UI', 'Tahoma', sans-serif;
      width: 70mm;
      max-width: 70mm;
      margin: 0 auto;
      color: #000;
      line-height: 1.4;
    }
    
    .ticket {
      width: 100%;
      min-height: auto;
      padding: 2mm 3mm 4mm;
      display: flex;
      flex-direction: column;
      gap: 2mm;
      page-break-inside: avoid;
    }
    
    .header {
      text-align: center;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px dashed #000;
    }
    
    .header h1 {
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 4px 0;
    }
    
    .info-section {
      margin: 12px 0;
      text-align: right;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      border-bottom: 1px dotted #bbb;
      font-size: 11px;
    }
    
    .info-label {
      font-weight: 600;
      color: #111;
    }
    
    .info-value {
      font-weight: 700;
      color: #111;
      font-size: 12px;
    }
    
    .barcode-section {
      text-align: center;
      margin: 18px 0;
    }
    
    .barcode-image {
      width: 140px;
      height: 140px;
      margin: 0 auto;
      padding: 10px;
      border: 2px solid #000;
    }
    
    .barcode-image img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    .file-number {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 3px;
      margin-top: 8px;
    }
    
    .footer {
      margin-top: 18px;
      padding-top: 10px;
      border-top: 2px dashed #000;
      font-size: 11px;
      text-align: right;
      line-height: 1.5;
    }
    
    @media print {
      body {
        width: 70mm;
        max-width: 70mm;
      }
      
      @page {
        size: 72mm auto;
        margin: 0;
      }
    }
  </style>
</head>
<body>
  <div class="ticket">
    <div class="header">
      <h1>\u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u0645\u0646\u062A\u0633\u0628</h1>
    </div>
    
    <div class="info-section">
      <div class="info-row">
        <span class="info-label">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644:</span>
        <span class="info-value">${t.fullName||"-"}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641:</span>
        <span class="info-value">${t.fileNumber||r||"-"}</span>
      </div>
      
      <div class="info-row">
        <span class="info-label">\u0631\u0642\u0645 \u0627\u0644\u062F\u0648\u0631:</span>
        <span class="info-value">${t.queueNumber!=null?t.queueNumber:"-"}</span>
      </div>
    </div>
    
    <div class="barcode-section">
      <div class="barcode-image">
        <img src="${e}" alt="QR Code" />
      </div>
      <div class="file-number">${t.fileNumber||r||""}</div>
    </div>
    
        <div class="footer">
          <p>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F\u064A: ${this.getFormattedDate()}</p>
          <p>\u0648\u0642\u062A \u0627\u0644\u0637\u0628\u0627\u0639\u0629: ${this.getFormattedTime()}</p>
        </div>

  </div>
</body>
</html>
    `}getFormattedDate(){let t=new Date;return this.datePipe.transform(t,"yyyy/MM/dd")||t.toISOString().split("T")[0]}getFormattedTime(){let t=new Date;return this.datePipe.transform(t,"HH:mm:ss")||t.toTimeString().split(" ")[0]}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Lt({token:n,factory:n.\u0275fac,providedIn:"root"})};export{Ue as a};
