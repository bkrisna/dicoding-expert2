class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
        
    render() {
        this.innerHTML = `
            <p>Copyright &copy; 2021 - #MyRestoCatalogue</p>
        `;
    }
}

customElements.define("footer-bar", FooterBar);