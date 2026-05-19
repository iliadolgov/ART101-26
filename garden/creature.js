// store all creatures in an array
let allCreatures=[];

// functions
// function to grab data from the form
function getCreatureFromForm(){
  
  const freshCreature={
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val()
    };

return freshCreature;
};

// the checks function
function isCreatureValid(creature) {
  if (creature.name === "" ) return false;
  if (creature.name.length >12) return false;
  if ( isNaN(creature.eyesNum) || creature.eyesNum >5 ) return false;
  return true;
}

// functions add creature to the page
function renderCreature(creature) {

    let crEyesHtml="";
    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>";
    }

    const html=`
        <div class="creature">
            <div class="creature-body" style="background-color: ${creature.color}"> ${crEyesHtml} </div>
            <div class="creature-info">${creature.name}</div>
        </div>
    `;

    return html;
}

// append creature to the page
function addCreatureToDOM(creature) {
    const html=renderCreature(creature);
    $("#creature-list").append(html);
}

// the main brain
$("#crAdd").click( function(){

    // create creature object from the form inputs
    const newCreature = getCreatureFromForm();
    console.log(newCreature);
  
  // safety checks
    console.log( isCreatureValid(newCreature) );
    if ( isCreatureValid(newCreature)==false ) { // true==false 
     return; // stops the function which is "click" one
    }

    // add creature to the page
    addCreatureToDOM(newCreature)

    // save creature to the memory 
    allCreatures.push(newCreature);

    // reset the fporm prepare for the next iteration

});


// // add creature to the garden
// $("#crAdd").click( function(){

//     // create creature object 
//     // safety checks
//     // add creature to the page
//     // save to the memory 
//     // reset the fporm prepare for the next iteration

//     // grab the value from the text input and assign it to a variable crName
//     let crName=$("#crName").val();
//     let crColor=$("#crColor").val();
//     let crEyesNum=$("#crEyesNum").val();
//     // lets construct html for eyes using FOR cycle
//     let crEyesHtml="";
//     for (let i = 0; i < crEyesNum; i++) {
//         crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>";
//     }


//     // test in console
//     console.log(crName);  
//     console.log(crColor); 
//     console.log(crEyesNum); 
//     console.log(crEyesHtml); 
    

//     if( crName.length > 2) { 
//         $("#creature-list").append(`
//             <div class="creature">
//                 <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHtml} </div>
//                 <div class="creature-info">${crName}</div>
//             </div>
//         `);
//     }

// // " <div>"+crName+crColor+crEyesNum+"</div>");

//     // form resets
//      $("#crName").val(""); // write the value


// }); 