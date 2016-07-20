function beginP1FadeIn()
{
  $("#nameTitle").fadeIn(1600, function()
  {
    $("#alwaysTitle").fadeIn(1600, function()
    {
      $("#thanksTitle").fadeIn(1200, function()
      {
        $("#buttonDiv").css("display","block");
        $("#tButton").fadeTo(400, 1, function()
        {
          $("#gButton").fadeTo(400, 1, function()
          {
            $("#lButton").fadeTo(400, 1, function()
            {
              $("#rButton").fadeTo(400, 1, function()
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
