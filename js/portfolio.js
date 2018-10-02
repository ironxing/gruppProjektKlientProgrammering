

$(document).ready(()=>{
  $('.moreBtn').click(function() {
      var myBtn = $(this).attr("id");
      var index = myBtn.substr(myBtn.length -1);

      var dots = "dots"+index;
      var more = "more"+index;

      var dots = document.getElementById(dots);
      var moreText = document.getElementById(more);
      var btnText = document.getElementById(myBtn);
    
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


