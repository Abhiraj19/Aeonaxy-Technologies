
let checkboxes = document.getElementsByClassName("checkbox-round");
let divs=document.getElementsByClassName("mid-div")
let button=document.getElementById("returnbutton");
let finish=document.getElementById("button")
finish.addEventListener("click",(e)=>{
    window.location.href = "email.html"
})
button.addEventListener("click",(e)=>{
    window.location.href = "profile.html"
})


for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", (e) => {
     console.log("ok")
     divs[i].style.color="blue"
    
    });
    
}