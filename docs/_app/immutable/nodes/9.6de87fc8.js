import{S as W,i as X,s as Z,k as n,a as c,q as k,l as r,c as d,m as i,r as y,h as t,n as p,b as B,D as e,H as z}from"../chunks/index.d01e145f.js";function ee(Q){let g,Y,h,o,O,I,D,S,T,C,L,x,P,R,m,s,E,A,H,w,M,U,b,$,F,v,q;return{c(){g=n("!DOCTYPE"),Y=c(),h=n("html"),o=n("head"),O=n("meta"),I=c(),D=n("meta"),S=c(),T=n("title"),C=k("Dungeon Exploration"),L=c(),x=n("style"),P=k(`body {\r
            font-family: Arial, sans-serif;\r
            text-align: center;\r
            background-color: #1a1a1a;\r
            color: white;\r
            margin: 0;\r
            padding: 0;\r
        }\r
\r
        #dungeon-container {\r
            max-width: 600px;\r
            margin: auto;\r
            padding: 20px;\r
            border: 2px solid #4caf50;\r
            border-radius: 10px;\r
            background-color: #333;\r
        }\r
\r
        #dialogue {\r
            margin-bottom: 20px;\r
        }\r
\r
        button {\r
            padding: 10px;\r
            margin: 5px;\r
            cursor: pointer;\r
            font-size: 16px;\r
            background-color: #4caf50;\r
            color: white;\r
            border: none;\r
            border-radius: 5px;\r
        }`),R=c(),m=n("body"),s=n("div"),E=n("h1"),A=k("Dungeon Exploration"),H=c(),w=n("div"),M=k("You find yourself standing at the entrance of a dark dungeon."),U=c(),b=n("button"),$=k("Start Exploration"),F=c(),v=n("script"),q=k(`let dialogueElement = document.getElementById('dialogue');\r
\r
    function startExploration() {\r
        showDialogue("You take a deep breath and step into the dungeon.");\r
\r
        setTimeout(() => {\r
            showDialogue("The dungeon is dimly lit, and you can hear eerie sounds echoing.");\r
            showOptions(["Explore the left corridor", "Search for hidden passages", "Proceed cautiously"]);\r
        }, 3000);\r
    }\r
\r
    function showDialogue(text) {\r
        dialogueElement.innerHTML = text;\r
    }\r
\r
    function showOptions(options) {\r
        dialogueElement.innerHTML += "<p>Choose an option:</p>";\r
        options.forEach(option => {\r
            dialogueElement.innerHTML += \`<button onclick="selectOption('\${option}')">\${option}</button>\`;\r
        });\r
    }\r
\r
    function selectOption(option) {\r
        showDialogue(\`You chose: \${option}.\`);\r
\r
        switch (option) {\r
            case "Explore the left corridor":\r
                setTimeout(() => {\r
                    showDialogue("You find a dusty room with an old chest.");\r
                    showOptions(["Open the chest", "Continue exploring", "Retrace your steps"]);\r
                }, 2000);\r
                break;\r
            case "Search for hidden passages":\r
                setTimeout(() => {\r
                    showDialogue("You discover a secret passage leading to a mysterious chamber.");\r
                    showOptions(["Investigate the chamber", "Return to the main path", "Proceed deeper"]);\r
                }, 2000);\r
                break;\r
            case "Proceed cautiously":\r
                setTimeout(() => {\r
                    showDialogue("You encounter a fork in the path. Choose wisely.");\r
                    showOptions(["Take the right path", "Use a torch to light the way", "Listen for any sounds"]);\r
                }, 2000);\r
                break;\r
            case "Open the chest":\r
                showDialogue("The chest creaks open, revealing valuable treasures!");\r
                break;\r
            case "Continue exploring":\r
                showDialogue("You venture deeper into the dungeon.");\r
                break;\r
            case "Retrace your steps":\r
                showDialogue("You backtrack to the dungeon entrance.");\r
                break;\r
            case "Investigate the chamber":\r
                showDialogue("The chamber is filled with ancient artifacts.");\r
                break;\r
            case "Return to the main path":\r
                showDialogue("You return to the main path.");\r
                break;\r
            case "Proceed deeper":\r
                setTimeout(() => {\r
                    showDialogue("The path leads to a large cavern with a menacing creature!");\r
                    showOptions(["Fight the creature", "Try to sneak past", "Retreat"]);\r
                }, 2000);\r
                break;\r
            case "Take the right path":\r
                setTimeout(() => {\r
                    showDialogue("You find a room with a magical portal. It shimmers with unknown energy.");\r
                    showOptions(["Enter the portal", "Avoid the portal", "Inspect the surroundings"]);\r
                }, 2000);\r
                break;\r
            \r
            case "Use a torch to light the way":\r
                showDialogue("The torch reveals hidden markings on the dungeon walls.");\r
                break;\r
            case "Listen for any sounds":\r
                showDialogue("You hear distant footsteps. Someone or something is approaching.");\r
                break;\r
            case "Fight the creature":\r
                showDialogue("The battle is fierce, but you manage to defeat the creature.");\r
                break;\r
            case "Try to sneak past":\r
                showDialogue("You successfully sneak past the creature.");\r
                break;\r
            case "Retreat":\r
                showDialogue("You quickly retreat from the cavern.");\r
                break;\r
            case "Enter the portal":\r
                showDialogue("The portal transports you to another realm. Adventure continues!");\r
                window.location.href = 'http://localhost:5173/Surpris';\r
                break;\r
            case "Avoid the portal":\r
                showDialogue("You decide not to enter the mysterious portal.");\r
                break;\r
            case "Inspect the surroundings":\r
                showDialogue("You find hidden passages leading to more mysteries.");\r
                break;\r
            \r
            default:\r
                break;\r
        }\r
    }`),this.h()},l(a){g=r(a,"!DOCTYPE",{html:!0}),Y=d(a),h=r(a,"HTML",{lang:!0});var u=i(h);o=r(u,"HEAD",{});var l=i(o);O=r(l,"META",{charset:!0}),I=d(l),D=r(l,"META",{name:!0,content:!0}),S=d(l),T=r(l,"TITLE",{});var V=i(T);C=y(V,"Dungeon Exploration"),V.forEach(t),L=d(l),x=r(l,"STYLE",{});var N=i(x);P=y(N,`body {\r
            font-family: Arial, sans-serif;\r
            text-align: center;\r
            background-color: #1a1a1a;\r
            color: white;\r
            margin: 0;\r
            padding: 0;\r
        }\r
\r
        #dungeon-container {\r
            max-width: 600px;\r
            margin: auto;\r
            padding: 20px;\r
            border: 2px solid #4caf50;\r
            border-radius: 10px;\r
            background-color: #333;\r
        }\r
\r
        #dialogue {\r
            margin-bottom: 20px;\r
        }\r
\r
        button {\r
            padding: 10px;\r
            margin: 5px;\r
            cursor: pointer;\r
            font-size: 16px;\r
            background-color: #4caf50;\r
            color: white;\r
            border: none;\r
            border-radius: 5px;\r
        }`),N.forEach(t),l.forEach(t),R=d(u),m=r(u,"BODY",{});var _=i(m);s=r(_,"DIV",{id:!0});var f=i(s);E=r(f,"H1",{});var j=i(E);A=y(j,"Dungeon Exploration"),j.forEach(t),H=d(f),w=r(f,"DIV",{id:!0});var G=i(w);M=y(G,"You find yourself standing at the entrance of a dark dungeon."),G.forEach(t),U=d(f),b=r(f,"BUTTON",{onclick:!0});var J=i(b);$=y(J,"Start Exploration"),J.forEach(t),f.forEach(t),F=d(_),v=r(_,"SCRIPT",{});var K=i(v);q=y(K,`let dialogueElement = document.getElementById('dialogue');\r
\r
    function startExploration() {\r
        showDialogue("You take a deep breath and step into the dungeon.");\r
\r
        setTimeout(() => {\r
            showDialogue("The dungeon is dimly lit, and you can hear eerie sounds echoing.");\r
            showOptions(["Explore the left corridor", "Search for hidden passages", "Proceed cautiously"]);\r
        }, 3000);\r
    }\r
\r
    function showDialogue(text) {\r
        dialogueElement.innerHTML = text;\r
    }\r
\r
    function showOptions(options) {\r
        dialogueElement.innerHTML += "<p>Choose an option:</p>";\r
        options.forEach(option => {\r
            dialogueElement.innerHTML += \`<button onclick="selectOption('\${option}')">\${option}</button>\`;\r
        });\r
    }\r
\r
    function selectOption(option) {\r
        showDialogue(\`You chose: \${option}.\`);\r
\r
        switch (option) {\r
            case "Explore the left corridor":\r
                setTimeout(() => {\r
                    showDialogue("You find a dusty room with an old chest.");\r
                    showOptions(["Open the chest", "Continue exploring", "Retrace your steps"]);\r
                }, 2000);\r
                break;\r
            case "Search for hidden passages":\r
                setTimeout(() => {\r
                    showDialogue("You discover a secret passage leading to a mysterious chamber.");\r
                    showOptions(["Investigate the chamber", "Return to the main path", "Proceed deeper"]);\r
                }, 2000);\r
                break;\r
            case "Proceed cautiously":\r
                setTimeout(() => {\r
                    showDialogue("You encounter a fork in the path. Choose wisely.");\r
                    showOptions(["Take the right path", "Use a torch to light the way", "Listen for any sounds"]);\r
                }, 2000);\r
                break;\r
            case "Open the chest":\r
                showDialogue("The chest creaks open, revealing valuable treasures!");\r
                break;\r
            case "Continue exploring":\r
                showDialogue("You venture deeper into the dungeon.");\r
                break;\r
            case "Retrace your steps":\r
                showDialogue("You backtrack to the dungeon entrance.");\r
                break;\r
            case "Investigate the chamber":\r
                showDialogue("The chamber is filled with ancient artifacts.");\r
                break;\r
            case "Return to the main path":\r
                showDialogue("You return to the main path.");\r
                break;\r
            case "Proceed deeper":\r
                setTimeout(() => {\r
                    showDialogue("The path leads to a large cavern with a menacing creature!");\r
                    showOptions(["Fight the creature", "Try to sneak past", "Retreat"]);\r
                }, 2000);\r
                break;\r
            case "Take the right path":\r
                setTimeout(() => {\r
                    showDialogue("You find a room with a magical portal. It shimmers with unknown energy.");\r
                    showOptions(["Enter the portal", "Avoid the portal", "Inspect the surroundings"]);\r
                }, 2000);\r
                break;\r
            \r
            case "Use a torch to light the way":\r
                showDialogue("The torch reveals hidden markings on the dungeon walls.");\r
                break;\r
            case "Listen for any sounds":\r
                showDialogue("You hear distant footsteps. Someone or something is approaching.");\r
                break;\r
            case "Fight the creature":\r
                showDialogue("The battle is fierce, but you manage to defeat the creature.");\r
                break;\r
            case "Try to sneak past":\r
                showDialogue("You successfully sneak past the creature.");\r
                break;\r
            case "Retreat":\r
                showDialogue("You quickly retreat from the cavern.");\r
                break;\r
            case "Enter the portal":\r
                showDialogue("The portal transports you to another realm. Adventure continues!");\r
                window.location.href = 'http://localhost:5173/Surpris';\r
                break;\r
            case "Avoid the portal":\r
                showDialogue("You decide not to enter the mysterious portal.");\r
                break;\r
            case "Inspect the surroundings":\r
                showDialogue("You find hidden passages leading to more mysteries.");\r
                break;\r
            \r
            default:\r
                break;\r
        }\r
    }`),K.forEach(t),_.forEach(t),u.forEach(t),this.h()},h(){p(g,"html",""),p(O,"charset","UTF-8"),p(D,"name","viewport"),p(D,"content","width=device-width, initial-scale=1.0"),p(w,"id","dialogue"),p(b,"onclick","startExploration()"),p(s,"id","dungeon-container"),p(h,"lang","en")},m(a,u){B(a,g,u),B(a,Y,u),B(a,h,u),e(h,o),e(o,O),e(o,I),e(o,D),e(o,S),e(o,T),e(T,C),e(o,L),e(o,x),e(x,P),e(h,R),e(h,m),e(m,s),e(s,E),e(E,A),e(s,H),e(s,w),e(w,M),e(s,U),e(s,b),e(b,$),e(m,F),e(m,v),e(v,q)},p:z,i:z,o:z,d(a){a&&t(g),a&&t(Y),a&&t(h)}}}class re extends W{constructor(g){super(),X(this,g,null,ee,Z,{})}}export{re as component};
