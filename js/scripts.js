// Business logic

function Place(location, landmarks, year) {
  this.location = location;
  this.landmarks = landmarks;
  this.year = year;
}


let portland = new Place("Portland", ["Burnside Bridge ", "Moda Center"], "Fall")

let austin = new Place("Austin", ["Texas capitol building ", "Mckinney Falls Parlk"]
, "winter")

let mexico = new Place("Sinaloa", ["Mazatlan ", "Guamuchil "], "Summer")


// UI logic

$(document).ready(function() {
  $("#mexico").click(function() {
  const mexicoKeys = Object.keys(mexico);
  let mexicoString = "";
  mexicoKeys.forEach(function(key) {
    mexicoString = mexicoString.concat(key + ":" + "<li>" + mexico[key] + "</li>");
  });
  $(".page-mexico").append(mexicoString);
  })

  $("#portland").click(function() {
  const portlandKeys = Object.keys(portland);
  let portlandString = "";
  portlandKeys.forEach(function(key) {
    portlandString = portlandString.concat(key + ":" + "<li>"+ portland[key] + "</li>" );
  });
  $(".page-portland").append( portlandString );
  })
  $("#austin").click(function() {
  const austinKeys = Object.keys(austin);
  let austinString = "";
  austinKeys.forEach(function(key) {
    austinString = austinString.concat(key + ":" + "<li>"+ austin[key] + "</li>" );
  });
  $(".page-austin").append(austinString );
  })
})
