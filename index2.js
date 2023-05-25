// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. see LICENSE in the project root for license information.
"use strict";

 
Office.initialize = function(reason) {
  $(document).ready(function(){
    loadEntities();
	 


	  
  });
} 



 


function addM(ap){
	
	const map = L.map('map',{zoomControl:false}).setView([47.5, 19], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	
	$("#teszter").text(ap+"");
	var apins = ap+"";
	
		$.ajax({
  type: "GET",
  //url: "https://varosmajorifalevelek.hu/mkif/index3.php?dm="+dm+"&kmko="+kmko+"&ap="+ap+"&pkod="+pkod,
  url: "https://varosmajorifalevelek.hu/mkif/index3.php?dm="+0+"&kmko="+100+"&ap="+"m7"+"&pkod="+2,
  datatype: "html",
  success: function(response) {
 
		//$("#koordz").html(response); 
		var koordArr=response.split(";"); 
		
		var cma0 = L.circleMarker([47.5,19]).addTo(map);
		var cma = L.circleMarker([parseFloat(koordArr[1]),parseFloat(koordArr[0])]).addTo(map);
		
		//addCoords();
		
	 // document.getElementById('svifr').innerHTML = "<iframe id =\"gsv\"  src=\"https://maps.google.com/maps?layer=c&amp;cbll="+koordArr[1]+","+koordArr[0]+"&amp;cbp=,0,0,0,0&amp;source=embed&amp;output=svembed\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>";
}
});
	
	
	
	
	//var cma = L.circleMarker([47.5,19]).addTo(map);
	//$("#all-matches").text("Gesdafsdafem");
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
     $("#selected-match").text(JSON.stringify(selectedMatches.mozaikszavak, null, 2)+"AAP");
	 
	 var szelvenyString = JSON.stringify(selectedMatches.mozaikszavak, null, 2);
	 var apstring = szelvenyString.split(" ");
	 var kavicsstring = (apstring[1]).split(encodeURIComponent('+'));
	 
	 var teszterString = $("#selected-match").text();
	$("#teszter").text(teszterString+"");
	 
	 //L.marker([kavicsstring[0],kavicsstring[1]]).addTo(map);
	 //addM(apstring[0]);
	 addM("m7");
	
	 
	 
	 
	 
	 
	     // $("#all-matches").html(" <iframe src=\"https://www.w3schools.com\" title=\"W3Schools Free Online Web Tutorials\"></iframe>");
 if((JSON.stringify(selectedMatches.mozaikszavak, null, 2)).includes("GIS")){
        $("#selected-match").text("Geographic Information System");
 }else if((JSON.stringify(selectedMatches.mozaikszavak, null, 2)).includes("SAP")){
        $("#selected-match").text("Systemanalyse und Programmentwicklung, aminek jelentése „rendszerelemzés és programfejlesztés. Az SAP a világ vezető integrált vállalatirányítási rendszere.");
	      // $("#all-matches").html("<img src=\"https://www.sap.com/cxworks/assets/images/sap.png\" width=\"100%\" height=\"auto\">");
	  //$("#all-matches").html(" <iframe src=\"https://www.w3schools.com\" title=\"W3Schools Free Online Web Tutorials\"></iframe>");
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
