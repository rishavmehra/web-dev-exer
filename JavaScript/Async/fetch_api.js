const weather = async () =>{
    const data = await fetch('https://api.chucknorris.io/jokes/random')
    var result = await data.json()
    console.log(result);
}
