function formsubmit(){
    let a=document.forms["form1"]["email"].value;
    let b=document.forms["form1"]["pass"].value;

    if(a==""){
        alert("Enter Your Email !");
    }

    else if(b==""){
        alert("Enter Your Password !")
    }
}