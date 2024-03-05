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