// TODO: add code here
window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then( (json) => {
            const div = document.getElementById('container')
            let sortedAstronauts = json.sort((a, b) => parseFloat(b.hoursInSpace) - parseFloat(a.hoursInSpace))
            let astronauts = ''
            for (let i = 0;i<sortedAstronauts.length; i++) {
                astronauts += 
        `<div class='astronaut'>
          <div class='bio'>
            <h3>${sortedAstronauts[i].firstName} ${sortedAstronauts[i].lastName}</h3>
            <ul>
                <li>Hours in Space: ${sortedAstronauts[i].hoursInSpace}</li>
                <li>Active: ${sortedAstronauts[i].active}</li>
                <li>Skills: ${sortedAstronauts[i].skills}</li>
            </ul>
          </div>
          <img class='avatar' src=${sortedAstronauts[i].picture}><img/>
        </div>
            `}
            
            div.innerHTML = astronauts
        })
    })
  })