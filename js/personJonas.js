$(document).ready(()=>{
    var skillData = [{"name":"HTML","level":"40%"},{"name":"CSS","level":"40%"},{"name":"Javascript","level":"20%"},{"name":"Java","level":"30%"},{"name":"SQL","level":"30%"}]
  
    var i;
    for (i = 0; i < 5; i++) { 
        var skillName = skillData[i].name;
        var skillLevel = skillData[i].level;

        $('.skillNamn:eq('+i+')').text(skillName);
        $('.skill:eq('+i+')').text(skillLevel);
        $('.skill:eq('+i+')').width(skillLevel);
    }
});
