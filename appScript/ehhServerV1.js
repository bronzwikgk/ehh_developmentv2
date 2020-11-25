let deployedUrl ="https://script.google.com/a/0dot1.live/macros/s/AKfycbyOQZ3JCvko4kI8_Fr9PoZjJA0ERjQftjHwf70VZwkf/dev";



function doGet(e) {
  Logger.log(e);
  var op = e.parameter.action + "not Cool";
  // const response = [ { status : "notCool!"}];
  var response = e.parameter.headers;
  console.log(op);
  return ContentService.createTextOutput(JSON.stringify(op)).setMimeType(ContentService.MimeType.JSON);
}


function doPost(e){
  //{name : "joe"}

  const body = e.postData.contents;
  const bodyJson = json.parse(body);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tab = ss.getSheetByName("test");
  tab.appendRow([bodyJSON.name]);
}


/* INCLUDE HTML PARTS, EG. JAVASCRIPT, CSS, OTHER HTML FILES */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
