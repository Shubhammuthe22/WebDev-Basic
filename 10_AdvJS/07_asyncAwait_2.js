
function fetchPostData (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`Post Data Fetched.`);
            
        }, 2000);
    })
}
function fetchCommentData (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`Comment Data Fetched.`);
            
        }, 2000);
    })
}
async function getBlogData(){
    try {
        console.log("fetching data...");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        // this is the old syntax to fetch data from multiple methods.

        const [postData , commentData] = await Promise.all([fetchPostData(),fetchCommentData() ]);
        // Promise.all() accepts data as the array elements.
        // this is the better synntax to fetched data from multiple blocks at a time.

        console.log(postData);
        console.log(commentData);

        console.log("Blog Data fetched successfully!");
    
    } catch (error) {
        console.log("Error Fetching blog data");
        
    }
}
getBlogData();