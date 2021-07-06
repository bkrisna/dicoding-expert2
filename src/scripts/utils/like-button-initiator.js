import FavRestoIdb from '../data/favresto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
    async init({likeButtonContainer, resto}) {
        this._likeButtonContainer = likeButtonContainer;
        this._resto  = resto;

        await this._renderButton();
    },

    async _renderButton () {
        const { id } = this._resto;
        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        const resto = await FavRestoIdb.getResto(id);
        return !!resto;
    },

    _renderLike() {
        this.likeButtonContainer.innerHTML = createLikedButtonTemplate();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavRestoIdb.putResto(this._resto);
            this._renderButton();
        })
    },

    _renderLiked() {
        this.likeButtonContainer.innerHTML = createLikedButtonTemplate();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavRestoIdb.deleteResto(this._resto.id);
            this._renderButton();
        })
    }
};

export default LikeButtonInitiator;