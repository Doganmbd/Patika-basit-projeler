const inputDom = document.getElementById("task") ;
const buttonDom = document.querySelector("#button-addon2") ;
const ulDOm = document.querySelector("#list") ;


/* const alert = document.getElementById("myalert") */
buttonDom.addEventListener("click" , ()=> {
    
    /* ulDOm.innerHTML += inputDom.value + "<br>" */
    if(inputDom.value){
    ulDOm.innerHTML += liCreate(inputDom.value) ;
    
    inputDom.value =""
    }else if(inputDom.value == 0){
        $("#liveToastt").toast("show")
    }else {
     myFunction()
    }
})

function myFunction() {
    alert("Hello\nHow are you?");
  }

ulDOm.addEventListener("click", (e)=> {
    if(e.target.classList.contains("a"))
    e.target.parentElement.remove()
})

const liCreate = (e) => {
/*     const liCreateDom = document.createElement("li") ;
    ulDOm.appendChild(liCreateDom) ; 
    liCreateDom.innerText += inputDom.value 
    inputDom.value ="" */
    
   return `
   <div class="input-group mb-3 col-12" >
          <li class="list-group-item list-group-item-warning col-11">${e}
            
          </li>
          
          <button type="button" class="a btn-close btn-close-white col-1" aria-label="Close">X</button>
        </div>` 

  
   
   
   
}

