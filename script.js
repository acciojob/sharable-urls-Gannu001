// your code here
const form = document.getElementById("form");
const url = document.getElementById("url");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    let result = "https://localhost:8080/";
    let params = [];

    if (name) {
        params.push("name=" + encodeURIComponent(name));
    }

    if (year) {
        params.push("year=" + encodeURIComponent(year));
    }

    if (params.length > 0) {
        result += "?" + params.join("&");
    }

    url.textContent = result;
});