function beginP1FadeIn()
{
  $("#nameTitle").fadeIn(1600, function()
  {
    $("#alwaysTitle").fadeIn(1600, function()
    {
      $("#thanksTitle").fadeIn(1200, function()
      {
        $("#buttonDiv").css("display","block");
        $("#twtterButton").fadeTo(400, 1, function()
        {
          $("#githubButton").fadeTo(400, 1, function()
          {
            $("#lnkdnButton").fadeTo(400, 1, function()
            {
              $("#resumeButton").fadeTo(400, 1, function()
              {
                $("#emailP").fadeIn(400, function()
                {
                  $("#mainContainer2").fadeIn(800);
                });
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
