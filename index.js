const { readFileAsync, readFileSync } = require("./src/callback");
const {
  promiseExample,
  getAllUsers,
  getWeatherDataFromGoogle,
  getWeatherDataFromYahoo,
} = require("./src/promises");

promiseExample("Hello World", false)
  .then((data) => {
    return data;
  })
  .then((data2) => {
    // console.log("data2:", data2)
    return data2;
  })
  .catch((err) => {
    console.log("Error: ", err);
  }).finally(() => {
    console.log("Finally");
  });

console.log("This is start");
console.log(readFileSync('./src/data/example.json'));
console.log(readFileSync('./src/data/example.json'));
console.log(readFileSync('./src/data/example.json'));
console.log("This is end");

const printPromise = async () => {
  try {
    const userPromise = getAllUsers();
    const weatherPromise = getWeatherDataFromGoogle("Kathmandu");
    const [users, weatherData] = await Promise.all([
      userPromise,
      weatherPromise,
    ]);
    console.log("🚀 ~ users", users);
    console.log("🚀 ~ weatherdata", weatherData);
    // const users = await getAllUsers();
    // const weatherData = await getWeatherDataFromGoogle("Kathmandu");
    // console.log("WEATHER:", weatherData);
  } catch (error) {
    console.log(error);
  }
};

const getWeatherData = async (city) => {
  // const googleWeatherData = await getWeatherDataFromGoogle(city);
  // console.log("🚀 ~ file: index.js ~ line 46 ~ getWeatherData ~ googleWeatherData", googleWeatherData)
  // const yahooWeatherData = await getWeatherDataFromYahoo(city);
  // console.log("🚀 ~ file: index.js ~ line 48 ~ getWeatherData ~ yahooWeatherData", yahooWeatherData)
  const result = await Promise.race([
    getWeatherDataFromGoogle(city),
    getWeatherDataFromYahoo(city),
  ]);
  console.log(
    "🚀 ~ file: index.js ~ line 50 ~ getWeatherData ~ result",
    result
  );
};

getWeatherData("Kathmandu");

printPromise();

(async () => {
   const result = await promiseExample("Hello World");
   console.log(result);
})();

function *generatorExample() {
    //task1
    yield "Hello";
    // task 2
    yield "World";
    // task 3
    yield 14;
}

const result = generatorExample();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());