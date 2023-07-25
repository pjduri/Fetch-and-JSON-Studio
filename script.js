// TODO: add code here
window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then( (json) => {
            const div = document.getElementById('container')

            // bonus mission 1
            const sortedAstronauts = json.sort((a, b) => b.hoursInSpace - a.hoursInSpace)
            
            let astronauts = ''
            for (let i = 0;i<sortedAstronauts.length; i++) {

              // bonus mission 2
              const activeClass = sortedAstronauts[i].active ? 'active' : ''

                astronauts += 
        `<div class='astronaut'>
          <div class='bio'>
            <h3>${sortedAstronauts[i].firstName} ${sortedAstronauts[i].lastName}</h3>
            <ul>
                <li>Hours in Space: ${sortedAstronauts[i].hoursInSpace}</li>
                <li class='${activeClass}'>Active: ${sortedAstronauts[i].active}</li>
                <li>Skills: ${sortedAstronauts[i].skills.join(', ')}</li>
            </ul>
          </div>
          <img class='avatar' src=${sortedAstronauts[i].picture}><img/>
        </div>
            `
          }
            
            div.innerHTML = astronauts
        })
    })
  })