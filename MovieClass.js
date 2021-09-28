// TASK-1 https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

//  title                    studio                                     rating
//  Raging Bull              Chartoff-Winkler Productions, Inc.         R – Restricted
//  Taxi driver              Columbia Pictures                          R – Restricted
//  Pather Panchali          Govt of West-Bengal                        U - Unrestricted public exhibition
//  Boyhood                  IFC Productions                            G - General Audiences

const Movie = class {
  constructor(title, studio, rating="PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(){
      return this.rating === "PG"
  }
}

const Movie_one = new Movie(
  "Raging Bull",
  "Chartoff-Winkler Productions, Inc.",
  "R"
);
const Movie_two = new Movie("Taxi Driver", "Columbia Pictures", "R");
const Movie_three = new Movie("Pather Panchali", "Govt of West-Bengal", "U");
const Movie_four = new Movie("Boyhood", "IFC Productions");
const Movie_five = new Movie ("Casino Royale", "Eon Productions","PG­13")
console.log(Movie_five);
