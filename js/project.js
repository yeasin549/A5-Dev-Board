
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