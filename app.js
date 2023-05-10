const hourEle = document.querySelector('.hour'),
      minuteEle = document.querySelector('.minute'),
      secondEle = document.querySelector('.second');


   


// Method-1
/*
function clock(){
    var getDate = new Date();


    // 3600 seconds in 1 hr.
                    // h m s ms / 1000
    var degTime = getDate.getHours() * 3600 + getDate.getMinutes() * 60 + getDate.getSeconds() * 1 + getDate.getMilliseconds() / 1000;
    // console.log(degTime);

    // Change time into degree 
    var hours = degTime / 60 / 12 * 6,
        minutes = degTime / 60 * 6,
        seconds = degTime * 60;


        
        hourEle.style.transform = `rotate(${hours}deg)`;
        minuteEle.style.transform = `rotate(${minutes}deg)`;
        secondEle.style.transform = `rotate(${seconds}deg)`;
}

clock();

// setInterval(clock,1000);
setInterval(clock,50);
*/



// Method-3

/*
    function scale(number,inmin,inmax,outmin,outmax){
        return (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
    }
*/


const scale = function(number,inmin,inmax,outmin,outmax){
    return (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}



// method-2

function setClock(){
    var getDate = new Date();

    var hours = getDate.getHours(),
        minutes = getDate.getMinutes(),
        seconds = getDate.getSeconds();

    var covertHours = hours % 12; // convert 12 hours format

       
    // Method-2

    // setRotation(hourEle,hours / 12);
    // setRotation(minuteEle,minutes / 60);
    // setRotation(secondEle,seconds / 60);



    // method-3
    hourEle.style.transform = `rotate(${scale(covertHours,0,12,0,360)}deg)`;
    minuteEle.style.transform = `rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondEle.style.transform = `rotate(${scale(seconds,0,60,0,360)}deg)`;

}


function setRotation(handItem,rotation){
    // console.log(handItem,rotation);

    handItem.style.setProperty('--myrotation',rotation * 360);
}

setClock();
setInterval(setClock,1000);


