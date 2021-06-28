import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h2 class="movie__title">${movie.title}</h2>
        <img class="movie__poster" src="${CONFIG.BASE_IMG_URL + "/medium/" + movie.poster_path}" alt="${movie.title}" />
        <div class="movie__info">
            <h3>Information</h3>
            <h4>Tagline</h4>
            <p>${movie.tagline}</p>
            <h4>Release Date</h4>
            <p>${movie.release_date}</p>
            <h4>Duration</h4>
            <p>${movie.runtime} minutes</p>
            <h4>Rating</h4>
            <p>${movie.vote_average}</p>
        </div>
        <div class="movie__overview">
            <h3>Overview</h3>
            <p>${movie.overview}</p>
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