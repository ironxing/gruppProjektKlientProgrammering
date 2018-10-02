$(document).ready(()=>{
     var skillData = [{"name":"SQL","level":"93%"},{"name":"AI","level":"90%"},{"name":"Machine Learning","level":"80%"},{"name":"Python","level":"70%"},{"name":"Javascript","level":"90%"}]
   
     var i;
     for (i = 0; i < 5; i++) { 
         var skillName = skillData[i].name;
         var skillLevel = skillData[i].level;
 
         $('.skillNamn:eq('+i+')').text(skillName);
         $('.skill:eq('+i+')').text(skillLevel);
         $('.skill:eq('+i+')').width(skillLevel);
     }
 });
 