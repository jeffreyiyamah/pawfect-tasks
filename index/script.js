const apiKey = {
  ipapi: "2d334c6f2dc6cdc58b4f572ba87756cd",
  timeZoneDB: "CWUVOMT3DHQB",
  ipify: "at_nHFJIjrQZhLw1Wg8vZWGThT7DkECw",
  timeApi: "21625199646c49c4bcb379f7652e8b2b",
  weatherApi: "211e1ac446b1f3e6e5dc909f74f7d6bc"
};


document.addEventListener("click", function (event) {
  const dropdowns = document.getElementsByClassName("box");
  for (let i = 0; i < dropdowns.length; i++) {
    const dropdown = dropdowns[i];
    const dropdownContent = dropdown.querySelector(".dropdown-menu");

    // Check if the clicked element is inside the dropdown or its content
    const isClickedInside =
      dropdown.contains(event.target) ||
      dropdownContent.contains(event.target);

    // Check if the dropdown is already active
    const isActive = dropdown.classList.contains("active");

    // Close the dropdown if it is active and clicked outside
    if (isActive && !isClickedInside) {
      dropdown.classList.remove("active");
    } else {
      // Toggle the active class based on the clicked area
      dropdown.classList.toggle("active", isClickedInside);
    }
  }
});

//Random Quote API
function random_quote(){
    const random_quote = document.getElementById("random-quote");
    fetch("https://api.quotable.io/quotes/random?tags=motivational")
      .then(response => response.json())
      .then(data => {
          console.log(data[0].content);
          random_quote.textContent = data[0].content;
      });
}

random_quote();




function darkMode() {
  var element = document.getElementsByClassName("box")[0];
  var footer = document.getElementsByClassName("footer")[0];
  var dropdown_menu = document.getElementsByClassName("dropdown-menu")[0];
  var body = document.body;
  var button = document.getElementsByClassName("add")[0];
  var card = document.getElementsByClassName("calendar_weather")[0];
  

  element.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode-2");
  dropdown_menu.classList.toggle("dark-mode-3");
  card.classList.toggle("dark-mode-3");
  if (button.style.backgroundColor === "rgb(0, 0, 0)") {
    button.style.backgroundColor = "rgb(255, 0, 0)";
  } else {
    button.style.backgroundColor = "rgb(0, 0, 0)";
  }
    
  } 










//   const ip = "99.150.144.152";
//   //Fetches IP
//   fetch("https://geo.ipify.org/api/v2/country?apiKey="+apiKey.ipify+"&ipAddress=").then(response =>
//   response.text()).then((data => {
//     const parsedData = JSON.parse(data)
    
//     console.log(ip)

  
//   //City, Long, Lat, Zip and IP API
//   const location_text = document.getElementById("location-text");
//   fetch("http://ipapi.co/" + ip + "/json",{
//     method: 'GET',
//     headers: {
//     'Content-Type': 'text/plain',
//     'Access-Control-Allow-Origin':'*'},}).then(response =>
//   response.json()).then((data => {
//     location_text.textContent = data[0];
//     console.log(data)
  

//   //Time API
//   fetch("https://api.ipgeolocation.io/timezone?apiKey=" + apiKey.timeApi + "&ip=" + ip, {
//     method: 'GET',
//     headers: {
//     'Content-Type': 'text/plain',
//     'Access-Control-Allow-Origin':'*'
//     },
//   }).then((response => response.json())).then((data => {
//     const time = data.date_time_txt;
//     const formattedTime = time.replace(/(2\d{3})/, "$1</p><p>");
//     console.log(`<p>${formattedTime}</p>`);
//   }));
//  }));
// }));


// ...

// Working the Modal Popup:
document.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  const modalWrapper = document.querySelector(".modal-wrapper");

  // Check if the clicked element is inside the modal or its wrapper
  const isClickedInside = modal.contains(event.target) || modalWrapper.contains(event.target);

  // Check if the modal is already active
  const isActive = modal.classList.contains("active");

  // Close the modal if it is active and clicked outside
  if (isActive && !isClickedInside) {
    modal.classList.remove("active");
  } else {
    // Toggle the active class based on the clicked area
    modal.classList.toggle("active", isClickedInside);
  }
});

function addTask() {
  // Get references to the form, task list, and empty tasks message elements
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');
  const emptyTasksMessage = document.getElementById('empty-tasks-message');
  const priorityContainer = document.getElementById('priority');
  const dateContainer = document.getElementById('due-date');

  // Retrieve the task details from the form
  const name = taskForm.name.value;
  const priority = taskForm.priority.value;
  const date = taskForm.date.value;

  if (name === "" || priority === "" || date === "") {
    alert("You must fill out all required fields");
  } else {
    // Create a new list item with the task description and the 'x' button
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = name;

    // Create the 'x' button and append it to the list item
    const deleteButton = document.createElement('span');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '\u00d7';
    listItem.appendChild(deleteButton);

    priorityContainer.textContent = `Priority: ${priority}`;
    dateContainer.textContent = `Date: ${date}`;
    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
      listItem.remove();
      priorityContainer.remove();
      dateContainer.remove();

      // Check if the task list is empty and show/hide the empty tasks message accordingly
      if (taskList.children.length === 0) {
        emptyTasksMessage.style.display = 'block';
      } else {
        emptyTasksMessage.style.display = 'none';
      }
    });

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the form fields
    

    // Hide the empty tasks message
    emptyTasksMessage.style.display = 'none';
  }
  taskForm.name.value = '';
    taskForm.priority.value = '';
    taskForm.date.value = '';
}


//Delete Task


//Fetching Weather API (add function fetchWeather(city) later)
function fetchWeather(city) {
  const lat = 32.5720749;
  const lon = -97.056008;
  const cnt = 7;

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=211e1ac446b1f3e6e5dc909f74f7d6bc&units=imperial")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayFunction(data); // Call the inner function with the fetched data
    });
}

function displayFunction(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity, feels_like } = data.main;
  console.log(name, icon, description, temp, humidity, feels_like);

  document.querySelector(".weather-city").innerText = name;
  document.querySelector(".temperature").innerText = temp + " F";
  document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".weather-description").innerText = description;
  document.querySelector(".feels-like").innerText = "Feels Like: " + feels_like + " F";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
}

function search() {
  const city = document.querySelector("#weather-search-bar").value;
  fetchWeather(city);
}

document.querySelector("#weather-search-bar").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    search();
  }
});


