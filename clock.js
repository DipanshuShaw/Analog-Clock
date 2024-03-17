// console.log("Clock");

// x = document.getElementsByClassName("clockContainer");

// hourHand = document.getElementById("hourHand");

// minuteHand = document.getElementById("minuteHand");
// secondHand = document.getElementById("secondHand");
// // console.log(hourHand.type);
// setInterval(() => {

//     date = new Date;
//     // console.log(date);
//     hour = date.getHours();
//     minute = date.getMinutes();
//     second = date.getSeconds();
//     // console.log(second);
//     // console.log(hour);
//     hourRotation = hour * 30 + minute / 2;
//     minuteRotation = minute * 6;
//     secondRotation = second * 6;
//     // console.log(hourRotation);
//     hourHand.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;


// }, 1000)


setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);