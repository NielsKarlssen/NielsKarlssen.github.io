import{S as mn,i as hn,s as gn,k as t,a as o,q as k,l as a,c as s,m as c,r as x,h as l,n as i,p as P,T as pn,b as nn,D as n,H as en}from"../chunks/index.d01e145f.js";function fn(dn){let p,D,m,u,q,z,E,A,_,B,O,I,W,M,e,T,U,Y,H,L,j,S,V,f,F,C,R,G,y,J,v,K,Q,w,X,b,rn,Z,N,$;return{c(){p=t("!DOCTYPE"),D=o(),m=t("html"),u=t("head"),q=t("meta"),z=o(),E=t("meta"),A=o(),_=t("title"),B=k("Calculator"),O=o(),I=t("style"),W=k(`body {\r
    font-size: 24px; \r
  }\r
\r
  h1 {\r
    font-size: 36px; \r
  }\r
\r
  p {\r
    font-size: 20px; \r
  }\r
\r
  .loading-spinner {\r
    border: 8px solid #f3f3f3;\r
    border-top: 8px solid #34db3f;\r
    border-radius: 50%;\r
    width: 150px; \r
    height: 150px; \r
    animation: spin 2s linear infinite;\r
    display: none;\r
  }\r
\r
  @keyframes spin {\r
    0% { transform: rotate(0deg); }\r
    100% { transform: rotate(360deg); }\r
  }\r
\r
  .slow-image {\r
    display: none;\r
  }`),M=o(),e=t("body"),T=t("h1"),U=k("Calculator"),Y=o(),H=t("p"),L=k('This is a calculator. Please enter two numbers below and click "Calculate".'),j=o(),S=t("div"),V=o(),f=t("input"),F=o(),C=t("span"),R=k("+"),G=o(),y=t("input"),J=o(),v=t("button"),K=k("Calculate"),Q=o(),w=t("canvas"),X=o(),b=t("audio"),Z=o(),N=t("script"),$=k(`function calculate() {\r
    var firstNumber = document.getElementById("firstNumber").value;\r
    var secondNumber = document.getElementById("secondNumber").value;\r
    var animationDuration = 2000; \r
    document.querySelector('.loading-spinner').style.display = 'inline-block'; \r
\r
    setTimeout(function() {\r
        document.querySelector('.loading-spinner').style.display = 'none'; \r
        document.querySelector('.slow-image').style.display = 'block'; \r
        loadSlowImage();\r
    }, animationDuration);\r
}\r
\r
function loadSlowImage() {\r
    var img = new Image();\r
    img.src = "https://www.meme-arsenal.com/memes/8b955bf4c55ba0ae6f324087fd02777b.jpg"; \r
    img.onload = function() {\r
        var canvas = document.querySelector('.slow-image');\r
        var ctx = canvas.getContext('2d');\r
        canvas.width = img.width; \r
        canvas.height = img.height;\r
\r
        var imgWidth = img.width;\r
        var imgHeight = img.height;\r
        var chunkHeight = 1;\r
        var chunks = Math.ceil(imgHeight / chunkHeight);\r
        var currentChunk = 0;\r
\r
        document.getElementById("slowImageAudio").play(); \r
\r
\r
        function drawChunk() {\r
            if (currentChunk >= chunks) {\r
                return;\r
            }\r
            var y = currentChunk * chunkHeight;\r
            ctx.drawImage(img, 0, y, imgWidth, chunkHeight, 0, y, imgWidth, chunkHeight);\r
            currentChunk++;\r
            setTimeout(drawChunk, 5);\r
        }\r
        drawChunk();\r
    };\r
}`),this.h()},l(d){p=a(d,"!DOCTYPE",{html:!0}),D=s(d),m=a(d,"HTML",{lang:!0});var h=c(m);u=a(h,"HEAD",{});var g=c(u);q=a(g,"META",{charset:!0}),z=s(g),E=a(g,"META",{name:!0,content:!0}),A=s(g),_=a(g,"TITLE",{});var tn=c(_);B=x(tn,"Calculator"),tn.forEach(l),O=s(g),I=a(g,"STYLE",{});var an=c(I);W=x(an,`body {\r
    font-size: 24px; \r
  }\r
\r
  h1 {\r
    font-size: 36px; \r
  }\r
\r
  p {\r
    font-size: 20px; \r
  }\r
\r
  .loading-spinner {\r
    border: 8px solid #f3f3f3;\r
    border-top: 8px solid #34db3f;\r
    border-radius: 50%;\r
    width: 150px; \r
    height: 150px; \r
    animation: spin 2s linear infinite;\r
    display: none;\r
  }\r
\r
  @keyframes spin {\r
    0% { transform: rotate(0deg); }\r
    100% { transform: rotate(360deg); }\r
  }\r
\r
  .slow-image {\r
    display: none;\r
  }`),an.forEach(l),g.forEach(l),M=s(h),e=a(h,"BODY",{});var r=c(e);T=a(r,"H1",{});var ln=c(T);U=x(ln,"Calculator"),ln.forEach(l),Y=s(r),H=a(r,"P",{});var on=c(H);L=x(on,'This is a calculator. Please enter two numbers below and click "Calculate".'),on.forEach(l),j=s(r),S=a(r,"DIV",{class:!0}),c(S).forEach(l),V=s(r),f=a(r,"INPUT",{type:!0,id:!0,style:!0,placeholder:!0}),F=s(r),C=a(r,"SPAN",{style:!0});var sn=c(C);R=x(sn,"+"),sn.forEach(l),G=s(r),y=a(r,"INPUT",{type:!0,id:!0,style:!0,placeholder:!0}),J=s(r),v=a(r,"BUTTON",{onclick:!0,style:!0});var cn=c(v);K=x(cn,"Calculate"),cn.forEach(l),Q=s(r),w=a(r,"CANVAS",{class:!0,width:!0,height:!0}),c(w).forEach(l),X=s(r),b=a(r,"AUDIO",{id:!0,src:!0}),c(b).forEach(l),Z=s(r),N=a(r,"SCRIPT",{});var un=c(N);$=x(un,`function calculate() {\r
    var firstNumber = document.getElementById("firstNumber").value;\r
    var secondNumber = document.getElementById("secondNumber").value;\r
    var animationDuration = 2000; \r
    document.querySelector('.loading-spinner').style.display = 'inline-block'; \r
\r
    setTimeout(function() {\r
        document.querySelector('.loading-spinner').style.display = 'none'; \r
        document.querySelector('.slow-image').style.display = 'block'; \r
        loadSlowImage();\r
    }, animationDuration);\r
}\r
\r
function loadSlowImage() {\r
    var img = new Image();\r
    img.src = "https://www.meme-arsenal.com/memes/8b955bf4c55ba0ae6f324087fd02777b.jpg"; \r
    img.onload = function() {\r
        var canvas = document.querySelector('.slow-image');\r
        var ctx = canvas.getContext('2d');\r
        canvas.width = img.width; \r
        canvas.height = img.height;\r
\r
        var imgWidth = img.width;\r
        var imgHeight = img.height;\r
        var chunkHeight = 1;\r
        var chunks = Math.ceil(imgHeight / chunkHeight);\r
        var currentChunk = 0;\r
\r
        document.getElementById("slowImageAudio").play(); \r
\r
\r
        function drawChunk() {\r
            if (currentChunk >= chunks) {\r
                return;\r
            }\r
            var y = currentChunk * chunkHeight;\r
            ctx.drawImage(img, 0, y, imgWidth, chunkHeight, 0, y, imgWidth, chunkHeight);\r
            currentChunk++;\r
            setTimeout(drawChunk, 5);\r
        }\r
        drawChunk();\r
    };\r
}`),un.forEach(l),r.forEach(l),h.forEach(l),this.h()},h(){i(p,"html",""),i(q,"charset","UTF-8"),i(E,"name","viewport"),i(E,"content","width=device-width, initial-scale=1.0"),i(S,"class","loading-spinner"),i(f,"type","text"),i(f,"id","firstNumber"),P(f,"font-size","24px"),i(f,"placeholder","Enter first number"),P(C,"font-size","24px"),i(y,"type","text"),i(y,"id","secondNumber"),P(y,"font-size","24px"),i(y,"placeholder","Enter second number"),i(v,"onclick","calculate()"),P(v,"font-size","24px"),i(w,"class","slow-image"),i(w,"width","640"),i(w,"height","360"),i(b,"id","slowImageAudio"),pn(b.src,rn="whistle.mp3")||i(b,"src",rn),i(m,"lang","en")},m(d,h){nn(d,p,h),nn(d,D,h),nn(d,m,h),n(m,u),n(u,q),n(u,z),n(u,E),n(u,A),n(u,_),n(_,B),n(u,O),n(u,I),n(I,W),n(m,M),n(m,e),n(e,T),n(T,U),n(e,Y),n(e,H),n(H,L),n(e,j),n(e,S),n(e,V),n(e,f),n(e,F),n(e,C),n(C,R),n(e,G),n(e,y),n(e,J),n(e,v),n(v,K),n(e,Q),n(e,w),n(e,X),n(e,b),n(e,Z),n(e,N),n(N,$)},p:en,i:en,o:en,d(d){d&&l(p),d&&l(D),d&&l(m)}}}class vn extends mn{constructor(p){super(),hn(this,p,null,fn,gn,{})}}export{vn as component};
