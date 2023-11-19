var dogBreeds = [
  { breed: "chocolate lab", imageUrl: "chocolatelab.jpg" },
  { breed: "kai ken", imageUrl: "kaiken.jpg" },
  // Add more breeds here
];

function loadRandomDogImage() {
  var lastLoadedDate = localStorage.getItem("lastLoadedDate");
  var currentDate = new Date().toDateString();

  if (lastLoadedDate !== currentDate) {
    var randomIndex = Math.floor(Math.random() * dogBreeds.length);
    var selectedDog = dogBreeds[randomIndex];

    document.getElementById("dogImage").src = selectedDog.imageUrl;
    document.getElementById("dogImage").alt = selectedDog.breed;

    localStorage.setItem("lastLoadedDate", currentDate);
    localStorage.setItem("currentDogImage", selectedDog.imageUrl);
    localStorage.setItem("currentDogBreed", selectedDog.breed);
  } else {
    document.getElementById("dogImage").src =
      localStorage.getItem("currentDogImage");
    document.getElementById("dogImage").alt =
      localStorage.getItem("currentDogBreed");
  }

  document.getElementById("result").innerHTML = "";
}

function checkGuess() {
  var userGuess = document.getElementById("userGuess").value.toLowerCase();
  var correctBreed = document.getElementById("dogImage").alt.toLowerCase();

  if (userGuess === correctBreed) {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect, try again.";
  }
}

window.onload = loadRandomDogImage;
