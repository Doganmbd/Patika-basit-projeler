const inputOneDom = document.getElementById("exampleInputEmail1") ;
const buttonsDom = document.querySelector(".buton");
const inputTwoDom = document.getElementById("username");

const alertDom = document.getElementById("alert") ;

const formDom = document.getElementById("userForm");

buttonsDom.addEventListener("click", (e) =>{
    e.preventDefault();
    if(e.target.classList.contains("buton1")){
        if(inputOneDom.value && inputTwoDom.value){
            addItem(inputOneDom.value,inputTwoDom.value);
            inputOneDom.value = "";
            inputTwoDom.value ="" ;

        }else {
            alertDom.innerHTML = `
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        please fill in the blanks
      </div>
    </div> `
        }
        
    }if(e.target.classList.contains("buton2")){
        alertDom.innerHTML ="";
        userList.innerHTML = ""; 
        formDom.reset();

    }
})


const userList = document.getElementById("userList");
const addItem = (email,username) =>{
    const createLiDom = document.createElement("li");
    createLiDom.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center") ;
    userList.appendChild(createLiDom) ;
    createLiDom.innerHTML =`${email}<span class="badge bg-primary rounded-pill">${username}</span>`
    console.log(createLiDom)

}



