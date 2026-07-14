const currentUser=JSON.parse(localStorage.getItem("currentUser"));

//if user is not logged-in 
if(currentUser==null){
    alert("Please login first.");
    window.location.href="login.html";
}
// Display user Details 
document.getElementById("name").textContent=currentUser.name;
document.getElementById("email").textContent=currentUser.email;
document.getElementById("branch").textContent=currentUser.branch;
document.getElementById("year").textContent=currentUser.year;

//logout

const logoutBtn=document.getElementById("logoutBtn");

logoutBtn.addEventListener('click',function(){
    localStorage.removeItem('currentUser');
    alert("Logout Succssfully");
    window.location.href="login.html";
})