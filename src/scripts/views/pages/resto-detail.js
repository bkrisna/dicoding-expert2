import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/restoapi-source';
import { createLikeButtonTemplate, createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const RestoDetail = {
    async render() {
        return `
            <resto-detail></resto-detail>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoApiSource.detailResto(url.id);
        const detailItems = document.querySelector('resto-detail');
        console.log(resto);
        detailItems.resto = resto;

        LikeButtonInitiator.init({
            likeButtonContainer : document.querySelector('#likeButtonContainer'),
            resto: resto,
        });
    },
};

export default RestoDetail;