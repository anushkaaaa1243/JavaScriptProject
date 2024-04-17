document.querySelector("#push").onclick= function () 
{
    if (document.querySelector("#newTask input").value.length==0) 
    {
        alert("Please Enter a Task")
        
    } else {
        document.querySelector("#task").innerHTML+=`
        <div class="task">
        <span class="taskName">
        ${document.querySelector("#newTask input").value}
        </span>
        <button class="delete"> 
        Delete
        </button>
        
        </div>
        `
let Taskdelete = document.querySelectorAll(".delete")
for (let i = 0; i < Taskdelete.length; i++) {
    for(let i=0;i<Taskdelete.length;i++){
        Taskdelete[i].onclick = function () {
            this.parentNode.remove()
    
    }
    
  }

  let task = document.querySelectorAll(".task")
  for (let i = 0; i < task.length; i++) {

    task[i].onclick=function() {
        this.classList.toggle("completed")
        
    }
  }
  
 document.querySelectorAll("#newTask input")   
 value=""
  }
    
}

    }
    
