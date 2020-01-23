const promisify = (callback) => {
  return new Promise((res, rej) => {
    callback(res, rej)
  });
}

module.exports = promisify;
