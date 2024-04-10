
let Submit=document.getElementById("submit");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let Show=document.getElementById("show");
let Lpdata=JSON.parse(localStorage.getItem("form"))||[];

Submit.addEventListener("click",(e)=>{
  
e.preventDefault();


let user = Lpdata.find((data) => data.name === Name.value && data.email === Email.value && data.password === Password.value );
 console.log(user);
        if( user){
            window.location.href='profile.html'
        }
        else{
            Show.innerText="Invalid Email or Password."
        }
});








