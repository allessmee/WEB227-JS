let mas = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
for(let i = 0;i<12;i++){
  document.write("<div>"+ mas[i] +"</div>");
  let id = document.querySelectorAll("div")[i];
  col()
  function col(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    id.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
    return col;
  }
}