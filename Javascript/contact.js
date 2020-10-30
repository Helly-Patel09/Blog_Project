function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}
function validateForm(){

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;
    
    var nameErr = true;
    //validate name
    if(name==""){
        printError("nameErr","Please enter your name");
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr","Please Enter a valid name");
        }
        else{
            printError("nameErr","");
            nameErr=false;
        }
    }

    var emailErr = true;
    //validate email
    if(email==""){
        printError("emailErr","Please enter your Email");
    }
    else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr","Please Enter a valid Email");
        }
        else{
            printError("emailErr","");
            emailErr=false;
        }
    }

    var subjectErr = true;
    //validate subject
    if(subject==""){
        printError("subjectErr","Please Enter Subject");
    }
    else{
        printError("subjectErr","");
        subjectErr=false;
    }

    var messageErr = true;
    //validate message
    if(message == ''){
        printError("messageErr","Please Enter Details");
    }
    else{
        printError("messageErr","");
        messageErr=false;
    }

    if(nameErr || emailErr || subjectErr || messageErr == true){
        return false;
    } else {
        alert("you have submitted the form..")
    }
}