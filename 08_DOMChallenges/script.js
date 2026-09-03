
// Example 1
document
    .getElementById("changeText")
    .addEventListener("click" ,function () {
        let paragraph = document.getElementById("myParagraph");
        console.log(paragraph);
        paragraph.textContent = "This is the new paragraph";
        // console.log(this);
        // Here if we used arrow function then 'this' points out the global 'this'.
        // while the simple function points to the current context.
})