function doGet() {
  return HtmlService.createHtmlOutputFromFile('dashboard')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}




function subjGroup() {
  var crsHistFile = SpreadsheetApp.openById("1dTDYY7chDV8QJ_P1Yq49nIJgV-KLIbwX22g8E-APpfo");
  var sheet = crsHistFile.getSheetByName('subjects');
  var listLength = sheet.getLastRow();
  var subjList = sheet.getRange(1, 1, listLength, 3).getValues();
  return subjList;
}


function findTerms(subject, crsnum) {
  var crsHistFile = SpreadsheetApp.openById("1dTDYY7chDV8QJ_P1Yq49nIJgV-KLIbwX22g8E-APpfo");
  var sheet = crsHistFile.getSheetByName('narrowed');
  var allSections = sheet.getDataRange().getValues();
  var termList = [];
  for (i=1; i < allSections.length; i++) {
    if (allSections[i][1] == subject && allSections[i][2] == crsnum) {
      termList.push(allSections[i]);
    }
  }
  return termList;
}
