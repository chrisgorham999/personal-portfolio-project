class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="w3-text-grey footer-links">
                <p class="footer-links">
                
                <a href="https://github.com/chrisgorham999" target="resource window">Chris Gorham GitHub Repositories</A><br>
                
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="resource window">Bellevue University Web Development Degree</A><br>
                <a href="https://github.com/buwebdev/web-330" target="resource window">Bellevue Web 330 GitHub</A><br>
                </p>
                <p class="footer-links">
                Copyright &copy; 2023 <a href="#">Bellevue University</a>
                </p>
                </footer>
        `;
    }
}

customElements.define("footer-component", Footer);