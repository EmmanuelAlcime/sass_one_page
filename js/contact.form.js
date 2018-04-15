var firstName = document.getElementById("first_name").value;
var lastName = document.getElementById("last_name").value;
var email = document.getElementById("email").value;
var url = document.getElementById("url").value;
var purpose = document.getElementById("purpose").value;



document.getElementById("form_submit")
.addEventListener("click",(e)=>{
	var alertBanner = document.getElementById("alert");
    e.preventDefault();
    if (firstName === "" || lastName ==="" 
	|| email === "" || url === "" || purpose === "" ) {
        alertBanner.setAttribute("class","alert alert-danger reminder");
        alertBanner.innerHTML = "Fields left blank"; 
        alertBanner.style.display = "block";
        setTimeout(function(){
         alertBanner.style.display = "none";
        },6000);        
    }else{
       alertBanner.setAttribute("class","alert alert-success reminder");
        alertBanner.innerHTML = "Request Sent"; 
        alertBanner.style.display = "block";
        setTimeout(function(){
         alertBanner.style.display = "none";
        },6000);      
    }
});