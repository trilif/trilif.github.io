// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. see LICENSE in the project root for license information.
"use strict";

Office.initialize = function(reason) {
  $(document).ready(function(){
    loadEntities();
  });
} 

var dictionary=[
	{
		key : "GIS",
		value : "Geographical Information System"
	},
	{
		key : "HMKEl",
		value : "Háztartási méretű kiserőmű"
	}

];

function loadEntities() {
  // getSelectedRegExMatches is in preview, so need to test for it
  
    var body = Office.context.mailbox.item.body;
// Get the body asynchronous as text
body.getAsync(Office.CoercionType.Text, function (asyncResult) {
   if (asyncResult.status !== Office.AsyncResultStatus.Succeeded) {
        console.log("errorak00");
   } else {
      console.log(asyncResult.value+"");
   }
});

  
  
 // var bodyArray = (Office.context.mailbox.item.body).split(" ");
 //console.log(JSON.stringify(Office.context.mailbox.item.body));
  /*
  var stringbuilderB = "";
  for(i=0;i<=bodyArray.length;i++){
	  
	  stringbuilderB += stringbuilderB+bodyArray[i];
	 
  }
   $("#selected-match").text(stringbuilderB);
  */
  
  if (Office.context.mailbox.item.getSelectedRegExMatches !== undefined) {
    var selectedMatches = Office.context.mailbox.item.getSelectedRegExMatches();
    if (selectedMatches) {
      // Note that the use of selectedMatches.mozaikszavak, where
      // OrderNumber corresponds to the RegExName attribute of the Rule element
      // in the manifest
     $("#selected-match").text(JSON.stringify(selectedMatches.mozaikszavak, null, 2));
 if((JSON.stringify(selectedMatches.mozaikszavak, null, 2)).includes("GIS")){
        $("#selected-match").text("Geographic Information System");
 }else if((JSON.stringify(selectedMatches.mozaikszavak, null, 2)).includes("SAP")){
        $("#selected-match").text("Systemanalyse und Programmentwicklung, aminek jelentése „rendszerelemzés és programfejlesztés. Az SAP a világ vezető integrált vállalatirányítási rendszere.");
	       $("#all-matches").html("<img src=\"https://www.sap.com/cxworks/assets/images/sap.png\" width=\"100%\" height=\"auto\">");
    // $("#all-matches").text("Integrált vállalatirányítási rendszer alatt egy adott vállalat minden vállalati folyamatát lefedő programcsomagot értünk. Az SAP ágazatspecifikus megoldásait több mint 120 országban, hozzávetőleg 32 000 vállalat használja, kis- és középvállakozások, nagyvállalatok egyaránt.Az SAP AG 1972-ben alakult Weinheimben, eredeti neve Systemanalyse und Programmentwicklung”, aminek jelentése „rendszerelemzés és programfejlesztés. A rövidítését később átértelmezték, az új „Systeme, Anwendungen und Produkte in der Datenverarbeitung” név jelentése: Rendszerek, alkalmazások és termékek az adatfeldolgozásban.Az SAP AG jelenleg a világ negyedik legnagyobb szoftvercége, amelynek leányvállalata az SAP Hungary Kft több mint 1000 főt foglalkoztat. Szerte a világban 1500 partnercég értékesít SAP-licenceket, végzi a rendszerek bevezetését és látja el azok támogatását. Összességében 12 millió felhasználó alkalmaz SAP-rendszert, amely az ügyviteli megoldások területén kimagasló szám. A SAP Business One a néhány százmillió forint éves árbevételű cégek számára létrehozott, úgynevezett dobozos megoldás, míg a SAP R/3 az ennél nagyobb cégek számára ajánlott üzleti szoftver. Legújabb innovatív terméke a cég saját in-memory adatbáziskezelőjét használó S/4 HANA.[2] [3] [4]Az SAP saját programozási nyelve az ABAP. ");
	

 }
	    
	    else{
  ////////$("#selected-match").text("Geographic Information System?");
 }
      
      
      
      
      
    } else {
      $("#selected-match").text("Selected matches was null");
    }
  } else {
    $("#selected-match").text("Method not supported on your client");
  } 

  // Get all matches
  var allMatches = Office.context.mailbox.item.getRegExMatches();
  if (allMatches) {
    // Note that the use of selectedMatches.mozaikszavak, where
    // OrderNumber corresponds to the RegExName attribute of the Rule element
    // in the manifest
   ///////// $("#all-matches").text(JSON.stringify(allMatches.mozaikszavak, null, 2));
  } else {
   ////////// $("#all-matches").text("All matches was null");
  }
}

function showError(message) {
  $("#error-msg").text(message);
  $("#error").show();
}
