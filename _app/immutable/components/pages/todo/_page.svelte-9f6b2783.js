import{S as kn,i as bn,s as fn,k as r,a as i,q as T,l as t,c as l,m as s,r as w,h as e,n as a,p as vn,b as an,D as n,B as sn}from"../../../chunks/index-7441187f.js";function yn(gn){let f,N,p,d,U,A,L,V,_,Y,F,D,R,q,v,u,O,$,G,m,o,C,J,K,x,Q,y,M,W,X,I,Z,h,j,nn,rn,E,tn,B,en;return{c(){f=r("!DOCTYPE"),N=i(),p=r("html"),d=r("head"),U=r("meta"),A=i(),L=r("meta"),V=i(),_=r("title"),Y=T("TODO List"),F=i(),D=r("style"),R=T(`body {\r
            font-family: Arial, sans-serif;\r
            margin: 0;\r
            display: auto;\r
            justify-content: center;\r
            align-items: auto;\r
            height: 100vh;\r
            background-image: url('https://www.cajp.se/pidd/content/images/org-burgare-ost-avokado.jpg');\r
            background-size: cover;\r
            background-position: center;\r
        }\r
\r
        .container {\r
            width: 80vw;\r
            height: 70vh;\r
            background-color: lightgray;\r
            border: 10px solid darkgray;\r
            border-radius: 10px;\r
            padding-top: 10px;\r
            margin: auto;\r
        }\r
\r
        .layout {\r
            display: grid;\r
            width: 100%;\r
            grid-template-columns: repeat(2, 1fr);\r
        }\r
\r
        .task-container {\r
            display: grid;\r
            width: 100%;\r
            grid-template-columns: 1fr;\r
            gap: 10px;\r
        }\r
\r
        input {\r
            width: calc(100% - 20px);\r
            padding: 8px;\r
            border: 1px solid darkgray;\r
            border-radius: 5px;\r
            transition: border-color 0.5s, background-color 0.5s;\r
        }\r
\r
        input:hover {\r
            border-color: #3498db;\r
        }\r
\r
        .btn {\r
            line-height: 20px;\r
            height: 20px;\r
            text-align: center;\r
            width: 100px;\r
            cursor: pointer;\r
            position: relative;\r
        }\r
\r
        .btn span {\r
            z-index: 2;\r
            display: block;\r
            position: absolute;\r
            width: 100%;\r
            height: 100%;\r
        }\r
\r
        .btn::before,\r
        .btn::after {\r
            content: "";\r
            position: absolute;\r
            top: 0;\r
            left: 0;\r
            width: 100%;\r
            height: 100%;\r
            z-index: 1;\r
            transition: all 0.5s;\r
            border: 1px solid rgba(255,255,255,0.2);\r
            background-color: rgba(0, 0, 0,0.1);\r
        }\r
\r
        .btn::before {\r
            transform: rotate(180deg);\r
        }\r
\r
        .btn::after {\r
            transform: rotate(180deg);\r
        }\r
\r
        .btn:hover::before,\r
        .btn:hover::after {\r
            transform: rotate(0deg);\r
            background-color: rgba(255,255,255,0);\r
        }\r
\r
        .task-list {\r
            list-style-type: none;\r
            padding: 0;\r
        }\r
\r
        .task-item {\r
            display: flex;\r
            justify-content: space-between;\r
            align-items: center;\r
            padding: 10px;\r
            border-bottom: 1px solid #ccc;\r
        }\r
\r
        .task-item span {\r
            margin-right: 10px;\r
        }`),q=i(),v=r("body"),u=r("div"),O=r("h1"),$=T("TODO LIST"),G=i(),m=r("div"),o=r("div"),C=r("h2"),J=T("Nya Uppgifter"),K=i(),x=r("input"),Q=i(),y=r("div"),M=r("span"),W=T("Lägg till"),X=i(),I=r("ul"),Z=i(),h=r("div"),j=r("h2"),nn=T("Färdiga Uppgifter"),rn=i(),E=r("ul"),tn=i(),B=r("script"),en=T(`function addTask() {\r
            const newTaskInput = document.getElementById("newTaskInput");\r
            const newTaskList = document.getElementById("newTaskList");\r
\r
            if (newTaskInput.value.trim() !== "") {\r
                const taskItem = document.createElement("li");\r
                taskItem.className = "task-item";\r
                taskItem.innerHTML = \`\r
                    <span>\${newTaskInput.value}</span>\r
                    <div class="btn" onclick="completeTask(this)"><span>Markera som klar</span></div>\r
                \`;\r
                newTaskList.appendChild(taskItem);\r
                newTaskInput.value = "";\r
            }\r
        }\r
\r
        function completeTask(button) {\r
            const completedTaskList = document.getElementById("completedTaskList");\r
            const taskItem = button.parentNode;\r
            taskItem.removeChild(button); // Remove the "Markera som klar" button\r
            completedTaskList.appendChild(taskItem);\r
        }`),this.h()},l(c){f=t(c,"!DOCTYPE",{html:!0}),N=l(c),p=t(c,"HTML",{lang:!0});var g=s(p);d=t(g,"HEAD",{});var k=s(d);U=t(k,"META",{charset:!0}),A=l(k),L=t(k,"META",{name:!0,content:!0}),V=l(k),_=t(k,"TITLE",{});var on=s(_);Y=w(on,"TODO List"),on.forEach(e),F=l(k),D=t(k,"STYLE",{});var ln=s(D);R=w(ln,`body {\r
            font-family: Arial, sans-serif;\r
            margin: 0;\r
            display: auto;\r
            justify-content: center;\r
            align-items: auto;\r
            height: 100vh;\r
            background-image: url('https://www.cajp.se/pidd/content/images/org-burgare-ost-avokado.jpg');\r
            background-size: cover;\r
            background-position: center;\r
        }\r
\r
        .container {\r
            width: 80vw;\r
            height: 70vh;\r
            background-color: lightgray;\r
            border: 10px solid darkgray;\r
            border-radius: 10px;\r
            padding-top: 10px;\r
            margin: auto;\r
        }\r
\r
        .layout {\r
            display: grid;\r
            width: 100%;\r
            grid-template-columns: repeat(2, 1fr);\r
        }\r
\r
        .task-container {\r
            display: grid;\r
            width: 100%;\r
            grid-template-columns: 1fr;\r
            gap: 10px;\r
        }\r
\r
        input {\r
            width: calc(100% - 20px);\r
            padding: 8px;\r
            border: 1px solid darkgray;\r
            border-radius: 5px;\r
            transition: border-color 0.5s, background-color 0.5s;\r
        }\r
\r
        input:hover {\r
            border-color: #3498db;\r
        }\r
\r
        .btn {\r
            line-height: 20px;\r
            height: 20px;\r
            text-align: center;\r
            width: 100px;\r
            cursor: pointer;\r
            position: relative;\r
        }\r
\r
        .btn span {\r
            z-index: 2;\r
            display: block;\r
            position: absolute;\r
            width: 100%;\r
            height: 100%;\r
        }\r
\r
        .btn::before,\r
        .btn::after {\r
            content: "";\r
            position: absolute;\r
            top: 0;\r
            left: 0;\r
            width: 100%;\r
            height: 100%;\r
            z-index: 1;\r
            transition: all 0.5s;\r
            border: 1px solid rgba(255,255,255,0.2);\r
            background-color: rgba(0, 0, 0,0.1);\r
        }\r
\r
        .btn::before {\r
            transform: rotate(180deg);\r
        }\r
\r
        .btn::after {\r
            transform: rotate(180deg);\r
        }\r
\r
        .btn:hover::before,\r
        .btn:hover::after {\r
            transform: rotate(0deg);\r
            background-color: rgba(255,255,255,0);\r
        }\r
\r
        .task-list {\r
            list-style-type: none;\r
            padding: 0;\r
        }\r
\r
        .task-item {\r
            display: flex;\r
            justify-content: space-between;\r
            align-items: center;\r
            padding: 10px;\r
            border-bottom: 1px solid #ccc;\r
        }\r
\r
        .task-item span {\r
            margin-right: 10px;\r
        }`),ln.forEach(e),k.forEach(e),q=l(g),v=t(g,"BODY",{});var H=s(v);u=t(H,"DIV",{class:!0});var P=s(u);O=t(P,"H1",{});var dn=s(O);$=w(dn,"TODO LIST"),dn.forEach(e),G=l(P),m=t(P,"DIV",{class:!0});var S=s(m);o=t(S,"DIV",{class:!0,style:!0});var b=s(o);C=t(b,"H2",{});var cn=s(C);J=w(cn,"Nya Uppgifter"),cn.forEach(e),K=l(b),x=t(b,"INPUT",{type:!0,id:!0,placeholder:!0}),Q=l(b),y=t(b,"DIV",{class:!0,onclick:!0});var pn=s(y);M=t(pn,"SPAN",{});var un=s(M);W=w(un,"Lägg till"),un.forEach(e),pn.forEach(e),X=l(b),I=t(b,"UL",{class:!0,id:!0}),s(I).forEach(e),b.forEach(e),Z=l(S),h=t(S,"DIV",{class:!0});var z=s(h);j=t(z,"H2",{});var mn=s(j);nn=w(mn,"Färdiga Uppgifter"),mn.forEach(e),rn=l(z),E=t(z,"UL",{class:!0,id:!0}),s(E).forEach(e),z.forEach(e),S.forEach(e),P.forEach(e),tn=l(H),B=t(H,"SCRIPT",{});var hn=s(B);en=w(hn,`function addTask() {\r
            const newTaskInput = document.getElementById("newTaskInput");\r
            const newTaskList = document.getElementById("newTaskList");\r
\r
            if (newTaskInput.value.trim() !== "") {\r
                const taskItem = document.createElement("li");\r
                taskItem.className = "task-item";\r
                taskItem.innerHTML = \`\r
                    <span>\${newTaskInput.value}</span>\r
                    <div class="btn" onclick="completeTask(this)"><span>Markera som klar</span></div>\r
                \`;\r
                newTaskList.appendChild(taskItem);\r
                newTaskInput.value = "";\r
            }\r
        }\r
\r
        function completeTask(button) {\r
            const completedTaskList = document.getElementById("completedTaskList");\r
            const taskItem = button.parentNode;\r
            taskItem.removeChild(button); // Remove the "Markera som klar" button\r
            completedTaskList.appendChild(taskItem);\r
        }`),hn.forEach(e),H.forEach(e),g.forEach(e),this.h()},h(){a(f,"html",""),a(U,"charset","UTF-8"),a(L,"name","viewport"),a(L,"content","width=device-width, initial-scale=1.0"),a(x,"type","text"),a(x,"id","newTaskInput"),a(x,"placeholder","Lägg till ny uppgift"),a(y,"class","btn"),a(y,"onclick","addTask()"),a(I,"class","task-list"),a(I,"id","newTaskList"),a(o,"class","task-container"),vn(o,"border-right","1px solid darkgray"),a(E,"class","task-list"),a(E,"id","completedTaskList"),a(h,"class","task-container"),a(m,"class","layout"),a(u,"class","container"),a(p,"lang","en")},m(c,g){an(c,f,g),an(c,N,g),an(c,p,g),n(p,d),n(d,U),n(d,A),n(d,L),n(d,V),n(d,_),n(_,Y),n(d,F),n(d,D),n(D,R),n(p,q),n(p,v),n(v,u),n(u,O),n(O,$),n(u,G),n(u,m),n(m,o),n(o,C),n(C,J),n(o,K),n(o,x),n(o,Q),n(o,y),n(y,M),n(M,W),n(o,X),n(o,I),n(m,Z),n(m,h),n(h,j),n(j,nn),n(h,rn),n(h,E),n(v,tn),n(v,B),n(B,en)},p:sn,i:sn,o:sn,d(c){c&&e(f),c&&e(N),c&&e(p)}}}class wn extends kn{constructor(f){super(),bn(this,f,null,yn,fn,{})}}export{wn as default};
