let userName = prompt("Lütfen İsminizi Giriniz"); // Asked to the User his/her Name
let welcome = document.getElementById("myName").innerHTML = `${userName}`; // Added Name after Welcome with Template Literal


function showTime(){ // Added Day,Hour,Minute and Second variable with Date Constructor Below
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    switch(day){ // Days added with switch keys
        case 0:
          day = "Pazar";
          break;
        case 1:
          day = "Pazartesi";
          break;
        case 2:
           day = "Salı";
          break;
        case 3:
          day = "Çarşamba";
          break;
        case 4:
          day = "Perşembe";
          break;
        case 5:
          day = "Cuma";
          break;
        case 6:
          day = "Cumartesi";
    }
    
    // Added Zero before hour,minutes and second if they < 10 Below

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    
    const clock = hour + ":" + minute + ":" + second + " Bugün " + " " + day  ;
    document.getElementById("myClock").innerHTML = clock;
    

    
    setTimeout(showTime,1000);
}

showTime();
