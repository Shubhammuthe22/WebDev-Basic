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
        console.log("Data Fetched Successfully!");
        
        console.log("User Data:" , userdata);
        
        
    } catch (error) {
        console.log("Error Fetching Data",error);
        
    }
    
}
getData();