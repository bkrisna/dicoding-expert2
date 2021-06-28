import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h2 class="movie__title">${resto.name}</h2>
        <img class="movie__poster" src="${CONFIG.BASE_IMG_URL + "/small/" + resto.pictureId}" alt="${resto.name}" />
        <div class="movie__info">
            <h3>Information</h3>
            <h4>Location: </h4>
            <p>${resto.city}</p>
            <h4>Address: </h4>
            <p>${resto.address}</p>
            <h4>Categories:</h4>
            <p></p>
            <h4>Rating</h4>
            <p>${resto.rating}</p>
            <h4>Menus: </h4>
        </div>
        <div class="resto_description">
            <h3>Resto Description:</h3>
            <p>${resto.description}</p>
        </div>
        <div>
            <h3>Customer Review</h3>
            <ul>
            </ul>
        </div>
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <li>
        <figure>
            <img src="${CONFIG.BASE_IMG_URL}/small/${resto.pictureId}" alt="gambar-resto-${resto.name}">
            <figcaption><h3>${resto.name} - ${resto.city}</h3></figcaption>
        </figure>
        <article>
            <h3>Rating: ${resto.rating}<h3>
            <p class="text-concat">
                ${resto.description}
            </p>
        </article>
        <a href="#/detail/${resto.id}" class="button">Read More ...</a>
    </li>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export { 
    createRestoItemTemplate, 
    createRestoDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate
};