fetch("data/links.json")
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector(".card-items-1");
        data.activities.forEach(activity => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${activity.url}">${activity.name}: <span class="list-items-1">${activity.details}</span></a>`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error loading activities:", error));
