
var issuesTemplateModel;

function issuesTemplate(templateID, location, dataModel) {
    var templateString = $('#' + templateID).text();
    var templateFunction = _.template(templateString);
    var renderedTemplate = templateFunction(dataModel);
    $(location).append(renderedTemplate);
}

 $.ajax("https://api.github.com/issues", {
   type: 'GET',
   dataType: 'json'

 }).done(function(data){

    _.each(data, function(issuesData){
      var issuesStuff = {
        title: issuesData.title,
        commentsUrl: issuesData.comments_url,
        description: issuesData.description
      };
      issuesTemplateModel('issues-list', '.issues-name', issuesStuff);
    });
 });


// $.ajax( {
//   type: 'GET',
//   url: "https://api.github.com/issues",
//   dataType: 'json'
// }).done(function(data){
//
//   console.log(data);
// });
