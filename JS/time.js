var midday

function mainClock() {
    var date = new Date();
    var hours = updateHours(date.getHours());
    var minutes = updateTime(date.getMinutes());
    var seconds = updateTime(date.getSeconds());

    document.querySelector("#clock").innerHTML = hours + ":" + minutes + ":" + seconds + midday;
    setTimeout(mainClock, 1000);
}

function updateTime(n) {
    if(n < 10) {
        return "0" + n;
    }
    else {
        return n;
    }
}

function updateHours(n) {
    if(n < 10 && n != 0) {
        midday = "AM";
        return "0" + n;
    }
    else if(n == 10 || n == 11) {
        midday = "AM";
        return n;
    }
    else if(n == 12) {
        midday = "PM";
        return n;
    }
    else if(n > 12 && n < 22) {
        midday = "PM";
        return "0" + n % 12;
    }
    else if(n == 22 || n == 23) {
        midday = "PM";
        return n % 12;
    }
    else if(n == 0) {
        midday = "AM"
        return n = 12;
    }

    return midday
}