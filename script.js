// let str1 = "Programming";
// let str2 = "Python";
// let str3 = "JavaScript";

// const para = document.createElement("p");
// para.innerText = "We will talk about ";
// document.body.appendChild(para);
// para.style.fontSize = "20px";
// para.style.fontWeight = "bold"; 

// let texts = [str1, str2, str3];
// let index = 0;

// function animateText() {
//     // Show the text
//     para.innerText = "We will talk about " + texts[index];
    
//     // Increment index and loop back to 0 if it exceeds the array length
//     index = (index + 1) % texts.length;

//     // Clear the text after 1.5 seconds
//     setTimeout(() => {
//         para.innerText = "We will talk about ";
//     }, 1500);
// }

// let interval = setInterval(animateText, 2000);

// // Optionally, stop the animation after all texts have been shown once
// setTimeout(() => {
//     clearInterval(interval);
//     para.innerText = "We will talk about ";
// }, texts.length * 2000);

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
    // Show the text
    para.innerText = "We will talk about " + texts[index];
    
    // Increment index and loop back to 0 if it exceeds the array length
    index = (index + 1) % texts.length;

    // Clear the text after 1.5 seconds
    setTimeout(() => {
        para.innerText = "We will talk about ";
    }, 1500);
}

// Use setInterval to cycle through the texts every 2 seconds (1.5s display + 0.5s clear)
let interval = setInterval(animateText, 2000);

// Optionally, stop the animation after all texts have been shown once
setTimeout(() => {
    clearInterval(interval);
    para.innerText = "We will talk about ";
}, texts.length * 2000); // Stop after all texts have been shown once