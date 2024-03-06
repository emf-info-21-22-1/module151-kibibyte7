(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(3846)}])},7836:function(e,t){"use strict";t.Z={pk_projet:"pk_projet",pk_user:"pk_user",username:"username",current_task:"current_task",project_name:"project_name"}},4941:function(e,t,s){"use strict";var a=s(6546);class r{login(e,t){return a.Z.login(e,t)}logout(){return a.Z.logout()}checkLogin(){return a.Z.checkLogin()}}t.Z=r},3846:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var a=s(5893),r=s(7294),n=s(6963),o=s(8493);s(8828);var l=s(9603),i=s(9417),c=s(7836),d=s(4941),p=e=>{let{onOpen:t,onProjectSelect:s,projects:n,selected:o}=e,[p,u]=(0,r.useState)(!1),h=new d.Z;(0,r.useEffect)(()=>{u(window.sessionStorage.getItem(c.Z.username))},[]);let m=e=>{window.sessionStorage.setItem(c.Z.pk_projet,e.target.value),window.sessionStorage.setItem(c.Z.project_name,e.target.key),s(e)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-screen h-20 bg-black sticky top-0",children:(0,a.jsxs)("div",{className:"px-4 h-full flex items-center justify-between",children:[(0,a.jsxs)("ul",{className:"hidden lg:flex gap-x-5 text-white",children:[(0,a.jsx)("li",{children:(0,a.jsx)("select",{className:"bg-black mt-2 text-pink-400 text-xl",value:o,onChange:e=>m(e),children:0===n.length?(0,a.jsx)("option",{children:"Aucun projet cr\xe9\xe9"}):n.map(e=>(0,a.jsx)("option",{value:e.pk_projet,children:e.name},e.pk_projet))})}),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{className:"z-4 bg-black text-white btn",onClick:t,children:[(0,a.jsx)(l.G,{icon:i.FL8,style:{marginRight:"8px"}}),"Ajouter un projet"]})})]}),(0,a.jsxs)("div",{className:"gap-x-2 flex",children:[(0,a.jsxs)("li",{className:"mt-2 mr-6 text-xl flex no-select",children:[(0,a.jsx)(l.G,{icon:i.ILF,style:{marginRight:"8px"},className:"mt-1"}),"Utilisateur connect\xe9: ",p]}),(0,a.jsxs)("button",{className:"bg-black text-white px-4 btn",onClick:()=>{h.logout().then(e=>{200===e.code&&(window.location.href="/151/client")})},children:[(0,a.jsx)(l.G,{icon:i.oTz,style:{marginRight:"8px"}}),"Se d\xe9connecter"]})]})]})})})},u=s(9272),h=s(9294),m=s(908),x=s(6546);class j{addTask(e,t,s,a,r){return x.Z.addTask(e,t,s,a,r)}deleteTask(e){return x.Z.deleteTask(e)}updateEtatTask(e,t){return x.Z.updateEtatTask(e,t)}loadProjectNTasks(e,t){return x.Z.loadProjectNtasks(e,t)}}var b=e=>{let{id:t,trigger:s,loadProjectNTasks:r}=e,n=new j,o=(e,t)=>{switch(t.label){case"Modifier la t\xe2che":break;case"Supprimer la t\xe2che":n.deleteTask(window.sessionStorage.getItem(c.Z.current_task)).then(e=>{r()})}};return(0,a.jsxs)(m.xV,{id:t,trigger:s,className:"bg-black text-white",style:{borderRadius:"10px",border:"1.75px solid #ff91e4",boxShadow:"0px 0px 5px #ff91e477"},children:[(0,a.jsx)("h1",{className:"text-pink-400 text-lg font-semibold p-3",children:"Edition d'une t\xe2che"}),(0,a.jsx)("hr",{style:{border:"1px solid #f472b6"}}),(0,a.jsxs)(m.sN,{onClick:o,data:{label:"Modifier la t\xe2che"},className:"p-2 cursor-pointer hover:text-pink-400",children:[(0,a.jsx)(l.G,{icon:i.Xcf,style:{marginRight:"8px"}}),"Modifier la t\xe2che"]}),(0,a.jsx)("hr",{style:{border:"1px dashed #f472b6"}}),(0,a.jsxs)(m.sN,{onClick:o,data:{label:"Supprimer la t\xe2che"},className:"p-2 cursor-pointer hover:text-pink-400",children:[(0,a.jsx)(l.G,{icon:i.YIN,style:{marginRight:"8px"}}),"Supprimer la t\xe2che"]})]})},g=e=>{let{pk_tache:t,titre:s,description:r,dateCreation:n,temps:o,etat:l,loadProjectNtasks:i}=e,[,d]=(0,h.c)({type:"CARD",item:{pk_tache:t,titre:s,description:r,temps:o,dateCreation:n,temps:o,etat:l}}),p=e=>{e.preventDefault(),window.sessionStorage.setItem(c.Z.current_task,t)};return(0,a.jsx)("div",{ref:d,style:{padding:"8px",backgroundColor:"#ffffff",color:"black",borderRadius:"10px",marginBottom:"8px"},children:(0,a.jsxs)(m.W4,{id:"tache",className:"z-6",mouseButton:2,holdToDisplay:9e5,children:[(0,a.jsxs)("div",{onMouseEnter:e=>p(e),children:[(0,a.jsx)("h2",{className:"mb-2 font-semibold",children:s}),(0,a.jsx)("hr",{}),(0,a.jsx)("p",{className:"mb-2",children:r}),(0,a.jsxs)("p",{className:"mt-1",children:["Temps pass\xe9 dessus: ",o]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("p",{className:"text-gray-500 text-xs mt-1",children:["Cr\xe9\xe9 le: ",n]})]}),(0,a.jsx)(b,{id:"tache",loadProjectNTasks:i})]})})},k=e=>{let{submit:t}=e,s=new j,[n,o]=(0,r.useState)(null),[d,p]=(0,r.useState)(null),[u,h]=(0,r.useState)(null),[m,x]=(0,r.useState)(!1),b=[{value:"\xc0 faire",label:"\xc0 faire"},{value:"En cours",label:"En cours"},{value:"Termin\xe9",label:"Termin\xe9"},{value:"Probl\xe8me",label:"Probl\xe8me"},{value:"Solution",label:"Solution"}],[g,k]=(0,r.useState)(b[0].value),f=e=>{e.preventDefault();let a=window.sessionStorage.getItem(c.Z.pk_projet);s.addTask(n,d,g,0,a).then(e=>{200==e.code&&t()})};return(0,a.jsxs)("div",{style:{backgroundColor:"black",border:"1.8px dashed #f472b6",borderRadius:"10px",cursor:"pointer",marginBottom:"auto"},onClick:()=>{x(!m)},children:[(0,a.jsxs)("h1",{className:"font-bold p-2 no-select text-pink-400",children:[(0,a.jsx)(l.G,{icon:i.KtF,style:{marginRight:"8px"}}),"Ajouter une t\xe2che"]}),m&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{style:{border:"1px solid #f472b6"}}),(0,a.jsxs)("form",{id:"taskForm",className:"p-2",style:{cursor:"context-menu"},onSubmit:e=>f(e),onClick:e=>{e.stopPropagation()},children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"text-pink-400",children:"Nom de la t\xe2che"}),(0,a.jsx)("input",{type:"name",value:n,onChange:e=>o(e.target.value),className:"mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:ring-opacity-50",placeholder:"Nom de la t\xe2che",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"text-pink-400",children:"Description de la t\xe2che"}),(0,a.jsx)("input",{type:"description",value:d,onChange:e=>p(e.target.value),className:"mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:ring-opacity-50",placeholder:"Description de la t\xe2che",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"text-pink-400",children:"Etat"}),(0,a.jsx)("select",{className:"ml-2 text-black hover:text-pink-400",value:g,onChange:e=>k(e.target.value),children:b.map(e=>(0,a.jsx)("option",{value:e.value,children:e.label},e.value))})]}),u&&(0,a.jsx)("div",{className:"text-red-500 mb-4",children:u}),(0,a.jsx)("button",{type:"submit",className:"w-full font-semibold btn",children:"Ajouter la t\xe2che"})]})]})]})},f=e=>{let{name:t,tasks:s,moveCard:n,submit:o,loadProjectNTasks:l}=e,[,i]=(0,u.L)({accept:"CARD",drop:e=>{console.log(e),n(e.pk_tache,t)}}),[c,d]=(0,r.useState)(!1);return(0,a.jsxs)("div",{ref:i,style:{flex:"1",marginLeft:"1%",marginRight:"1%",minHeight:"10%"},onDragOver:e=>{e.preventDefault(),d(!0)},onDragLeave:()=>{d(!1)},onDrop:()=>{d(!1)},children:[(0,a.jsx)("h2",{className:"font-semibold text-2xl text-pink-400 mb-3 bg-black pt-1",children:t}),(0,a.jsxs)("div",{className:"flex flex-col overflow-y-scroll scrollbar-hidden p-1 pb-6",style:{maxHeight:"80vh",borderRadius:"10px",border:c?"2px solid #f472b6":"2px solid transparent"},children:[s.map(e=>(0,a.jsx)(g,{pk_tache:e.pk_tache,titre:e.titre,description:e.description,temps:0==e.temps?"Pas encore d\xe9fini":temps,dateCreation:e.dateCreation,etat:e.etat,loadProjectNtasks:l},e.pk_tache)),(0,a.jsx)(k,{submit:o})]})]})};class w{addProject(e,t){return x.Z.addProject(e,t)}loadProjects(){return x.Z.loadProjects()}}var y=e=>{let{onClose:t,loadProjects:s}=e,[n,o]=(0,r.useState)(""),[l,i]=(0,r.useState)(""),[c,d]=(0,r.useState)("");return(0,a.jsxs)("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70 z-2 fixed",onClick:t,children:[(0,a.jsx)("h1",{className:"text-3xl text-pink-400 font-bold mb-8",children:"Cr\xe9ation d'un projet"}),(0,a.jsxs)("form",{className:"max-w-md mx-auto p-5 rounded-lg bg-black bg-opacity-80",style:{border:"1.8px dashed #f472b6",borderRadius:"10px",color:"#f472b6"},onSubmit:e=>{e.preventDefault(),new w().addProject(n,l).then(e=>{t(e),s()})},onClick:e=>{e.stopPropagation()},children:[(0,a.jsxs)("div",{className:"mb-4 block",children:[(0,a.jsx)("label",{htmlFor:"projectName",className:"text-pink-400 font-semibold",children:"Nom du projet"}),(0,a.jsx)("input",{type:"text",id:"projectName",value:n,onChange:e=>o(e.target.value),className:"mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",required:!0,placeholder:"Ex: Xenova"})]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("label",{htmlFor:"projectDescription",className:"text-pink-400 font-semibold",children:"Description du projet"}),(0,a.jsx)("input",{type:"text",id:"projectDescription",value:l,onChange:e=>i(e.target.value),className:"mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",required:!0,placeholder:"Description"})]}),c&&(0,a.jsx)("div",{className:"text-red-500 mb-4",children:c}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)("button",{type:"submit",className:"w-full bg-black text-white py-2 px-4 btn",children:"Cr\xe9er le projet"})})]})]})},v=()=>{let[e,t]=(0,r.useState)([]),[s,l]=(0,r.useState)(!1),[i,u]=(0,r.useState)(""),[h,m]=(0,r.useState)([]),x=new d.Z,b=new j,g=new w;(0,r.useEffect)(()=>{v()},[]),(0,r.useEffect)(()=>k(),[]);let k=()=>{g.loadProjects().then(e=>{m(e.body),1==e.body.length&&window.sessionStorage.setItem(c.Z.pk_projet,e.body[0].pk_projet);let t=window.sessionStorage.getItem(c.Z.pk_projet);console.log("pk_projet from sessionStorage:",t);for(let s=0;s<e.body.length;s++)if(t==e.body[s].pk_projet){let t=e.body[s];console.log("Selected Project:",t),u(t.pk_projet);break}N()})},v=()=>{x.checkLogin().then(e=>{200!==e.code&&(window.sessionStorage.clear(),window.location.href="/151/client")})},N=()=>{let e=window.sessionStorage.getItem(c.Z.pk_user),s=window.sessionStorage.getItem(c.Z.pk_projet);if(null!==e&&null!==s){let a=parseInt(e),r=parseInt(s);b.loadProjectNTasks(r,a).then(e=>{t(e.body.tasks)})}},_=(s,a)=>{if(null!==e){let r=e.map(e=>e.pk_tache===s?{...e,etat:a}:e);b.updateEtatTask(s,a),t(r)}},S=()=>{l(!s)};return(0,a.jsxs)(a.Fragment,{children:[s&&(0,a.jsx)(y,{loadProjects:k,onClose:()=>{S()}}),(0,a.jsxs)("div",{className:"h-screen w-screen bg-black overflow-y-hidden z-3",onContextMenu:e=>{e.preventDefault()},children:[(0,a.jsx)(p,{onOpen:S,projects:h,onProjectSelect:()=>{let e=window.sessionStorage.getItem(c.Z.pk_projet);null!==e&&(u(e),N())},selected:i}),(0,a.jsx)(o.W,{backend:n.PD,children:(0,a.jsx)("div",{style:{display:"flex"},className:"mb-1 mr-1 ml-1",children:["\xc0 faire","En cours","Termin\xe9","Probl\xe8me","Solution"].map(t=>(0,a.jsx)(f,{name:t,tasks:void 0==e?[]:e.filter(e=>e.etat===t),moveCard:_,submit:N,loadProjectNTasks:N},t))})})]})]})}},6546:function(e,t,s){"use strict";var a=s(5121),r=s(7836);let n="https://abrahaml.emf-informatique.ch/151/srv/";t.Z={async login(e,t){try{return(await a.Z.post(n+"session.php",{action:"login",username:e,password:t},{headers:{"Content-Type":"application/json"},withCredentials:!0})).data}catch(e){return e.response.data}},async logout(){try{return(await a.Z.post(n+"session.php",{action:"logout"},{headers:{"Content-Type":"application/json"},withCredentials:!0})).data}catch(e){return e.response.data}},async checkLogin(){try{return(await a.Z.get(n+"session.php?action=checkLogin",{withCredentials:!0})).data}catch(e){return e.response.data}},async addProject(e,t){try{return(await a.Z.post(n+"ProjectServices.php",{name:e,description:t,fk_user:window.sessionStorage.getItem(r.Z.pk_user)},{headers:{"Content-Type":"application/json"}})).data}catch(e){return e.response.data}},async loadProjects(){try{return(await a.Z.get(n+"ProjectServices.php",{params:{fk_user:window.sessionStorage.getItem(r.Z.pk_user)}})).data}catch(e){return e.response.data}},async loadProjectNtasks(e,t){try{return(await a.Z.get(n+"ProjectServices.php",{params:{pk_projet:e,fk_user:t}})).data}catch(e){return e.response.data}},async updateTask(e,t,s,r,o,l){try{return(await a.Z.put(n+"TaskServices.php",{action:"updateTask",pk_tache:e,nom:t,description:s,fk_projet:l,etat:r,temps:o},{headers:{"Content-Type":"application/json"}})).data}catch(e){return e.response.data}},async updateEtatTask(e,t){try{return(await a.Z.put(n+"TaskServices.php",{action:"updateEtatTask",pk_tache:e,etat:t},{headers:{"Content-Type":"application/json"}})).data}catch(e){return e.response.data}},async addTask(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4?arguments[4]:void 0;try{return(await a.Z.post(n+"TaskServices.php",{titre:e,description:t,fk_projet:o,etat:s,temps:r,dateCreation:new Date},{headers:{"Content-Type":"application/json"}})).data}catch(e){return e.response.data}},async deleteTask(e){try{return(await a.Z.delete(n+"TaskServices.php",{params:{pk_tache:e}})).data}catch(e){return e.response.data}},async addUser(e,t){try{return(await a.Z.post(n+"UserServices.php",{username:e,password:t},{headers:{"Content-Type":"application/json"}})).data}catch(e){return e.response.data}}}},8828:function(){}},function(e){e.O(0,[976,121,97,713,888,774,179],function(){return e(e.s=528)}),_N_E=e.O()}]);