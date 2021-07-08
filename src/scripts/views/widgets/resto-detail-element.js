import CONFIG from "../../globals/config";

class RestoDetailElement extends HTMLElement {
    set resto(values) {
        this._resto = values;
        this.render();
    }

    _renderItems(items) {
        let itemsEl = '';
        if (Object.keys(items).length !== 0) {
            items.forEach((item) => {
                itemsEl += `<li>${item.name}</li>`;
            });
        }
        return itemsEl;
    }

    _renderComments(comments) {
        let commentEl = '';
        if (Object.keys(comments).length !== 0) {
            comments.forEach((comment) => {
                commentEl += `
                    <div class="user-review-item">
                        <h3>${comment.name}<span>${comment.date}</span></h3>
                        <p>${comment.review}</p>
                    </div>
                `;
            });
        }
        return commentEl;
    }

    render() {
        this.innerHTML = `
            <div id="detailresto" class="detailresto">
                <h2 class="resto_title">${this._resto.name}</h2>
                <img class="resto_poster" src="${CONFIG.BASE_IMG_URL + "/medium/" + this._resto.pictureId}" alt="${this._resto.name}" />
                <div class="resto_info">
                    <h3>Information</h3>
                    <h4>Location: </h4>
                    <p>${this._resto.city}</p>
                    <h4>Address: </h4>
                    <p>${this._resto.address}</p>
                    <h4>Categories:</h4>
                    <ul>${this._renderItems(this._resto.categories)}</ul>
                    <h4>Rating</h4>
                    <p>${this._resto.rating}</p>
                    <h4>Menus: </h4>
                    <p>Drinks:  </p>
                    <ul>${this._renderItems(this._resto.menus.drinks)}</ul>
                    <p>Foods:  </p>
                    <ul>${this._renderItems(this._resto.menus.foods)}</ul>
                </div>
                <div class="resto_description">
                    <h3>Resto Description:</h3>
                    <p>${this._resto.description}</p>
                </div>
                <div class="resto_review">
                    <h3>Customer Review</h3>
                    <ul>${this._renderComments(this._resto.customerReviews)}</ul>
                </div>
            </div>
        `;
    }
}
    
customElements.define("resto-detail", RestoDetailElement);