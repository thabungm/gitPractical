const movies = [
  {
    title: `A New Hope`,
    body: `After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`,
  },
  {
    title: `The Empire Strikes Back`,
    body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.`,
  },
];

/* function getMovies() {
  setTimeout(() => {
    console.log('-----Movie list------');

    movies.forEach((movie) => console.log(movie.title));
  }, 1000);
}

function createMovies(movie, callback) {
  setTimeout(() => {
    movies.push(movie);
    callback();
  }, 2000);
}

function updateMovieName(index, title, cb) {
  setTimeout(function () {
    movies[index].title = title;
    cb();
  }, 3000);
}

createMovies(
  { title: `Return of the Jedi`, body: `Luke Skywalker` },
  function () {
    getMovies();
    updateMovieName(movies.length - 1, 'New title', function () {
      getMovies();
    });
  }
); */

function createMovies(movie) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      movies.push(movie);
      resolve(movies);
    }, 2000);
  });
}
function getMovies(error = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        return reject('error occurred');
      }
      // movies.forEach((movie) => console.log(movie.title));
      resolve(movies);
    }, 1000);
  });
}
/* const getMoviesResult = getMovies(); // pending, resolve, reject
getMoviesResult.then((result) => {
  console.log(result);
}); */

/* 
const resultPromise = createMovies({ title: 'hello', body: 'world' });
resultPromise.then(function (result) {
  console.log(result);
});
 */

// async-await
const asyncFn = async () => {
  try {
    const result = await createMovies({ title: 'hello', body: 'world' });
    // using async await
    // update
    // print
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

asyncFn();
