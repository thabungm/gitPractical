const movies = [
  {
    title: `A New Hope`,
    body: `After Princess Leia,.`,
  },
  {
    title: `The Empire Strikes Back`,
    body: `Darth Vader is adamant about turning Luke Skywalker`,
  },
];
/* 
function getMovies() {
  setTimeout(() => {
    console.log('-------Movie list-------');
    movies.forEach((movie) => console.log(movie.title));
  }, 1000);
}
// getMovies();
// SRP
function createMovie(movie, cb) {
  setTimeout(function () {
    movies.push(movie);
    cb();
  }, 2000);
}

function updateMovie(index, title, cb) {
  setTimeout(function () {
    movies[index].title = title;
    cb();
  }, 3000);
}

const movie = { title: 'Merildee', body: 'lorem ipsum' };
createMovie(movie, function () {
  getMovies();
  updateMovie(movies.length - 1, 'Merild', function () {
    getMovies();
  });
});
 */
// callback hell
/* 
const error = false;
const promise = new Promise(function (resolve, reject) {
  if (error) {
    return reject('Failure');
  }
  return resolve('Success');
});
// 3 states: pending-> resolved/rejected
// console.log(promise);
promise
  .then((resolvedValue) => {
    console.log(`Resolved value: ${resolvedValue}`);
  })
  .catch((rejectedValue) => {
    console.log(rejectedValue);
  }); */

function createMovies(movie) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      movies.push(movie);
      resolve('done');
    }, 2000);
  });
}
const error = true;
function getMovies() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (error) {
        return reject('error found');
      }
      //   movies.forEach((movie) => console.log(movie.title));
      resolve(movies);
    }, 1000);
  });
}
/* const result = createMovies({ title: 'Hello', bod: 'world' });
result.then((resolve) => {
  console.log(`Movie creation is ${resolve}`);
  const getMoviesResult = getMovies();
  getMoviesResult.then((value) => console.log(value));
}); */

// async-await

const asyncAwaitFn = async () => {
  try {
    const createResult = await createMovies({ title: 'Testing create' });
    console.log(createResult);
    const movieList = await getMovies();
    console.log(movieList);
  } catch (error) {
    console.log(`caught error: ${error}`);
  }
};

asyncAwaitFn();
