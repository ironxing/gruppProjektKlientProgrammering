$(document).ready(()=>{$(document).ready(()=>{
  
    getList('javascript', '#trendingJS');
    getList('CSS', '#trendingCSS');

    function getList(language, tableId){
        fetch('https://api.github.com/search/repositories?q=language:' + language  + '&sort=stars&order=desc')        
        .then(response => response.json())
        .then(data => {
            var listArr = data.items;
            var trends = listArr.slice(0,5);

            trends.forEach((trend)=>{
                var trendUrl = trend.html_url;
                var userUrl = trend.owner.html_url;
                var contributorUrl = trend.contributors_url;

                fetch(contributorUrl)        
                .then(response => response.json())
                .then(data => {
                    var contributorList = 'Top 30 Contributors:';
                    data.forEach((data)=>{
                        var aLogin = data.login;
                        var aImgUrl = data.avatar_url;
                        var aImg = '<img src='+ aImgUrl +'height="15" width="15"/>';
                        contributorList = contributorList + '<li>' +  aImg + aLogin + '</li>'; 
                    })

                trendRow = $(`<tr class="trendRow">
                                <td><a href="${trendUrl}">${trend.name}</a></td>
                                <td>${trend.stargazers_count}</td>
                                <td><a href=${userUrl}>${trend.owner.login}</a></td>
                             </tr>`);

                contriRow= $(`<tr class="contriRow">
                                <td></td>
                                <td></td>
                                <td>${contributorList}</td>
                            </tr>`);
                $(tableId).append(trendRow);
                $(tableId).append(contriRow);
                });
            });
        });     
    }
});

$('#trendingJSbtn').click(function(){ 
    $('#trendingJS .contriRow').toggle();
})

$('#trendingCSSbtn').click(function(){ 
    $('#trendingCSS .contriRow').toggle();
})

})

   

    