/* MongoDB Zoo Site (18.2.9)
 * Front-End
 * ========================= */

// 1: On Load
// ==========

// The first thing this js file will do: ask the back end for a json with all animals
$.getJSON("/all", function(data) {
  // For each entry of that json...

    console.log(data);
     $("#results").empty();
     $("#results").append("<tr><th>Title</th><th>Image</th></tr>");
      for (var i = 0; i < 10; i++) {
      // Append each of the animal's properties to the table
      $("#results").append("<tr><td>" + data[i].title + "</td>" +
                           "<td><img src='" + data[i].image + "'></td></tr>");
                     
    } 
});

