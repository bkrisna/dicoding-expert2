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
        console.log('check fav id');
        console.log(id);
        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        console.log('is_resto_exist');
        const resto = await FavRestoIdb.getResto(id);
        console.log('result :');
        console.log(resto);
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavRestoIdb.putResto(this._resto);
            this._renderButton();
        })
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavRestoIdb.deleteResto(this._resto.id);
            this._renderButton();
        })
    }
};

export default LikeButtonInitiator;