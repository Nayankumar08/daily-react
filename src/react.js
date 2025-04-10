//        const parent=document.getElementById("parent"); 
//        const h1=document.createElement("h1");
//        h1.textContent="hello from React  CDN!";
//        parent.appendChild(h1);

//        const ul=document.createElement("ul");
//        const li1=document.createElement("l1");
//        li1.textContent="item 1";
//        const li2=document.createElement("l1");
//        li2.textContent="item 2";
//        ul.appendChild(li1);
//        ul.appendChild(li2);
//        parent.appendChild(ul);
       
       
       
//        const parent=document.getElementById("parent"); 
//    const root=ReactDOM.createRoot(parent);
//    const h1=React.createElement("h1",{},"React CDN");
//    //root.render(h1);
//    const item1=React.createElement("li",{},"React");
//    const item2=React.createElement("li",{},"CDN ");
//    const list=React.createElement("ul",{},item1,item2 );
//    root.render([h1,list]);

//jsx
const parent=document.getElementById("parent"); 
   const root=ReactDOM.createRoot(parent);
   const h1=<h1>React CDN</h1>;
   const item1=<li>item1</li>;
   const item2=<l1>CDN</l1>;
   const list=<ul>{item1}{item2}</ul>;
   root.render([h1,list]);
