function checkname(){
    var name = document.getElementById("name").value;
    var mail= document.getElementById("email").value;
    var password= document.getElementById("pwd1").value;
    var confirmpassword= document.getElementById("pwd2").value;

    if (name=="" || mail=="" || password=="" || confirmpassword==""){
        console.log(false);
        return false;
    }else{
        console.log(true);
        return true;
    }
}
function validateEmail (){
    var email=document.getElementById("email").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        // console.log(true);
        return true; 
    } else {
        // console.log(false)
        return false; 
    }
}
function validatePwd(){
    var password= document.getElementById("pwd1").value;
    let regexPwd="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$";
    if (password.match(regexPwd)){
        console.log(true);
        return true; 
    } else {
        console.log(false);
        return false; 
    }
}
function matchPassword() {  
    var password= document.getElementById("pwd1").value;
    var confirmpassword= document.getElementById("pwd2").value; 
    if(password != confirmpassword)  
    {   
    //   alert("Passwords did not match"); 
      return false; 
    } else {  
    //   alert("Password created successfully"); 
      return true; 
    }  
}
function validatePhoneNumber() {
    var re = /^\(?(\d{2})\)?[-]?(\d{3})[-]?(\d{3})$/;
    var phone = document.getElementById('phone');
    
    if (re.test(phone)) {
          return false;
    }
    return true;
  }
  function isOver18() {
    var rentdate=document.getElementById("date").value;
    const dateinserted=new Date(rentdate)
    const date18YrsAgo = new Date();
    date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
    // check if the date of birth is before that date
    return dateinserted < date18YrsAgo;
  }
  
  isOver18(new Date("1999-12-01")); // true
  isOver18(new Date("2020-03-27")); // false
function validate() {
    if (checkname() == false) {
        return alert("fill the empty blanks")
    }
    if (validateEmail () == false) {
        return alert("insert a valid email")
    }
    if(validatePhoneNumber()==false){
        return alert("Phone number isn't valid")
    }
    if(isOver18()==false){
        return alert("you must be 18+")
    }
    if (validatePwd() == false) {
        return alert("insert a valid password")
    }
    if (matchPassword() == false) {
        return alert("passwrod doesn't match")
    }
    return alert("account is registered");
}