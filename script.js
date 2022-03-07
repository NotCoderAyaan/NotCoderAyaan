console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamBurger').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 350);

    }

})

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "NotCoderAyaan",
        Password : "Minecraft@123",
        To : 'notcoderayaan@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}