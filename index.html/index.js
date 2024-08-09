let name="";
let count="";
let grade="";


while (name==='' || name===null,
count==='' || count===null,
grade==='' || grade===null) {
       name=window.prompt("Enter your movie name")
       checkbox=prompt("Can you recomend it")
       count=+prompt("how many movie did you watch")
       if (count>=5){
        alert("You have watched little")
       }else if (count>5 && count<=10){
        alert("You are amazing")
       }else{
        alert("You may be better to stop")
       }
       
       grade=window.prompt("make it active")

       if (name){

       }

}








let age;



document.getElementById("age1").onclick=function(){
 age = document.getElementById("age").value;
 document.getElementById("h1").textContent=age;
}
