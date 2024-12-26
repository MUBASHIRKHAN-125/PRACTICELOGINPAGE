function signup(){
  let userName = document.getElementById("inp1").value;
  let userEmail = document.getElementById("inp2").value;
  let userPassword = document.getElementById("inp3").value;
  
  if(!userName  || !userEmail  || !userPassword){
   alert("PLEASE FILL THE INPUT!");
   return;
  }
  
    let array = JSON.parse(localStorage.getItem("multipleuser"));

    let objectUserDetail = {
     name : userName,
     email : userEmail,
     password : userPassword
    };

    if(array){
      for(let i = 0; i < array.length ; i++){
        if(userEmail == array[i].email){
          alert("EMAIL ALREADY EXIST PLEASE CHANGE EMAIL!");
          return;
         }
         else if(userPassword == array[i].password){
          alert("PASSWORD ALREADY EXIST PLEASE CHANGE PASSWORD!");
          return;
        }
        else{
          alert("COMPLETE SIGN-UP");
        }
      }
      array.push(objectUserDetail);
    }
    else{
      array = [objectUserDetail];
    }
    window.location.href = "login.html";

   localStorage.setItem("multipleuser" , JSON.stringify(array));
  }
  // //animation///
    const typed = new Typed('#element', {
        strings: ['WELCOME TO SIGN-UP PAGE!', 'MK WRITER!'],
        typeSpeed: 80,    backSpeed: 70,
        loop: true
      });
      ///animation////

 ///login//
function loginpage(){
    let userEmail = document.getElementById("loginup").value;
    let userPassword = document.getElementById("loginpassword").value;

    if(!userEmail || !userPassword){
      alert("PLEASE FILL THE INPUT!");
      return;
    }

    let array = JSON.parse(localStorage.getItem("multipleuser"));


    if(array){

      let flag = false;

      for(let i = 0; i < array.length ; i++){
        if(userEmail == array[i].email && userPassword == array[i].password){

       alert("LOGIN COMPLETE")

       flag = true;

       window.location.href = "index.html";
         }
    }
if(!flag){
  alert("Email or password is incorrect, please try again.");
}
 }
}
// //animation///
// var type = new Type('#element', {
//     strings: ['WELCOME TO LOGIN PAGE!', 'MK WRITER!'],
//     typeSpeed: 80,
//     backSpeed: 70,
//     loop: true
//   });
/////////
  function reset(){
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
  }

  function reset1(){
    document.getElementById("loginup").value = "";
    document.getElementById("loginpassword").value = "";
  }
