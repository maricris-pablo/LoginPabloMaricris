function ValidateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        alert("Valid email address!");
        document.form1.email.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
            document.form1.email.focus();
        return false;
    }
} 

function checkPassword(password)
{
    var passformat = /^(?=.*\d)(?=.*[!@#$%^&*_()-+=<>])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(password.value.match(passformat))
    {
        alert("Valid password!");
        document.form1.password.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid password!");
            document.form1.password.focus();
        return false;
    } 
}