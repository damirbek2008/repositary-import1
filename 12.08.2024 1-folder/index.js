let checkbox= document.getElementById("checkbox")
let radio1  = document.getElementById("radio1")
let radio2  = document.getElementById("radio2")
let radio3  = document.getElementById("radio3")
let radio4  = document.getElementById("radio4")
let myButton  = document.getElementById("myButton")
let h2 = document.getElementById("h2")
let h1 = document.getElementById("h")

let result;

myButton.onclick= function (){
    if (checkbox.checked){
    document.getElementById("h2").textContent=("You have filled the information")
    }else{
        document.getElementById("h2").textContent=("You haven't filled the information")
    }


    if (radio1.checked){
        document.getElementById("h1").textContent=("You have to make it two")
    }else if (radio2.checked){
        document.getElementById("h1").textContent=("You have to make it three")
    }else if (radio3.checked){
        document.getElementById("h1").textContent=("You have to make it four")
    }else if (radio4.checked){
        document.getElementById("h1").textContent=("You have to make it stop")
    }else{
        document.getElementById("h1").textContent=("You haven't filled all the information section ")
    }
        
}


