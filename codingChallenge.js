const whereAmI = function (lat, lng) {
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
};
whereAmI(19.037, 72.873);
