$(document).ready(()=>{
   // var skillData = [["Stata","93%"],["SQL","90%"],["HTML","90%"],["CSS","80%"],["Javascript","60%"]];
    var skillData = [{"name":"SQL","level":"93%"},{"name":"Stata","level":"90%"},{"name":"HTML","level":"80%"},{"name":"CSS","level":"70%"},{"name":"Javascript","level":"60%"}]
  
    var i;
    for (i = 0; i < 5; i++) { 
      //  var skillName = skillData[i][0];
      //  var skillLevel = skillData[i][1];

        var skillName = skillData[i].name;
        var skillLevel = skillData[i].level;

        $('.skillNamn:eq('+i+')').text(skillName);
        $('.skill:eq('+i+')').text(skillLevel);
        $('.skill:eq('+i+')').width(skillLevel);
    }
});
