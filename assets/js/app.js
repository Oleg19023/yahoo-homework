// Темная тема
document.getElementById('themeToggle').addEventListener('click', function() {
  let body = document.body;
  let navbar = document.querySelector('.navbar');
  let header = document.querySelector('header');
  let navLinks = document.querySelectorAll('.nav-link');
  let navbarBrandIcon = document.querySelector('.navbar-brand i');
  let themeToggle = document.getElementById('themeToggle');
  let cardBodies = document.querySelectorAll('.card-body');
  let imgTheme = document.querySelectorAll('.img-theme');
  let themeIcon = document.getElementById('themeIcon');
  body.classList.toggle('dark-theme');
  navbar.classList.toggle('dark-theme-navbar');
  header.classList.toggle('dark-theme-header');
  navLinks.forEach(navLink => navLink.classList.toggle('dark-theme-text'));
  navbarBrandIcon.classList.toggle('dark-theme-icon');
  themeToggle.classList.toggle('dark-theme-button');
  imgTheme.forEach(img => img.classList.toggle('img-theme-dark'));
  cardBodies.forEach(cardBody => cardBody.classList.toggle('card-body-theme'));
  if (body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
  } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
  }
});
// Цвет фона
document.getElementById('colorPicker').addEventListener('input', function() {
  document.body.style.backgroundColor = this.value;
});

///

// Media API
const access_key = '9b97d68df9965b6720b32a7510eea131';
const url = `http://api.mediastack.com/v1/news?access_key=${access_key}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('news-container');
        data.data.forEach(newsItem => {
            const newsCol = document.createElement('div');
            newsCol.className = 'col-lg-4 col-md-6';
            const newsArticle = document.createElement('article');
            newsArticle.style.border = '1px solid #ddd';
            newsArticle.style.borderRadius = '5px';
            newsArticle.style.padding = '10px';
            newsArticle.style.marginBottom = '10px';
            const title = document.createElement('h3');
            title.textContent = newsItem.title;
            const author = document.createElement('p');
            author.textContent = `Author: ${newsItem.author}`;
            const description = document.createElement('p');
            description.textContent = newsItem.description.slice(0, 100) + '...';
            const link = document.createElement('a');
            link.href = newsItem.url;
            link.textContent = 'Read more';
            const source = document.createElement('p');
            source.textContent = `Source: ${newsItem.source}`;
            const image = document.createElement('img');
            image.src = newsItem.image;
            image.alt = newsItem.title;
            image.style.width = '100%';
            image.style.height = '200px';
            image.style.objectFit = 'cover';
            newsArticle.appendChild(image);
            newsArticle.appendChild(title);
            newsArticle.appendChild(author);
            newsArticle.appendChild(description);
            newsArticle.appendChild(link);
            newsArticle.appendChild(source);
            newsCol.appendChild(newsArticle);
            newsContainer.appendChild(newsCol);
        });
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

// Weather API    
const access_key2 = '623a417c43a18e7a721875ced9d3dc2b';
const query = 'New York';
const url2 = `http://api.weatherstack.com/current?access_key=${access_key2}&query=${query}`;
fetch(url2)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather-container');
        const location = document.createElement('h2');
        location.textContent = `Location: ${data.location.name}, ${data.location.country}`;
        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${data.current.temperature}°C`;
        const description = document.createElement('p');
        description.textContent = `Weather: ${data.current.weather_descriptions[0]}`;
        const icon = document.createElement('img');
        icon.src = data.current.weather_icons[0];
        icon.alt = data.current.weather_descriptions[0];
        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${data.current.wind_speed} km/h`;
        const windDir = document.createElement('p');
        windDir.textContent = `Wind Direction: ${data.current.wind_dir}`;
        const pressure = document.createElement('p');
        pressure.textContent = `Pressure: ${data.current.pressure} hPa`;
        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        const visibility = document.createElement('p');
        visibility.textContent = `Visibility: ${data.current.visibility} km`;
        const observationTime = document.createElement('p');
        observationTime.textContent = `Observation Time: ${data.current.observation_time}`;
        weatherDiv.appendChild(location);
        weatherDiv.appendChild(temperature);
        weatherDiv.appendChild(description);
        weatherDiv.appendChild(icon);
        weatherDiv.appendChild(windSpeed);
        weatherDiv.appendChild(windDir);
        weatherDiv.appendChild(pressure);
        weatherDiv.appendChild(humidity);
        weatherDiv.appendChild(visibility);
        weatherDiv.appendChild(observationTime);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });



