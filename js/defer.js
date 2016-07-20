function loadCSSFile(fileName, callback)
{
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "css/" + fileName;
  css.addEventListener("load", callback);
  document.body.appendChild(css);
}

function loadJavaScriptFile(fileName, callback)
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "js/" + fileName;
  script.addEventListener("load", callback);
  document.body.appendChild(script);
}

function loadCSS()
{
  loadCSSFile("font-awesome.min.css", function()
  {
    loadCSSFile("materialize.min.css", function()
    {
        loadJavaScript();
    });
  });
}

function loadJavaScript()
{
  loadJavaScriptFile("jquery-3.1.0.min.js", function()
  {
    loadJavaScriptFile("mainScript.min.js", function()
    {
      beginP1FadeIn();
    });
  });
}

document.addEventListener("DOMContentLoaded", function()
{
  loadCSS();
});
