let btn = document.getElementById('Signup')
let btn2 = document.getElementById('input1')
let btn3 = document.getElementById('input3')
let modal2 = document.getElementsByClassName('modal2')
let modal = document.getElementsByClassName('modal')

btn.onclick = function() {
    modal[0].style.display = "block";
  }

  btn2.onclick = function() {
    modal[0].style.display = "none";
   
  }
