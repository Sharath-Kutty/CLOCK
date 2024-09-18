function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes()
    var seconds = rtClock.getSeconds(); 

    //Add AMand PM system
    var amPm = ( hours < 12 ) ? "AM" : "PM";

    // Convert the hoours component to 24-hour format
    hours = (hours > 24) ? hours - 12 : hours;


    // Pad the hours, minuutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Dispaly the clock
    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);    
}