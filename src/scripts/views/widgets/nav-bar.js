class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
        
    render() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="logo">#MyRestoCatalogue</div>
                <button id="mobile-menu" class="menu-toggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <ul class="nav-list" id="nav-list">
                    <li class="nav-item"><a href="#/list">Home</a></li>
                    <li class="nav-item"><a href="#/fav">Favorite</a></li>
                    <li class="nav-item"><a href="https://www.linkedin.com/in/bayu-krisnamurti-89080537/">About US</a></li>
                </ul>
            </nav>
        `;
    }
}
    
customElements.define("nav-bar", NavBar);