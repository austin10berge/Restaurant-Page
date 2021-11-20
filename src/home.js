const headline = document.createElement("h1");
headline.innerHTML = "Maggiano's";

const bodyText = document.createElement("p");
bodyText.innerHTML = "This is a really good restaurant.";

function loadPage() {
    let block = document.getElementById("content");
    block.innerHTML = "";
    block.appendChild(headline);
    block.appendChild(bodyText);
}

export { loadPage };