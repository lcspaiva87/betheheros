(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.21a6d733.svg"},30:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(38),a(7)),u=a(12),s=a(2),i=a.n(s),m=a(9),p=a(3),f=a(10),E=(a(41),a(29)),d=a.n(E).a.create({baseURL:"http://localhost:3333"}),h=a(11),b=a.n(h),v=a(30),g=a.n(v);function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)();function s(){return(s=Object(m.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.post("sessions",{id:a});case 4:n=e.sent,localStorage.setItem("ongId",a),localStorage.setItem("ongNome",n.data.nome),l.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Falaha no Login tente novamente!");case 13:case"end":return e.stop()}},e,null,[[1,10]])}))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu logon"),r.a.createElement("input",{placeholder:"Sua ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(o.b,{className:"back-link",to:"/register"},r.a.createElement(f.b,{size:16,color:"#E02041"}),"N\xe3o tenho Cadastro"))),r.a.createElement("img",{src:g.a,alt:"Heroes"}))}a(64);function j(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),E=s[0],h=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),O=g[0],j=g[1],S=Object(n.useState)(""),y=Object(p.a)(S,2),N=y[0],w=y[1],k=Object(n.useState)(""),C=Object(p.a)(k,2),x=C[0],I=C[1],z=Object(u.f)();function B(){return(B=Object(m.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nome:a,email:E,whatsapp:O,city:N,uf:x},e.prev=2,e.next=5,d.post("ongs",n);case 5:r=e.sent,alert("Seu ID de acesso: ".concat(r.data.id)),z.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Erro no cadastro, tente Novamente");case 13:case"end":return e.stop()}},e,null,[[2,10]])}))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataform e ajude pessoas a encontrarem os casos da sua ONG"),r.a.createElement(o.b,{className:"back-link",to:"/"},r.a.createElement(f.a,{size:16,color:"#e02041"}),"Voltar para o login")),r.a.createElement("form",{onSubmit:function(e){return B.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome da ONG",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{placeholder:"whatsApp",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:"input-grup"},r.a.createElement("input",{placeholder:"cidade",value:N,onChange:function(e){return w(e.target.value)}}),r.a.createElement("input",{placeholder:"UF",style:{width:80},value:x,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}a(65);function S(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)(),s=localStorage.getItem("ongId"),E=localStorage.getItem("ongNome");function h(){return(h=Object(m.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.delete("incidents/".concat(t),{headers:{Authorization:s}});case 3:c(a.filter(function(e){return e.id!==t})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Erro ao deletar tente novamente");case 9:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}function v(){return(v=Object(m.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),l.push("/");case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){d.get("profile",{headers:{Authorization:s}}).then(function(e){c(e.data)})},[s]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem vindo,",E),r.a.createElement(o.b,{className:"button",to:"/incidents/new"},"Cadastart nov caso"),r.a.createElement("button",{onClick:function(){return v.apply(this,arguments)},type:"button"},r.a.createElement(f.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"casos cadastrados"),r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASOS:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7\xc3O: "),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"Valor: "),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return function(e){return h.apply(this,arguments)}(e.id)},type:"button"},r.a.createElement(f.d,{size:20,color:"#a8a8b3"})))})))}a(66);function y(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),E=s[0],h=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),O=g[0],j=g[1],S=Object(u.f)(),y=localStorage.getItem("ongId");function N(){return(N=Object(m.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:E,value:O},e.prev=2,e.next=5,d.post("incidents",n,{headers:{Authorization:y}});case 5:S.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Erro a cadastrar caso, tente novamente.");case 11:case"end":return e.stop()}},e,null,[[2,8]])}))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastrar novo caso"),r.a.createElement("p",null,"Descreva o caso detalhadamente para encontrar um her\xf3i para resolver isso."),r.a.createElement(o.b,{className:"back-link",to:"/profile"},r.a.createElement(f.a,{size:16,color:"#E02041"}),"Voltar para home")),r.a.createElement("form",{onSubmit:function(e){return N.apply(this,arguments)}},r.a.createElement("input",{placeholder:"T\xedtulo",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Descri\xe7\xe3o",value:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{placeholder:"Valor em reais",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}function N(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:O}),r.a.createElement(u.a,{path:"/register",component:j}),r.a.createElement(u.a,{path:"/profile",component:S}),r.a.createElement(u.a,{path:"/incidents/new",component:y})))}var w=function(){return r.a.createElement(N,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4e31d7eb.chunk.js.map