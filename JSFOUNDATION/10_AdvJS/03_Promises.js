
// Creation of promises
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve(`Data fetched Successfully`);
            } else {
                reject(`Error fetching Data`);   
            }
        }, 2000);
    });
            
}

// It is the Consumption of promises:
// fetchData().then().catch()
// this is used to accept the output or catch the data from the Promise.
fetchData()
    .then((data) => {
        console.log(data);
        return `MyInfo`;
    })
    .then((info) => {
        console.log(info);
        // This is called the chaining of the promises
        // The value from one element is catched by another and so on
        // Here it is taking from the first .then().
    })
    .catch((value) => {
        console.log(value);
    });