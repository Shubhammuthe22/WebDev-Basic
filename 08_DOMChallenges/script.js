
// Example 1
document
    .getElementById("changeText")
    .addEventListener("click" ,function () {
        let paragraph = document.getElementById("myParagraph");
        console.log(paragraph);
        paragraph.textContent = "This is the new paragraph";
        // -Line 8 is used to display the new context after the event.
        // console.log(this);
        // Here if we used arrow function then 'this' points out the global 'this'.
        // while the simple function points to the current context.
});
// Example 2
document
.getElementById("highlightButton")
.addEventListener("click" ,function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

// Example 3:
document
.getElementById("changeOrder")
.addEventListener("click",function () {
    let currentOrder = document.getElementById("coffetype");
    coffeetype.textContent = "Espresso";
    coffeetype.style.backgroundColor = "red";
    coffeetype.style.padding = '5px';
    
});