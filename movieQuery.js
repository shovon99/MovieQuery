var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

//Task 1
function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(0));
console.log(getMovieTitle(3));

//Task 2
movieList.push({title:"Annabell", year:"2015", length: 140, rating:"7.5", genre:"horror"});


//Task 3
function addMovie( movie ){
  //add code
  movieList.push(movie);
  return movieList;
}

var newMovie = {title:"Conjouring", year:"2013", length: 130, rating:"8.1", genre:"horror"};
console.log(addMovie(newMovie));


//Task 4

function compare(a,b) {
  if (a.rating < b.rating)
    return 1;
  if (a.rating > b.rating)
    return -1;
  return 0;
}


function movieByRating(){
  //add code
  movieList.sort(compare);
  return movieList;
}

console.log(movieByRating());


//Task 5
function findByTitle( title ){
  SearchedArray = [];
  
  var regex = new RegExp(title, 'i');

  for (var i = movieList.length - 1; i >= 0; i--) {
    if(regex.test(movieList[i].title))
    {
      SearchedArray.push(movieList[i]);
    }
  }
  return SearchedArray;
}

console.log(findByTitle("matrix"));
