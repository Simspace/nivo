(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"+Ckz":function(e,t,r){var n=r("V2ZB"),o=r("tb+2");e.exports=function(e,t){return n(e,o(e),t)}},"0711":function(e,t,r){var n=r("WRuO"),o=r("WMT/"),a=r("F3Ab"),i=r("wnk4"),l=r("ArpJ"),u=r("Fldm"),c=r("e766"),p=r("+Ckz"),s=r("CIBY"),b=r("2AbI"),f=r("zIph"),d=r("s3t7"),y=r("316b"),h=r("iXK7"),v=r("FQMq"),g=r("PqlX"),m=r("tfj2"),j=r("Bpme"),x=r("9aUh"),O=r("CPLO"),S=r("h0av"),k={};k["[object Arguments]"]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k["[object Object]"]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k["[object Function]"]=k["[object WeakMap]"]=!1,e.exports=function e(t,r,w,V,A,B){var q,L=1&r,T=2&r,C=4&r;if(w&&(q=A?w(t,V,A,B):w(t)),void 0!==q)return q;if(!x(t))return t;var F=g(t);if(F){if(q=y(t),!L)return c(t,q)}else{var I=d(t),M="[object Function]"==I||"[object GeneratorFunction]"==I;if(m(t))return u(t,L);if("[object Object]"==I||"[object Arguments]"==I||M&&!A){if(q=T||M?{}:v(t),!L)return T?s(t,l(q,t)):p(t,i(q,t))}else{if(!k[I])return A?t:{};q=h(t,I,L)}}B||(B=new n);var E=B.get(t);if(E)return E;B.set(t,q),O(t)?t.forEach((function(n){q.add(e(n,r,w,n,t,B))})):j(t)&&t.forEach((function(n,o){q.set(o,e(n,r,w,o,t,B))}));var P=C?T?f:b:T?keysIn:S,z=F?void 0:P(t);return o(z||t,(function(n,o){z&&(n=t[o=n]),a(q,o,e(n,r,w,o,t,B))})),q}},"316b":function(e,t){var r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&r.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},"5+lF":function(e,t,r){var n=r("naAV");e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},"7qnD":function(e,t){var r=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}},A277:function(e,t,r){var n=r("Exs5"),o=r("UnPy");e.exports=function(e,t){return t.length<2?e:n(e,o(t,0,-1))}},ArpJ:function(e,t,r){var n=r("V2ZB"),o=r("Vujp");e.exports=function(e,t){return e&&n(t,o(t),e)}},"B4/L":function(e,t,r){var n=r("gwRl"),o=r("LBQr"),a=r("tb+2"),i=r("E7Xw"),l=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=o(e);return t}:i;e.exports=l},Bpme:function(e,t,r){var n=r("CIUO"),o=r("TsNJ"),a=r("DhoL"),i=a&&a.isMap,l=i?o(i):n;e.exports=l},CIBY:function(e,t,r){var n=r("V2ZB"),o=r("B4/L");e.exports=function(e,t){return n(e,o(e),t)}},CIUO:function(e,t,r){var n=r("s3t7"),o=r("T9Ud");e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},CPLO:function(e,t,r){var n=r("zlak"),o=r("TsNJ"),a=r("DhoL"),i=a&&a.isSet,l=i?o(i):n;e.exports=l},G9gt:function(e,t,r){var n=r("jgJv"),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},JCgZ:function(e,t,r){var n=r("VPOt"),o=r("/Qyy"),a=r("UzdM"),i=parseFloat,l=Math.min,u=Math.random;e.exports=function(e,t,r){if(r&&"boolean"!=typeof r&&o(e,t,r)&&(t=r=void 0),void 0===r&&("boolean"==typeof t?(r=t,t=void 0):"boolean"==typeof e&&(r=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=a(e),void 0===t?(t=e,e=0):t=a(t)),e>t){var c=e;e=t,t=c}if(r||e%1||t%1){var p=u();return l(e+p*(t-e+i("1e-"+((p+"").length-1))),t)}return n(e,t)}},JZQH:function(e,t,r){var n=r("sWZd"),o=r("mH3y"),a=r("A277"),i=r("cTHi");e.exports=function(e,t){return t=n(t,e),null==(e=a(e,t))||delete e[i(o(t))]}},PWxN:function(e,t,r){var n=r("NmMy"),o=r("0711"),a=r("JZQH"),i=r("sWZd"),l=r("V2ZB"),u=r("fdVR"),c=r("yF7r"),p=r("zIph"),s=c((function(e,t){var r={};if(null==e)return r;var c=!1;t=n(t,(function(t){return t=i(t,e),c||(c=t.length>1),t})),l(e,p(e),r),c&&(r=o(r,7,u));for(var s=t.length;s--;)a(r,t[s]);return r}));e.exports=s},VPOt:function(e,t){var r=Math.floor,n=Math.random;e.exports=function(e,t){return e+r(n()*(t-e+1))}},"WMT/":function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},XgN0:function(e,t,r){var n=r("O76R"),o=r("KXzt"),a=n((function(e,t,r){return e+(r?" ":"")+o(t)}));e.exports=a},cBF7:function(e,t,r){"use strict";r.r(t);var n=r("mXGw"),o=r.n(n),a=r("HVn3"),i=r.n(a),l=r("Qd/H"),u=r("ZS2m"),c=r("P9Va"),p=r.n(c),s=r("nLLr"),b=Object(s.c)({valueFormat:s.b}),f=r("Eo5u"),d=r("RQLE"),y=[{key:"data",type:"Array<Datum>",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:    string | number\n                label: string\n                value: number\n            }>\n            ```\n        ",required:!0},{key:"margin",group:"Base",type:"object",help:"Chart margin.",controlType:"margin"},{key:"direction",help:"Direction of the chart.",type:"string",required:!1,defaultValue:l.b.direction,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"interpolation",group:"Base",type:"string",help:"Part shape interpolation.",required:!1,defaultValue:l.b.interpolation,controlType:"radio",controlOptions:{choices:[{label:"smooth",value:"smooth"},{label:"linear",value:"linear"}]}},{key:"spacing",help:"Spacing between parts",type:"number",required:!1,defaultValue:l.b.spacing,controlType:"range",group:"Base",controlOptions:{min:0,max:30,unit:"px"}},{key:"shapeBlending",help:"Blend shapes.",type:"number",required:!1,defaultValue:l.b.shapeBlending,controlType:"range",group:"Base",controlOptions:{min:0,max:1,step:.01}},{key:"valueFormat",help:"\n            Value format supporting d3-format notation, this formatted value\n            will then be used for labels and tooltips.\n        ",type:"string | Function",required:!1,controlType:"valueFormat",group:"Base"},d.f,{key:"colors",help:"Defines how to compute parts color.",type:"string | Function | string[]",required:!1,defaultValue:l.b.colors,controlType:"ordinalColors",group:"Style"},{key:"fillOpacity",help:"Part background opacity.",required:!1,defaultValue:l.b.fillOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"borderWidth",help:"Width of part border.",type:"number",required:!1,defaultValue:l.b.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:l.b.borderColor,controlType:"inheritedColor",group:"Style"},{key:"borderOpacity",help:"Part border opacity.",required:!1,defaultValue:l.b.borderOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"enableLabel",help:"\n            Enable/disable labels. Use styles from\n            theme.labels.text.\n        ",type:"boolean",required:!1,defaultValue:l.b.enableLabel,controlType:"switch",group:"Labels"},{key:"labelColor",help:"Method to compute label color.",description:"\n            how to compute label color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:l.b.labelColor,controlType:"inheritedColor",group:"Labels"},{key:"enableBeforeSeparators",help:"\n            Enable/disable before separators.\n            Separators inherit styles from theme.grid.line.\n        ",type:"boolean",required:!1,defaultValue:l.b.enableBeforeSeparators,controlType:"switch",group:"Separators"},{key:"beforeSeparatorLength",help:"\n            Length of the before separator lines. You should add margin\n            for them to be visible if the value is greater than 0.\n        ",required:!1,defaultValue:l.b.beforeSeparatorLength,type:"number",controlType:"range",group:"Separators",controlOptions:{unit:"px",min:0,max:100}},{key:"beforeSeparatorOffset",help:"\n            Offset from the parts for the before separator lines.\n            You should add margin for them to be visible\n            if the value is greater than 0.\n        ",required:!1,defaultValue:l.b.beforeSeparatorOffset,type:"number",controlType:"range",group:"Separators",controlOptions:{unit:"px",min:0,max:100}},{key:"enableAfterSeparators",help:"\n            Enable/disable after separators.\n            Separators inherit styles from theme.grid.line.\n        ",type:"boolean",required:!1,defaultValue:l.b.enableAfterSeparators,controlType:"switch",group:"Separators"},{key:"afterSeparatorLength",help:"\n            Length of the after separator lines. You should add margin\n            for them to be visible if the value is greater than 0.\n        ",required:!1,defaultValue:l.b.afterSeparatorLength,type:"number",controlType:"range",group:"Separators",controlOptions:{unit:"px",min:0,max:100}},{key:"afterSeparatorOffset",help:"\n            Offset from the parts for the after separator lines.\n            You should add margin for them to be visible\n            if the value is greater than 0.\n        ",required:!1,defaultValue:l.b.afterSeparatorOffset,type:"number",controlType:"range",group:"Separators",controlOptions:{unit:"px",min:0,max:100}},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer must be a function.\n            \n            The layer function which will receive the chart's\n            context & computed data and must return a valid SVG element.\n        ",required:!1,type:"Array<string | Function>",defaultValue:l.b.layers},{key:"isInteractive",group:"Interactivity",type:"boolean",help:"Enable/disable interactivity.",required:!1,defaultValue:l.b.isInteractive,controlType:"switch"},{key:"currentPartSizeExtension",help:"\n            Expand part size by this amount of pixels on each side\n            when it's active \n        ",required:!1,defaultValue:l.b.currentPartSizeExtension,type:"number",controlType:"range",group:"Interactivity",controlOptions:{unit:"px",min:0,max:100}},{key:"currentBorderWidth",help:"Override default border width when a part is active.",required:!1,type:"number",controlType:"range",group:"Interactivity",controlOptions:{unit:"px",min:0,max:100}},{key:"onMouseEnter",group:"Interactivity",help:"onMouseEnter handler.",type:"(part, event) => void",required:!1},{key:"onMouseMove",group:"Interactivity",help:"onMouseMove handler.",type:"(part, event) => void",required:!1},{key:"onMouseLeave",group:"Interactivity",help:"onMouseLeave handler.",type:"(part, event) => void",required:!1},{key:"onClick",group:"Interactivity",help:"onClick handler.",type:"(part, event) => void",required:!1}].concat(Object(f.a)(Object(d.e)(["svg"],l.b,"react-spring"))),h=Object(d.d)(y),v=r("XgN0"),g=r.n(v),m=r("JCgZ"),j=r.n(m),x=function(){var e=1e5;return["sent","viewed","clicked","add_to_card","purchased"].map((function(t){return{id:"step_"+t,value:e=Math.round(e*j()(.6,.95)),label:g()(t)}}))},O={margin:{top:20,right:20,bottom:20,left:20},direction:l.b.direction,interpolation:l.b.interpolation,shapeBlending:l.b.shapeBlending,spacing:l.b.spacing,valueFormat:{format:">-.4s",enabled:!0},colors:{scheme:"spectral"},fillOpacity:l.b.fillOpacity,borderWidth:20,borderColor:l.b.borderColor,borderOpacity:l.b.borderOpacity,enableLabel:l.b.enableLabel,labelColor:{from:"color",modifiers:[["darker",3]]},enableBeforeSeparators:l.b.enableBeforeSeparators,beforeSeparatorLength:100,beforeSeparatorOffset:20,enableAfterSeparators:l.b.enableAfterSeparators,afterSeparatorLength:100,afterSeparatorOffset:20,isInteractive:!0,currentPartSizeExtension:10,currentBorderWidth:40,animate:!0,motionConfig:"wobbly"};t.default=function(){return o.a.createElement(u.a,{name:"Funnel",meta:p.a.Funnel,icon:"funnel",flavors:p.a.flavors,currentFlavor:"svg",properties:h,initialProperties:O,defaultProperties:l.b,propertiesMapper:b,generateData:x},(function(e,t,r,n){return o.a.createElement(l.c,Object.assign({data:t},e,{theme:i()({},r,{labels:{text:{fontSize:14}}}),onClick:function(e){n({type:"click",label:"[part] id: "+e.data.id+", value: "+e.data.value,color:e.color,data:e.data})}}))}))}},fdVR:function(e,t,r){var n=r("NfLg");e.exports=function(e){return n(e)?void 0:e}},iXK7:function(e,t,r){var n=r("naAV"),o=r("5+lF"),a=r("7qnD"),i=r("G9gt"),l=r("vvBr");e.exports=function(e,t,r){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return l(e,r);case"[object Map]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return a(e);case"[object Set]":return new u;case"[object Symbol]":return i(e)}}},nLLr:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));var n=r("PWxN"),o=r.n(n),a=r("KXzt"),i=r.n(a),l=function(e,t){var r=(void 0===t?{}:t).exclude,n=void 0===r?[]:r;return function(t,r){void 0===r&&(r={});var a={};return Object.keys(t).forEach((function(n){e[n]&&(a[n]=e[n](t[n],t,r))})),Object.assign({},o()(t,n),a)}},u=function(e){return function(t,r){return r["axis"+i()(e)].enable?o()(t,["enable"]):null}},c=function(e){var t=e.format;return!0===e.enabled?t:void 0}},wnk4:function(e,t,r){var n=r("V2ZB"),o=r("h0av");e.exports=function(e,t){return e&&n(t,o(t),e)}},zIph:function(e,t,r){var n=r("6TGQ"),o=r("B4/L"),a=r("Vujp");e.exports=function(e){return n(e,a,o)}},zlak:function(e,t,r){var n=r("s3t7"),o=r("T9Ud");e.exports=function(e){return o(e)&&"[object Set]"==n(e)}}}]);
//# sourceMappingURL=component---src-pages-funnel-index-js-72f67dad9620e2359dea.js.map