
document.getElementById("random-bg-color").addEventListener("click", function(){
    const hexCode = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let color = "#"
    for(let i = 0; i < 6; i++){
      let codes = Math.floor(Math.random() * 15)
      let num  = hexCode[codes]
      color += num
      document.body.style.backgroundColor = color
    }
  })


  function formatDate(date) {
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
    
    const [weekday, month, day, year] = formatted.replace(",", "").split(" ");
    document.getElementById("date-calculate").textContent = `${weekday},`;
    document.getElementById("date-calculate").textContent = `${month} ${day} ${year}`;
}

const myDate = new Date("2025-03-04"); 
formatDate(myDate);



document.addEventListener("DOMContentLoaded", function () {
  let completedTasks = 23;
  const taskCountElement = document.getElementById("task-add");
  const completeButtons = document.querySelectorAll(".complete-button");

  completeButtons.forEach(button => {
      button.addEventListener("click", function () {
          if (!this.classList.contains("completed")) {
              completedTasks++;
              taskCountElement.innerText = completedTasks;
              this.classList.add("completed");
              this.innerText = "Completed";
              this.classList.add("bg-purple-600");
              this.classList.add("bg-gray-400", "cursor-not-allowed");
              this.disabled = true;
          }
      });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const completeButtons = document.querySelectorAll('.complete-button');
  const taskCountElement = document.getElementById('task-count');
  const logList = document.getElementById('log-list'); 
  const clearHistoryButton = document.getElementById('clear-history');

  let taskCount = parseInt(taskCountElement.textContent);

  completeButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (taskCount > 0) {
        taskCount--;
        taskCountElement.textContent = taskCount;
      }

      this.disabled = true; 
      alert(' Task Completed Successfully!');

      
      const taskTitle = this.closest('.task-box').querySelector('h3').textContent;
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0'); 
      const amPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; 
      const currentTime = `${hours}:${minutes} ${amPm}`;

      const listItem = document.createElement('li');
      listItem.textContent = `You have complete the task ${taskTitle} at -  ${currentTime}   `;
      logList.appendChild(listItem);
    });
  });

 
  clearHistoryButton.addEventListener('click', function() {
    logList.innerHTML = ""; 
  });
});







// document.addEventListener('DOMContentLoaded', function() {
//   const completeButtons = document.querySelectorAll('.complete-button');
//   const taskCountElement = document.getElementById('task-count');
//   const scoreElement = document.getElementById('task-count');

//   let taskCount = parseInt(taskCountElement.textContent);
//   let score = parseInt(scoreElement.textContent);

//   completeButtons.forEach(button => {
//     button.addEventListener('click', function() {
//       if (taskCount > 0) {
//         taskCount--;
//         taskCountElement.textContent = taskCount;
//       }

//       this.disabled = true;
//       alert('Task Completed Successfully');

      
//     });

    
//   });










    
        



















 

