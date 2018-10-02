function displayCred() {     
    var a = localStorage.getItem(1);
    var b = localStorage.getItem(2);
    var c = localStorage.getItem(3);
    var d = localStorage.getItem(4);
    
    

var a1 = document.getElementById("namnFalt").value
var b1 = document.getElementById("mailFalt").value
var c1 = document.getElementById("telFalt").value
var d1 = document.getElementById("medFalt").value

if (a1 === "") {
    document.getElementById("namnFalt").value = a;
    document.getElementById("mailFalt").value = b;
    document.getElementById("telFalt").value = c;
    document.getElementById("medFalt").value = d;

    rensaAllt();


}
}

function checkNamn() {
    var strText = document.getElementById("namnFalt").value;
    var strText2 = document.getElementById("namnFalt");
    
    if(strText.length < 2) {
     strText2.style.color = "red";
    } else {
     strText2.style.color = "black";
    }
}

function saveCrap() {

   
    var namnFalt = document.getElementById("namnFalt").value;
    var mailFalt = document.getElementById("mailFalt").value;
    var telFalt = document.getElementById("telFalt").value;
    var medFalt = document.getElementById("medFalt").value;
    localStorage.setItem("1", namnFalt);
    localStorage.setItem("2", mailFalt);
    localStorage.setItem("3", telFalt);
    localStorage.setItem ("4", medFalt);
    document.getElementById("namnFalt").value = "";
    document.getElementById("mailFalt").value = "";
    document.getElementById("telFalt").value = "";
    document.getElementById("medFalt").value = "";
}


function rensaAllt() {
    localStorage.clear();
}

function kollaNamn() {
    var a2 = document.getElementById("namnFalt").value
    
    if (a2 ==="") {
        console.log("nope");
    } else {
        kollaMail();
        
    }

}

function kollaMail() {
    var b2 = document.getElementById("mailFalt").value

    if(b2 ==="") {
        console.log("nope");
    } else {
        kollaTel();
    }

}

function kollaTel() {
    var c2 = document.getElementById("telFalt").value

    if(c2==="") {
        console.log("nope");
    } else {
        kollaMed();
    }

}

function kollaMed() {
    var d2 = document.getElementById("medFalt").value

    if(d2==="") {
        console.log("nope");
    } else {
        saveCrap();
        flyttaVanster();
        fadeaUt();
        nyaIn();
        visaText();

      
    }
}

function flyttaVanster() {
 
    
    $("#handen").animate({
        left: '+=40px'
        
        
    },400,  );
    
}

function fadeaUt() {
    $("#handen").fadeOut("fast");        
}

function nyaIn() {
    $("#tummeUp").fadeIn("slow");

}



function visaText() {
    var tumme = document.getElementById("tummeUp");
    var skickat = document.getElementById("sentText")

    tumme.appendChild(skickat);

    $("#sentText").fadeIn("slow");

    
}


