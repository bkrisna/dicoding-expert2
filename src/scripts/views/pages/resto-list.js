import RestoApiSource from "../../data/restoapi-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const RestoList = {
    async render() {
        return `
            <hero-bar></hero-bar>
            <section class="restos" id="restos">
                <ul class="restolist"></ul>
            </section>
        `;
    },

    async afterRender() {
        const restos = await RestoApiSource.restoList();
        const restoContainer = document.querySelector('.restolist');
        restos.forEach((resto) => {
            restoContainer.innerHTML += createRestoItemTemplate(resto);
        });
    }
};

export default RestoList;