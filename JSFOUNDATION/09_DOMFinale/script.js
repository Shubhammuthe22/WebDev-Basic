// Example 6

document
.getElementById("clickMe")
.addEventListener("dblclick",function (){
    alert("You Just Double clicked");
});

// example-7
document
.getElementById("carsList")
.addEventListener("click",function(event){
    if (event.target && event.target.matches(".listItems")) {
        // Here we are adding the if statement to check whether both the conditions are satisfied or not.
        alert("You selected" + event.target.textContent);
    }
    
});

// example 8

document
.getElementById("feedbackForm")
.addEventListener('submit' ,function (event) {
    event.preventDefault();
    // It is used to change the default behaviour of the event for e.g Here is 'Submit'. 
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    
    let output = document.getElementById("formHandling");
    // Get a reference to the element and then apply the CSS class.
    output.classList.add("highlight");
    output.textContent = (`Feedback is: ${feedback}`);
    
});

// example 9

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("DOMstatus").textContent = ("DOM is fully Loaded");
});

// example 10
document.getElementById("toggleButton")
.addEventListener('click',function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.add("highlight");
    // toggle-Refers to the adding event on first click and removing it on the second click.
    
});