/*
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
    function myFunction() {
    var btnText = document.getElementsByClassName("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
*/

/* READ MORE FUNCTION */

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
        dots.style.display = "inline";
        btnText.innerHTML = "Läs mer"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Läs mindre"; 
        moreText.style.display = "inline";
      }
  });
});
/*
$(document).ready(function() {
  $("#myBtn").click(function() {
    var element = $("#myBtn").text();
    if(element == "Läs mer") {
      $("#myBtn").text("Läs mindre");
      $("#more").slideDown();
    } else {
      $("#myBtn").text("Läs mer");
      $("#more").slideUp();
    }
  });
});
*/


