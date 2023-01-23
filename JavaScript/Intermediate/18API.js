fetch("https://api.chucknorris.io/jokes/random")
.then((respose) => {
    return respose.json();
})
.then((superman) => {
    var val = superman.value;
    console.log("JOKE: ", val);
})
.catch();   