alert("Open the website only on a laptop or PC");

/*LargeBox*/
let scrollContainer=document.querySelector(".boxl-img");
let left=document.getElementById("left");
let right=document.getElementById("right");

left.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=1000;
});

right.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=1000;
});

/*LargeBox2*/
let scrollContainer2=document.querySelector(".boxl-img2");
let left2=document.getElementById("left2");
let right2=document.getElementById("right2");

left2.addEventListener("click", ()=>{
    scrollContainer2.style.scrollBehavior="smooth";
    scrollContainer2.scrollLeft-=1000;
});

right2.addEventListener("click", ()=>{
    scrollContainer2.style.scrollBehavior="smooth";
    scrollContainer2.scrollLeft+=1000;
});

/*LargeBox3*/
let scrollContainer3=document.querySelector(".boxl-img3");
let left3=document.getElementById("left3");
let right3=document.getElementById("right3");

left3.addEventListener("click", ()=>{
    scrollContainer3.style.scrollBehavior="smooth";
    scrollContainer3.scrollLeft-=1000;
});

right3.addEventListener("click", ()=>{
    scrollContainer3.style.scrollBehavior="smooth";
    scrollContainer3.scrollLeft+=1000;
});
