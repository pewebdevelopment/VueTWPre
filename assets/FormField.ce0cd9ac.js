import{T as d,c as i,o as l,h as a,K as o,S as r,g as u,A as m,B as f,e as b}from"./index.09c86132.js";const g={class:"mb-6 last:mb-0"},h=["for"],p={key:1,class:"text-xs text-gray-500 dark:text-slate-400 mt-1"},S={__name:"FormField",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup(e){const n=d(),c=i(()=>{const t=[],s=n.default().length;return s>1&&t.push("grid grid-cols-1 gap-3"),s===2&&t.push("md:grid-cols-2"),t});return(t,s)=>(l(),a("div",g,[e.label?(l(),a("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},o(e.label),9,h)):r("",!0),u("div",{class:f(b(c))},[m(t.$slots,"default")],2),e.help?(l(),a("div",p,o(e.help),1)):r("",!0)]))}};export{S as _};
