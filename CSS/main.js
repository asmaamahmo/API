let today = document.getElementById('today');

// document.getElementById('search').addEventListener('input', function () {
//     getResponse(this.value);
// });
async function getResponse(query) {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1c95c92290c44d28ba243354241001&q=${query}&days=3&aqi=no&alerts=no`);
    let result = await response.json();
    display(result);
    console.log(result);
}

getResponse('cairo');
// console.log(getResponse('london'));

function display(result) {


    let cartoona = `
    <div class="location">${result.location.name}</div>
    <div class="degree d-flex justify-content-around">
        <div class="num fw-bold fs-1 text-white "><h1>${result.current.temp_c}<sup>o</sup>C<h1/></div>
        <div class="forecast-icon ">
            <img src="https:${result.current.condition.icon}" alt="" width="90">
        </div>

    </div>
    <div class="custom text-info mb-3">${result.current.condition.text}</div>
    
    <span class="me-3"><img src="images/icon-umberella.png" alt="">${result.current.wind_degree}%</span>
    <span class="me-3"><img src="images/icon-wind.png" alt="">${result.current.wind_kph}km/h</span>
    <span class="me-3"><img src="images/icon-compass.png" alt="">${result.current.wind_dir}</span>
`
  document.getElementById('current').innerHTML = cartoona;
  
let currentDate = new Date();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = daysOfWeek[currentDate.getDay()];

    // let currentDate = new Date();
    let tomorrowDate = new Date();
    let dayAfterTomorrowDate = new Date();

    tomorrowDate.setDate(currentDate.getDate() + 1);
    dayAfterTomorrowDate.setDate(currentDate.getDate() + 2);

    let tomDay = `
    <div class="day">${getDayName(tomorrowDate)}</div>
`;

    let dayAfterTomDay = `
    <div class="day">${getDayName(dayAfterTomorrowDate)}</div>
`;

let dateDay =`
    <div class="day">${dayName}</div>
    <div class="date">${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })}</div>
`;

    document.getElementById('today').innerHTML = dateDay;

    document.getElementById('tomorrow').innerHTML = tomDay;
    document.getElementById('dayAfterTomorrow').innerHTML = dayAfterTomDay;

    function getDayName(date) {
        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()];
    }


    let tomorrowDay = `

    <div class="forecast-icon">
    <img src="https:${result.forecast.forecastday[1].day.condition.icon}" alt="" width="48">
    </div>
    <div class="degree"><h1>${result.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C<h1/></div>
    <small>${result.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
    <div class="custom text-info mt-4">${result.forecast.forecastday[1].day.condition.text}</div>
    `;

    let thirDay = `
       
    <img src="https:${result.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
    </div>
    <div class="degree"><h1>${result.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C<h1/></div>
    <small>${result.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
    <div class="custom text-info mt-4">${result.forecast.forecastday[2].day.condition.text}</div>
    `

document.getElementById('tomorrowDay').innerHTML = tomorrowDay;
document.getElementById('thirDay').innerHTML = thirDay;


    

}


document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    getResponse(searchTerm);
});



// function displayResults(results) {
//     // Update this function based on how you want to display the filtered results
//     const searchResultsContainer = document.getElementById('searchResults');
//     searchResultsContainer.innerHTML = '';

//     if (results.length === 0) {
//         searchResultsContainer.innerHTML = 'No results found.';
//     } else {
//         results.forEach(result => {
//             const resultItem = document.createElement('div');
//             resultItem.textContent = result.name;
//             searchResultsContainer.appendChild(resultItem);
//         });
//     }
// }
