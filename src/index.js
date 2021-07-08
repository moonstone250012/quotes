const main= document.getElementById("main");
// const fragment = document.createDocumentFragment();
// for(let i=1; i<=15;i++)
// {
//     const li=document.createElement("li");
//     li.innerText=i;
//     fragment.append(li);
// }
// console.log(fragment);

// function creator(element)
// {
//     const e= document.createElement(element);
//     e.innerText =element;
//     return e;
// }
// const p = creator("p");
// const d = creator("div");
// const s = creator("span");
// const h = creator("h1");
// const h2 = creator("h2");

// main.append(p);
// main.prepend(s);
// //main.append(d);
// //main.prepend(h);
// s.after(h);
// p.before(d);

// console.log(p.parentNode.insertBefore(h2,d));

// <ul id="ulist">
//      <li>1</li>
// </ul>
// <ul id="ulist">
//      <li>2</li>
// </ul>
main.innerHTML=`
<h1>dom</h1>


`;

// const ulist = document.querySelector("ul")
// ulist.insertAdjacentHTML("afterbegin",'<li>afterbegin</li>');
// ulist.insertAdjacentHTML("beforebegin",'<li>beforebegin</li>');
// ulist.insertAdjacentHTML("afterend",'<li>afterend</li>');
// ulist.insertAdjacentHTML("beforeend",'<li>beforeend</li>');

const c=main.cloneNode(true);
main.append(c);
const g= main.querySelector("div");
console.log(g);

const h= document.createElement("h2");
h.innerText="js";
main.append(h);
setTimeout(() =>{
    g.remove();
}, 2000);
setTimeout(() =>{
    h.remove();
}, 2000);