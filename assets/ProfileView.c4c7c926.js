import{o as i,a as x,w as a,g as t,b as e,e as s,aF as I,aG as H,h as p,aH as K,K as u,z,A as J,aI as W,f as r,m as b,H as y,aJ as D,j as f,S as B,c as Q,aK as X,aL as Z,aM as ee,u as te,D as U,E as T,_ as ae,d as g,ar as se,aN as P,i as le,r as M,F as O,J as k,P as E,G as F,I as w,l as oe,M as j,p as re,aO as ne,aP as ie,aQ as de,aR as ce,aS as ue,aT as me,aU as _e,aV as fe,aW as pe,aX as be,N as he,ax as ye,aY as L}from"./index.09c86132.js";import{_ as h}from"./FormField.ce0cd9ac.js";import{_ as A}from"./FormFilePicker.91e3b684.js";const xe={class:"absolute right-0 bottom-0"},ge={__name:"UserAvatarCurrentUserWithUpload",setup(l){return(d,c)=>(i(),x(H,{class:"relative"},{default:a(()=>[t("div",xe,[e(A,{icon:s(I),"is-round-icon":""},null,8,["icon"])])]),_:1}))}},we={class:"text-center"},ve={class:"text-xl font-medium"},$e={class:"text-xs uppercase"},v={__name:"UserCardProfileNumber",props:{number:{type:Number,required:!0},label:{type:String,required:!0}},setup(l){return(d,c)=>(i(),p("div",we,[t("h2",ve,[e(K,{value:l.number},null,8,["value"])]),t("p",$e,u(l.label),1)]))}},Se={},ke={class:"rounded-2xl py-12 px-6 lg:px-12 text-center"};function Ce(l,d){return i(),p("div",ke,[J(l.$slots,"default")])}const Ve=z(Se,[["render",Ce]]),Pe=t("h1",{class:"text-3xl text-white mb-6"},[b(" Like the project? Please star on "),t("b",null,"GitHub"),b(" ;-) ")],-1),je={__name:"SectionBannerProfile",setup(l){return(d,c)=>(i(),x(Ve,{class:"bg-gradient-to-tr from-cyan-400 via-violet-400 to-purple-500"},{default:a(()=>[Pe,t("div",null,[e(r,{href:"https://github.com/justboil/admin-one-vue-tailwind",icon:s(W),label:"GitHub",target:"_blank","rounded-full":""},null,8,["icon"])])]),_:1}))}},De={class:"md:flex md:justify-between md:items-center"},Ne={class:"mt-6 md:mt-0 flex justify-between md:justify-end items-center"},qe={class:"text-gray-500 mr-6"},Ue={class:"text-2xl font-semibold"},Te={__name:"CardBoxBillingItem",props:{date:{type:String,required:!0},amount:{type:[String,Number],required:!0}},setup(l){return(d,c)=>(i(),x(f,{class:"mb-6"},{default:a(()=>[t("div",De,[e(y,{type:"justify-center md:justify-start"},{default:a(()=>[e(r,{label:"View invoice",color:"lightDark",small:""}),e(r,{label:"PDF",color:"lightDark",small:""})]),_:1}),t("div",Ne,[t("p",qe,u(l.date),1),e(D,{color:"info",label:"Paid",class:"mr-6"}),t("h2",Ue,"$"+u(l.amount),1)])])]),_:1}))}},Me="/assets/mc-light-bg.25bebdb1.svg",Oe="/assets/visa-blue.afdaafc5.svg",Ee={class:"flex items-center justify-center h-12 w-20 bg-gray-100 dark:bg-gray-800 rounded-lg"},Fe={key:0,src:Me,class:"dark:grayscale h-8 md:h-10"},Le={key:1,src:Oe,class:"dark:grayscale dark:invert"},Be={__name:"CreditCardLogo",props:{cardType:{type:String,required:!0,validator:l=>["mc","visa"].indexOf(l)>-1}},setup(l){return(d,c)=>(i(),p("div",Ee,[l.cardType==="mc"?(i(),p("img",Fe)):l.cardType==="visa"?(i(),p("img",Le)):B("",!0)]))}},Ae={class:"md:flex md:justify-between md:items-center"},Ye={class:"flex justify-start items-center mb-6 md:mb-0"},Ge={class:"mr-6"},Re={class:"text-xl font-semibold"},Ie={class:"text-gray-500 text-sm uppercase"},He={__name:"CardBoxPaymentMethod",props:{cardType:{type:String,required:!0,validator:l=>["mc","visa"].indexOf(l)>-1},cardNumber:{type:String,required:!0},cardExpires:{type:String,required:!0},cardOwner:{type:String,required:!0},isPrimary:Boolean},setup(l){const d=l,c={mc:"MasterCard",visa:"Visa"},m=Q(()=>c[d.cardType]);return(N,q)=>(i(),x(f,{class:"mb-6"},{default:a(()=>[t("div",Ae,[t("div",Ye,[e(Be,{class:"mr-6","card-type":l.cardType},null,8,["card-type"]),t("div",Ge,[t("h2",Re,u(s(m))+" "+u(l.cardNumber),1),t("p",Ie,u(l.cardExpires)+" "+u(l.cardOwner),1)]),l.isPrimary?(i(),x(D,{key:0,color:"info",icon:s(X),label:"Primary",small:""},null,8,["icon"])):B("",!0)]),e(y,{type:"justify-end md:justify-start"},{default:a(()=>[e(r,{icon:s(Z),color:"lightDark"},null,8,["icon"]),e(r,{icon:s(ee),color:"lightDark"},null,8,["icon"])]),_:1})])]),_:1}))}},Ke={class:"grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6"},ze={class:"flex justify-start items-start"},Je={class:"flex-1"},We={class:"flex justify-between items-center"},Qe={class:"flex justify-start items-center mb-3"},Xe={class:"text-2xl mr-1.5"},Ze=t("b",null,"Payment date",-1),et=b(" is approaching soon. "),tt={class:"md:flex md:justify-between md:items-center"},at={class:"md:flex md:items-center"},st={class:"mb-6 text-center md:mr-6 md:mb-0 md:text-left"},lt=t("p",{class:"text-gray-500"},"Next payment on",-1),ot={class:"text-xl font-semibold"},rt={class:"mb-6 text-center md:mb-0 md:text-left"},nt=t("p",{class:"text-gray-500"},"Last billed on",-1),it={class:"text-xl"},dt=t("div",{class:"text-center md:text-right"},[t("p",{class:"text-gray-500"},"Amount due"),t("h1",{class:"text-2xl font-semibold"},"$24.99")],-1),ct={class:"flex items-center justify-between"},ut=b(" Last login "),mt=b(" from IP "),_t=t("b",null,"192.168.100.99",-1),ft={class:"flex items-center justify-between"},pt={class:"mr-3 leading-none"},bt=b(" API status "),ht={class:"flex items-center justify-between"},yt={class:"flex items-center justify-start"},xt=t("p",{class:"mr-3 leading-none"},"2-factor authentication",-1),gt={class:"flex items-center justify-between"},wt=t("p",null,[b(" Password changed "),t("b",null,"long time ago")],-1),vt={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Vt={__name:"ProfileView",setup(l){const d=te(),c=U({name:d.userName,email:d.userEmail}),m=U({password_current:"",password:"",password_confirmation:""}),N=()=>{d.setUser(c)},q=()=>{},_=new Date,$={weekday:"short",year:"numeric",month:"short",day:"numeric"},Y=new Date(_.getFullYear(),_.getMonth()+1,1).toLocaleDateString("en-US",$),C=new Date(_.getFullYear(),_.getMonth(),1).toLocaleDateString("en-US",$),G=[{id:1,amount:24.99,date:C},{id:2,amount:24.99,date:new Date(_.getFullYear(),_.getMonth()-1,1).toLocaleDateString("en-US",$)},{id:3,amount:24.99,date:new Date(_.getFullYear(),_.getMonth()-2,1).toLocaleDateString("en-US",$)}],R=[{id:1,cardType:"mc",cardNumber:"4575",cardExpires:"04/24",cardOwner:"john doe",isPrimary:!0},{id:2,cardType:"visa",cardNumber:"0785",cardExpires:"06/26",cardOwner:"john doe",isPrimary:!1}],V=T(!0),S=T(!0);return($t,n)=>(i(),x(ae,null,{default:a(()=>[e(oe,null,{default:a(()=>[e(g,{icon:s(j),title:"Profile",main:""},{default:a(()=>[e(r,{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",label:"Buy dashboard",icon:s(re),color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),t("div",Ke,[e(f,{flex:"flex-row",class:"items-center"},{default:a(()=>[t("div",ze,[e(ge,{class:"w-24 h-24 md:w-36 md:h-36 mr-6"}),t("div",Je,[t("div",We,[t("div",Qe,[t("h1",Xe,u(s(d).userName),1),e(se,{path:s(ne),size:22,class:"text-blue-400"},null,8,["path"])]),e(r,{icon:s(ie),color:"lightDark",small:"","rounded-full":""},null,8,["icon"])]),e(y,{class:"text-gray-500"},{default:a(()=>[e(P,{label:"Developer",icon:s(de)},null,8,["icon"]),e(P,{label:"Kiehn-Green",icon:s(ce)},null,8,["icon"]),e(P,{label:"Emelyside",icon:s(ue)},null,8,["icon"])]),_:1}),e(y,{class:"mt-6","class-addon":"mr-9 last:mr-0 mb-3"},{default:a(()=>[e(v,{number:499,label:"Likes"}),e(v,{number:128,label:"Posts"}),e(v,{number:256,label:"Media"}),e(v,{number:384,label:"Links"}),e(v,{number:512,label:"Files"})]),_:1})])])]),_:1}),e(je)]),e(g,{icon:s(me),title:"Billing overview"},null,8,["icon"]),e(f,{class:"mb-6"},{default:a(()=>[e(le,{color:"info",icon:s(_e)},{right:a(()=>[e(r,{label:"See details",small:"","rounded-full":""})]),default:a(()=>[Ze,et]),_:1},8,["icon"]),t("div",tt,[t("div",at,[t("div",st,[lt,t("h1",ot,u(s(Y)),1)]),t("div",rt,[nt,t("h1",it,u(s(C)),1)])]),dt])]),_:1}),(i(),p(O,null,M(G,o=>e(Te,{key:o.id,amount:o.amount,date:o.date},null,8,["amount","date"])),64)),e(g,{icon:s(fe),title:"Payment methods"},{default:a(()=>[e(r,{label:"Add card",color:"info",icon:s(pe),small:""},null,8,["icon"])]),_:1},8,["icon"]),(i(),p(O,null,M(R,o=>e(He,{key:o.id,"card-type":o.cardType,"card-number":o.cardNumber,"card-expires":o.cardExpires,"card-owner":o.cardOwner,"is-primary":o.isPrimary},null,8,["card-type","card-number","card-expires","card-owner","is-primary"])),64)),e(g,{icon:s(be),title:"Security options"},null,8,["icon"]),e(f,{class:"mb-6"},{default:a(()=>[t("div",ct,[t("p",null,[ut,t("b",null,u(s(C)),1),mt,_t]),e(r,{label:"Manage sessions",color:"lightDark",small:""})]),e(k),t("div",ft,[t("p",pt,[bt,t("b",null,u(V.value?"enabled":"disabled"),1)]),e(E,{modelValue:V.value,"onUpdate:modelValue":n[0]||(n[0]=o=>V.value=o),type:"switch",name:"api-status","input-value":!0},null,8,["modelValue"])]),e(k),t("div",ht,[t("div",yt,[xt,e(D,{color:S.value?"info":"danger",label:S.value?"enabled":"disabled",small:""},null,8,["color","label"])]),e(E,{modelValue:S.value,"onUpdate:modelValue":n[1]||(n[1]=o=>S.value=o),type:"switch",name:"two-factor","input-value":!0},null,8,["modelValue"])]),e(k),t("div",gt,[wt,e(r,{label:"Change password",color:"lightDark",small:""})])]),_:1}),e(g,{icon:s(j),title:"Manage profile"},null,8,["icon"]),t("div",vt,[e(f,{"is-form":"",onSubmit:F(N,["prevent"])},{footer:a(()=>[e(y,null,{default:a(()=>[e(r,{color:"info",type:"submit",label:"Submit"}),e(r,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(h,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(A,{label:"Upload"})]),_:1}),e(h,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(w,{modelValue:c.name,"onUpdate:modelValue":n[2]||(n[2]=o=>c.name=o),icon:s(j),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(h,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(w,{modelValue:c.email,"onUpdate:modelValue":n[3]||(n[3]=o=>c.email=o),icon:s(he),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(f,{"is-form":"",onSubmit:F(q,["prevent"])},{footer:a(()=>[e(y,null,{default:a(()=>[e(r,{type:"submit",color:"info",label:"Submit"}),e(r,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(h,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(w,{modelValue:m.password_current,"onUpdate:modelValue":n[4]||(n[4]=o=>m.password_current=o),icon:s(ye),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(k),e(h,{label:"New password",help:"Required. New password"},{default:a(()=>[e(w,{modelValue:m.password,"onUpdate:modelValue":n[5]||(n[5]=o=>m.password=o),icon:s(L),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(h,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(w,{modelValue:m.password_confirmation,"onUpdate:modelValue":n[6]||(n[6]=o=>m.password_confirmation=o),icon:s(L),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};export{Vt as default};