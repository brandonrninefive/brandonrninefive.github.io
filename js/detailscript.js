function showProjectDetails(projectName)
{
  document.getElementById(projectName +" Details").style.display="block";
}
function hideProjectDetails(projectName)
{
  document.getElementById(projectName + " Details").style.display="none";
}
function toggleProjectDetails(projectName)
{
  if(document.getElementById(projectName+" Button").innerHTML == "Project Details <span class=\"glyphicon glyphicon-arrow-right\"></span>")
  {
      document.getElementById(projectName+" Button").innerHTML = "Project Details <span class='glyphicon glyphicon-arrow-down'></span>";
      showProjectDetails(projectName);
  }
  else
  {
    document.getElementById(projectName+" Button").innerHTML = "Project Details <span class='glyphicon glyphicon-arrow-right'></span>";
    hideProjectDetails(projectName);
  }
}
function createProjectSection(projectName,text1,text2,glyph1,glyph2,link1,link2,desc,downloadEnabled,sourceEnabled)
{
    document.write("<div class='container'>");
    document.write("<h3>"+projectName+"</h3>");
    if(downloadEnabled)
      document.write("<button class='btn btn-primary' type='submit' onClick=\"window.open('" +link1+ "','_blank');\">" +text1 +" <span class='" +glyph1+"'></span></button> ");
    else
      document.write("<button class='btn btn-primary disabled' type='submit' onClick=\"window.open('" +link1+ "','_blank');\">" +text1 +" <span class='" +glyph1+"'></span></button> ");

    if(sourceEnabled)
      document.write("<button class='btn btn-success' type='submit' onClick=\"window.open('" +link2+ "','_blank');\">" +text2 +" <span class='" +glyph2 +"'></span></button> ");
    else
      document.write("<button class='btn btn-success disabled' type='submit' onClick=\"window.open('" +link2+ "','_blank');\">" +text2 +" <span class='" +glyph2 +"'></span></button> ");

    document.write("<button class='btn btn-info' type='submit' id='" + projectName +" Button'>Project Details <span class='glyphicon glyphicon-arrow-right'></span></button>");
    var detailsButton = document.getElementById(projectName + " Button");
    detailsButton.addEventListener("click",function()
    {
      toggleProjectDetails(projectName);
    });
    document.write("<br>");
    document.write("<br>");
    document.write("<div class='alert alert-info' style='display:none' id='"+projectName +" Details'>");
    document.write(desc);
    document.write("</div>");
    document.write("</div>");
}
