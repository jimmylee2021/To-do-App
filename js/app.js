
let txt = document.getElementById("input-el")
let btn = document.getElementById("btn")
let list = document.getElementById("list")

btn.addEventListener("click", ()=>{
    add()
    txt.value = ""
    saveData()
})

function add() {

    if(txt.value === "") {
        alert("you must write something")
    }else {
          let newEl = document.createElement("li")
          newEl.innerHTML = txt.value 
          list.appendChild(newEl)

          let spanEl = document.createElement("span")
          spanEl.innerHTML = "\u00d7"
          newEl.appendChild(spanEl) 

    }
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }

}, false)

function saveData() {
    localStorage.setItem("data", list.innerHTML)
}

function getData() {
     list.innerHTML = localStorage.getItem("data")
}

getData()



