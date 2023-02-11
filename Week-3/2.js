// Call, bind and apply

// Call
const anime = {
  title: "Chainsaw Man",
  characters: ["Denji", "Makima", "Power", "Aki"],
  genre: ["Action", "Thriller"],
  getCharactersNames: function () {
    return this.characters;
  },
};

const association = function (group) {
  return this.getCharactersNames() + " belong to " + group;
};

console.log(association.call(anime, "Devil Hunters"));

// Bind
const genre = function () {
  return this.genre;
};

const getBoundGenre = genre.bind(anime);

console.log(getBoundGenre());

// Apply
console.log(association.apply(anime, ["Devil Hunters", "Hunter corp"]));
