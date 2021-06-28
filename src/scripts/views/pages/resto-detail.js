import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/restoapi-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const RestoDetail = {
    async render() {
        return `
            <div id="resto" class="resto"></div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        
    }
};

export default RestoDetail;