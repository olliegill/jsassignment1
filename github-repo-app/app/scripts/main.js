
var issuesTemplateModel;

function issuesTemplate(templateID, location, dataModel) {
    var templateString = $('#' + templateID).text();
    var templateFunction = _.template(templateString);
    var renderedTemplate = templateFunction(dataModel);
    $(location).append(renderedTemplate);
}

// callsData();
// setInterval(callsData, 100000);

setInterval(
  $.ajax("https://api.github.com/issues", {
    type: 'GET',
    dataType: 'json'

  }).done(function(data){

     _.each(data, function(issuesData){
       var issuesStuff = {
         title: issuesData.title,
         commentsUrl: issuesData.comments_url,
       };
       console.log(issuesStuff.commentsUrl);
       issuesTemplate('issues-list', '.each-issue', issuesStuff);
//go
//here

$(document).on('click','.links', function(e){
  e.preventDefault();
  $('.comments-div').empty();

  var commentsUrl = $(this).attr('data-id');
  $.ajax(commentsUrl, {
    type: 'GET',
    dataType: 'json',
  }).done(function(data){
    console.log(data);
    _.each(data, function(commentsData){
    issuesTemplate('comments-list', '.comments-div', commentsData);
});//these
});//guys
    });
  });
}),10000);
