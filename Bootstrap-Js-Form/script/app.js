/* 
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <span class="badge bg-primary rounded-pill">14</span>
          </li>
    
     */


          /* <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */


const inputOneDom = document.getElementById("exampleInputEmail1") ;
const subResButon = document.querySelector(".buton")
const inputTwoDom = document.getElementById("username")

const alertDom = document.getElementById("alert");

subResButon.addEventListener("click" , (e)=> {
    e.preventDefault() ;
    if(e.target.classList.contains("buton1")){
        if(inputOneDom.value&&inputTwoDom.value){
            console.log("first") ;
            addItem(inputOneDom.value ,inputTwoDom.value);
            inputOneDom.value = "";
            inputTwoDom.value =""
        }else {
            alertDom.innerHTML= `<div class="alert alert-dark" role="alert">
            Lütfen boş kısımları doldurunuz!
          </div>`

        }
    }else if(e.target.classList.contains("buton2")){
        ulDom.innerHTML =""
        alertDom.innerHTML =""
    }

})

const ulDom = document.getElementById("userList") ;

const addItem = (email,username) => {
    let createLi = document.createElement("li");
    createLi.classList.add("list-group-item", "d-flex", "justify-content-between" ,"align-items-center") ;
    ulDom.appendChild(createLi) ;
    createLi.innerHTML =`${email} <span class="badge bg-primary rounded-pill">${username}</span>`

    console.log(createLi)  ;
}

