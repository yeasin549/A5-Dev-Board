
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

const myDate = new Date("2025-03-02"); // Example date
formatDate(myDate);


function goSecondSite(){
    window.location.href = "../second.html"
  }

