function beginP1FadeIn()
{
  $("#nameTitle").fadeIn(1600, function()
  {
    $("#alwaysTitle").fadeIn(1600, function()
    {
      $("#thanksTitle").fadeIn(1200, function()
      {
        $("#buttonDiv").css("display","block");
        $("#twitterButton").fadeTo(400, 1, function()
        {
          $("#githubButton").fadeTo(400, 1, function()
          {
            $("#linkedinButton").fadeTo(400, 1, function()
            {
              $("#resumeButton").fadeTo(400, 1, function()
              {
                $("#mainContainer2").fadeIn(800);
              });
            });
          });
        });
      });
    });
  });
}

$(document).ready(function()
{
  beginP1FadeIn();
});

$("#twitterButton").hover(function()
{
  $("#twitterButton").css("color","#80cbc4");
});

$("#twitterButton").mouseleave(function()
{
  $("#twitterButton").css("color","#26a69a");
});

$("#githubButton").hover(function()
{
  $("#githubButton").css("color","#80cbc4");
});

$("#githubButton").mouseleave(function()
{
  $("#githubButton").css("color","#26a69a");
});

$("#linkedinButton").hover(function()
{
  $("#linkedinButton").css("color","#80cbc4");
});

$("#linkedinButton").mouseleave(function()
{
  $("#linkedinButton").css("color","#26a69a");
});

$("#resumeButton").hover(function()
{
  $("#resumeButton").css("color","#80cbc4");
});

$("#resumeButton").mouseleave(function()
{
  $("#resumeButton").css("color","#26a69a");
});
