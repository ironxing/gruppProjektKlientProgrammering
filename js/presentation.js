var today = new Date();
var ms = today.getTime();
var msWeekAgo =  -  7 * 24 * 60 * 60 * 1000;
var ms2 = today.setMilliseconds(msWeekAgo)
var d = new Date(ms2);
var d_string = d.toISOString().substring(0, 10);

console.log(d_string);

$(document).ready(()=>{$(document).ready(()=>{
  
    getList('javascript', '#trendingJS');
    getList('CSS', '#trendingCSS');

    var testURL = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors';
    getContributorLogin(testURL);
    
    function getList(language, tableId){
        fetch('https://api.github.com/search/repositories?q=language:' + language  + '&sort=stars&order=desc')        
        .then(response => response.json())
        .then(data => {
            var listArr = data.items;
            var trends = listArr.slice(0,5);

            appendTable(trends);
            console.log(trends);
            
            function appendTable (trends){
                trends.forEach((trend)=>{
                    var trendUrl = trend.html_url;
                    var userUrl = trend.owner.html_url;
                    var contributorData = trend.contributors_url;

                    console.log(contributorData);
                    tableRow = $(`<tr><td><a href="${trendUrl}">${trend.name}</a></td><td>${trend.stargazers_count}</td><td><a href=${userUrl}>${trend.owner.login}</a></td>></td></tr>`);
                    $(tableId).append(tableRow);
                });
            }
        });     
    }

    function getContributorLogin(apiURL){
        fetch(apiURL)        
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var contributorList = '';
            data.forEach((data)=>{
                var aLogin = data.login;
                var aImgUrl = data.avatar_url;
                var aImg = '<img src='+ aImgUrl +'height="15" width="15"/>';
                contributorList = contributorList + '<li>' +  aImg + aLogin + '</li>'; 
            })
            console.log(contributorList);

            tableRow= $(`<tr><td></td><td></td><td>${contributorList}</td></tr>`);
            $('#trendingJS').append(tableRow);
            $('#trendingJS').append(picRow);
            
    });
    }


});

/*
now: get, store, show
/repos/:owner/:repo/contributors
GET /search/repositories
GET /repos/:owner/:repo/contributors
*/



    
/*
all time: fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    fetch('https://api.github.com/search/repositories?q=language:javascript&created:>2018-09-01&sort=stars&order=desc')
    fetch('https://api.github.com/search/repositories?q=language:javascript created:>'+d_string+'&sort=stars&order=desc')
    fetch('https://api.github.com/search/repositories?q=language:' + language + ' created:>' + d_string + '&sort=stars&order=desc')
    */ 
   
    getList('javascript', '#trendingJS');
    getList('CSS', '#trendingCSS');
 
    function getList(language, tableId){
        fetch('https://api.github.com/search/repositories?q=language:' + language /*+ ' created:>' + d_string*/ + '&sort=stars&order=desc')        .then(response => response.json())
        .then(data => {
            var listArr = data.items;
            var trends = listArr.slice(0,5);

            appendTable(trends);
            console.log(trends);
            
            function appendTable (trends){
                trends.forEach((trend)=>{
                    var trendUrl = trend.html_url;
                    var userUrl = trend.owner.html_url;
                    tableRow = $(`<tr><td><a href="${trendUrl}">${trend.name}</a></td><td>${trend.stargazers_count}</td><td><a href=${userUrl}>${trend.owner.login}</a></td>></td></tr>`);
                    $(tableId).append(tableRow);
                    console.log(trendUrl)
                    console.log(userUrl);
                });
            }
        });     
    }
});



    