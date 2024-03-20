import{S as T,i as W,s as B,k as m,q as N,a as k,y as S,l as u,m as f,r as E,h as a,c as P,z as j,p as w,b as i,D as x,A as D,g as J,d as O,B as V,H as z}from"./index.d01e145f.js";import{C as A}from"./CodeBlock.b58fbed1.js";function G(v){let e;return{c(){e=m("p")},l(s){e=u(s,"P",{});var l=f(e);l.forEach(a)},m(s,l){i(s,e,l)},p:z,d(s){s&&a(e)}}}function H(v){let e,s,l,_,c,b,h,p,y,$,n,r,g;return r=new A({props:{language:"html",code:` let cart = [];
            function addToCart(productName, price, image) {
            const existingProductIndex = cart.findIndex(item => item.name === productName);
            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({ name: productName, price: price, image: image, quantity: 1 });
            }
            updateCart();
        }`,$$slots:{default:[G]},$$scope:{ctx:v}}}),{c(){e=m("p"),s=m("strong"),l=N("Webshop"),_=k(),c=m("p"),b=N("Jag har gjort en Webshop"),h=k(),p=m("button"),y=N("."),$=k(),n=m("div"),S(r.$$.fragment),this.h()},l(t){e=u(t,"P",{});var o=f(e);s=u(o,"STRONG",{});var d=f(s);l=E(d,"Webshop"),d.forEach(a),o.forEach(a),_=P(t),c=u(t,"P",{});var C=f(c);b=E(C,"Jag har gjort en Webshop"),C.forEach(a),h=P(t),p=u(t,"BUTTON",{});var I=f(p);y=E(I,"."),I.forEach(a),$=P(t),n=u(t,"DIV",{style:!0});var q=f(n);j(r.$$.fragment,q),q.forEach(a),this.h()},h(){w(n,"margin","auto"),w(n,"width","70vw")},m(t,o){i(t,e,o),x(e,s),x(s,l),i(t,_,o),i(t,c,o),x(c,b),i(t,h,o),i(t,p,o),x(p,y),i(t,$,o),i(t,n,o),D(r,n,null),g=!0},p(t,[o]){const d={};o&1&&(d.$$scope={dirty:o,ctx:t}),r.$set(d)},i(t){g||(J(r.$$.fragment,t),g=!0)},o(t){O(r.$$.fragment,t),g=!1},d(t){t&&a(e),t&&a(_),t&&a(c),t&&a(h),t&&a(p),t&&a($),t&&a(n),V(r)}}}const F={title:"Ny Vecka",date:"2024-02-02",keywords:["planning"]};class K extends T{constructor(e){super(),W(this,e,null,H,B,{})}}export{K as default,F as metadata};
