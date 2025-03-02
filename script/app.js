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
});

const color = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-cyan-300"]
let colorCount = 0

    document.getElementById("theme-btn").addEventListener("click",function(){
        document.body.classList.remove("bg-[#F4F7FF]");
        document.body.classList.add(color[colorCount])
        colorCount = (colorCount + 1) % color.length;
    })



const completeBtn = document.querySelectorAll(".complete-btn");
const totalTaskElement = document.getElementById("total-task");
const addedTask = document.getElementById("added-task");

for(let i = 0; i < completeBtn.length; i++){
    const taskBtn = completeBtn[i]

    taskBtn.addEventListener("click",function(event){
        if(event.target.innerText === "Completed"){

            alert("You complete a task");

            const totalTask = totalTaskElement.innerText;
            const updatedTask = parseInt(totalTask) - 1;
            totalTaskElement.innerText = updatedTask;

            const totalTaskAdded = addedTask.innerText;
            const updatedTaskAdded = parseInt(totalTaskAdded) + 1;
            addedTask.innerText = updatedTaskAdded;

            const parentTask = taskBtn.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText

            const todayTime = new Date().toLocaleTimeString();

            const div = document.createElement("div");
            div.innerHTML = `
            <p class="p-5 bg-[#F4F7FF] rounded-lg">You have complete tha task <span>${parentTask}</span> <span> at ${todayTime}</span></p>
            `
            const taskContainer = document.getElementById("complete-task");
            taskContainer.appendChild(div);

            const taskContainerLength =  taskContainer.childNodes.length
            if(taskContainerLength === 7){
                alert("Congrates!!! You have complete all the task");
            }
            
        taskBtn.disabled = true;
        taskBtn.classList.add("bg-gray-300");
        }
    })
};

document.getElementById("clear-btn").addEventListener("click",function(){
    const element = document.getElementById("complete-task");
    element.remove();
})