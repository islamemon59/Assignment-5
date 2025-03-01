// get current date 
const today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let todayDate =    `${date}-${month}-${year}`;
// Current date added 
let newDate = document.getElementById("new-date");
newDate.innerText = todayDate;

// new today added 
document.getElementById("new-today").addEventListener("click",function(){
    window.location.href = "index2.html";
})


const completeBtn = document.querySelectorAll(".complete-btn");

for(let i = 0; i < completeBtn.length; i++){
    const taskBtn = completeBtn[i];
    
    taskBtn.addEventListener("click",function(event){
        const completeTask = document.querySelectorAll(".task");
        for(let i = 0; i < completeTask.length; i++){
            const task = completeTask[i];
            console.log(task)
        }
        if(event.target.innerText === "Completed"){
            alert("You complete a task");
        taskBtn.disabled = true;
        }
    })
}