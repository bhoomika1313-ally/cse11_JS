//const result = document.getElementById("para");
//result.innerHTML = "hey";
//result.title = "heyyyy";
// the diff between innerHTML and innerText is that innerHTML can recognise html
//  tags but innerText cannot

/*const x = document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML = "bhoomika";
x[1].innerHTML = "is";
x[2].innerHTML = "studying"; 

const r = document.getElementsByTagName("p");
r[0].innerHTML = "hiiiiiiiiiiiii";
r[1].style.color = "lightblue";
r[1].innerHTML = "my name is bhoomika";
r[2].innerHTML = "thirtennnnn";
r[2].style.color = "pink"; */

/*const z = document.querySelector("ul li:nth-child(2)");
z.style.color = "babypink";
z.innerHTML = "bhoomika";
//const w = document.querySelectorAll("p, .p1"); 

const test2 = document.querySelectorAll("ul li");   
  for(x in test2){
    test2[x].style.color = "pink";
    test2[x].style.fontSize = "20px";
    test2[x].style.fontFamily = "cursive";}
    //you need to use .style.propertyname for css properties in js
  
const element = document.getElementById("my");
let text = element.getAttribute("class");
console.log(text);
//document.getElementById("d").innerHTML = text;

function my(){
  document.getElementById("my").setAttribute("class","newclass");
  alert("atttribute added successfuly");}

const heading = document.createElement("h1");
const bodytag = document.getElementsByTagName("body");
bodytag[0].append(heading);
heading.innerText = "hi my guy";
heading.style.color = "red";
heading.style.fontSize = "50px";

 event in jss
the change in state of an object is known as event , it is a specefic actions thatoccurs
 within a webpage or app, such as clicking on an element, moving the mouse, pressing a key
 or loading a page

 onlclick, onmousehover, onmouseout, onmousedown, onmouseup, onmousemove, onmousewheel, 
 onkeydown, onkeyup, onkeypress, onfocus, onblur, onchange, 
 onsubmit, onload, onunload, onresize, onscroll*/

function onClick(){
  alert("you clicked the button");
}

function onMouseHover(){
  alert("you hovered the mouse");
}

function onMouseOut(){
  alert("you moved the mouse out");
}

function onMouseDown(){
  alert("you pressed the mouse button");
}

function onMouseUp(){
  alert("you released the mouse button");
}

function onMouseMove(){
  alert("you moved the mouse");
}


// onfocus, onsubmit, onblur, onchange

const c = document.getElementById("my");
c.addEventListener("focus", onhandlefocus);
c.addEventListener("blur", onhandleblur());

function onhandlefocus(){
  alert("you focused on the element");
  x.style.color = "blue";
}

function onhandleblur(){
  x.style.color = "black";
  alert("you blurred the element");
} 

// load, unload, resize, scroll

function onLoad(){
  alert("the page has loaded");
}
