const { promiseExample, getWeatherDataFromGoogle } = require("./index");

describe("promiseExample: check if permission works", () => {
  it("should resolve value and not throw error if error passed is false", () => {
    expect(promiseExample("Hello World", false)).resolves.toBe("Hello World");
  });

  it("should throw error if error passed is true", () => {
    expect(promiseExample("Hello World", true)).rejects.toThrow();
  });

  it("should throw error if wrong city name provided", () => {
    expect(getWeatherDataFromGoogle("delhi")).rejects.toThrow();
  });

  it("should return weather data if correct city name provided", () => {
    expect(getWeatherDataFromGoogle("Kathmandu")).resolves.toEqual({
      city: "Kathmandu",
      provider: "Google",
      temp: "30",
    });
  });
});
