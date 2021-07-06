import RestoApiSource from "../../data/restoapi-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const RestoList = {
    async render() {
        return `
            <section class="hero">
                <h1>Anda Lapar?</h1>
                <article>
                    <p>Jangan sampai kelaparan membuat anda menderita karena memilih tempat makan yang salah. <span>#MyRestoCatolague</span> solusi nya</p>
                    <a href="#" class="button">Find Now !!</a>
                </article>
            </section>
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