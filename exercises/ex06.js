
console.log("JS is here");
// declaring variables 

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCount=0;
let mood="neutral";

// reusable functions

function makeImage( colorToMatch ) { 
    // what the function actually does
    if ( colors[colorCount]== colorToMatch ) {
        $("body").append("<img id='"+colorToMatch+"' width=100 src='"+colorToMatch+".jpg'>");
    }
} 

function paintPage( colorToPaint ) {
  $("body").css("background-color", colorToPaint);
}

// what happens when the orchid image is clicked

$("#Orchid").click(function () { 
   console.log("orchid is clicked");
   paintPage( "Orchid");
});
$("#Plum").click(function () { 
   console.log("orchid is clicked");
   paintPage( "Plum");
});
$("#Coral").click(function () { 
   console.log("orchid is clicked");
   paintPage( "Coral");
});

// what happens when the main button is clicked


$("#needy-button").click(function () {
 
console.log("the button was clicked");

console.log("color count "+colorCount);

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );

  paintPage( colors[colorCount] );
   
   if (colors[colorCount] == "HotPink") { 
        $("#needy-button").after(" notPink ");
    }
    else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }

    if (count < 5) { mood="fresh and happy"; }
    else if ( count >= 5 && count < 10) {mood="keep pushing";}
    else { mood="so tired";}
    

    makeImage("Orchid");
    makeImage("Plum");
    makeImage("Coral");

    

    colorCount=colorCount+1;
    count = count + 1;
   
    if (colorCount==4) { 
        colorCount=0;  
        console.log("it happened");
    }


    console.log(mood);

});



