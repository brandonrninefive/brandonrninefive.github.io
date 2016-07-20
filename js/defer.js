document.addEventListener("DOMContentLoaded", function()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "js/jquery-3.1.0.min.js";
  script.addEventListener("load", function()
  {
    var script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "js/mainScript.min.js";
    script2.addEventListener("load", function()
    {
      beginP1FadeIn();
    });
    document.body.appendChild(script2);
  });
  document.body.appendChild(script);
});
