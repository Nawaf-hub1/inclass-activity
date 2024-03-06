document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
    let rows = document.querySelectorAll("tbody tr");
    if (this.checked) { // if the check box is clicked show only the top qualifiers
        for(i = 5; i < rows.length; i++){
            rows[i].style.display="none";
        }
    }
    else { // else show every team
        for(i = 5; i < rows.length; i++){
            rows[i].style.display="";
        }
    }
}, false);

//Reference: adding event listener to do stuff when the check box is checked and unchecked
// https://stackoverflow.com/questions/16051360/do-an-action-when-check-box-is-checked-or-unchecked
