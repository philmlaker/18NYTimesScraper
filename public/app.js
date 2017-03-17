/* MongoDB Zoo Site (18.2.9)
 * Front-End
 * ========================= */

// 1: On Load
// ==========

// The first thing this js file will do: ask the back end for a json with all animals
$.getJSON("/all", function(data) {
  // For each entry of that json...
 
    // Append each of the animal's properties to the table
    console.log(data);


                 
});


// 2: Button Interactions
// ======================

