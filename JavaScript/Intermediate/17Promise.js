const uno =  () => {
    return "this is one";
}

const dos =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is two");
        }, 3000);
    });
}

const tres =  () => {
    return "this is three";
}


const callF = async() => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callF();