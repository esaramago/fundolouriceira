(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e7d4298"],{"1c62":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"o-content"},[a("div",{staticClass:"o-stack"},[a("h2",{staticClass:"a-title"},[t._v("Nova estadia")]),a("StayForm",{attrs:{isnew:!0}})],1)])},r=[],o=a("a4d0"),n={components:{StayForm:o["a"]}},i=n,c=(a("a04f"),a("2877")),d=Object(c["a"])(i,s,r,!1,null,"41e142da",null);e["default"]=d.exports},"7cf6":function(t,e,a){},a04f:function(t,e,a){"use strict";a("7cf6")},a4d0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.stay?a("form",{staticClass:"o-stack",on:{submit:t.addStay}},[a("div",{staticClass:"c-form",class:{"--has-error":t.responsibleError}},[a("label",{attrs:{for:"responsible"}},[t._v("Hóspede responsável")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.stay.responsible,expression:"stay.responsible"}],attrs:{name:"responsible",id:"responsible"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.stay,"responsible",e.target.multiple?a:a[0])},t.removeErrorLabel]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Seleciona")]),t._l(t.responsibles,(function(e){return a("option",{key:e[".key"],domProps:{value:e}},[t._v(t._s(e.name))])}))],2),a("p",{staticClass:"c-form__error"},[t._v(t._s(t.responsibleError))])]),a("div",{staticClass:"c-form --xs",class:{"--has-error":t.hostsError}},[a("label",{attrs:{for:"hosts"}},[t._v("Total de hóspedes")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stay.hosts,expression:"stay.hosts"}],attrs:{type:"number",name:"hosts",id:"hosts",min:"1",max:"15",placeholder:"0"},domProps:{value:t.stay.hosts},on:{input:[function(e){e.target.composing||t.$set(t.stay,"hosts",e.target.value)},t.removeErrorLabel]}}),a("p",{staticClass:"c-form__error"},[t._v(t._s(t.hostsError))])]),a("div",[a("div",{staticClass:"o-stack --inline"},[a("div",{staticClass:"c-form",class:{"--has-error":t.startDateError||t.datesError}},[a("label",{attrs:{for:"startDate"}},[t._v("Data de chegada")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stay.startDate,expression:"stay.startDate"}],attrs:{type:"date",name:"startDate",id:"startDate"},domProps:{value:t.stay.startDate},on:{input:[function(e){e.target.composing||t.$set(t.stay,"startDate",e.target.value)},t.onChangeDate]}}),a("p",{staticClass:"c-form__error"},[t._v(t._s(t.startDateError))])]),a("div",{staticClass:"c-form",class:{"--has-error":t.endDateError||t.datesError}},[a("label",{attrs:{for:"endDate"}},[t._v("Data de saída")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stay.endDate,expression:"stay.endDate"}],attrs:{type:"date",name:"endDate",id:"endDate"},domProps:{value:t.stay.endDate},on:{input:[function(e){e.target.composing||t.$set(t.stay,"endDate",e.target.value)},t.onChangeDate]}}),a("p",{staticClass:"c-form__error"},[t._v(t._s(t.endDateError))])])]),t.datesError?a("p",{staticClass:"c-form__error"},[t._v("A data de chegada tem de ser anterior à data de partida.")]):t._e()]),a("div",[a("button",{staticClass:"a-button"},[t.isnew?[t._v("Adicionar")]:[t._v("Gravar")]],2)])]):t._e()},r=[],o=(a("b0c0"),a("b38d")),n={props:{isnew:Boolean,stay:{type:Object,default:function(){return{responsible:"",hosts:null,startDate:null,endDate:null}}}},data:function(){return{responsibleError:"",hostsError:"",startDateError:"",endDateError:"",datesError:!1,responsibles:[{id:0,name:"Carina"},{id:1,name:"Emanuel"},{id:2,name:"Ludmila"},{id:3,name:"Rosinha"},{id:4,name:"Rute"},{id:5,name:"Vítor"}]}},methods:{addStay:function(t){t.preventDefault();var e,a,s=!1;if(this.stay.responsible||(this.responsibleError="Seleciona o teu nome",s=!0),this.stay.hosts||(this.hostsError="Indica o número total de hóspedes",s=!0),this.stay.startDate||(this.startDateError="Indica a data de chegada",s=!0),this.stay.endDate||(this.endDateError="Indica a data de partida",s=!0),this.stay.startDate&&this.stay.endDate&&(e=new Date(this.stay.startDate).getTime(),a=new Date(this.stay.endDate).getTime(),e>=a&&(this.datesError=!0,s=!0)),!s){var r=this;r.isnew?o["a"].collection(this.$stays).add(this.stay).catch((function(t){console.error("Error writing new message to database",t)})).then((function(){r.$router.push("historico"),r.$emit("show-toastr",{message:"Estadia adicionada com sucesso"}),r.$storeAudit("add",r.stay)})).catch((function(t){r.$emit("show-toastr",{message:"Não foi possível adicionar a estadia",type:"error"}),console.error(t)})):o["a"].collection(this.$stays).doc(this.stay.id).update(this.stay).catch((function(t){console.error("Error updating message to database",t)})).then((function(){r.$emit("stay-updated"),r.$emit("show-toastr",{message:"Estadia atualizada com sucesso"}),r.$storeAudit("update",r.stay)})).catch((function(t){r.$emit("show-toastr",{message:"Não foi possível atualizar a estadia",type:"error"}),console.error(t)}))}},onChangeDate:function(t){this.datesError=!1,this.removeErrorLabel(t)},removeErrorLabel:function(t){var e=t.currentTarget.name+"Error";this[e]=""}}},i=n,c=a("2877"),d=Object(c["a"])(i,s,r,!1,null,null,null);e["a"]=d.exports},b0c0:function(t,e,a){var s=a("83ab"),r=a("9bf2").f,o=Function.prototype,n=o.toString,i=/^\s*function ([^ (]*)/,c="name";s&&!(c in o)&&r(o,c,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-7e7d4298.b8830df2.js.map