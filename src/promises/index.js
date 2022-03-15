const users = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
];

const googleWeatherData = [
  {
    city: "London",
    temp: "20",
    provider: "Google",
  },
  {
    city: "Kathmandu",
    temp: "30",
    provider: "Google",
  },
];

const yahooWeatherData = [
  {
    city: "London",
    temp: "20",
    provider: "Yahoo",
  },
  {
    city: "Kathmandu",
    temp: "30",
    provider: "Yahoo",
  },
];

/**
 * @description: Returns a promise
 * @param {any} value
 * @param {boolean} error
 * @returns Promise
 */
const promiseExample = (value, error = false) => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject("Error has been thrown");
    } else {
      resolve(value);
    }
  });
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

const getWeatherDataFromGoogle = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = googleWeatherData.find((item) => item.city === city);
      if (!data) reject(`No data found for ${city}`);
      resolve(data);
    }, 1000);
  });
};

const getWeatherDataFromYahoo = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = yahooWeatherData.find((item) => item.city === city);
      if (!data) reject(`No data found for ${city}`);
      resolve(data);
    }, 5000);
  });
};

module.exports = {
  promiseExample,
  getAllUsers,
  getWeatherDataFromGoogle,
  getWeatherDataFromYahoo,
};
