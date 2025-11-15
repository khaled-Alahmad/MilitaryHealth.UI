import{E as he,N as z,T as pe}from"./chunk-U3OB2ATU.js";import{e as de,f as le,y as ue,z as O}from"./chunk-V3QLM7UH.js";import{a as ae,e as se}from"./chunk-C2C7ZE7Q.js";import{i as ie,k as oe,m as ce,p as re}from"./chunk-JHYLZDLW.js";import{$ as G,$b as Q,Hb as d,Ib as N,Jb as A,Jc as L,Kb as F,Mc as f,Nb as T,Ob as q,Pb as $,Rb as J,Rc as l,Sc as ne,Wa as h,Wb as W,Yb as y,_ as Z,a as B,aa as P,ac as Y,bc as E,cc as S,ea as H,gb as g,gc as j,hb as K,hc as x,ib as X,ja as w,ka as M,kb as p,la as m,mb as I,ob as D,rc as ee,ta as V,uc as te,wa as U,xa as s,yb as k}from"./chunk-QX3A4P5N.js";var fe=(()=>{class i extends pe{required=f(void 0,{transform:l});invalid=f(void 0,{transform:l});disabled=f(void 0,{transform:l});name=f();_disabled=V(!1);$disabled=L(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=s(i)))(o||i)}})();static \u0275dir=X({type:i,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[p]})}return i})();var be=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var Ce=["data-p-icon","check"],me=(()=>{class i extends z{static \u0275fac=(()=>{let e;return function(o){return(e||(e=s(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["","data-p-icon","check"]],features:[p],attrs:Ce,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(m(),T(0,"path",0))},encapsulation:2})}return i})();var ve=["icon"],_e=["input"],Ie=(i,t)=>({checked:i,class:t});function we(i,t){if(i&1&&F(0,"span",7),i&2){let e=y(3);x(e.cx("icon")),d("ngClass",e.checkboxIcon),k("data-pc-section","icon")}}function Me(i,t){if(i&1&&(m(),F(0,"svg",8)),i&2){let e=y(3);x(e.cx("icon")),k("data-pc-section","icon")}}function Ve(i,t){if(i&1&&(q(0),I(1,we,1,4,"span",5)(2,Me,1,3,"svg",6),$()),i&2){let e=y(2);h(),d("ngIf",e.checkboxIcon),h(),d("ngIf",!e.checkboxIcon)}}function De(i,t){if(i&1&&(m(),F(0,"svg",9)),i&2){let e=y(2);x(e.cx("icon")),k("data-pc-section","icon")}}function Fe(i,t){if(i&1&&(q(0),I(1,Ve,3,2,"ng-container",2)(2,De,1,3,"svg",4),$()),i&2){let e=y();h(),d("ngIf",e.checked),h(),d("ngIf",e._indeterminate())}}function Te(i,t){}function Ee(i,t){i&1&&I(0,Te,0,0,"ng-template")}var Se=`
    ${be}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Le={root:({instance:i})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()==="filled","p-checkbox-sm p-inputfield-sm":i.size()==="small","p-checkbox-lg p-inputfield-lg":i.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},xe=(()=>{class i extends he{name="checkbox";theme=Se;classes=Le;static \u0275fac=(()=>{let e;return function(o){return(e||(e=s(i)))(o||i)}})();static \u0275prov=G({token:i,factory:i.\u0275fac})}return i})();var Oe={provide:ae,useExisting:Z(()=>ge),multi:!0},ge=(()=>{class i extends fe{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=f();size=f();onChange=new D;onFocus=new D;onBlur=new D;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:le(this.value,this.modelValue())}_indeterminate=V(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=H(xe);$variant=L(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,o=this.injector.get(se,null,{optional:!0,self:!0}),c=o&&!this.formControl?o.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(r=>!de(r,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=s(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,c){if(n&1&&(Q(c,ve,4),Q(c,ue,4)),n&2){let r;E(r=S())&&(o.checkboxIconTemplate=r.first),E(r=S())&&(o.templates=r)}},viewQuery:function(n,o){if(n&1&&Y(_e,5),n&2){let c;E(c=S())&&(o.inputViewChild=c.first)}},hostVars:5,hostBindings:function(n,o){n&2&&(k("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.$disabled()),x(o.cn(o.cx("root"),o.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",l],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",ne],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",l],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",l],autofocus:[2,"autofocus","autofocus",l],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[ee([Oe,xe]),p,U],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(n,o){if(n&1){let c=J();N(0,"input",1,0),W("focus",function(a){return w(c),M(o.onInputFocus(a))})("blur",function(a){return w(c),M(o.onInputBlur(a))})("change",function(a){return w(c),M(o.handleChange(a))}),A(),N(2,"div"),I(3,Fe,3,2,"ng-container",2)(4,Ee,1,0,null,3),A()}n&2&&(j(o.inputStyle),x(o.cn(o.cx("input"),o.inputClass)),d("checked",o.checked),k("id",o.inputId)("value",o.value)("name",o.name())("tabindex",o.tabindex)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),h(2),x(o.cx("box")),h(),d("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),h(),d("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",te(19,Ie,o.checked,o.cx("icon"))))},dependencies:[re,ie,oe,ce,O,me],encapsulation:2,changeDetection:0})}return i})(),lt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=K({type:i});static \u0275inj=P({imports:[ge,O,O]})}return i})();var ze=["data-p-icon","times"],pt=(()=>{class i extends z{static \u0275fac=(()=>{let e;return function(o){return(e||(e=s(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["","data-p-icon","times"]],features:[p],attrs:ze,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(m(),T(0,"path",0))},encapsulation:2})}return i})();var ke=class i{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),o=Array.isArray(e),c,r,a;if(n&&o){if(r=t.length,r!=e.length)return!1;for(c=r;c--!==0;)if(!this.equalsByValue(t[c],e[c]))return!1;return!0}if(n!=o)return!1;var u=this.isDate(t),C=this.isDate(e);if(u!=C)return!1;if(u&&C)return t.getTime()==e.getTime();var v=t instanceof RegExp,_=e instanceof RegExp;if(v!=_)return!1;if(v&&_)return t.toString()==e.toString();var b=Object.keys(t);if(r=b.length,r!==Object.keys(e).length)return!1;for(c=r;c--!==0;)if(!Object.prototype.hasOwnProperty.call(e,b[c]))return!1;for(c=r;c--!==0;)if(a=b[c],!this.equalsByValue(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let n=e.split("."),o=t;for(let c=0,r=n.length;c<r;++c){if(o==null)return null;o=o[n[c]]}return o}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,n){let o;t&&e!==n&&(n>=t.length&&(n%=t.length,e%=t.length),t.splice(n,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,n,o){if(n.length>0){let c=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],o)>e){n.splice(r,0,t),c=!0;break}c||n.push(t)}else n.push(t)}static findIndexInList(t,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==t){n=o;break}}return n}static contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,n,o=1){let c=-1,r=this.isEmpty(t),a=this.isEmpty(e);return r&&a?c=0:r?c=o:a?c=-o:typeof t=="string"&&typeof e=="string"?c=t.localeCompare(e,n,{numeric:!0}):c=t<e?-1:t>e?1:0,c}static sort(t,e,n=1,o,c=1){let r=i.compare(t,e,o,n),a=n;return(i.isEmpty(t)||i.isEmpty(e))&&(a=c===1?n:c),a*r}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return B(B({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}static findLast(t,e){let n;if(this.isNotEmpty(t))try{n=t.findLast(e)}catch{n=[...t].reverse().find(e)}return n}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),o=Array.isArray(e),c,r,a;if(n&&o){if(r=t.length,r!=e.length)return!1;for(c=r;c--!==0;)if(!this.deepEquals(t[c],e[c]))return!1;return!0}if(n!=o)return!1;var u=t instanceof Date,C=e instanceof Date;if(u!=C)return!1;if(u&&C)return t.getTime()==e.getTime();var v=t instanceof RegExp,_=e instanceof RegExp;if(v!=_)return!1;if(v&&_)return t.toString()==e.toString();var b=Object.keys(t);if(r=b.length,r!==Object.keys(e).length)return!1;for(c=r;c--!==0;)if(!Object.prototype.hasOwnProperty.call(e,b[c]))return!1;for(c=r;c--!==0;)if(a=b[c],!this.deepEquals(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}static isString(t,e=!0){return typeof t=="string"&&(e||t!=="")}},ye=0;function bt(i="pn_id_"){return ye++,`${i}${ye}`}function Be(){let i=[],t=(c,r)=>{let a=i.length>0?i[i.length-1]:{key:c,value:r},u=a.value+(a.key===c?0:r)+2;return i.push({key:c,value:u}),u},e=c=>{i=i.filter(r=>r.value!==c)},n=()=>i.length>0?i[i.length-1].value:0,o=c=>c&&parseInt(c.style.zIndex,10)||0;return{get:o,set:(c,r,a)=>{r&&(r.style.zIndex=String(t(c,a)))},clear:c=>{c&&(e(o(c)),c.style.zIndex="")},getCurrent:()=>n(),generateZIndex:t,revertZIndex:e}}var mt=Be();export{me as a,pt as b,fe as c,ge as d,lt as e,ke as f,bt as g,mt as h};
