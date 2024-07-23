function myTime(){
    const work = new Date()
     document.querySelector('.dayy').innerHTML = work.getDay()
     document.querySelector('.hr').innerHTML = work.getHours()
     document.querySelector('.minu').innerHTML = work.getMinutes()
     document.querySelector('.se').innerHTML = work.getSeconds()
     setTimeout(myTime, 1000)
}

