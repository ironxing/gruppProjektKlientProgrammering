$(document).ready(()=> {
    $('#menuIcon-container').click(()=>{
        $('#dropDown-content').toggle('show');
    });

    $(document).mouseup(function (e) {
        if (!$('#menuIcon-container').is(e.target) // if the target of the click isn't the container...
            && $('#menuIcon-container').has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('#dropDown-content').hide();
        }
    });
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


