function signup(){
    let userName = document.getElementById("inp1").value;
    let userEmail = document.getElementById("inp2").value;
    let userPassword = document.getElementById("inp3").value;

    localStorage.setItem("userName" , userName);
    localStorage.setItem("userEmail" , userEmail);
    localStorage.setItem("userPassword" , userPassword);
    alert("COMPLETE SIGN-UP PAGE");
}
function loginpage(){
    let userEmail = document.getElementById("loginup").value;
    let storageEmail = localStorage.getItem("userEmail");


    let userPassword = document.getElementById("loginpassword").value;
    let storagePassword = localStorage.getItem("userPassword");
if(userEmail == storageEmail ){
    if(userPassword == storagePassword){
        alert("LOGIN COMPLETE");
    }else{
        alert("Password did not Matched!");
    }
}else{
    alert("Email did not Matched!");
}
}
//animation///
const typed = new Typed('#element', {
    strings: ['WELCOME TO SIGN-UP PAGE!', 'MK WRITER!'],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true
  });
  //////
  function reset(){
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
  }

  function reset1(){
document.getElementById("loginup").value = "";
document.getElementById("loginpassword").value = "";
  }
