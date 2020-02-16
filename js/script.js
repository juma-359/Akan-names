// var akan = document.getElementById('akan');
// var akanTitle = document.getElementsByClassName('akan-title');
// var form = document.getElementsByTagName('') 

// function click(male,female){
//     if(male = "male"){
        
//     }
// }

// var contactForm = document.getElementById('contact-form');
// // console.log(contactForm);

// var contactForm = alert ("enter your date of birth");

// if(contactForm == nul) {
//     alert("min=1920/1/1")
// } else {
//     alert("sucessful")
// }

function getGender(){
    var gender =document.getElementsByName("gender");
    for(i=0; i< gender.length; i++){
        if(gender[i].checked){
            return(gender[i].value)
        }
    }
}
var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];