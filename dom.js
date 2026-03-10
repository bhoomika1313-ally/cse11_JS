const result = document.getElementById("para");
result.innerHTML = "hey";
result.title = "heyyyy";
// the diff between innerHTML and innerText is that innerHTML can recognise html tags but innerText cannot
/*
const x = document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML = "bhoomika";
x[1].innerHTML = "is";
x[2].innerHTML = "studying"; 

const r = document.getElementsByTagName("p");
r[0].innerHTML = "hiiiiiiiiiiiii";
r[1].style.color = "lightblue";
r[1].innerHTML = "my name is bhoomika";
r[2].innerHTML = "thirtennnnn";
r[2].style.color = "pink"; 

const z = document.querySelector("ul li:nth-child(2)");
z.style.color = "babypink";
z.innerHTML = "bhoomika"; */
//const w = document.querySelectorAll("p, .p1");

const test2 = document.querySelectorAll("ul li");   
  for(x in test2){
    test2[x].style.color = "pink";
    test2[x].style.fontSize = "20px";
    test2[x].style.fontFamily = "cursive";
    test2[x].style.backgroundColor = "grey";
  }
