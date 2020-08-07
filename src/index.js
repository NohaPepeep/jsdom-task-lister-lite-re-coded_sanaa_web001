
  function del(con){
    let n=document.getElementById(con);
    n.parentElement.remove();

   }
   document.addEventListener("DOMContentLoaded", () => {
  // your code here


 let tasks=document.getElementById("tasks");
 let counter=0;
function handleClick(e) {

 const text=document.getElementById("new-task-description").value;
 const s=document.createElement("li");

 tasks.appendChild(s);
 s.innerHTML=text + "<button onclick='del("+counter+")' id='"+counter+"'>X</button>";
 console.log(text);
 counter++;
 event.preventDefault();

}

let Submit=document.querySelector("input[type='submit']");
Submit.addEventListener("click", handleClick);


});
