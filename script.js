

let str1 = "Programming";
let str2 = "Python";
let str3 = "JavaScript";

const para = document.createElement("p");
para.innerText = "We will talk about ";
document.body.appendChild(para);
para.style.fontSize = "20px";
para.style.fontWeight = "bold";

let texts = [str1, str2, str3];
let index = 0;

function animateText() {

    para.innerText = "We will talk about " + texts[index];
    index = (index + 1) % texts.length;
    
    setTimeout(() => {
        para.innerText = "We will talk about ";
    }, 1500);




}


let interval = setInterval(animateText, 2000);


setTimeout(() => {
    clearInterval(interval);
    para.innerText = "We will talk about ";
}, texts.length * 2000); 