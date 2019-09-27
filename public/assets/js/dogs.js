// Import the model (cat.js) to use its database functions.
var dogArray = [
  "Afador",
  "Affenpinscher",
  "Afghan Hound",
  "Airedale Terrier",
  "Akita",
  "Alaskan Klee Kai",
  "Alaskan Malamute",
  "American Bulldog",
  "American English Coonhound",
  "American Eskimo Dog",
  "American Foxhound",
  "American Leopard Hound",
  "American Pit Bull Terrier",
  "American Pugabull",
  "American Staffordshire Terrier",
  "American Water Spaniel",
  "Anatolian Shepherd Dog",
  "Appenzeller Sennenhunde",
  "Auggie",
  "Aussiedoodle",
  "Aussiepom",
  "Australian Cattle Dog",
  "Australian Kelpie",
  "Australian Shepherd",
  "Australian Terrier",
  "Azawakh",
  "Barbet",
  "Basenji",
  "Bassador",
  "Basset Hound",
  "Beagle",
  "Bearded Collie",
  "Bedlington Terrier",
  "Belgian Malinois",
  "Belgian Sheepdog",
  "Belgian Tervuren",
  "Berger Picard",
  "Bernedoodle",
  "Bernese Mountain Dog",
  "Bichon Frise",
  "Biewer Terrier",
  "Black and Tan Coonhound",
  "Black Mouth Cur",
  "Black Russian Terrier",
  "Bloodhound",
  "Blue Lacy",
  "Bluetick Coonhound",
  "Boerboel",
  "Boglen Terrier",
  "Bolognese",
  "Border Collie",
  "Border Terrier",
  "Borzoi",
  "Boston Terrier",
  "Bouvier des Flandres",
  "Boxer",
  "Boykin Spaniel",
  "Bracco Italiano",
  "Briard",
  "Brittany",
  "Brussels Griffon",
  "Bull Terrier",
  "Bullboxer Pit",
  "Bulldog",
  "Bullmastiff",
  "Bullmatian",
  "Cairn Terrier",
  "Canaan Dog",
  "Cane Corso",
  "Cardigan Welsh Corgi",
  "Catahoula Bulldog",
  "Catahoula Leopard Dog",
  "Caucasian Shepherd Dog",
  "Cavachon",
  "Cavador",
  "Cavalier King Charles Spaniel",
  "Cavapoo",
  "Cesky Terrier",
  "Chabrador",
  "Cheagle",
  "Chesapeake Bay Retriever",
  "Chi-Poo",
  "Chihuahua",
  "Chinese Crested",
  "Chinese Shar-Pei",
  "Chinook",
  "Chipin",
  "Chiweenie",
  "Chow Chow",
  "Chug",
  "Chusky",
  "Clumber Spaniel",
  "Cockapoo",
  "Cocker Spaniel",
  "Collie",
  "Corgi Inu",
  "Corgidor",
  "Coton de Tulear",
  "Curly-Coated Retriever"
];

$(function() {
  $("#ca").autocomplete({
    source: dogArray,
    minLength: 2
  });

  $(".smack-that").on("click", function(event) {
    var id = $(this).data("id");
    var newSmack = $(this).data("newsmack");

    var newSmackState = {
      smacked: newSmack
    };

    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newSmackState
    }).then(function() {
      console.log("changed smack to", newSmack);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var dogBreed = $("#ca")
      .val()
      .trim();

    // if (indexOf(dogBreed))

    var newDog = {
      name: dogBreed
    };

    // Send the POST request.
    $.ajax("/api/dogs", {
      type: "POST",
      data: newDog
    }).then(function() {
      console.log("created new dog");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-dog").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/dogs/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted dog", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
