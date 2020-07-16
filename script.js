window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            let container = document.getElementById("container");
            // let astronautList = '';
            let astronautList = `<h3>Astronauts Count: ${json.length}</h3>`; // bonus
            for (astronaut of json) {
                astronautList +=  
                `           
                    <div class="astronaut">
                            <div class="bio">
                                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                    <li>Active: ${astronaut.active}</li>
                                    <li>Skills: ${astronaut.skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src= ${astronaut.picture}></img>
                    </div>
                `;
            }
            container.innerHTML = astronautList;
        });
    });
});