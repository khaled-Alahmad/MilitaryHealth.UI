import{F as ae,P as F,W as re}from"./chunk-BGPT47GH.js";import{e as oe,f as ie,y as ce,z as T}from"./chunk-ZQRPM4M5.js";import{a as ne,d as te}from"./chunk-6GEXTEE2.js";import{i as J,k as W,o as Y,s as ee}from"./chunk-75PNW7EB.js";import{$b as m,Ac as Z,Cb as x,Dc as K,Kb as r,Lb as B,Mb as S,Nb as M,Qb as I,Rb as E,Sb as z,Sc as D,Ub as G,Wc as u,Za as l,Zb as R,ba as O,ca as A,cb as y,cc as N,da as q,dc as P,dd as d,ec as w,ed as X,fc as V,ha as Q,ma as C,mc as U,na as v,nc as p,oa as b,ob as k,pb as j,qb as H,sb as h,ub as g,va as _,ya as $,za as a}from"./chunk-QBJVF5J7.js";var de=(()=>{class n extends re{required=u(void 0,{transform:d});invalid=u(void 0,{transform:d});disabled=u(void 0,{transform:d});name=u();_disabled=_(!1);$disabled=D(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,o){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=a(n)))(t||n)}})();static \u0275dir=H({type:n,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[h]})}return n})();var pe=["data-p-icon","check"],se=(()=>{class n extends F{static \u0275fac=(()=>{let e;return function(t){return(e||(e=a(n)))(t||n)}})();static \u0275cmp=k({type:n,selectors:[["","data-p-icon","check"]],features:[h],attrs:pe,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,t){o&1&&(b(),I(0,"path",0))},encapsulation:2})}return n})();var ke=["data-p-icon","minus"],le=(()=>{class n extends F{static \u0275fac=(()=>{let e;return function(t){return(e||(e=a(n)))(t||n)}})();static \u0275cmp=k({type:n,selectors:[["","data-p-icon","minus"]],features:[h],attrs:ke,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,t){o&1&&(b(),I(0,"path",0))},encapsulation:2})}return n})();var he=`
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
`;var xe=["icon"],me=["input"],fe=(n,s)=>({checked:n,class:s});function ge(n,s){if(n&1&&M(0,"span",7),n&2){let e=m(3);p(e.cx("icon")),r("ngClass",e.checkboxIcon),x("data-pc-section","icon")}}function Ce(n,s){if(n&1&&(b(),M(0,"svg",8)),n&2){let e=m(3);p(e.cx("icon")),x("data-pc-section","icon")}}function ve(n,s){if(n&1&&(E(0),g(1,ge,1,4,"span",5)(2,Ce,1,3,"svg",6),z()),n&2){let e=m(2);l(),r("ngIf",e.checkboxIcon),l(),r("ngIf",!e.checkboxIcon)}}function _e(n,s){if(n&1&&(b(),M(0,"svg",9)),n&2){let e=m(2);p(e.cx("icon")),x("data-pc-section","icon")}}function ye(n,s){if(n&1&&(E(0),g(1,ve,3,2,"ng-container",2)(2,_e,1,3,"svg",4),z()),n&2){let e=m();l(),r("ngIf",e.checked),l(),r("ngIf",e._indeterminate())}}function Me(n,s){}function Ie(n,s){n&1&&g(0,Me,0,0,"ng-template")}var we=`
    ${he}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ve={root:({instance:n})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":n.checked,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-checkbox-sm p-inputfield-sm":n.size()==="small","p-checkbox-lg p-inputfield-lg":n.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ue=(()=>{class n extends ae{name="checkbox";theme=we;classes=Ve;static \u0275fac=(()=>{let e;return function(t){return(e||(e=a(n)))(t||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var De={provide:ne,useExisting:O(()=>be),multi:!0},be=(()=>{class n extends de{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=u();size=u();onChange=new y;onFocus=new y;onBlur=new y;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ie(this.value,this.modelValue())}_indeterminate=_(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=Q(ue);$variant=D(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let o,t=this.injector.get(te,null,{optional:!0,self:!0}),i=t&&!this.formControl?t.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=i.filter(c=>!oe(c,this.value)):o=i?[...i,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,o){o(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=a(n)))(t||n)}})();static \u0275cmp=k({type:n,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,t,i){if(o&1&&(N(i,xe,4),N(i,ce,4)),o&2){let c;w(c=V())&&(t.checkboxIconTemplate=c.first),w(c=V())&&(t.templates=c)}},viewQuery:function(o,t){if(o&1&&P(me,5),o&2){let i;w(i=V())&&(t.inputViewChild=i.first)}},hostVars:6,hostBindings:function(o,t){o&2&&(x("data-pc-name","checkbox")("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled()),p(t.cn(t.cx("root"),t.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",d],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",X],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",d],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",d],autofocus:[2,"autofocus","autofocus",d],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[Z([De,ue]),h,$],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(o,t){if(o&1){let i=G();B(0,"input",1,0),R("focus",function(f){return C(i),v(t.onInputFocus(f))})("blur",function(f){return C(i),v(t.onInputBlur(f))})("change",function(f){return C(i),v(t.handleChange(f))}),S(),B(2,"div"),g(3,ye,3,2,"ng-container",2)(4,Ie,1,0,null,3),S()}o&2&&(U(t.inputStyle),p(t.cn(t.cx("input"),t.inputClass)),r("checked",t.checked),x("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),l(2),p(t.cx("box")),l(),r("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),l(),r("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",K(19,fe,t.checked,t.cx("icon"))))},dependencies:[ee,J,W,Y,T,se,le],encapsulation:2,changeDetection:0})}return n})(),an=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=j({type:n});static \u0275inj=q({imports:[be,T,T]})}return n})();export{se as a,de as b,be as c,an as d};
