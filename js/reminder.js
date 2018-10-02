
	function Timing() {
	 var firstInput = document.getElementById("firstInput").value; // 2018-09-12
  	 var secondInput = document.getElementById("secondInput").value; // 22:00:00
	 var toEvent = firstInput + " " + secondInput; 
	 var toDate = new Date(toEvent); // user's reminder date and time..
	 var fromDate = new Date(); // current date and time
	 var reminderDate = toDate - fromDate; // result is in //////
//milliseconds...
 	 var ok = Number(reminderDate);
		 alert("Reminder Has Been Set");
		 return setTimeout( function () {
 	document.getElementById("aud").play(); //  creates an audio HTML element 
}
, ok);

}

var o = new Date();
			var p = o.getFullYear();
			var n = (o.getMonth() + 1);
			var t = o.getDate();

function max() {
	var input = document.getElementById("firstInput");
	var attr = document.createAttribute("min");
			attr.value = p + "-" + "0" + n + "-" + t ;
			input.setAttributeNode(attr);
}

function Title() { 
	 var thirdInput  =   document.getElementById("thirdInput").value; // Event Name

	window.document.title = thirdInput;
	
} /*  Changes the HTML document title */