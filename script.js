// script.js

// Function to create a video card
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    } else if (views > 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewStr = (views / 1000).toFixed(1) + "K";
    }

    const html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} · ${viewStr} views · ${monthsOld} years ago</p>
            </div>
        </div>
    `;

    // Append the card to the container
    document.querySelector(".container").innerHTML += html;
}

// Example usage:
createCard(
    "COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
    "Jacob + Katie Schwarz",
    560000,
    7,
    "5:14",
    "https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4wSJfkfvSUtiCctwlo7thMOlAiw"
);
