function validateTitle()
{
    if(document.form.title.selectedIndex=="")
    {
        document.getElementById('etitle').innerHTML = "<b>❌❌Select atleast one.</b>"
        return false;
    }
    else
    {
        document.getElementById('etitle').innerHTML = "<b>GOOD</b>"
        return true;
    }
}



function validateFname() {
    var fname = document.getElementById('fname').value;
    if (fname== "" || fname == 0) {
        document.getElementById('vfname').innerHTML = "<b>❌❌Please don't leave the first name empty </b>"
        return false;
    } else if (fname.length < 4  || fname.length >10) {
        document.getElementById('vfname').innerHTML = "<b>❌❌First Name must have atleast 4-10 characters.</b>"
        return false;
    } else if (/[^a-zA-Z0-9_]/.test(fname)) 
    {
        document.getElementById('vfname').innerHTML = "<b>Only a-z, A-Z, 0-9, - and _ allowed in Usernames.</b> "
    } 
    else {
        document.getElementById('vfname').innerHTML = "<b>✅✅Valid</b>"
        return true;
    }
}


function validateLname() {
    var lname = document.getElementById('lname').value;
    if (lname== "" || lname==0) {
        document.getElementById('vlname').innerHTML = "<b>❌❌Please don't leave the last name empty.</b>"
        return false;
    } else if (lname.length < 4 || lname.length>10) {
        document.getElementById('vlname').innerHTML = "<b>❌❌Last Name must have atleast 4-10 characters.</b>"
        return false;
    } else if (/[^a-zA-Z0-9_]/.test(lname)) {
        document.getElementById('vlname').innerHTML = "<b>You are allowed to use letters and numbers. </b>"
    } else {
        document.getElementById('vlname').innerHTML = "<b>✅✅Valid</b>"
        return true;
    }
}


function validateEmail(){
    var mail = document.getElementById('mail').value;
    if (mail == 0 || mail == "") 
    {
        document.getElementById('vemail').innerHTML = "<b>❌❌Please do not leave the email empty</b>"
        return false;
    } 
    // else if(email.indexOf('@')<=0)
    // {
    //     document.getElementById('vemail').innerHTML = "<b>❌❌Invalid position of '@'</b>"
    //     return false;
    // }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) 
    {
        document.getElementById('vemail').innerHTML = "<b>✅✅Valid ✓✓</b> "
    } 
    else 
    {
        document.getElementById('vemail').innerHTML = " <b>❌❌Leave Valid Email</b>"
        return false;
    }
} 



function validatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone == 0 || phone == "")
    {
        document.getElementById('ePhone').innerHTML="<b>❌❌Don't leave empty</b>";
        return false;
    }
    else if(isNaN(phone)){
        document.getElementById('ePhone').innerHTML="<b>❌❌Only numbers allowed<b>";
        return false;
    }
    else if(phone.length<10 || phone.length>10)
    {
        document.getElementById('ePhone').innerHTML="<b>❌❌Number must be exactly 10 digits</b>";
        return false;
    }
    else{
        document.getElementById('ePhone').innerHTML="✅✅Valid Phone";
        return true;
    }
}



function validateRoomType()
{
    if(document.form.troom.selectedIndex=="")
    {
        document.getElementById('eroom').innerHTML = "<b>❌❌Select atleast one.</b>"
        return false;
    }
    else
    {
        document.getElementById('eroom').innerHTML = "<b>GOOD</b>"
        return true;
    }
}



function validateBed()
{
    if(document.form.bed.selectedIndex=="")
    {
        document.getElementById('ebed').innerHTML = "<b>❌❌Select atleast one.</b>"
        return false;
    }
    else
    {
        document.getElementById('ebed').innerHTML = "<b>GOOD</b>"
        return true;
    }
}



function validateNoRoom()
{
    if(document.form.nroom.selectedIndex=="")
    {
        document.getElementById('enroom').innerHTML = "<b>❌❌Select atleast one.</b>"
        return false;
    }
    else
    {
        document.getElementById('enroom').innerHTML = "<b>GOOD</b>"
        return true;
    }
}



function validateMeal()
{
    if(document.form.meal.selectedIndex=="")
    {
        document.getElementById('emeal').innerHTML = "<b>❌❌Select atleast one.</b>"
        return false;
    }
    else
    {
        document.getElementById('emeal').innerHTML = "<b>GOOD</b>"
        return true;
    }
}
















