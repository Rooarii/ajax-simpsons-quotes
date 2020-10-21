// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const quoteId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${quoteId}`;
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(quote) {
      console.log('data decoded from JSON:', quote);

      // Build a block of HTML
      const quoteHtml = `
        <p><strong>${quote[0].character}</strong></p>
        <p>${quote[0].quote}</p>
        <img src="${quote[0].image}" />
      `;
      document.querySelector('#quote').innerHTML = quoteHtml;
    });
}

fetchPokemonJSON();

/* character: "Homer Simpson"
​​
characterDirection: "Right"
​​
image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
​​
quote: "Marriage is like a coffin and each kid is another nail." */