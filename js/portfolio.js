

$(document).ready(()=>{
  //Vid tryck på knappen moreBtn hämtar idt på tryckt knapp
  $('.moreBtn').click(function() {
      var myBtn = $(this).attr("id");

      //Läser in vilken knapp det är som är vald för följande variabler
      var index = myBtn.substr(myBtn.length -1);
      var dots = "dots"+index;
      var more = "more"+index;

      //Hämtar objektet för indexet
      var dots = document.getElementById(dots);
      var moreText = document.getElementById(more);
      var btnText = document.getElementById(myBtn);
    
    //If sats som hanterar läs-knapparna
      if (dots.style.display === "none") {
        dots.style.display = "block";
        btnText.innerHTML = "Läs mer"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Läs mindre"; 
        moreText.style.display = "inline";
      }
  });
});


