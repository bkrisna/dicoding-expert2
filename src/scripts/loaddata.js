function loadData() {

    const restoData = "./DATA.json";

    const getResto = () => {
        fetch(`${restoData}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderRestoData(responseJson.restaurants);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };

    const renderRestoData = (restos) => {
        const restoListEl = document.querySelector(".restolist");

        restos.forEach(resto => {
            restoListEl.innerHTML += `
                <li>
                    <figure>
                        <img src="${resto.pictureId}" alt="gambar-resto-${resto.name}">
                        <figcaption><h3>${resto.name} - ${resto.city}</h3></figcaption>
                    </figure>
                    <article>
                        <h3>Rating: ${resto.rating}<h3>
                        <p class="text-concat">
                             ${resto.description}
                        </p>
                    </article>
                    <a href="#" class="button">Read More ...</a>
                </li>
            `;
        });
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getResto();
    });
}

export default loadData;