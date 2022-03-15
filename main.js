let textMess = document.querySelector('span.mess-with-me');
textMess.style.fontSize = "40px";

let paragraphMess = document.querySelector('p.mess-with-me');
paragraphMess.style.backgroundColor = 'green';


let hiddenDino = document.querySelector('#hide-me');
hiddenDino.style.display = 'none';


let biggerDino = document.querySelector("#triceratops");
biggerDino.style.width = '324px'

let orange = function(){
textMess.style.color = 'orange';
}
textMess.addEventListener('click', orange);


let border = function(){
biggerDino.style.border = '1px solid red';
}
biggerDino.addEventListener('click', border);



let halfFeathers=document.querySelector('#feathers') 
let hiddenFeathers = function () {
    halfFeathers.style.opacity = '.5'
}
halfFeathers.addEventListener('click', hiddenFeathers);


let toggle = document.querySelector("#toggle");
let toggleBack = function () {
    toggle.style.color = 'blue'
}
toggle.addEventListener('click', toggleBack);





// you can reference tags with specific classes like such:
// let element = document.querySelector('tag.className') 
// so to reference the specific paragraphs in your assignment
// let paragraph = document.querySelector('p.mess-with-me')
