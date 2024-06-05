import{S as G,i as J,s as K,k as n,a as c,q as g,l as r,c as m,m as p,r as w,h as a,n as l,b as Y,D as t,H as R}from"../chunks/index.d01e145f.js";function Q(j){let u,x,i,d,_,B,C,y,v,b,D,e,E,H,M,I,A,T,P,h,$,O,L,U;return{c(){u=n("!DOCTYPE"),x=c(),i=n("html"),d=n("head"),_=n("meta"),B=c(),C=n("meta"),y=c(),v=n("title"),b=g("Task List"),D=c(),e=n("body"),E=n("h2"),H=g("Task List"),M=c(),I=n("ul"),A=c(),T=n("input"),P=c(),h=n("button"),$=g("Add Task"),O=c(),L=n("script"),U=g(`let tasks = [];\r
\r
        function addTask() {\r
            const newTaskInput = document.getElementById('newTask');\r
            const taskText = newTaskInput.value.trim();\r
\r
            if (taskText !== '') {\r
                const task = {\r
                    id: Date.now(),\r
                    text: taskText,\r
                    completed: false\r
                };\r
\r
                tasks.push(task);\r
                newTaskInput.value = ''; // Clear the input field\r
\r
                renderTasks();\r
            }\r
        }\r
\r
        function toggleTaskCompletion(taskId) {\r
            const task = tasks.find(task => task.id === taskId);\r
            if (task) {\r
                task.completed = !task.completed;\r
                renderTasks();\r
            }\r
        }\r
\r
        function removeCompletedTasks() {\r
            tasks = tasks.filter(task => !task.completed);\r
            renderTasks();\r
        }\r
\r
        function renderTasks() {\r
            const taskList = document.getElementById('taskList');\r
            taskList.innerHTML = '';\r
\r
            tasks.forEach(task => {\r
                const listItem = document.createElement('li');\r
                listItem.innerHTML = \`\r
                    <input type="checkbox" \${task.completed ? 'checked' : ''} \r
                        onchange="toggleTaskCompletion(\${task.id})">\r
                    \${task.text}\r
                \`;\r
\r
                taskList.appendChild(listItem);\r
            });\r
\r
            const removeCompletedButton = document.createElement('button');\r
            removeCompletedButton.textContent = 'Remove Completed Tasks';\r
            removeCompletedButton.onclick = removeCompletedTasks;\r
            taskList.appendChild(removeCompletedButton);\r
        }\r
\r
        // Initial rendering\r
        renderTasks();`),this.h()},l(s){u=r(s,"!DOCTYPE",{html:!0}),x=m(s),i=r(s,"HTML",{lang:!0});var k=p(i);d=r(k,"HEAD",{});var f=p(d);_=r(f,"META",{charset:!0}),B=m(f),C=r(f,"META",{name:!0,content:!0}),y=m(f),v=r(f,"TITLE",{});var S=p(v);b=w(S,"Task List"),S.forEach(a),f.forEach(a),D=m(k),e=r(k,"BODY",{});var o=p(e);E=r(o,"H2",{});var q=p(E);H=w(q,"Task List"),q.forEach(a),M=m(o),I=r(o,"UL",{id:!0});var z=p(I);z.forEach(a),A=m(o),T=r(o,"INPUT",{type:!0,id:!0,placeholder:!0}),P=m(o),h=r(o,"BUTTON",{onclick:!0});var N=p(h);$=w(N,"Add Task"),N.forEach(a),O=m(o),L=r(o,"SCRIPT",{});var F=p(L);U=w(F,`let tasks = [];\r
\r
        function addTask() {\r
            const newTaskInput = document.getElementById('newTask');\r
            const taskText = newTaskInput.value.trim();\r
\r
            if (taskText !== '') {\r
                const task = {\r
                    id: Date.now(),\r
                    text: taskText,\r
                    completed: false\r
                };\r
\r
                tasks.push(task);\r
                newTaskInput.value = ''; // Clear the input field\r
\r
                renderTasks();\r
            }\r
        }\r
\r
        function toggleTaskCompletion(taskId) {\r
            const task = tasks.find(task => task.id === taskId);\r
            if (task) {\r
                task.completed = !task.completed;\r
                renderTasks();\r
            }\r
        }\r
\r
        function removeCompletedTasks() {\r
            tasks = tasks.filter(task => !task.completed);\r
            renderTasks();\r
        }\r
\r
        function renderTasks() {\r
            const taskList = document.getElementById('taskList');\r
            taskList.innerHTML = '';\r
\r
            tasks.forEach(task => {\r
                const listItem = document.createElement('li');\r
                listItem.innerHTML = \`\r
                    <input type="checkbox" \${task.completed ? 'checked' : ''} \r
                        onchange="toggleTaskCompletion(\${task.id})">\r
                    \${task.text}\r
                \`;\r
\r
                taskList.appendChild(listItem);\r
            });\r
\r
            const removeCompletedButton = document.createElement('button');\r
            removeCompletedButton.textContent = 'Remove Completed Tasks';\r
            removeCompletedButton.onclick = removeCompletedTasks;\r
            taskList.appendChild(removeCompletedButton);\r
        }\r
\r
        // Initial rendering\r
        renderTasks();`),F.forEach(a),o.forEach(a),k.forEach(a),this.h()},h(){l(u,"html",""),l(_,"charset","UTF-8"),l(C,"name","viewport"),l(C,"content","width=device-width, initial-scale=1.0"),l(I,"id","taskList"),l(T,"type","text"),l(T,"id","newTask"),l(T,"placeholder","Add a new task"),l(h,"onclick","addTask()"),l(i,"lang","en")},m(s,k){Y(s,u,k),Y(s,x,k),Y(s,i,k),t(i,d),t(d,_),t(d,B),t(d,C),t(d,y),t(d,v),t(v,b),t(i,D),t(i,e),t(e,E),t(E,H),t(e,M),t(e,I),t(e,A),t(e,T),t(e,P),t(e,h),t(h,$),t(e,O),t(e,L),t(L,U)},p:R,i:R,o:R,d(s){s&&a(u),s&&a(x),s&&a(i)}}}class W extends G{constructor(u){super(),J(this,u,null,Q,K,{})}}export{W as component};
