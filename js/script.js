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

function myFunction () {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var gender=getGender();
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0 ) {
        alert("Invalid!!");
    }
    else if (month <= 0 || month > 12) {
        alert("Invalid!!!!");
    }
    else if (day <= 0 || day > 31){
        alert("Invalid!!!");
    }
    else if (validate == false) {
        alert("Invalid!!");
    }
    if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = maleNames[dayBorn];
    alert(""+ " " + "You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName);
    }
    else if (gender === "female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = femaleNames[dayBorn];
    alert("Hello Madam"+ " " +  "You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName);
    }
}


