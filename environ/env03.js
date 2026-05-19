let environmentTitle = "Pokemon on the Dunes of Arrakis";

let environmentElements = [
  "wind-carved dunes",
  "listening sand",
  "Flygon shadow",
  "Sandshrew tracks",
  "Trapinch pit"
];

let mainEntity = {
  name: "Trapinch",
  type: "half-buried dune watcher",
  mood: "patient",
  isHidden: true,
  favoriteElement: environmentElements[1]
};

let duneWarnings = [
  "Do not run across a smooth dune.",
  "A moving shadow might be Flygon, or it might be a storm.",
  "If the sand gets quiet, Trapinch is listening."
];

let scanCount = 0;
let flygonBubbleTimer;

function changeTimeOfDay(timeInput) {
  let timeOfDay = timeInput.toLowerCase().trim();

  $("body").removeClass("night day evening morning");

  if (timeOfDay === "night") {
    $("body").addClass("night");
    $("#environment-output").html("<h2>Night</h2><p>The dunes turn cold and blue under moonlight.</p>");
  } else if (timeOfDay === "day") {
    $("body").addClass("day");
    $("#environment-output").html("<h2>Day</h2><p>The same dunes glow under a bright desert sun.</p>");
  } else if (timeOfDay === "evening") {
    $("body").addClass("evening");
    $("#environment-output").html("<h2>Evening</h2><p>The sand picks up red and violet sunset colors.</p>");
  } else if (timeOfDay === "morning") {
    $("body").addClass("morning");
    $("#environment-output").html("<h2>Morning</h2><p>Soft dawn light spreads across the dunes.</p>");
  } else {
    $("#environment-output").html("<h2>Unknown Time</h2><p>Please type night, day, evening, or morning.</p>");
  }
}

$("#time-orb").click(function() {
  let timeAnswer = prompt("What time of day is it? Type night, day, evening, or morning.");

  if (timeAnswer !== null) {
    changeTimeOfDay(timeAnswer);
  }
});

$("#flygon-area").mouseenter(function() {
  let randomX = Math.floor(Math.random() * 121) - 60;
  let randomY = Math.floor(Math.random() * 71) - 35;

  $("#flygon-area").css("transform", "translate(" + randomX + "px, " + randomY + "px)");
  $("#flygon-bubble").remove();
  clearTimeout(flygonBubbleTimer);

  $("#flygon-area").append("<div id='flygon-bubble'>you will not catch me</div>");

  flygonBubbleTimer = setTimeout(function() {
    $("#flygon-bubble").fadeOut(250, function() {
      $(this).remove();
    });
  }, 2000);
});

$("#title-button").click(function() {
  $("#environment-output").html("<h2>" + environmentTitle + "</h2><p>The route is bright, dry, and alert.</p>");
});

$("#elements-button").click(function() {
  let elementList = "<h2>Dune Elements</h2><ul>";

  for (let i = 0; i < environmentElements.length; i++) {
    elementList += "<li>" + environmentElements[i] + "</li>";
  }

  elementList += "</ul>";
  $("#environment-output").html(elementList);
});

$("#entity-button").click(function() {
  let hiddenMessage = "no";

  if (mainEntity.isHidden) {
    hiddenMessage = "yes";
  }

  $("#environment-output").html(
    "<h2>" + mainEntity.name + "</h2>" +
    "<p>Type: " + mainEntity.type + "</p>" +
    "<p>Mood: " + mainEntity.mood + "</p>" +
    "<p>Hidden: " + hiddenMessage + "</p>" +
    "<p>Favorite signal: " + mainEntity.favoriteElement + "</p>"
  );
});

$("#warnings-button").click(function() {
  $("#environment-output").html(
    "<h2>Warnings</h2>" +
    "<p>" + duneWarnings[0] + "</p>" +
    "<p>" + duneWarnings[1] + "</p>" +
    "<p>" + duneWarnings[2] + "</p>"
  );
});

$("#scan-button").click(function() {
  scanCount = scanCount + 1;

  $("#environment-output").html(
    "<h2>Scan " + scanCount + "</h2>" +
    "<p>The sand has been checked " + scanCount + " times.</p>"
  );
});
