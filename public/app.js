/* MongoDB Zoo Site (18.2.9)
 * Front-End
 * ========================= */

// 1: On Load
// ==========

// The first thing this js file will do: ask the back end for a json with all animals
$.getJSON("/all", function(data) {
  // For each entry of that json...

   
     $("#results").empty();
     $("#results").append("<tr><th>Save Article</th><th>Title</th><th>Image</th><th>Note</th</tr>");
      for (var i = 0; i < 10; i++) {
      // Append each of the animal's properties to the table
      $("#results").append("<tr><td data_id=" + data[i].id + ">" + "<button>Save</button>" + "</td>" + "<td>" + data[i].title + "</td>" +
                           "<td><img src='" + data[i].image + "'></td>" +
      "<td>" + "<textarea id='note'></textarea><div id='buttons'><div id='actionbutton'><button id='makenew'>Submit</button></div>" + "</td></tr>");
                     
    } 
});

// "<td>" + "<textarea id='note'></textarea><div id='buttons'><div id='actionbutton'><button id='makenew'>Submit</button></div>" + "</td></tr>"

$(document).on("click", "#makenew", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server

  console.log("itworks");
  var note = $("#note").val();
  console.log(note);
  var title = $(this).attr('data-id');
  console.log(title);
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
     title: $("#title").val(),
      note: $("#note").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
  .done(function(data) {
    // Add the title and delete button to the #results section
console.log(sent);
  
  // );
});

});