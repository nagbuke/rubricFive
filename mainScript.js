// JavaScript Document



/* Event Methods */

// Animate Height 

$("#one").click(function(){
	"use strict";
        $("#doc2").animate({height: "500px"});
    });

// Fade In Sections

$("#btn").click(function(){
	"use strict";
        $("#doc2").fadeIn();
        $("#doc3").fadeIn("slow");
        $("#doc4").fadeIn(3000);
    });

// Toggles between Hide & Show text paragraph

$(document).ready(function(){
			
		"use strict";
			
    	$(".icons").click(function(){
        	$("#p").toggle();  
		});
			});

// Bold text hover effect

$("#p").hover(function(){
	"use strict";
        $(this).css("font-weight", "bold");
        }, function(){
	"use strict";
        $(this).css("font-weight", "normal");
	
    });

// Hide Section

$("#three").click(function(){
	"use strict";
    $("#doc4").hide();
	$("#doc3").animate({height: "300px"});
});



			
	// Contrast Mode

		$("#contrastMode").on("click", function(){
			"use strict";
		var $this=$(this);
		$this.css("background-color", "#333333");
		$this.css("border", "#333333"); 
		$("h1").css("color", "#333333");
		$(".header").css("background-color", "#e9e0c9");
		$(".header").css("border", "#e9e0c9");
		$("h2").css("color", "#333333");
		$(".icons").css("background-color", "#333333");
		$(".icons").css("border", "#333333");	
		$("p").css("color", "#333333");
		$("#doc1").css("background-color", "#e9e0c9");
		$("#doc1").css("border", "#e9e0c9");
		$("#doc2").css("background-color", "#e9e0c9");
		$("#doc2").css("border", "#e9e0c9");
		$("#doc3").css("background-color", "#e9e0c9");
		$("#doc3").css("border", "#e9e0c9");
		$("#doc4").css("background-color", "#e9e0c9");
		$("#doc4").css("border", "#e9e0c9");
		$("#one").css("background-color", "#333333");
		$("#one").css("border", "#333333");	
		$("#two").css("background-color", "#333333");
		$("#two").css("border", "#333333");		
		$("#three").css("background-color", "#333333");
		$("#three").css("border", "#333333");
		$("#bottom").css("background-color", "#e9e0c9");
		$("#bottom").css("border", "#e9e0c9");
		$("#loadPage").css("color", "#333333");
		document.getElementById("title").innerHTML = "You did it! Refresh the page to try it again.";
			
		}) (); 


    
  