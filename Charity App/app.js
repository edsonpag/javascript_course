const API_KEY = "?api_key=670861f5-9de3-4679-8b26-8f12a7f2990a";
const HOST = "https://api.globalgiving.org/";

const searchEl = document.querySelector("#search");

const searchForProjects = async () => {
    const searchRoute = "api/public/services/search/projects";
    const searchString = searchEl.value;
    const queryString = `&q=${searchString}`;

    const URL = `${HOST}${searchRoute}${API_KEY}${queryString}`;


    const response = await axios.get(URL);
    const projects = response.data.search.response.projects.project;

    return projects;
}

const displayProjects = async () => {
    const projects = await searchForProjects();
    const searchResultsEl = document.querySelector('.search-results');

    searchResultsEl.innerHTML = "";

    projects.forEach((project) => {
        let thumbnail, themesEl = "";
        let themes = [];

        for(let image of project.image.imagelink) {
            if(image.size === "original") {
                thumbnail = image.url;
            }
        }

        for(let theme of project.themes.theme) {
            if(theme) {
                themes.push(theme.name);
            }
        }

        themes.forEach((theme) => {
            themesEl += `<p class="project-theme">${theme}</p>`
        })

        searchResultsEl.insertAdjacentHTML('beforeend', `
        <div class="project-card">
            <div class="project-header">
                <p class="project-title">${project.title}</p>
                <p class="project-id">${project.id}</p>
                <p class="project-country">${project.country}</p>
            </div>
            <div class="project-body">
                <img src=${thumbnail} class="project-image">
            </div>
            <div class="project-themes">
                ${themesEl}
            </div>
        </div>`);
    })

}

searchEl.addEventListener("keypress", (event) => {
    if(event.key === "Enter" && searchEl.value) {
        displayProjects()
    }
})
