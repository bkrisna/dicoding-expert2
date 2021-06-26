import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => ``;
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

export { createRestoItemTemplate, createRestoDetailTemplate };