(this["webpackJsonpreh-hospitel-app"]=this["webpackJsonpreh-hospitel-app"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(15),r=a.n(c),o=(a(63),a(64),a(65),a(66),a(24)),s=a(25),m=a(27),u=a(26),i=a(12),d=a.n(i),p=a(3),b=a(16),E=a(7),g=a(4),h=a(28),f=a.n(h),v=a(29),N=a.n(v),_=a(22),x=a.n(_),y=a(33),O=a.n(y);var j=function(){var e=function(e){return e<10?"0"+e:e},t=new Date,a=e(t.getDate()),n=e(parseInt(t.getMonth())+1),l=t.getFullYear();return"".concat(l,"-").concat(n,"-").concat(a)}(),w=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(g.a)(r,2),s=o[0],m=o[1],u=Object(n.useState)(""),i=Object(g.a)(u,2),b=i[0],E=i[1],h=Object(n.useState)(""),v=Object(g.a)(h,2),_=v[0],y=v[1],w=Object(n.useState)(""),k=Object(g.a)(w,2),S=k[0],C=k[1],I=Object(n.useState)(""),D=Object(g.a)(I,2),A=D[0],P=D[1],q=Object(n.useState)(""),L=Object(g.a)(q,2),B=L[0],R=L[1],U=Object(n.useState)(""),T=Object(g.a)(U,2),J=T[0],W=T[1],z=Object(n.useState)(""),Y=Object(g.a)(z,2),F=Y[0],H=Y[1],M=Object(n.useState)(""),K=Object(g.a)(M,2),Q=K[0],V=K[1],$=Object(n.useState)(""),G=Object(g.a)($,2),X=G[0],Z=G[1],ee=Object(n.useState)(""),te=Object(g.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(""),ce=Object(g.a)(le,2),re=ce[0],oe=ce[1],se=Object(n.useState)(""),me=Object(g.a)(se,2),ue=me[0],ie=me[1],de=Object(n.useState)(""),pe=Object(g.a)(de,2),be=pe[0],Ee=pe[1],ge=Object(n.useState)(j),he=Object(g.a)(ge,2),fe=he[0],ve=he[1],Ne=Object(n.useState)(""),_e=Object(g.a)(Ne,2),xe=_e[0],ye=_e[1],Oe=Object(n.useState)(""),je=Object(g.a)(Oe,2),we=je[0],ke=je[1],Se=Object(n.useState)(""),Ce=Object(g.a)(Se,2),Ie=Ce[0],De=Ce[1],Ae=Object(n.useState)(""),Pe=Object(g.a)(Ae,2),qe=Pe[0],Le=Pe[1],Be=Object(n.useState)(""),Re=Object(g.a)(Be,2),Ue=Re[0],Te=Re[1],Je=Object(n.useState)(""),We=Object(g.a)(Je,2),ze=We[0],Ye=We[1],Fe=Object(n.useState)(0),He=Object(g.a)(Fe,2),Me=He[0],Ke=He[1],Qe=Object(n.useState)(0),Ve=Object(g.a)(Qe,2),$e=Ve[0],Ge=Ve[1],Xe=Object(n.useState)(0),Ze=Object(g.a)(Xe,2),et=Ze[0],tt=Ze[1],at=Object(n.useState)(0),nt=Object(g.a)(at,2),lt=nt[0],ct=nt[1],rt=Object(n.useState)(0),ot=Object(g.a)(rt,2),st=ot[0],mt=ot[1],ut=Object(n.useState)(0),it=Object(g.a)(ut,2),dt=it[0],pt=it[1],bt=Object(n.useState)(0),Et=Object(g.a)(bt,2),gt=Et[0],ht=Et[1],ft=Object(n.useState)(0),vt=Object(g.a)(ft,2),Nt=vt[0],_t=vt[1],xt=Object(n.useState)(0),yt=Object(g.a)(xt,2),Ot=yt[0],jt=yt[1],wt=Object(n.useState)(0),kt=Object(g.a)(wt,2),St=kt[0],Ct=kt[1],It=Object(n.useState)(0),Dt=Object(g.a)(It,2),At=Dt[0],Pt=Dt[1],qt=function(e){if(""!==e){var t="".concat(N.a.main_config.APP_URL,"/getPatientByCID/").concat(e);f.a.get(t,{headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&(e.data.data.length>0?e.data.data.map((function(e){c(!0),Z(e.pname),ne(e.fname),oe(e.lname),Ee(e.bedno),E(e.hn),y(e.an),C(e.vn),W(e.regdate),H(e.dchdate_plan)})):(c(!1),Ee(""),d.a.fire({title:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25!",text:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19\u0e43\u0e2b\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",icon:"error"})))})).catch((function(e){(""+e).indexOf("Network")>-1?d.a.fire({title:"Can't connect service!",text:"Please try again.",icon:"error"}):d.a.fire({title:"Error",text:""+e,icon:"error"})}))}},Lt=function(){x.a.init({liffId:"1655908292-5Y1rqwK3"},(function(){x.a.isLoggedIn()?x.a.getProfile().then((function(e){m(e.userId),function(e){if(""!==e){var t="".concat(N.a.main_config.APP_URL,"/getUserByUserID/").concat(e);f.a.get(t,{headers:{"Content-Type":"application/json"}}).then((function(e){e.data.data.length>0?e.data.data.map((function(e){c(!0),Z(e.pname),ne(e.fname),oe(e.lname),Ee(e.bedno),E(e.hn),y(e.an),C(e.vn),W(e.regDate),H(e.dchDate),V(e.phone),P(e.weight),R(e.height)})):d.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e43\u0e19\u0e23\u0e30\u0e1a\u0e1a \u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",icon:"warning"})})).catch((function(e){(""+e).indexOf("Network")>-1?d.a.fire({title:"Can't connect service!",text:"Please try again.",icon:"error"}):d.a.fire({title:"Error",text:""+e,icon:"error"})}))}}(e.userId)})):console.log("No login!")}),(function(e){return console.log(e)}))};return Object(n.useEffect)((function(){Lt()}),[]),l.a.createElement("div",{className:"flyout"},l.a.createElement("img",{src:O.a,alt:"\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2a\u0e19\u0e32\u0e21\u0e23\u0e49\u0e2d\u0e22\u0e40\u0e2d\u0e47\u0e14"}),l.a.createElement("div",{className:"ml-2 mr-2 mb-3",style:{marginTop:"118px"}},l.a.createElement(p.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(p.h,null,l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"12",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(p.d,null,l.a.createElement(p.e,{md:"12"},l.a.createElement("div",{className:"blue-text"},l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"12"},l.a.createElement("h5",{className:"text-center font-weight-bold blue lighten-5 py-2",style:{borderRadius:"20px"}},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19")))),l.a.createElement("form",{className:"needs-validation",onSubmit:function(e){if(e.preventDefault(),""!==X){e.target.className+=" was-validated";var t={user_id:s,pname:X,fname:ae,lname:re,cid:ue,an:_,hn:b,vn:S,bedno:be,regdate:J,dchdate_plan:F,weight:A,height:B,phone:Q,created_date:""},a={evaluation_id:xe,user_id:s,user_evaluation_date:fe,user_evaluation_sys:we,user_evaluation_dia:Ie,user_evaluation_pr:qe,user_evaluation_temp:Ue,user_evaluation_oxygen:ze,user_evaluation_cough:Me,user_evaluation_phlegm:$e,user_evaluation_gasp:et,user_evaluation_taste:lt,user_evaluation_muscle:st,user_evaluation_liquid:dt,user_evaluation_rash:gt,user_evaluation_fever:Nt,user_evaluation_snot:Ot,user_evaluation_redeye:St,user_evaluation_tired:At,created_date:""},n="".concat(N.a.main_config.APP_URL,"/saveData");f.a.post(n,{formDataUser:t,formDataUserEvaluation:a}).then((function(e){200===e.data.status_code?d.a.fire({title:e.data.msg,text:"\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e48\u0e30",showDenyButton:!1,showCancelButton:!1,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07",icon:e.data.type}).then((function(e){e.isConfirmed&&x.a.closeWindow()})):d.a.fire({title:"\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:e.data.msg,icon:e.data.type})})).catch((function(e){console.log(JSON.stringify(e))}))}else d.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19 \u0e01\u0e48\u0e2d\u0e19\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",icon:"warning"})}},l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"12"},l.a.createElement("label",{className:"grey-text"},"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",l.a.createElement("span",{className:"text-danger ml-1"},"*")),l.a.createElement("input",{type:"number",className:"form-control",placeholder:"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",value:ue,onKeyDown:function(e){13===e.keyCode&&qt(e.target.value)},onChange:function(e){ie(e.target.value)},required:!0}),l.a.createElement("small",{className:"red-text pl-2"},"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2b\u0e25\u0e31\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"),l.a.createElement("br",null),l.a.createElement(p.c,{color:"primary",className:"mt-1 mb-3",size:"sm",onClick:function(){return qt(ue)}},"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a"))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8"},l.a.createElement("label",{className:"grey-text"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23",l.a.createElement("span",{className:"text-danger ml-1"},"*")),l.a.createElement("input",{type:"text",className:"form-control mb-3 col-8",onChange:function(e){return V(e.target.value)},value:Q,placeholder:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e30\u0e1a\u0e38\u0e40\u0e1a\u0e2d\u0e23\u0e4c",maxLength:"10",required:!0}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{className:"col-6"},l.a.createElement("label",{className:"grey-text"},"\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01 (\u0e01\u0e01.)",l.a.createElement("span",{className:"text-danger ml-1"},"*")),l.a.createElement("input",{type:"number",className:"form-control mb-3 col-12",onChange:function(e){return P(e.target.value)},value:A,placeholder:"\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01",maxLength:"5",required:!0})),l.a.createElement(p.e,{className:"col-6"},l.a.createElement("label",{className:"grey-text"},"\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e39\u0e07 (\u0e0b\u0e21.)",l.a.createElement("span",{className:"text-danger ml-1"},"*")),l.a.createElement("input",{type:"number",className:"form-control mb-3 col-12",onChange:function(e){return R(e.target.value)},value:B,placeholder:"\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e39\u0e07",maxLength:"3",required:!0}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{className:"col-12"},a&&l.a.createElement("div",null,l.a.createElement("label",{className:"grey-text mr-3"},"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"),l.a.createElement("strong",null,ue),l.a.createElement("br",null),l.a.createElement("label",{className:"grey-text mr-3"},"HN"),l.a.createElement("strong",null,b),l.a.createElement("br",null),l.a.createElement("label",{className:"grey-text mr-3"},"\u0e0a\u0e37\u0e48\u0e2d - \u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"),l.a.createElement("strong",null,"".concat(X).concat(ae," ").concat(re)),l.a.createElement("br",null),l.a.createElement("label",{className:"grey-text mr-3"},"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e40\u0e15\u0e35\u0e22\u0e07"),l.a.createElement("strong",null,"".concat(be))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"blue-text"},l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"12"},l.a.createElement("h5",{className:"text-center font-weight-bold blue lighten-5 py-2",style:{borderRadius:"20px"}},"\u0e1f\u0e2d\u0e23\u0e4c\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19")))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"12",className:"mb-3"},l.a.createElement("label",{className:"grey-text"},"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19",l.a.createElement("span",{className:"text-danger ml-1"},"*")),l.a.createElement("input",{type:"date",name:"regis_date",className:"form-control",onChange:function(e){return ve(e.target.value)},value:fe,required:!0}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"12",className:"mb-3"},l.a.createElement("label",{className:"grey-text"},"\u0e23\u0e2d\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19",l.a.createElement("span",{className:"text-danger ml-1"},"*")),l.a.createElement("div",null,l.a.createElement("div",{className:"custom-control custom-checkbox mb-2 "},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"evaluation1",name:"evaluation",value:"1",onChange:function(e){return ye(e.target.value)}}),l.a.createElement("label",{className:"custom-control-label",for:"evaluation1"},"\u0e23\u0e2d\u0e1a\u0e17\u0e35\u0e48 1 \u0e40\u0e27\u0e25\u0e32 07.00 - 08.30 \u0e19.")),l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"evaluation2",name:"evaluation",value:"2",onChange:function(e){return ye(e.target.value)}}),l.a.createElement("label",{className:"custom-control-label",for:"evaluation2"},"\u0e23\u0e2d\u0e1a\u0e17\u0e35\u0e48 2 \u0e40\u0e27\u0e25\u0e32 14.00 - 15.00 \u0e19."))))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8"},l.a.createElement("label",{className:"blue-text"},"SYS (mmHg)"),l.a.createElement("input",{type:"number",className:"form-control mb-3 col-8",onChange:function(e){return ke(e.target.value)}}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8"},l.a.createElement("label",{className:"blue-text"},"DIA (mmHg)"),l.a.createElement("input",{type:"number",className:"form-control mb-3 col-8",onChange:function(e){return De(e.target.value)}}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8"},l.a.createElement("label",{className:"blue-text"},"PR (bpm)"),l.a.createElement("input",{type:"number",className:"form-control mb-3 col-8",onChange:function(e){return Le(e.target.value)}}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8"},l.a.createElement("label",{className:"blue-text"},"%SpO2"),l.a.createElement("input",{type:"number",className:"form-control col-8",onChange:function(e){Ye(e.target.value)}}),l.a.createElement("small",{className:"orange-text"},"\u0e04\u0e48\u0e32\u0e2d\u0e2d\u0e01\u0e0b\u0e34\u0e40\u0e08\u0e19\u0e43\u0e19\u0e40\u0e25\u0e37\u0e2d\u0e14 \u0e04\u0e48\u0e32\u0e2a\u0e38\u0e07\u0e2a\u0e38\u0e14\u0e44\u0e21\u0e48\u0e40\u0e01\u0e34\u0e19 100"))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8"},l.a.createElement("label",{className:"blue-text"},"\u0e2d\u0e38\u0e13\u0e2b\u0e20\u0e39\u0e21\u0e34\u0e23\u0e48\u0e32\u0e07\u0e01\u0e32\u0e22 ( \u0e4dC) \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 36.5"),l.a.createElement("input",{type:"number",className:"form-control mb-3 col-8",onChange:function(e){return Te(e.target.value)}}))),l.a.createElement(p.n,null,l.a.createElement(p.e,{md:"8",className:"mt-4"},l.a.createElement("label",{className:"blue-text"},"\u0e17\u0e48\u0e32\u0e19\u0e21\u0e35\u0e2d\u0e32\u0e01\u0e32\u0e23\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48"),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_fever",name:"user_evaluation_fever",onClick:function(e){e.target.checked?_t(1):_t(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_fever"},1===Nt?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e21\u0e35\u0e44\u0e02\u0e49")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_cough",name:"user_evaluation_cough",onClick:function(e){e.target.checked?Ke(1):Ke(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_cough"},1===Me?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e44\u0e2d")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_phlegm",name:"user_evaluation_phlegm",onClick:function(e){e.target.checked?Ge(1):Ge(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_phlegm"},1===$e?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e21\u0e35\u0e40\u0e2a\u0e21\u0e2b\u0e30")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_gasp",name:"user_evaluation_gasp",onClick:function(e){e.target.checked?tt(1):tt(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_gasp"},1===et?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e2b\u0e2d\u0e1a\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_taste",name:"user_evaluation_taste",onClick:function(e){e.target.checked?ct(1):ct(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_taste"},1===lt?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e01\u0e25\u0e34\u0e48\u0e19 / \u0e23\u0e31\u0e1a\u0e23\u0e2a")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_muscle",name:"user_evaluation_muscle",onClick:function(e){e.target.checked?mt(1):mt(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_muscle"},1===st?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e1b\u0e27\u0e14\u0e01\u0e25\u0e49\u0e32\u0e21\u0e40\u0e19\u0e37\u0e49\u0e2d")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_liquid",name:"user_evaluation_liquid",onClick:function(e){e.target.checked?pt(1):pt(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_liquid"},1===dt?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e16\u0e48\u0e32\u0e22\u0e40\u0e2b\u0e25\u0e27")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_rash",name:"user_evaluation_rash",onClick:function(e){e.target.checked?ht(1):ht(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_rash"},1===gt?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e1c\u0e37\u0e48\u0e19")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_snot",name:"user_evaluation_snot",onClick:function(e){e.target.checked?jt(1):jt(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_snot"},1===Ot?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e21\u0e35\u0e19\u0e49\u0e33\u0e21\u0e39\u0e01")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_redeye",name:"user_evaluation_redeye",onClick:function(e){e.target.checked?Ct(1):Ct(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_redeye"},1===St?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e15\u0e32\u0e41\u0e14\u0e07")),l.a.createElement("div",{className:"custom-control custom-switch mb-2"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"user_evaluation_tired",name:"user_evaluation_tired",onClick:function(e){e.target.checked?Pt(1):Pt(0)}}),l.a.createElement("label",{className:"custom-control-label",for:"user_evaluation_tired"},1===At?l.a.createElement("small",{className:"pr-3 blue-text"},"\u0e21\u0e35"):l.a.createElement("small",{className:"pr-3 grey-text"},"\u0e44\u0e21\u0e48\u0e21\u0e35"),"\u0e2d\u0e48\u0e2d\u0e19\u0e40\u0e1e\u0e25\u0e35\u0e22")))),l.a.createElement("hr",null),l.a.createElement(p.c,{color:"info",type:"submit",className:"mt-4"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"))))))))))},k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:w}),l.a.createElement(E.a,{exact:!0,path:"/hospitel-reh-app",component:w}),l.a.createElement(E.a,{render:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"error-template"},l.a.createElement("h1",null,"Oops!"),l.a.createElement("h2",null,"404 Not Found"),l.a.createElement("div",{className:"error-details"},"Sorry, an error has occured, Requested page not found!")))))}}))}}]),a}(l.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={collapseID:"",modal:!localStorage.getItem("isNoShow")||JSON.parse(localStorage.getItem("isNoShow")),isShow:!1,isAdmin:!1},e.toggleCollapse=function(t){return function(){return e.setState((function(e){return{collapseID:e.collapseID!==t?t:""}}))}},e.closeCollapse=function(t){return function(){var a=e.state.collapseID;window.scrollTo(0,0),a===t&&e.setState({collapseID:""})}},e.toggle=function(){e.setState({modal:!e.state.modal})},e.handleCheckBox=function(e){e.target.checked&&localStorage.setItem("isNoShow",JSON.stringify(!e.target.checked))},e.checkAdmin=function(){localStorage.getItem("isAdmin")?window.location="#/reh-risk/showdata":(localStorage.removeItem("isAdmin"),d.a.fire({title:"\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e08\u0e49\u0e32\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48",input:"password",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07",showLoaderOnConfirm:!0,preConfirm:function(e){return"QCC@101"===e||d.a.showValidationMessage("\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e08\u0e49\u0e32\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07")}}).then((function(e){e.value&&(localStorage.setItem("isAdmin",!0),window.location="#/reh-risk/showdata")})))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("isAdmin")&&this.setState({isAdmin:!0})}},{key:"render",value:function(){this.toggleCollapse("mainNavbarCollapse"),this.state.collapseID;return l.a.createElement(b.a,null,l.a.createElement("div",{className:"flyout teal accent-4"},l.a.createElement("main",null,l.a.createElement(k,null)),l.a.createElement(p.g,{className:"font-small elegant-color-dark"},l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(p.f,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright"," ",l.a.createElement("a",{href:"http://reh.go.th",rel:"noopener"}," ","\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e23\u0e49\u0e2d\u0e22\u0e40\u0e2d\u0e47\u0e14"),l.a.createElement("a",{href:"tel:043518200",className:"ml-3"},"\u0e42\u0e17\u0e23.",l.a.createElement(p.i,{icon:"phone-alt",className:"text-white ml-2 mr-1"}),"043-518200 \u0e15\u0e48\u0e2d 9000"))))))}}]),a}(n.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hospitel-reh-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{var e="".concat("/hospitel-reh-app","/service-worker.js");C?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):I(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):I(e)})}}()},29:function(e,t){t.main_config={APP_URL:"https://api-reh-1meeting-forward.herokuapp.com/hospitel"}},33:function(e,t,a){e.exports=a.p+"static/media/banner_register.7f718e64.png"},58:function(e,t,a){e.exports=a(111)},66:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.073312e2.chunk.js.map