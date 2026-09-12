function fetchData (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name:'Shubham' , URL:'https://chaicode.com'})
            
        }, 3000);
    });
}
async function getData() {
    console.log("Fetching User Data...");
    try {
        const userdata = await fetchData();
        // await is used to execute the code block in delay interval
        // -await pauses the execution of the function until the promise is resolved.
        console.log("User Data:" , userdata);
        console.log("Data Fetched Successfully!");
        
        // If the promise rejects then the catch block will get execute.
     } catch (error) {
        console.log("Error Fetching Data",error);
        
    }
    
}
getData();