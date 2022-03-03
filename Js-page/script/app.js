const userName = document.getElementById("myName") ;
const clock = document.getElementById("myClock") ;

let user = prompt("lütfen adınızı girin ") ;

userName.innerHTML = user.toUpperCase() ;


setInterval( () => {
    const time = new Date() ;
    // burada saat dakika görüntülemek istiyorum.getHours,getMinutes
    // gösterdiğim saati 3 değil 03 olması için başta string yapıyorum sonra ilk 2 sayısını alıyorum.(padStart)
    const [h,m,s,y,mt,d] = [time.getHours().toString().padStart(2,"0"),time.getMinutes().toString().padStart(2,"0"),time.getSeconds().toString().padStart(2,"0"),time.getFullYear().toString().padStart(2,"0"),time.getMonth().toString().padStart(2,"0"),time.getDate().toString().padStart(2,"0")]
    
    //görüntülenmesi için ;
    clock.innerText = h + ":" + m + ":" + s + " " + y + "-" + mt + "-"+ d ;
    } , 1000) ;



