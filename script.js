let jokeUrl = `https://v2.jokeapi.dev/joke/Any?safe-mode`;

let joke_quote = () => {
  console.log("Clicked");
  fetch(jokeUrl)
    .then((res) => res.json())
    .then((joke) => {
      console.log(joke);
      console.log(joke.joke);
    });
};

let quote = async () => {
  let res = await fetch(jokeUrl)
  res = await res.json()
  console.log(res);
}

joke_quote();
quote();


// Anime API: https://docs.api.jikan.moe/
// Top Anime API: https://api.jikan.moe/v4/top/anime
// Random Anime API: https://api.jikan.moe/v4/random/anime
// Weather API: https://openweathermap.org/api
// Random Quote API: https://github.com/lukePeavey/quotable
// Check out: https://github.com/harvanchik/portfolio-v2

