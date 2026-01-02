document.addEventListener("DOMContentLoaded", function(){
    const lookup = document.getElementById("lookup");
    const lookupcities = document.getElementById("lookup-cities");
    const result = document.getElementById("result");

    lookup.addEventListener("click", function(){
        const country = document.getElementById("country").value;
        fetch(`world.php?country=${country}`)
            .then(response => response.text())
            .then(data => {result.innerHTML = data;
            });
    });

    lookupcities.addEventListener("click", function(){
        const country = document.getElementById("country").value;
        fetch(`world.php?country=${country}&lookup=cities`)
            .then(response => response.text())
            .then(data => {result.innerHTML = data;
            });
    });
});