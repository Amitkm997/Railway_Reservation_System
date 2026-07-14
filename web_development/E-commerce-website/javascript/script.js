
//form is a variable (let,var,const) difference
const form=document.getElementById("registerForm");


form.addEventListener("submit",function(e){
    e.preventDefault(); // prevent our to reload

    let firstName=document.getElementById("firstName").value.trim();
    let lastName=document.getElementById("lastName").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();
    let confirmPassword=document.getElementById("confirmPassword").value.trim();

    //first Name
    if(firstName===""){
        alert("First Name is required");
    }
 
    //last Name
    if(lastName===""){
        alert("Last Name is required");
        return;
    }

    let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(email)){
        alert("Please Enter valid email");
        return;
    }


    if(password.length<6){
        alert("Password must be atleast 6 charcters");
        return;
    }

    if(password !=confirmPassword){
        alert("Password must be same");
        return;
    }

    alert("Registration Successfull");







})