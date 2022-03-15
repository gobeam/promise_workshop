const fs = require("fs");

const readFileAsync = (path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    }
    const json = JSON.parse(data);
    console.log(json);
  });
};

const readFileSync = (path) => {
    return fs.readFileSync(path);
}


module.exports = {
    readFileAsync,
    readFileSync
}
