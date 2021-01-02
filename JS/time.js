var midday

function mainClock() {
    var date = new Date();
    var hours = updateHours(date.getHours());
    var minutes = updateTime(date.getMinutes());
    var seconds = updateTime(date.getSeconds());

    document.querySelector("#clock").innerHTML = hours + ":" + minutes + ":" + seconds + midday;
    setTimeout(mainClock, 1000);
}

function updateTime(n) { /* For minutes and seconds */
    if(n < 10) {
        return "0" + n;
    }
    else {
        return n;
    }
}

function updateHours(n) {
    if(n < 10 && n != 0) { //Returns 1am to 9am
        midday = "AM";
        return "0" + n;
    }
    else if(n == 10 || n == 11) { //Returns 10am and 11am
        midday = "AM";
        return n;
    }
    else if(n == 12) { //Returns 12pm
        midday = "PM";
        return n;
    }
    else if(n > 12 && n < 22) { //Returns 1pm to 9pm
        midday = "PM";
        return "0" + n % 12;
    }
    else if(n == 22 || n == 23) { //Returns 10pm and 11pm
        midday = "PM";
        return n % 12;
    }
    else if(n == 0) { //Returns 12am
        midday = "AM"
        return n = 12;
    }

    return midday
}