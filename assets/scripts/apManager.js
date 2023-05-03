function SubmitPartyDetails(){
    //Get party details
    var location = document.getElementById("location").value;
    var description = document.getElementById("description").value;
    var eventType = document.getElementById("eventType").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var email = document.getElementById("email").value;

    //Validate party details
    var issues = "";
    if (location.length > 30){
        issues += "The location you have submitted is longer than 30 characters. Please keep the location under 30 characters.";
    }
    if (description.length > 300){
        issues += "The description you have submitted is longer than 300 characters. Please keep the description under 300 characters.";
    }

    //Submit party details to back end
    
}