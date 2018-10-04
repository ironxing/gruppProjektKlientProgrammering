$(document).ready(()=> {
    var imgScrArr = ['pics/bildspel1.jpg','pics/bildspel2.jpg','pics/bildspel3.jpg']
    var txtArr = ['Vi gillar utmaningar','Vi gillar smarta lösningar och stilren design','Vi ger positiv energi']
    var currentIndex = 1;
    var play = true;  // boolean variable som används i functionen intervalSpel()
    var intervalId = 0; // behöver den här att kunna "sluta" interval sedan

    intervalSpel();  

    $('.bildSpel-container').click(()=>{
        play = !play; //när man klicka på bildSpel-container, byter värde mellan true och false
        console.log(play);
        clearInterval(intervalId); //sluta den interval som redan började
        if (play){
            intervalSpel();
        }
    })

    function intervalSpel(){
        intervalId = setInterval(visaBild,3000); //börja interval och hämta intervalID
    } 

    function visaBild(){
        $('#bildSpel-bild').attr('src', imgScrArr[currentIndex]);
        $('#bildSpel-text').text(txtArr[currentIndex]);
        currentIndex =(currentIndex+1)%imgScrArr.length;
        
    }

});
